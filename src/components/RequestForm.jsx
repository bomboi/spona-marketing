import { useRef, useState } from 'react'
import Dialog from './Dialog.jsx'
import { APP_REGISTER_URL } from '../contact.js'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxcjy9KxPUp8TDqbRG7Ni0-MTJU_bD29VredsN1rHPtgr9xkfw_Tj2AwjRqJxMgZ8D3GQ/exec'
const FORM_TOKEN = 'spona-2026-mkt'
const TRADES = ['Nameštaj po meri', 'Bravarija', 'Stolarija', 'Nešto drugo']
const MINIMUM_PHONE_DIGITS = 8
const FASTEST_HUMAN_SUBMIT_MS = 3000

function sendRequestToSheet({ name, phone, trade }) {
  const params = new URLSearchParams({
    token: FORM_TOKEN,
    name,
    phone,
    trade,
    plan: `Zahtev za poziv · ${trade}`,
  })
  return fetch(SHEETS_URL, { method: 'POST', body: params, mode: 'no-cors' })
}

function trackLead(trade) {
  if (typeof window.fbq !== 'function') return
  window.fbq('track', 'Lead', { content_name: 'Spona zahtev za poziv', trade })
}

export default function RequestForm({ onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [trade, setTrade] = useState(TRADES[0])
  const [honeypot, setHoneypot] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSent, setIsSent] = useState(false)
  const openedAtRef = useRef(Date.now())

  function submitRequest(event) {
    event.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) {
      setErrorMessage('Upišite ime i prezime.')
      return
    }
    if (phone.replace(/\D/g, '').length < MINIMUM_PHONE_DIGITS) {
      setErrorMessage('Upišite broj telefona, da bismo mogli da Vas pozovemo.')
      return
    }
    setErrorMessage('')

    const looksLikeBot = honeypot !== '' || Date.now() - openedAtRef.current < FASTEST_HUMAN_SUBMIT_MS
    if (!looksLikeBot) {
      sendRequestToSheet({ name: trimmedName, phone: phone.trim(), trade })
        .then(() => trackLead(trade))
        .catch(() => {})
    }
    setIsSent(true)
  }

  if (isSent) {
    return (
      <Dialog labelledBy="request-thanks-title" onClose={onClose}>
        <h2 id="request-thanks-title">Hvala! Primili smo Vaš zahtev.</h2>
        <p className="dialog__text">
          Javljamo Vam se još danas. Ako ste pisali posle 20 časova ili vikendom, zovemo prvog sledećeg radnog dana.
        </p>
        <button className="button button--tonal" type="button" onClick={onClose}>U redu</button>
      </Dialog>
    )
  }

  return (
    <Dialog labelledBy="request-form-title" onClose={onClose}>
      <form className="request-form" onSubmit={submitRequest} noValidate>
        <h2 id="request-form-title">Probajte Sponu besplatno 30 dana</h2>
        <p className="dialog__text">
          Ostavite ime i broj telefona. Javljamo Vam se istog dana.
        </p>
        <input
          className="request-form__honeypot"
          type="text"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
        <div className="field">
          <label htmlFor="request-name">Ime i prezime</label>
          <input id="request-name" autoComplete="name" placeholder="npr. Milan Petrović" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="request-phone">Broj telefona</label>
          <input id="request-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="npr. 064 123 4567" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <fieldset className="field">
          <legend>Čime se bavite?</legend>
          <div className="choices">
            {TRADES.map((tradeName) => (
              <label className="choice" key={tradeName}>
                <input type="radio" name="trade" value={tradeName} checked={trade === tradeName} onChange={() => setTrade(tradeName)} />
                <span>{tradeName}</span>
              </label>
            ))}
          </div>
        </fieldset>
        {errorMessage && <p className="request-form__error" role="alert">{errorMessage}</p>}
        <div className="dialog__actions">
          <button className="button button--primary button--large" type="submit">Pošaljite</button>
          <button className="button button--cancel" type="button" onClick={onClose}>Otkaži</button>
        </div>
        <p className="request-form__self-signup">
          Radije biste sami? <a href={APP_REGISTER_URL}>Napravite nalog odmah</a>
        </p>
      </form>
    </Dialog>
  )
}
