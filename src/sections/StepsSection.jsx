import { OrderListCard, ProfitCard, WorkerTaskCard } from '../components/AppElements.jsx'

const STEPS = [
  { title: 'Upišete porudžbinu', Element: OrderListCard },
  { title: 'Radionica je napravi', Element: WorkerTaskCard },
  { title: 'Vidite zaradu', Element: ProfitCard },
]

export default function StepsSection() {
  return (
    <section className="section" aria-labelledby="steps-title">
      <h2 className="section__title" id="steps-title">Tri koraka.</h2>
      <ol className="steps">
        {STEPS.map(({ title, Element }, index) => (
          <li className="step" key={title}>
            <div className="step__head">
              <span className="step__number" aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
            </div>
            <div className="step__stage"><Element /></div>
          </li>
        ))}
      </ol>
    </section>
  )
}
