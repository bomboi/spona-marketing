import SponaLogo from './SponaLogo.jsx'
import { APP_URL, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

export default function Header() {
  return (
    <header className="site-header spona-inverse">
      <div className="page-width site-header__inner">
        <a className="brand" href="#" aria-label="Spona, početak">
          <SponaLogo className="brand__logo" />
          Spona
        </a>
        <div className="site-header__end">
          <a className="site-header__phone" href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a>
          <a className="site-header__login" href={APP_URL}>Prijava</a>
        </div>
      </div>
    </header>
  )
}
