import { useState, useEffect, useRef } from 'react'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxcjy9KxPUp8TDqbRG7Ni0-MTJU_bD29VredsN1rHPtgr9xkfw_Tj2AwjRqJxMgZ8D3GQ/exec'
const FORM_TOKEN = 'spona-2026-mkt'

const PLAN_PRICING = {
  Starter:  { monthly: { label: '1.900 RSD/mes.',   amount: '1.900 RSD',   value: '1900'   }, yearly: { label: '19.000 RSD/god.',  amount: '19.000 RSD',  value: '19000'  } },
  Standard: { monthly: { label: '4.900 RSD/mes.',   amount: '4.900 RSD',   value: '4900'   }, yearly: { label: '49.000 RSD/god.',  amount: '49.000 RSD',  value: '49000'  } },
  Pro:      { monthly: { label: '11.900 RSD/mes.',  amount: '11.900 RSD',  value: '11900'  }, yearly: { label: '119.000 RSD/god.', amount: '119.000 RSD', value: '119000' } },
  Custom:   { monthly: { label: 'Po dogovoru',      amount: 'Po dogovoru', value: 'custom' }, yearly: { label: 'Po dogovoru',      amount: 'Po dogovoru', value: 'custom' } },
}

function getPlanTitle(plan) {
  if (!plan) return 'Počni sa Sponom'
  if (plan === 'Custom') return 'Traži custom plan'
  return `Počni sa ${plan} planom`
}

function getPlanLabel(plan, billing) {
  const price = PLAN_PRICING[plan]?.[billing]
  return price ? `${plan} — ${price.label}` : plan
}

function trackLeadConversion(data) {
  if (typeof window.fbq !== 'function') return
  window.fbq('track', 'Lead', { content_name: 'Spona Lead Form', plan: data.planName || 'unknown', billing: data.billing || 'monthly', value: Number(data.priceValue) || 0, currency: 'RSD' })
}

function trackLeadModalOpen(data) {
  if (typeof window.fbq !== 'function') return
  window.fbq('trackCustom', 'LeadFormOpened', { content_name: 'Spona Lead Form', plan: data.planName || 'unknown', billing: data.billing || 'monthly' })
}

function trackLeadFormStarted(data) {
  if (typeof window.fbq !== 'function') return
  window.fbq('trackCustom', 'LeadFormStarted', { content_name: 'Spona Lead Form', plan: data.planName || 'unknown', billing: data.billing || 'monthly' })
}

export default function LeadModal({ plan, billing: initialBilling, onClose }) {
  const resolvedBilling = initialBilling || 'monthly'
  const [selectedPlan, setSelectedPlan] = useState(plan || '')
  const [selectedBilling, setSelectedBilling] = useState(resolvedBilling)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const openedAtRef = useRef(Date.now())
  const startedRef = useRef(false)

  useEffect(() => {
    // Animate open
    requestAnimationFrame(() => setIsOpen(true))
    document.body.classList.add('modal-open')
    trackLeadModalOpen({ planName: plan || 'unknown', billing: resolvedBilling })

    function onKey(e) { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function handleClose() {
    setIsOpen(false)
    setTimeout(onClose, 300)
  }

  function handleFormStart() {
    if (startedRef.current) return
    startedRef.current = true
    trackLeadFormStarted({ planName: selectedPlan || 'unknown', billing: selectedBilling })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) { setError(true); return }
    setError(false)

    const elapsed = Date.now() - openedAtRef.current
    const isBot = honeypot !== '' || elapsed < 3000

    if (!isBot) {
      const billingLabel = selectedBilling === 'yearly' ? 'Godišnje' : 'Mesečno'
      const price = PLAN_PRICING[selectedPlan]?.[selectedBilling]
      const params = new URLSearchParams({
        token: FORM_TOKEN,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim(),
        plan: selectedPlan ? `${selectedPlan} (${billingLabel})` : `Nisam siguran (${billingLabel})`,
        planName: selectedPlan,
        billing: selectedBilling,
        billingLabel,
        price: price?.amount || '',
        priceValue: price?.value || '',
      })
      fetch(SHEETS_URL, { method: 'POST', body: params, mode: 'no-cors' })
        .then(() => trackLeadConversion({ planName: selectedPlan, billing: selectedBilling, priceValue: price?.value }))
        .catch(() => {})
    }

    setSuccess(true)
    setTimeout(handleClose, 2500)
  }

  return (
    <div
      id="lead-modal"
      className={`lead-modal-overlay${isOpen ? ' active open' : ' active'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div className="lead-modal-box">
        <button className="lead-modal-close" onClick={handleClose} aria-label="Zatvori">&times;</button>

        {!success ? (
          <div id="lead-form-state">
            <div className="eyebrow" style={{ color: 'var(--brand-primary)', marginBottom: '6px' }}>
              Besplatan probni period — 14 dana
            </div>
            <h2 id="lead-modal-title" className="lead-modal-heading">
              {getPlanTitle(selectedPlan)}
            </h2>
            <p className="lead-modal-sub">Popuni podatke i javićemo ti se u najkraćem roku.</p>
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                className="lead-honeypot"
                tabIndex="-1"
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
              <div className="lead-field">
                <label htmlFor="lead-name">Ime i prezime <span className="req">*</span></label>
                <input type="text" id="lead-name" placeholder="Marko Marković" autoComplete="name" value={name} onChange={(e) => { setName(e.target.value); handleFormStart() }} />
              </div>
              <div className="lead-field">
                <label htmlFor="lead-email">Email adresa <span className="req">*</span></label>
                <input type="email" id="lead-email" placeholder="marko@firma.rs" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); handleFormStart() }} />
              </div>
              <div className="lead-field">
                <label htmlFor="lead-phone">Broj telefona</label>
                <input type="tel" id="lead-phone" placeholder="+381 60 123 4567" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="lead-field">
                <label htmlFor="lead-company">Naziv firme</label>
                <input type="text" id="lead-company" placeholder="Moja Firma d.o.o." autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="lead-field">
                <label htmlFor="lead-plan-select">Plan</label>
                <select id="lead-plan-select" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                  <option value="">— Nisam siguran, pomozite mi da odaberem —</option>
                  {['Starter', 'Standard', 'Pro', 'Custom'].map((p) => (
                    <option key={p} value={p}>{getPlanLabel(p, selectedBilling)}</option>
                  ))}
                </select>
              </div>
              <div className="lead-field">
                <label htmlFor="lead-billing-select">Naplata</label>
                <select id="lead-billing-select" value={selectedBilling} onChange={(e) => setSelectedBilling(e.target.value)}>
                  <option value="monthly">Mesečno</option>
                  <option value="yearly">Godišnje</option>
                </select>
              </div>
              {error && <p className="lead-error">Molimo popunite obavezna polja (ime i email).</p>}
              <button type="submit" className="btn btn-primary lead-submit">
                Pošalji zahtev <i className="bi bi-arrow-right" />
              </button>
            </form>
          </div>
        ) : (
          <div className="lead-success">
            <div className="lead-success-icon"><i className="bi bi-check-lg" /></div>
            <h3>Primili smo tvoj zahtev!</h3>
            <p>Javićemo ti se uskoro. Hvala što si odabrao Sponu.</p>
          </div>
        )}
      </div>
    </div>
  )
}
