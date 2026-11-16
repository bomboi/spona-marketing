import { Chevron } from '../components/AppElements.jsx'

const QUESTIONS = [
  { question: 'Da li Spona izdaje fiskalni račun?', answer: 'Ne. Spona pravi predračun i radni nalog. Fiskalni račun i e-fakturu izdajete kao i do sada.' },
  { question: 'Treba li mi računar?', answer: 'Ne mora. Spona radi u pregledaču na telefonu, tabletu i računaru. Ništa se ne instalira.' },
  { question: 'Ko unosi podatke na početku?', answer: 'Mi, zajedno sa Vama. Za pola sata unesemo Vaše kupce i proizvode.' },
  { question: 'Šta ako odustanem?', answer: 'Ništa ne plaćate. Proba traje 30 dana i ne tražimo platnu karticu.' },
  { question: 'Ko vidi moje podatke?', answer: 'Samo Vaša firma, i to po ulogama: radnik vidi svoj posao, a cene, uplate i zaradu vidite Vi.' },
]

export default function QuestionsSection() {
  return (
    <section className="band band--white" aria-labelledby="questions-title">
      <div className="page-width">
        <h2 className="section-title" id="questions-title">Pitanja.</h2>
        <div className="questions">
          {QUESTIONS.map(({ question, answer }, index) => (
            <details className="question" key={question} open={index === 0}>
              <summary>{question}<Chevron /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
