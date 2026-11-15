import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, VIBER_LINK } from '../contact.js'

export default function CallSection() {
  const { openRequestForm } = useLandingActions()
  return (
    <section className="section" aria-labelledby="call-title">
      <div className="call">
        <div className="section__head">
          <h2 className="section__title" id="call-title">Radije biste razgovarali?</h2>
          <a className="call__number" href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a>
        </div>
        <div className="call__side">
          <p>Radnim danima od 13 do 20 časova. Ako ne stignemo da se javimo, zovemo Vas mi.</p>
          <div className="call__actions">
            <a className="button button--tonal" href={VIBER_LINK}>Pišite nam na Viber</a>
            <button className="button button--primary hide-on-phone" type="button" onClick={openRequestForm}>Probajte besplatno</button>
          </div>
        </div>
      </div>
    </section>
  )
}
