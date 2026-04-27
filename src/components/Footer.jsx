export default function Footer() {
  function openConsentSettings() {
    // Consent is currently disabled (ENABLE_CONSENT = false in ConsentBanner)
    // This is a no-op placeholder kept for UI parity
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <img src="/logos/iOS App icon - 1 - horizontal.png" alt="Spona — program za male firme u Srbiji" />
          <p>© 2026 Spona. Sva prava zadržana.</p>
          <button
            type="button"
            className="footer-consent-link"
            onClick={openConsentSettings}
            hidden
          >
            Podešavanja kolačića
          </button>
        </div>
      </div>
    </footer>
  )
}
