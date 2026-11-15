import { useLandingActions } from '../context/LandingActionsContext.jsx'

export default function ClosingSection() {
  const { openRequestForm } = useLandingActions()
  return (
    <section className="closing spona-inverse" aria-labelledby="closing-title">
      <h2 className="section__title" id="closing-title">Probajte 30 dana besplatno.</h2>
      <p>Bez platne kartice. Javimo Vam se istog dana.</p>
      <button className="button button--primary button--large" type="button" onClick={openRequestForm}>
        Probajte besplatno
      </button>
      <span className="closing__hours">Radnim danima od 13 do 20 h</span>
    </section>
  )
}
