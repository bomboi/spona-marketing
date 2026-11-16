import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

export default function Footer() {
  return (
    <div className="page-width site-footer">
      <span>© 2026 Spona</span>
      <a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a>
    </div>
  )
}
