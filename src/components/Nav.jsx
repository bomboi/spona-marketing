import { useEffect, useRef } from 'react'
import { scrollTo } from '../utils/scrollTo'

const APP_URL = 'https://moja.spona.app'

export default function Nav() {
  const navRef = useRef(null)
  const hamburgerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleMenu() {
    const open = linksRef.current.classList.toggle('open')
    hamburgerRef.current.classList.toggle('open', open)
    document.body.classList.toggle('nav-open', open)
  }

  function closeMenu() {
    linksRef.current.classList.remove('open')
    hamburgerRef.current.classList.remove('open')
    document.body.classList.remove('nav-open')
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img src="/logos/iOS App icon - 1 - horizontal.png" alt="Spona" />
        </a>
        <div className="nav-links-desktop">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('prednosti') }}>Prednosti</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('cene') }}>Cene</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('pitanja') }}>Pitanja</a>
        </div>
        <div className="nav-actions">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-login-btn"
          >
            Prijavi se
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta-btn"
          >
            Probaj besplatno
          </a>
        </div>
        <button
          className="nav-hamburger"
          ref={hamburgerRef}
          aria-label="Otvori meni"
          onClick={toggleMenu}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown — lives outside nav-inner to avoid backdrop-filter containing block */}
      <div className="nav-links" ref={linksRef}>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('prednosti'); closeMenu() }}>Prednosti</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('cene'); closeMenu() }}>Cene</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('pitanja'); closeMenu() }}>Pitanja</a>
        <div className="nav-mobile-cta">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            Probaj besplatno
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
            onClick={closeMenu}
          >
            Prijavi se
          </a>
        </div>
      </div>
    </nav>
  )
}
