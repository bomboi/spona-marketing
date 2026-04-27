import { useState, useEffect, useRef } from 'react'

// TODO: Set this to your app's registration API endpoint
const REGISTER_API_URL = 'https://moja.spona.app/register'
// TODO: Set this to the URL users land on after successful registration
const APP_URL = 'https://moja.spona.app'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxcjy9KxPUp8TDqbRG7Ni0-MTJU_bD29VredsN1rHPtgr9xkfw_Tj2AwjRqJxMgZ8D3GQ/exec'
const FORM_TOKEN = 'spona-2026-reg'

function trackRegisterOpen() {
  if (typeof window.fbq !== 'function') return
  window.fbq('trackCustom', 'RegisterFormOpened', { content_name: 'Spona Register Form' })
}

function trackRegisterConversion() {
  if (typeof window.fbq !== 'function') return
  window.fbq('track', 'CompleteRegistration', { content_name: 'Spona Register Form' })
}

export default function RegisterModal({ onClose, onSwitchToContact }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const openedAtRef = useRef(Date.now())

  useEffect(() => {
    requestAnimationFrame(() => setIsOpen(true))
    document.body.classList.add('modal-open')
    trackRegisterOpen()

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

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password || !company.trim()) {
      setError('Molimo popunite sva polja.')
      return
    }
    if (password.length < 8) {
      setError('Lozinka mora imati najmanje 8 karaktera.')
      return
    }

    const elapsed = Date.now() - openedAtRef.current
    if (honeypot !== '' || elapsed < 2000) {
      // Silently pretend success for bots
      setSuccess(true)
      return
    }

    setLoading(true)

    try {
      const res = await fetch(REGISTER_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
          company: company.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.message || 'Greška pri registraciji. Pokušaj ponovo.')
        setLoading(false)
        return
      }

      // Notify owner via Google Sheets (no password sent)
      const params = new URLSearchParams({
        token: FORM_TOKEN,
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        source: 'self-register',
      })
      fetch(SHEETS_URL, { method: 'POST', body: params, mode: 'no-cors' }).catch(() => {})

      trackRegisterConversion()
      setSuccess(true)
      setTimeout(() => { window.location.href = APP_URL }, 1500)
    } catch {
      setError('Greška pri registraciji. Proveri vezu i pokušaj ponovo.')
      setLoading(false)
    }
  }

  return (
    <div
      id="register-modal"
      className={`lead-modal-overlay${isOpen ? ' active open' : ' active'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div className="lead-modal-box">
        <button className="lead-modal-close" onClick={handleClose} aria-label="Zatvori">&times;</button>

        {!success ? (
          <div>
            <div className="eyebrow" style={{ color: 'var(--brand-primary)', marginBottom: '6px' }}>
              Besplatan probni period — 14 dana, bez kartice
            </div>
            <h2 id="register-modal-title" className="lead-modal-heading">
              Kreni odmah
            </h2>
            <p className="lead-modal-sub">Nalog je spreman za 30 sekundi. Nema čekanja.</p>

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
                <label htmlFor="reg-name">Ime i prezime <span className="req">*</span></label>
                <input
                  type="text"
                  id="reg-name"
                  placeholder="Marko Marković"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="lead-field">
                <label htmlFor="reg-email">Email adresa <span className="req">*</span></label>
                <input
                  type="email"
                  id="reg-email"
                  placeholder="marko@firma.rs"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="lead-field">
                <label htmlFor="reg-password">Lozinka <span className="req">*</span></label>
                <input
                  type="password"
                  id="reg-password"
                  placeholder="Najmanje 8 karaktera"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="lead-field">
                <label htmlFor="reg-company">Naziv firme <span className="req">*</span></label>
                <input
                  type="text"
                  id="reg-company"
                  placeholder="Moja Firma d.o.o."
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={loading}
                />
              </div>

              {error && <p className="lead-error">{error}</p>}

              <button type="submit" className="btn btn-primary lead-submit" disabled={loading}>
                {loading
                  ? 'Kreira se nalog...'
                  : <><i className="bi bi-rocket-takeoff-fill" /> Registruj se besplatno</>}
              </button>
            </form>

            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
              Radiš li pre nego što probaš?{' '}
              <button
                type="button"
                style={{ background: 'none', border: 'none', color: 'var(--brand-primary-dark)', fontWeight: 600, cursor: 'pointer', padding: 0, font: 'inherit', fontSize: '0.85rem' }}
                onClick={() => { handleClose(); setTimeout(onSwitchToContact, 310) }}
              >
                Razgovaraj sa nama →
              </button>
            </p>
          </div>
        ) : (
          <div className="lead-success">
            <div className="lead-success-icon"><i className="bi bi-check-lg" /></div>
            <h3>Nalog je kreiran!</h3>
            <p>Preusmeravamo te u Sponu...</p>
          </div>
        )}
      </div>
    </div>
  )
}
