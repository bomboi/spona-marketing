import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

// ── Styles ────────────────────────────────────────────────────
import './styles/base.css'
import './styles/components.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/responsive.css'
import './styles/pricing.css'
import './styles/features-tabs.css'
import './styles/modal.css'
import './styles/faq.css'
import './styles/mockup.css'

// ── External fonts / icons ────────────────────────────────────
const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Inter:wght@400;500;600;700;800&display=swap'
document.head.appendChild(fontLink)

const iconsLink = document.createElement('link')
iconsLink.rel = 'stylesheet'
iconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
document.head.appendChild(iconsLink)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
