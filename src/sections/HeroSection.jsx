import { Chevron, OrderStatusArc } from '../components/AppElements.jsx'
import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { exampleOrder } from '../exampleOrder.js'
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

const NOTEBOOK_LINES = [
  <>Petrović – kuhinja</>,
  <><s>rok 1. 12.</s> 12. 12.</>,
  <>avans 100 + 80?</>,
  <>ostalo 68 ili 88?</>,
  <>Stefan – gornji gotov?</>,
  <>ploča – zvati Marka</>,
  <>zarada ???</>,
]

const ORDER_ROWS = [
  { label: 'Rok', value: exampleOrder.deadline, stepIndex: 0 },
  { label: 'Uplaćeno', value: `${exampleOrder.paid} od ${exampleOrder.total}`, stepIndex: 3 },
  { label: 'Ostaje', value: exampleOrder.leftToPay, stepIndex: 3 },
  { label: 'Gornji elementi', value: <span className="hero-order__done"><OrderStatusArc progressPercent={100} />Stefan, gotovo</span>, stepIndex: 2 },
  { label: 'Napomena', value: exampleOrder.note, stepIndex: 0 },
  { label: 'Zarada', value: exampleOrder.profit, stepIndex: 4, isProfit: true },
]

export default function HeroSection() {
  const { openRequestForm, openStepExplanation } = useLandingActions()
  return (
    <section className="hero spona-inverse" aria-labelledby="hero-title">
      <div className="page-width hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title" id="hero-title">Radionica<br /><span>bez sveske.</span></h1>
          <p className="hero__lead">Porudžbine, radnici i zarada na jednom mestu.</p>
          <div className="hero__actions">
            <button className="button button--primary button--large" type="button" onClick={openRequestForm}>
              Probajte besplatno
            </button>
            <span className="hero__call">ili pozovite <a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a></span>
          </div>
          <p className="hero__note">30 dana besplatno. Bez platne kartice.</p>
        </div>

        <div className="hero__picture">
          <span className="hero__label hero__label--notebook">Sveska</span>
          <div className="notebook spona-light" aria-label="Stranica iz sveske">
            {NOTEBOOK_LINES.map((line, index) => <span key={index}>{line}</span>)}
          </div>
          <div className="hero-order">
            <div className="hero-order__card spona-light" aria-label="Ista porudžbina u Sponi">
              <span className="hero-order__title">{exampleOrder.title}</span>
              <span className="hero-order__customer">{exampleOrder.customer}</span>
              {ORDER_ROWS.map((row) => (
                <button
                  key={row.label}
                  className={`hero-order__row${row.isProfit ? ' hero-order__row--profit' : ''}`}
                  type="button"
                  onClick={() => openStepExplanation(row.stepIndex)}
                >
                  <span className="hero-order__label">{row.label}</span>
                  <b className="hero-order__value">{row.value}</b>
                  <Chevron />
                </button>
              ))}
            </div>
            <span className="hero__label hero__label--spona">Ista porudžbina u Sponi. Kliknite red.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
