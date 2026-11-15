import { OrderStatusArc, ProgressBar } from '../components/AppElements.jsx'
import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { exampleOrder, exampleWorkerTask } from '../exampleOrder.js'
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

export default function HeroSection() {
  const { openRequestForm } = useLandingActions()
  return (
    <section className="hero spona-inverse" aria-labelledby="hero-title">
      <div className="page-width hero__copy">
        <span className="pill">Za radionice koje rade po meri</span>
        <h1 className="hero__title" id="hero-title">Radionica bez sveske.</h1>
        <p className="hero__lead">Porudžbine, radnici i zarada na jednom mestu.</p>
        <div className="hero__actions">
          <button className="button button--primary button--large" type="button" onClick={openRequestForm}>
            Probajte besplatno
          </button>
          <span className="hero__call">
            ili pozovite <a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a>
          </span>
        </div>
        <span className="hero__small">30 dana besplatno. Bez platne kartice.</span>
      </div>

      <div className="page-width hero__stage">
        <figure className="hero__phone">
          <img
            src="/screens/worker-phone.jpg"
            alt="Ekran radnika u Sponi: Gornji elementi, 1 od 4 gotovo, dugme Završi 1"
            width={780}
            height={1688}
          />
        </figure>

        <div className="hero-card hero-card--status">
          <span className="hero-card__strong"><OrderStatusArc progressPercent={40} />U izradi</span>
          <span className="hero-card__muted hero-card__detail">{exampleOrder.title} · {exampleOrder.articlesDone} od {exampleOrder.articleCount} gotovo</span>
        </div>

        <div className="hero-card hero-card--profit">
          <span className="hero-card__muted">Zarada na porudžbini</span>
          <span className="hero-card__profit">{exampleOrder.profit} RSD</span>
        </div>

        <div className="hero-card hero-card--paid">
          <span className="hero-card__muted">Uplaćeno</span>
          <span className="hero-card__strong">{exampleOrder.paid} od {exampleOrder.total}</span>
          <ProgressBar percent={exampleOrder.paidPercent} />
        </div>

        <div className="hero-card hero-card--task">
          <span className="hero-card__strong">{exampleWorkerTask.name}</span>
          <span className="hero-card__muted">{exampleWorkerTask.worker} · završio {exampleWorkerTask.doneCount} od {exampleWorkerTask.quantity}</span>
        </div>
      </div>
    </section>
  )
}
