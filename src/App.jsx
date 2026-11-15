import { useCallback, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingActionsContext } from './context/LandingActionsContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PhoneBottomBar from './components/PhoneBottomBar.jsx'
import RequestForm from './components/RequestForm.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import HomePage from './pages/HomePage.jsx'

export default function App() {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false)
  const closeRequestForm = useCallback(() => setIsRequestFormOpen(false), [])
  const landingActions = { openRequestForm: () => setIsRequestFormOpen(true) }

  return (
    <LandingActionsContext.Provider value={landingActions}>
      <Header />
      <main className="page-width page-sections">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <PhoneBottomBar />
      {isRequestFormOpen && <RequestForm onClose={closeRequestForm} />}
      <ConsentBanner />
    </LandingActionsContext.Provider>
  )
}
