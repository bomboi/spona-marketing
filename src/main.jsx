import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

// ── Styles ────────────────────────────────────────────────────
// tokens.css first: everything below resolves against it.
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/pricing.css'
import './styles/features-tabs.css'
import './styles/modal.css'
import './styles/faq.css'
import './styles/mockup.css'
// responsive.css LAST. Its rules are plain overrides at the same specificity
// as the base ones (a media query adds none), so it only wins if it is loaded
// after every file it overrides. Imported mid-list it silently lost to
// pricing/features-tabs/faq, and their mobile padding never applied.
import './styles/responsive.css'

// ── External fonts / icons ────────────────────────────────────
const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
// Bricolage Grotesque is the display face for headings; UI text renders in the
// platform system stack, the same as the product app. Inter is kept as the
// cross-platform fallback inside --spona-font-sans.
fontLink.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,ital,wght@12..96,0,400;12..96,0,600;12..96,0,700;12..96,1,400;12..96,1,600&family=Inter:wght@400;500;600;700&display=swap'
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
