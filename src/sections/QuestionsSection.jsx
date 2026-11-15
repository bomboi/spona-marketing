import { useEffect, useState } from 'react'

const WIDE_SCREEN_QUERY = '(min-width: 721px)'

const QUESTIONS = [
  { question: 'Da li Spona izdaje fiskalni račun?', answer: 'Ne. Spona pravi predračun i radni nalog. Fiskalni račun i e-fakturu izdajete kao i do sada.' },
  { question: 'Ko mi pomaže na početku?', answer: 'Mi. Javimo Vam se, zajedno otvorimo nalog i unesemo Vaše kupce i proizvode. Za to je dovoljno pola sata.' },
  { question: 'Šta ako odustanem?', answer: 'Ništa ne plaćate. Proba traje 30 dana i ne tražimo platnu karticu. Ako nastavite, plaćate mesečno i možete da prestanete kad god hoćete.' },
]

function useIsWideScreen() {
  const [isWideScreen, setIsWideScreen] = useState(() => window.matchMedia(WIDE_SCREEN_QUERY).matches)
  useEffect(() => {
    const query = window.matchMedia(WIDE_SCREEN_QUERY)
    const updateFromQuery = () => setIsWideScreen(query.matches)
    query.addEventListener('change', updateFromQuery)
    return () => query.removeEventListener('change', updateFromQuery)
  }, [])
  return isWideScreen
}

export default function QuestionsSection() {
  const isWideScreen = useIsWideScreen()
  return (
    <section className="section" aria-labelledby="questions-title">
      <h2 className="section__title" id="questions-title">Česta pitanja</h2>
      <div className="questions">
        {QUESTIONS.map(({ question, answer }) => (
          <details className="question" key={`${question}-${isWideScreen}`} open={isWideScreen}>
            <summary>
              {question}
              <svg className="question__chevron" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
