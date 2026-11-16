import { useCallback, useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingActionsContext } from './context/LandingActionsContext.jsx'
import Header from './components/Header.jsx'
import PhoneBottomBar from './components/PhoneBottomBar.jsx'
import RequestForm from './components/RequestForm.jsx'
import StepExplanation from './components/StepExplanation.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import HomePage from './pages/HomePage.jsx'

export default function App() {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false)
  const [explainedStepIndex, setExplainedStepIndex] = useState(null)
  const closeRequestForm = useCallback(() => setIsRequestFormOpen(false), [])
  const closeStepExplanation = useCallback(() => setExplainedStepIndex(null), [])
  const landingActions = useMemo(() => ({
    openRequestForm: () => setIsRequestFormOpen(true),
    openStepExplanation: (stepIndex) => setExplainedStepIndex(stepIndex),
  }), [])

  return (
    <LandingActionsContext.Provider value={landingActions}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <PhoneBottomBar />
      {isRequestFormOpen && <RequestForm onClose={closeRequestForm} />}
      {explainedStepIndex !== null && (
        <StepExplanation stepIndex={explainedStepIndex} onShowStep={setExplainedStepIndex} onClose={closeStepExplanation} />
      )}
      <ConsentBanner />
    </LandingActionsContext.Provider>
  )
}
