import Footer from '../components/Footer.jsx'
import { useLandingActions } from '../context/LandingActionsContext.jsx'

export default function ClosingSection() {
  const { openRequestForm } = useLandingActions()
  return (
    <section className="closing spona-inverse" aria-labelledby="closing-title">
      <div className="page-width closing__inner">
        <div>
          <h2 className="closing__title" id="closing-title">Probajte 30 dana<br />besplatno.</h2>
          <p className="closing__text">Bez platne kartice. Javimo Vam se istog dana.</p>
        </div>
        <div className="closing__actions">
          <button className="button button--primary button--large" type="button" onClick={openRequestForm}>Probajte besplatno</button>
          <span>Radnim danima od 13 do 20 h</span>
        </div>
      </div>
      <Footer />
    </section>
  )
}
