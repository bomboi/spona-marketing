import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width site-footer__inner">
        <span>© 2026 Spona</span>
        <a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a>
      </div>
    </footer>
  )
}
