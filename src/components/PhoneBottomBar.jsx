import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { PHONE_NUMBER_LINK } from '../contact.js'

export default function PhoneBottomBar() {
  const { openRequestForm } = useLandingActions()
  return (
    <div className="phone-bottom-bar" aria-label="Brze radnje">
      <a className="button button--tonal" href={PHONE_NUMBER_LINK}>Pozovite</a>
      <button className="button button--primary" type="button" onClick={openRequestForm}>Probajte besplatno</button>
    </div>
  )
}
