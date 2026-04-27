import { useState } from 'react'
import { useModal } from '../context/ModalContext'
import { scrollTo } from '../utils/scrollTo'

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly')
  const { openLeadModal } = useModal()
  const APP_URL = 'https://moja.spona.app'

  return (
    <section className="section-pricing" id="cene" data-billing={billing}>
      <div className="container">
        <div className="section-header-center reveal">
          <div className="eyebrow">Cene</div>
          <h2 className="section-title">Jasne cene, <em>bez iznenađenja</em></h2>
          <p className="section-sub">
            Odaberi plan koji odgovara tvojoj firmi. Besplatan period od 14 dana — bez kreditne kartice.
          </p>
        </div>

        <div className="pricing-toggle reveal" role="tablist" aria-label="Način naplate">
          <button
            type="button"
            className={`pricing-toggle-btn${billing === 'monthly' ? ' active' : ''}`}
            data-billing="monthly"
            aria-pressed={billing === 'monthly'}
            onClick={() => setBilling('monthly')}
          >
            Mesečno
          </button>
          <button
            type="button"
            className={`pricing-toggle-btn${billing === 'yearly' ? ' active' : ''}`}
            data-billing="yearly"
            aria-pressed={billing === 'yearly'}
            onClick={() => setBilling('yearly')}
          >
            Godišnje <span>2 meseca gratis</span>
          </button>
        </div>

        <div className="pricing-grid stagger mobile-scroll-row">

          {/* Starter */}
          <div className="pricing-card reveal">
            <div className="pricing-badge" style={{ visibility: 'hidden', userSelect: 'none' }} aria-hidden="true">
              <i className="bi bi-star-fill" /> S
            </div>
            <div className="pricing-plan">Starter</div>
            <div className="pricing-price">
              <span className="pricing-value pricing-value-monthly">1.900 <sup>RSD</sup></span>
              <span className="pricing-value pricing-value-yearly">19.000 <sup>RSD</sup></span>
            </div>
            <div className="pricing-per">
              <span className="pricing-value pricing-value-monthly">mesečno</span>
              <span className="pricing-value pricing-value-yearly">godišnje</span>
            </div>
            <div className="pricing-meta">
              <span className="pricing-value pricing-value-yearly">
                Umesto <span className="pricing-old-price">22.800 RSD</span>
              </span>
            </div>
            <div className="pricing-desc" style={{ minHeight: '44px' }}>
              Savršen za frilensere i male timove koji tek počinju.
            </div>
            <ul className="pricing-features">
              <li><i className="bi bi-check" /> 1 korisnik</li>
              <li><i className="bi bi-check" /> Kupci i porudžbine</li>
              <li><i className="bi bi-check" /> Predračuni (PDF)</li>
              <li><i className="bi bi-check" /> Email podrška</li>
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark w-full"
            >
              Probaj besplatno
            </a>
          </div>

          {/* Standard */}
          <div className="pricing-card popular reveal">
            <div className="pricing-badge"><i className="bi bi-star-fill" /> Najpopularniji</div>
            <div className="pricing-plan">Standard</div>
            <div className="pricing-price">
              <span className="pricing-value pricing-value-monthly">4.900 <sup>RSD</sup></span>
              <span className="pricing-value pricing-value-yearly">49.000 <sup>RSD</sup></span>
            </div>
            <div className="pricing-per">
              <span className="pricing-value pricing-value-monthly">mesečno</span>
              <span className="pricing-value pricing-value-yearly">godišnje</span>
            </div>
            <div className="pricing-meta">
              <span className="pricing-value pricing-value-yearly">
                Umesto <span className="pricing-old-price">58.800 RSD</span>
              </span>
            </div>
            <div className="pricing-desc" style={{ minHeight: '44px' }}>
              Za rastuće firme kojima treba više kontrole i saradnje.
            </div>
            <ul className="pricing-features">
              <li><i className="bi bi-check" /> Sve iz Starter plana</li>
              <li><i className="bi bi-check" /> Do 5 korisnika</li>
              <li><i className="bi bi-check" /> Sve interne uloge (Admin, Prodavac, Radnik)</li>
              <li><i className="bi bi-check" /> Aplikacija i pristup za radnike u proizvodnji</li>
              <li><i className="bi bi-check" /> Statistika</li>
              <li><i className="bi bi-check" /> Prioritetna podrška</li>
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Probaj besplatno
            </a>
          </div>

          {/* Pro */}
          <div className="pricing-card reveal">
            <div className="pricing-badge" style={{ visibility: 'hidden', userSelect: 'none' }} aria-hidden="true">
              <i className="bi bi-star-fill" /> P
            </div>
            <div className="pricing-plan">Pro</div>
            <div className="pricing-price">
              <span className="pricing-value pricing-value-monthly">11.900 <sup>RSD</sup></span>
              <span className="pricing-value pricing-value-yearly">119.000 <sup>RSD</sup></span>
            </div>
            <div className="pricing-per">
              <span className="pricing-value pricing-value-monthly">mesečno</span>
              <span className="pricing-value pricing-value-yearly">godišnje po dogovoru</span>
            </div>
            <div className="pricing-meta">
              <span className="pricing-value pricing-value-yearly">
                Umesto <span className="pricing-old-price">142.800 RSD</span>
              </span>
            </div>
            <div className="pricing-desc" style={{ minHeight: '44px' }}>
              Za etablirane firme sa velikim timovima i proizvodnjom.
            </div>
            <ul className="pricing-features">
              <li><i className="bi bi-check" /> Sve iz Standard plana</li>
              <li><i className="bi bi-check" /> <b>Neograničen</b> broj korisnika (bez doplate)</li>
              <li><i className="bi bi-check" /> <b>Podrška za eksterne partnere/prodavce</b></li>
              <li><i className="bi bi-check" /> Prilagođeni statusi po meri tvoje proizvodnje</li>
              <li><i className="bi bi-check" /> Lični kontakt za podršku</li>
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark w-full"
            >
              Probaj besplatno
            </a>
          </div>

        </div>

        <div className="pricing-custom-action reveal" style={{ marginTop: '32px' }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            onClick={() => openLeadModal('Custom', billing)}
          >
            Treba ti drugačiji plan? <i className="bi bi-arrow-right" />
          </button>
        </div>
        <p className="pricing-note reveal">
          Nisi siguran koji plan?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('kontakt') }}>Javi nam se</a> i pomoći ćemo ti da odabereš pravi.
        </p>
      </div>
    </section>
  )
}
