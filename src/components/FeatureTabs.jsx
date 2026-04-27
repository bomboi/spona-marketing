import { useState, useRef } from 'react'
import React from 'react'
import invoiceImg from '../assets/invoice.jpg'

/**
 * Wraps app-mockup / mockup-box children in a track with prev/next nav.
 * On desktop (CSS): all children are visible stacked.
 * On mobile (CSS): only the child with `mockup-active` class is shown.
 */
function MockupCarousel({ children }) {
  const items = React.Children.toArray(children)
  const [active, setActive] = useState(0)
  const count = items.length

  return (
    <>
      <div className="mockup-track">
        {items.map((child, i) =>
          React.cloneElement(child, {
            key: i,
            className: [child.props.className, i === active ? 'mockup-active' : '']
              .filter(Boolean)
              .join(' '),
          })
        )}
      </div>
      {count > 1 && (
        <div className="mockup-nav">
          <button
            className="mockup-arrow"
            disabled={active === 0}
            onClick={() => setActive(a => a - 1)}
          >
            <i className="bi bi-chevron-left" />
          </button>
          <div className="mockup-dots">
            {items.map((_, i) => (
              <span
                key={i}
                className={`mockup-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button
            className="mockup-arrow"
            disabled={active === count - 1}
            onClick={() => setActive(a => a + 1)}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      )}
    </>
  )
}

const TAB_COUNT = 6

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const bodyRef = useRef(null)

  function goToTab(i) {
    const next = Math.max(0, Math.min(TAB_COUNT - 1, i))
    setActiveTab(next)
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ left: next * bodyRef.current.clientWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-features-tabs" id="prednosti">
      <div className="container">
        <div className="section-header-center reveal">
          <div className="eyebrow">Sve što tvojoj firmi treba</div>
          <h2 className="section-title">Nema više "gde mi je onaj papir?"</h2>
        </div>

        <div className="features-tabs-body" ref={bodyRef}>

          {/* ── 01 Kupci ─────────────────────────────────────────── */}
          <div className="feature-tab-content" id="tab-kupci">
            <div className="feature-content-layout">
              <div className="feature-layout-header">
                <div className="feature-tag"><i className="bi bi-people" /> 01 — Kupci</div>
                <h2 className="feature-title">Nikad više izgubljen<br />kontakt ni dogovor</h2>
                <p className="feature-desc">
                  Upišeš kupca jednom — i sve što si s njim radio ostane u Sponi zauvek.
                  Ime, telefon, istorija porudžbina, šta ste se dogovorili. Nema više: "Kako mu beše broj?"
                </p>
              </div>
              <div className="feature-layout-visual">
                <MockupCarousel>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-cust-row active">
                        <div className="am-cust-av">MP</div>
                        <div className="am-cust-info">
                          <div className="am-cust-name">Marko Popović</div>
                          <div className="am-cust-sub">47 porudžbina</div>
                        </div>
                        <i className="bi bi-chevron-right" style={{ color: 'var(--brand-primary)', fontSize: '0.72rem' }} />
                      </div>
                      <div className="am-cust-row">
                        <div className="am-cust-av" style={{ '--av': 'linear-gradient(135deg,#667eea,#764ba2)' }}>JT</div>
                        <div className="am-cust-info">
                          <div className="am-cust-name">Janković Trgovina</div>
                          <div className="am-cust-sub">31 porudžbina</div>
                        </div>
                        <i className="bi bi-chevron-right" style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem' }} />
                      </div>
                      <div className="am-cust-row">
                        <div className="am-cust-av" style={{ '--av': 'linear-gradient(135deg,#f093fb,#f5576c)' }}>MM</div>
                        <div className="am-cust-info">
                          <div className="am-cust-name">Mila Marković</div>
                          <div className="am-cust-sub">12 porudžbina</div>
                        </div>
                        <i className="bi bi-chevron-right" style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem' }} />
                      </div>
                    </div>
                  </div>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div className="am-cust-av" style={{ width: '40px', height: '40px', fontSize: '0.78rem' }}>MP</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>Marko Popović</div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Popović Gradnja · Veleprodaja</div>
                        </div>
                        <div style={{ marginLeft: 'auto', fontSize: '0.65rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                          <i className="bi bi-circle-fill" style={{ fontSize: '0.5rem' }} /> Aktivan
                        </div>
                      </div>
                      <div className="am-stats-row" style={{ marginBottom: '8px' }}>
                        <div className="am-stat-block" style={{ textAlign: 'center' }}>
                          <div className="am-stat-val">47</div>
                          <div className="am-stat-lbl">Porudžbina</div>
                        </div>
                        <div className="am-stat-block" style={{ textAlign: 'center' }}>
                          <div className="am-stat-val" style={{ fontSize: '0.85rem' }}>975.000</div>
                          <div className="am-stat-lbl">Ukupno RSD</div>
                        </div>
                      </div>
                      <div className="am-section-label">Istorija porudžbina</div>
                      <div className="am-order-row">
                        <span className="am-order-status gotovo">Isporučeno</span>
                        <span className="am-order-name">#0041 — Prozori ALU</span>
                        <span className="am-order-amt">280.000</span>
                      </div>
                      <div className="am-order-row">
                        <span className="am-order-status novo">Novo</span>
                        <span className="am-order-name">#0042 — Montaža i isporuka</span>
                        <span className="am-order-amt">375.000</span>
                      </div>
                    </div>
                  </div>
                </MockupCarousel>
              </div>
              <div className="feature-layout-details">
                <ul className="dot-list" style={{ marginBottom: '24px' }}>
                  <li><strong>Ime, telefon i istorija</strong> — sve na jednom mestu</li>
                  <li><strong>Nađeš bilo koga za sekundu</strong> — samo ukucaš ime</li>
                  <li><strong>Beleške i dogovori</strong> uz svaki profil kupca</li>
                </ul>
                <div className="card">
                  <div className="eyebrow">Mirna glava</div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Znaš ko ti šta duguje — čak i kad si na odmoru.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 02 Porudžbine ─────────────────────────────────────── */}
          <div className="feature-tab-content" id="tab-porudzbine">
            <div className="feature-content-layout">
              <div className="feature-layout-header">
                <div className="feature-tag"><i className="bi bi-box-seam" /> 02 — Porudžbine</div>
                <h2 className="feature-title">Svaka porudžbina —<br />zapisana i praćena</h2>
                <p className="feature-desc">
                  Kupac naruči — ti upišeš u Sponu za minut. Od tog trenutka svaki radnik zna šta
                  treba da uradi, bez telefoniranja i petljanja.
                </p>
              </div>
              <div className="feature-layout-visual">
                <MockupCarousel>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-tabs">
                        <span className="am-tab active">Sve (18)</span>
                        <span className="am-tab">Novo (5)</span>
                        <span className="am-tab">U izradi (8)</span>
                        <span className="am-tab">Isporučeno (5)</span>
                      </div>
                      <div className="am-order-row">
                        <span className="am-order-status novo">Novo</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="am-order-name">#0042 — Popović Gradnja</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>3× Prozori ALU + Montaža</div>
                        </div>
                        <span className="am-order-amt">375.000</span>
                      </div>
                      <div className="am-order-row">
                        <span className="am-order-status uradu">U izradi</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="am-order-name">#0041 — Janković Trgovina</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>5× Roletne PVC</div>
                        </div>
                        <span className="am-order-amt">88.000</span>
                      </div>
                      <div className="am-order-row">
                        <span className="am-order-status gotovo">Isporučeno</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="am-order-name">#0040 — Luka Andrić</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>2× Vrata ALU</div>
                        </div>
                        <span className="am-order-amt">120.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-form-field">
                        <div className="am-field-label">Kupac</div>
                        <div className="am-field-val am-field-selected">
                          <div className="am-cust-av" style={{ width: '22px', height: '22px', fontSize: '0.55rem' }}>MP</div>
                          Marko Popović
                        </div>
                      </div>
                      <div className="am-section-label">Artikli</div>
                      <div className="am-item-row">
                        <div className="am-item-info">
                          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-primary)' }}>Prozor ALU</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>56.000 din/kom</div>
                        </div>
                        <div className="am-item-qty">× 3</div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>168.000</div>
                      </div>
                      <div className="am-item-row">
                        <div className="am-item-info">
                          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-primary)' }}>Montaža</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>35.000 din/kom</div>
                        </div>
                        <div className="am-item-qty">× 2</div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>70.000</div>
                      </div>
                      <div className="am-divider-line" />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Ukupno</span>
                        <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>238.000 RSD</span>
                      </div>
                    </div>
                  </div>
                </MockupCarousel>
              </div>
              <div className="feature-layout-details">
                <ul className="dot-list" style={{ marginBottom: '24px' }}>
                  <li><strong>Odabereš kupca</strong> jednim klikom</li>
                  <li><strong>Dodaš artikle</strong> — cene se same upišu</li>
                  <li><strong>Gotovinsko, predračun ili kartica</strong> — sve beleži</li>
                  <li><strong>Pratiš status</strong> — u radu, gotovo, isporučeno</li>
                </ul>
                <div className="card" style={{ background: 'var(--brand-primary-light)' }}>
                  <h3 style={{ color: 'var(--brand-primary-dark)', fontSize: '0.95rem', marginBottom: '6px' }}>
                    <i className="bi bi-printer-fill" /> Radni nalozi za radnike
                  </h3>
                  <span style={{ fontSize: '0.87rem', color: 'var(--text-secondary)' }}>
                    Odštampaš nalog za radionicu jednim klikom — sve jasno ispisano, bez telefona.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 03 Predračuni ─────────────────────────────────────── */}
          <div className="feature-tab-content" id="tab-predracuni">
            <div className="feature-content-layout">
              <div className="feature-layout-header">
                <div className="feature-tag"><i className="bi bi-receipt" /> 03 — Predračuni</div>
                <h2 className="feature-title">Predračun za pola minute,<br />bez greške</h2>
                <p className="feature-desc">
                  Nema više ručnog pisanja. Spona napravi predračun sam iz porudžbine — uredno,
                  ispravan, s tvojim logom — za pola minute. Odštampaš ili pošalješ mejlom, gotovo.
                </p>
              </div>
              <div className="feature-layout-visual">
                <MockupCarousel>
                  <div className="mockup-box" style={{ minHeight: '200px' }}>
                    <img alt="Gotov predračun" src={invoiceImg} />
                    <span className="m-label">
                      <strong>Gotov predračun</strong>
                      Uredno odštampan predračun s tvojim logom — profesionalno, bez muke
                    </span>
                  </div>
                </MockupCarousel>
              </div>
              <div className="feature-layout-details">
                <ul className="dot-list" style={{ marginBottom: '24px' }}>
                  <li><strong>Sve se samo popuni</strong> iz porudžbine</li>
                  <li><strong>Odštampaj ili pošalji mejlom</strong> — dva klika</li>
                  <li><strong>Tvoj logo i naziv firme</strong> na svakom predračunu</li>
                  <li><strong>Vidiš ko je platio, a ko nije</strong></li>
                </ul>
                <div className="quote">
                  "Predračun je gotov pre nego što kupac izađe iz radnje."
                </div>
              </div>
            </div>
          </div>

          {/* ── 04 Cenovnik ───────────────────────────────────────── */}
          <div className="feature-tab-content" id="tab-cenovnik">
            <div className="feature-content-layout">
              <div className="feature-layout-header">
                <div className="feature-tag"><i className="bi bi-tag" /> 04 — Cenovnik</div>
                <h2 className="feature-title">Cene se ne zaboravljaju —<br />i uvek su ispravne</h2>
                <p className="feature-desc">
                  Upišeš sve proizvode jednom — i Spona ti to sama nudi svaki put kad praviš
                  porudžbinu. Nema više računanja na papiru ili grešaka u ceni.
                </p>
              </div>
              <div className="feature-layout-visual">
                <MockupCarousel>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-tabs">
                        <span className="am-tab active">Svi (24)</span>
                        <span className="am-tab">Prozori</span>
                        <span className="am-tab">Vrata</span>
                        <span className="am-tab">Usluge</span>
                      </div>
                      <div className="am-product-row">
                        <div className="am-product-icon">🪟</div>
                        <div className="am-product-info">
                          <div className="am-product-name">Prozor ALU</div>
                        </div>
                        <div className="am-product-price">56.000 din</div>
                      </div>
                      <div className="am-product-row">
                        <div className="am-product-icon">🚪</div>
                        <div className="am-product-info">
                          <div className="am-product-name">Vrata ALU</div>
                        </div>
                        <div className="am-product-price">85.000 din</div>
                      </div>
                      <div className="am-product-row">
                        <div className="am-product-icon" style={{ fontSize: '0.9rem' }}>🔧</div>
                        <div className="am-product-info">
                          <div className="am-product-name">Montaža</div>
                        </div>
                        <div className="am-product-price">35.000 din</div>
                      </div>
                    </div>
                  </div>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div className="am-product-icon" style={{ width: '44px', height: '44px', fontSize: '1.5rem', borderRadius: '12px' }}>🪟</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>Prozor ALU</div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Kategorija: Prozori</div>
                        </div>
                      </div>
                      <div className="am-stats-row" style={{ marginBottom: '10px' }}>
                        <div className="am-stat-block" style={{ textAlign: 'center' }}>
                          <div className="am-stat-val" style={{ fontSize: '0.88rem' }}>56.000 RSD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MockupCarousel>
              </div>
              <div className="feature-layout-details">
                <ul className="dot-list" style={{ marginBottom: '24px' }}>
                  <li><strong>Naziv i cena</strong> za svaki artikal ili uslugu</li>
                  <li><strong>Varijante po meri</strong> — dimenzija, boja, tip, materijal</li>
                  <li><strong>Kategorije</strong> za lakši pregled</li>
                  <li><strong>Cena se sama upiše</strong> kad dodaješ artikal u porudžbinu</li>
                </ul>
                <div className="card">
                  <div className="eyebrow">Kako to izgleda</div>
                  <span style={{ fontSize: '0.87rem', color: 'var(--text-secondary)' }}>
                    Ukucaš par slova — Spona odmah ponudi artikl i cenu. Odabereš količinu, gotovo.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 05 Zarada ─────────────────────────────────────────── */}
          <div className="feature-tab-content" id="tab-zarada">
            <div className="feature-content-layout">
              <div className="feature-layout-header">
                <div className="feature-tag"><i className="bi bi-graph-up-arrow" /> 05 — Zarada</div>
                <h2 className="feature-title">Crno na belo —<br />bez digitrona</h2>
                <p className="feature-desc">
                  Nema više sabiranja do ponoći. Otvoriš Sponu — i odmah vidiš čiste račune: ko je
                  platio, koliko si zaradio, šta se dobro prodaje.
                </p>
              </div>
              <div className="feature-layout-visual">
                <MockupCarousel>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-stats-row">
                        <div className="am-stat-block">
                          <div className="am-stat-val">142.500</div>
                          <div className="am-stat-lbl">Zarada<br />ovaj mesec</div>
                          <div className="am-stat-up"><i className="bi bi-arrow-up" /> +18%</div>
                        </div>
                        <div className="am-stat-block">
                          <div className="am-stat-val">37</div>
                          <div className="am-stat-lbl">Porudžbine<br />ovaj mesec</div>
                          <div className="am-stat-up"><i className="bi bi-arrow-up" /> +5</div>
                        </div>
                        <div className="am-stat-block">
                          <div className="am-stat-val">Nikolić d.o.o.</div>
                          <div className="am-stat-lbl">Top kupac<br />ovaj mesec</div>
                        </div>
                      </div>
                      <div className="am-chart">
                        <div className="am-chart-label">Zarada — poslednjih 6 meseci (RSD)</div>
                        <div className="am-chart-bars">
                          <div className="am-bar-wrap"><div className="am-bar-fill" style={{ '--h': '45%' }} /><span>Jan</span></div>
                          <div className="am-bar-wrap"><div className="am-bar-fill" style={{ '--h': '58%' }} /><span>Feb</span></div>
                          <div className="am-bar-wrap"><div className="am-bar-fill" style={{ '--h': '50%' }} /><span>Mar</span></div>
                          <div className="am-bar-wrap"><div className="am-bar-fill" style={{ '--h': '70%' }} /><span>Apr</span></div>
                          <div className="am-bar-wrap"><div className="am-bar-fill" style={{ '--h': '82%' }} /><span>Maj</span></div>
                          <div className="am-bar-wrap"><div className="am-bar-fill active" style={{ '--h': '100%' }} /><span>Jun</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-section-label">Najprodavaniji artikli</div>
                      <div className="am-order-row">
                        <div className="am-order-name">Prozor ALU 120×140</div>
                        <div className="am-order-amt">41.200 RSD</div>
                      </div>
                      <div className="am-order-row">
                        <div className="am-order-name">Vrata PVC 90×210</div>
                        <div className="am-order-amt">28.500 RSD</div>
                      </div>
                      <div className="am-order-row">
                        <div className="am-order-name">Montaža i ugradnja</div>
                        <div className="am-order-amt">18.000 RSD</div>
                      </div>
                    </div>
                  </div>
                </MockupCarousel>
              </div>
              <div className="feature-layout-details">
                <ul className="dot-list">
                  <li><strong>Zarada po danu, mesecu ili godini</strong> — bez sabiranja</li>
                  <li><strong>Ko ti donosi najviše para</strong></li>
                  <li><strong>Šta se dobro prodaje, a šta stoji</strong></li>
                  <li><strong>Ko od radnika šta uradi</strong> — bez ispitivanja</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── 06 Tim ────────────────────────────────────────────── */}
          <div className="feature-tab-content" id="tab-tim">
            <div className="feature-content-layout">
              <div className="feature-layout-header">
                <div className="feature-tag"><i className="bi bi-people" /> 06 — Tim</div>
                <h2 className="feature-title">Svako na svom,<br />bez uvida u tuđe</h2>
                <p className="feature-desc">
                  Kroz četiri nivoa pristupa svako ima svoj nalog. Spona funkcioniše kao alat za
                  internu proizvodnju, ali i mrežu partnera — uz potpunu tajnost tvojih brojki.
                </p>
              </div>
              <div className="feature-layout-visual">
                <MockupCarousel>
                  <div className="app-mockup">
                    <div className="am-body">
                      <div className="am-team-row">
                        <div className="am-cust-av" style={{ width: '34px', height: '34px', fontSize: '0.7rem' }}>MM</div>
                        <div className="am-cust-info" style={{ flex: 1 }}>
                          <div className="am-cust-name">Milan Matić</div>
                          <div className="am-cust-sub">Admin</div>
                        </div>
                        <span className="am-role-badge admin">Admin</span>
                      </div>
                      <div className="am-team-row">
                        <div className="am-cust-av" style={{ width: '34px', height: '34px', fontSize: '0.7rem', '--av': 'linear-gradient(135deg,#4facfe,#00f2fe)' }}>NK</div>
                        <div className="am-cust-info" style={{ flex: 1 }}>
                          <div className="am-cust-name">Nina Kovač</div>
                          <div className="am-cust-sub">Prodavac</div>
                        </div>
                        <span className="am-role-badge radnik">Prodavac</span>
                      </div>
                      <div className="am-team-row">
                        <div className="am-cust-av" style={{ width: '34px', height: '34px', fontSize: '0.7rem', '--av': 'linear-gradient(135deg,#f093fb,#f5576c)' }}>DV</div>
                        <div className="am-cust-info" style={{ flex: 1 }}>
                          <div className="am-cust-name">Dragan Vukić</div>
                          <div className="am-cust-sub">Radnik</div>
                        </div>
                        <span className="am-role-badge radnik">Radnik</span>
                      </div>
                    </div>
                  </div>
                  <div className="app-mockup">
                    <div className="am-body">
                      <table className="am-perm-table">
                        <thead>
                          <tr>
                            <th></th>
                            <th><span className="am-role-badge admin">Admin</span></th>
                            <th><span className="am-role-badge poslovodja" style={{ fontSize: '0.5rem' }}>Prod.</span></th>
                            <th><span className="am-role-badge radnik">Radnik</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Porudžbine</td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                          </tr>
                          <tr>
                            <td>Kupci</td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                            <td><i className="bi bi-x-circle am-cross" /></td>
                          </tr>
                          <tr>
                            <td>Zarada</td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                            <td><i className="bi bi-dash-circle am-dash" /></td>
                            <td><i className="bi bi-x-circle am-cross" /></td>
                          </tr>
                          <tr>
                            <td>Podešavanja</td>
                            <td><i className="bi bi-check-circle-fill am-check" /></td>
                            <td><i className="bi bi-x-circle am-cross" /></td>
                            <td><i className="bi bi-x-circle am-cross" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </MockupCarousel>
              </div>
              <div className="feature-layout-details">
                <div className="card" style={{ marginBottom: '12px' }}>
                  <div className="eyebrow">Ko šta vidi</div>
                  <ul className="dot-list">
                    <li><strong>Admin (Ti)</strong> — zarada, cene i sva podešavanja</li>
                    <li><strong>Prodavac</strong> — kupci i porudžbine, bez zarade</li>
                    <li><strong>Radnik</strong> — samo artikli i materijali. Nula pristupa cenama.</li>
                    <li><strong>Partner</strong> — unosi porudžbine, vidi isključivo svoje</li>
                  </ul>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginTop: '10px' }}>
                    Tvoja zarada i baza kupaca ostaju isključivo između tebe i Spone.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>{/* end features-tabs-body */}

        {/* Panel navigation */}
        <div className="features-panel-nav">
          <button
            className="panel-arrow"
            disabled={activeTab === 0}
            onClick={() => goToTab(activeTab - 1)}
          >
            <i className="bi bi-chevron-left" />
          </button>
          <div className="panel-dots">
            {Array.from({ length: TAB_COUNT }, (_, i) => (
              <span
                key={i}
                className={`panel-dot${i === activeTab ? ' active' : ''}`}
                onClick={() => goToTab(i)}
              />
            ))}
          </div>
          <button
            className="panel-arrow"
            disabled={activeTab === TAB_COUNT - 1}
            onClick={() => goToTab(activeTab + 1)}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>

      </div>
    </section>
  )
}
