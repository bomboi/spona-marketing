import { PHONE_NUMBER_LINK } from '../contact.js'

const PLANS = [
  { name: 'Starter', monthlyPrice: '2.200', users: 'Do 3 korisnika' },
  { name: 'Standard', monthlyPrice: '4.900', users: 'Do 10 korisnika, sa radnicima', isMostChosen: true },
]

export default function PricingSection() {
  return (
    <section className="section" aria-labelledby="pricing-title">
      <h2 className="section__title" id="pricing-title">Jednostavna cena.</h2>
      <div className="plans">
        {PLANS.map((plan) => (
          <div className="plan" key={plan.name}>
            <span className="plan__name">
              {plan.name}
              {plan.isMostChosen && <span className="plan__tag">Najčešći izbor</span>}
            </span>
            <span className="plan__price">{plan.monthlyPrice} <small>din mesečno</small></span>
            <span className="plan__users">{plan.users}</span>
          </div>
        ))}
      </div>
      <p className="pricing__note">
        Prvih 30 dana besplatno. Više od 10 ljudi? <a href={PHONE_NUMBER_LINK}>Pozovite nas</a>.
      </p>
    </section>
  )
}
