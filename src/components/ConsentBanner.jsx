import { useEffect } from 'react'

// ── Tracking loaders ──────────────────────────────────────────
const isLocal =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.includes('192.168.')

const TRACKING_IDS = {
  google: 'G-9E7SX8L2N3',
  meta: '968619672350903',
  clarity: 'w5gf1alf3u',
}

window.dataLayer = window.dataLayer || []
window.gtag = window.gtag || function () { window.dataLayer.push(arguments) }

window.loadGoogleAnalytics = function () {
  if (isLocal || window.__sponaGoogleLoaded) return
  window.__sponaGoogleLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.google}`
  document.head.appendChild(script)
  window.gtag('js', new Date())
  window.gtag('config', TRACKING_IDS.google)
}

window.loadMicrosoftClarity = function () {
  if (isLocal || window.__sponaClarityLoaded) return
  window.__sponaClarityLoaded = true
  ;(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }
    t = l.createElement(r); t.async = 1
    t.src = `https://www.clarity.ms/tag/${i}`
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', TRACKING_IDS.clarity)
}

window.loadMetaPixel = function () {
  if (isLocal || window.__sponaMetaLoaded) return
  window.__sponaMetaLoaded = true
  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */
  window.fbq('init', TRACKING_IDS.meta)
  window.fbq('track', 'PageView')
}

// ── Consent manager ───────────────────────────────────────────
const ENABLE_CONSENT = false
const CONSENT_KEY = 'spona-consent-v1'

function readConsent() {
  try { return JSON.parse(localStorage.getItem(CONSENT_KEY)) } catch { return null }
}

function writeConsent(consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    google: !!consent.google,
    meta: !!consent.meta,
    savedAt: new Date().toISOString(),
  }))
}

function applyConsent(consent) {
  if (consent.google) { window.loadGoogleAnalytics(); window.loadMicrosoftClarity() }
  if (consent.meta) { window.loadMetaPixel() }
}

// ─────────────────────────────────────────────────────────────
export default function ConsentBanner() {
  useEffect(() => {
    if (!ENABLE_CONSENT) {
      applyConsent({ google: true, meta: true })
      return
    }
    const stored = readConsent()
    if (stored) { applyConsent(stored) }
    // Banner UI is hidden when ENABLE_CONSENT = false
  }, [])

  // Banner is intentionally hidden while ENABLE_CONSENT = false
  return null
}
