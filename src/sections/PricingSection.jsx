import { PHONE_NUMBER_LINK } from '../contact.js'

const PLANS = [
  { name: 'Starter', monthlyPrice: '2.200', users: 'Do 3 korisnika' },
  { name: 'Standard', monthlyPrice: '4.900', users: 'Do 10 korisnika, sa radnicima' },
]

export default function PricingSection() {
  return (
    <section className="band" aria-labelledby="pricing-title">
      <div className="page-width split split--top">
        <div>
          <h2 className="section-title" id="pricing-title">Jednostavna cena.</h2>
          <p className="lead lead--under-title">Prvih 30 dana besplatno.</p>
        </div>
        <div className="plans">
          {PLANS.map((plan) => (
            <div className="plan" key={plan.name}>
              <span className="plan__name">{plan.name}<span>{plan.users}</span></span>
              <span className="plan__price">{plan.monthlyPrice}<small>din mesečno</small></span>
            </div>
          ))}
          <div className="plans__more">
            <span>Više od 10 ljudi?</span>
            <a href={PHONE_NUMBER_LINK}>Pozovite nas</a>
          </div>
        </div>
      </div>
    </section>
  )
}
