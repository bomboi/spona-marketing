import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

const PLANS = [
  {
    name: 'Starter',
    monthlyPrice: '2.200',
    users: 'Do 3 korisnika',
    features: ['Porudžbine, kupci i uplate', 'Predračun i radni nalog', 'Zarada na svakoj porudžbini'],
  },
  {
    name: 'Standard',
    monthlyPrice: '4.900',
    users: 'Do 10 korisnika',
    pricePerPerson: '490 dinara po osobi',
    isMostChosen: true,
    features: ['Sve iz paketa Starter', 'Radnici u radionici, i zajednički tablet', 'Saloni i partneri', 'Statistika'],
  },
]

export default function PricingSection() {
  const { openRequestForm } = useLandingActions()
  return (
    <section className="section" aria-labelledby="pricing-title">
      <div className="section__head">
        <h2 className="section__title" id="pricing-title">Cena</h2>
        <p className="lead">Prvih 30 dana besplatno, sa svim mogućnostima. Bez platne kartice.</p>
      </div>
      <div className="plans">
        {PLANS.map((plan) => (
          <div className={`plan${plan.isMostChosen ? ' plan--most-chosen' : ''}`} key={plan.name}>
            <div className="plan__top">
              <h3>{plan.name}</h3>
              {plan.isMostChosen && <span className="plan__tag">Najčešći izbor</span>}
            </div>
            <div className="plan__price">{plan.monthlyPrice} <small>dinara mesečno</small></div>
            <ul>
              <li className="plan__users">
                {plan.users}
                {plan.pricePerPerson && <span className="plan__per-person"> · {plan.pricePerPerson}</span>}
              </li>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        ))}
        <div className="plan plan--larger-team">
          <h3>Imate više od 10 ljudi?</h3>
          <p>Pozovite nas na <a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a> i dogovorićemo cenu za Vašu radionicu.</p>
        </div>
      </div>
      <div className="pricing__foot">
        <button className="button button--primary button--large" type="button" onClick={openRequestForm}>
          Probajte besplatno 30 dana
        </button>
        <p>Ako platite za celu godinu, dva meseca su gratis.</p>
      </div>
    </section>
  )
}
