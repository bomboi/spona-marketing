import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ModalContext } from './context/ModalContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'
import ConsentBanner from './components/ConsentBanner'
import HomePage from './pages/HomePage'

export default function App() {
  const [modalState, setModalState] = useState(null)
  // modalState: null | { plan: string, billing: string }

  function openLeadModal(plan = '', billing = '') {
    setModalState({ plan, billing })
  }

  function closeLeadModal() {
    setModalState(null)
  }

  return (
    <ModalContext.Provider value={{ openLeadModal }}>
      <Nav />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      {modalState !== null && (
        <LeadModal
          plan={modalState.plan}
          billing={modalState.billing}
          onClose={closeLeadModal}
        />
      )}
      <ConsentBanner />
    </ModalContext.Provider>
  )
}
