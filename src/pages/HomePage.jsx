import { useEffect } from 'react'
import { useModal } from '../context/ModalContext'
import { scrollTo } from '../utils/scrollTo'

const APP_URL = 'https://moja.spona.app'
import FeatureTabs from '../components/FeatureTabs'
import PricingSection from '../components/PricingSection'
import FaqSection from '../components/FaqSection'
import VideoDemo from '../components/VideoDemo.jsx'

export default function HomePage() {
  const { openLeadModal } = useModal()

  // Scroll-reveal: observe all .reveal elements and add .visible when they enter the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="hero spona-inverse" id="pocetak">
        <div className="container">
          <div className="hero-inner">

            {/* Left floating cards */}
            <div className="hero-cards hero-cards--left">
              <div className="hero-card hero-card--profit">
                <div className="hc-eyebrow"><i className="bi bi-graph-up-arrow" /> Zarada ovaj mesec</div>
                <div className="hc-amount">1.500.000 RSD</div>
                <div className="hc-badge up"><i className="bi bi-arrow-up" /> 14.2%</div>
                <div className="hc-bars">
                  <span style={{ '--h': '40%' }} />
                  <span style={{ '--h': '55%' }} />
                  <span style={{ '--h': '48%' }} />
                  <span style={{ '--h': '68%' }} />
                  <span style={{ '--h': '62%' }} />
                  <span style={{ '--h': '82%' }} />
                  <span style={{ '--h': '100%' }} className="active" />
                </div>
              </div>
              <div className="hero-card hero-card--customer">
                <div className="hc-eyebrow"><i className="bi bi-people" /> Kupac</div>
                <div className="hc-avatar-row">
                  <div className="hc-avatar">MP</div>
                  <div className="hc-avatar-info">
                    <div className="hc-name">Marko Popović</div>
                    <div className="hc-sub">Popović Gradnja</div>
                  </div>
                  <div className="hc-dot" />
                </div>
                <div className="hc-stats-row">
                  <div>
                    <div className="hc-stat-num">47</div>
                    <div className="hc-stat-label">porudžbina</div>
                  </div>
                  <div>
                    <div className="hc-stat-num">975.000 RSD</div>
                    <div className="hc-stat-label">ukupno</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: hero text */}
            <div className="hero-text">
              <p className="hero-eyebrow">Rokovnik u fioku. Tvoj biznis pod kontrolom.</p>
              <h1>Porudžbine, radnici i predračuni —<br /><em>sve na jednom mestu</em></h1>
              <p className="hero-sub">
                Zameni svesku i rokovnik — sve porudžbine, predračuni i kupci na jednom mestu, dostupni sa svakog uređaja.
              </p>
              <div className="hero-cta">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Probaj besplatno <i className="bi bi-arrow-right" />
                </a>
                <a href="#" className="btn btn-secondary btn-lg" onClick={(e) => { e.preventDefault(); scrollTo('radni-dan') }}>Kako funkcioniše</a>
              </div>
              <div className="hero-scroll-hint">
                <i className="bi bi-mouse2" />
                <span>Skroluj da vidiš više</span>
              </div>
            </div>

            {/* Right floating cards */}
            <div className="hero-cards hero-cards--right">
              <div className="hero-card hero-card--order">
                <div className="hc-header-row">
                  <div className="hc-eyebrow"><i className="bi bi-box-seam" /> Porudžbina</div>
                  <span className="hc-status-badge">Novo</span>
                </div>
                <div className="hc-order-num">#0042</div>
                <div className="hc-sub">Popović Gradnja</div>
                <div className="hc-items">
                  <div className="hc-item"><span>3× Prozori ALU</span><span>280.000</span></div>
                  <div className="hc-item"><span>1× Montaža</span><span>70.000</span></div>
                </div>
                <div className="hc-total">Ukupno <strong>375.000 RSD</strong></div>
              </div>
              <div className="hero-card hero-card--product">
                <div className="hc-eyebrow"><i className="bi bi-tag" /> Artikal</div>
                <div className="hc-name">Prozor ALU</div>
                <div className="hc-price">56.000 din <span>/kom</span></div>
                <div className="hc-desc">Aluminijumski prozor. Dostupan u više dimenzija i boja po zahtevu.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust Bar ──────────────────────────────────────────────── */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-item">
              <i className="bi bi-gift" />
              <span>30 dana besplatno — bez kartice</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <i className="bi bi-flag-fill" />
              <span>Napravljeno u Srbiji, za srpske firme</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <i className="bi bi-x-circle" />
              <span>Otkaži kad hoćeš, bez penala</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Video Demo ─────────────────────────────────────────────── */}
      <VideoDemo />

      {/* ── Problems ───────────────────────────────────────────────── */}
      <section className="section-problems" id="problemi">
        <div className="container">
          <div className="header reveal">
            <div className="eyebrow">Problem koji poznaješ</div>
            <h2 className="section-title">Da vam posao ne oduzima<br /><em>sav mir</em></h2>
            <p className="section-sub">
              Posao je porastao — i to je dobra stvar. Ali kad ima više posla, teže je sve držati u
              glavi. Papiri znaju da naprave pometnju.
            </p>
          </div>
          <div className="three-col mobile-scroll-row stagger">
            <div className="problem-card reveal">
              <div className="p-icon"><i className="bi bi-journal-x" /></div>
              <h3>Rokovnik se izgubi baš kad treba</h3>
              <p>Sve si zapisao — ali gde? U kojoj svesci, na kom papiru, u kojoj fascikli?</p>
              <p className="pquote">"Znam da sam negde zapisao, ali..."</p>
            </div>
            <div className="problem-card reveal">
              <div className="p-icon"><i className="bi bi-file-earmark-x" /></div>
              <h3>Predračuni i papiri gutaju vreme</h3>
              <p>Kraj meseca dođe brzo. A onda kreće sabiranje, traženje papira i pisanje predračuna ručno.</p>
              <p className="pquote">"Ne znam ko mi duguje, a ko je platio."</p>
            </div>
            <div className="problem-card reveal">
              <div className="p-icon"><i className="bi bi-telephone-x" /></div>
              <h3>Radnik te zove, ti zoveš radnika</h3>
              <p>Ko je preuzeo porudžbinu, šta je gotovo, šta čeka — teško pratiti kad nema jednog mesta.</p>
              <p className="pquote">"Sto puta me pitaju istu stvar..."</p>
            </div>
          </div>
          <div className="solve-strip reveal">
            <strong>Spona uvodi red u papire — i nije ništa komplikovanije od slanja poruka na Viberu.</strong>
          </div>
        </div>
      </section>

      {/* ── Workflow ───────────────────────────────────────────────── */}
      <section className="section-workflow" id="radni-dan">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="eyebrow">Kako Spona menja radni dan</div>
            <h2 className="section-title">Od upisa do naplate — <br />pravo iz džepa</h2>
            <p className="section-sub">
              Zaboravi na prepisivanje iz sveske u svesku. Ovako izgleda tok posla kada firma pređe na Sponu.
            </p>
          </div>
          <div className="steps-timeline-scrollable steps-timeline steps-timeline--auto stagger">
            <div className="step-node reveal">
              <div className="step-node-icon"><i className="bi bi-phone-vibrate" /></div>
              <div className="step-num-badge">01</div>
              <h3>Unos</h3>
              <p>Kupac zove ili piše. Umesto u svesku, prodavac kuca porudžbinu direktno na telefonu ili računaru.</p>
            </div>
            <div className="step-node reveal">
              <div className="step-node-icon"><i className="bi bi-tools" /></div>
              <div className="step-num-badge">02</div>
              <h3>Proizvodnja</h3>
              <p>Radnik na svom ekranu vidi <b>samo</b> šta treba da napravi, mere i materijal. Ne vidi cene ni podatke kupca.</p>
            </div>
            <div className="step-node reveal">
              <div className="step-node-icon"><i className="bi bi-check2-all" /></div>
              <div className="step-num-badge">03</div>
              <h3>Izrada</h3>
              <p>Kada završi posao, radnik jednim klikom menja status iz "U izradi" u "Spremno". Status se odmah ažurira.</p>
            </div>
            <div className="step-node reveal">
              <div className="step-node-icon active"><i className="bi bi-receipt" /></div>
              <div className="step-num-badge active">04</div>
              <h3>Naplata</h3>
              <p>Jednim klikom odštampaš radni nalog ili pošalješ PDF predračun na email. Čisto, brzo i profesionalno.</p>
            </div>
          </div>
          <div className="workflow-cta">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo('kako-poceti') }}
              className="btn btn-primary btn-lg"
            >
              Vidi kako da počneš <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────── */}
      <div className="stats-strip spona-inverse">
        <div className="container">
          <div className="stats-inner stagger">
            <div className="stat-item reveal scale">
              <div className="stat-big">30<span className="stat-unit">sek</span></div>
              <div className="stat-meta"><i className="bi bi-receipt" /> Predračun od porudžbine do PDF-a</div>
            </div>
            <div className="stat-item reveal scale">
              <div className="stat-big">30<span className="stat-unit">dana</span></div>
              <div className="stat-meta"><i className="bi bi-gift" /> Besplatno — bez kartice</div>
            </div>
            <div className="stat-item reveal scale">
              <div className="stat-big">3<span className="stat-unit">uloge</span></div>
              <div className="stat-meta"><i className="bi bi-people-fill" /> Admin, Prodavac, Radnik</div>
            </div>
            <div className="stat-item reveal scale">
              <div className="stat-big">2022<span className="stat-unit">.</span></div>
              <div className="stat-meta"><i className="bi bi-flag-fill" /> Napravljeno u Srbiji</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Tabs ───────────────────────────────────────────── */}
      <FeatureTabs />

      {/* ── Comparison ─────────────────────────────────────────────── */}
      <section className="section-compare">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="eyebrow">Zašto baš Spona?</div>
            <h2 className="section-title">Bolji od rokovnika i Excela —<br /><em>bez komplikacija</em></h2>
            <p className="section-sub">
              Svaka firma počne s rokovnikom ili tabelicom. Ali kad posao poraste, papiri postaju prepreka.
            </p>
          </div>
          <div className="compare-grid mobile-scroll-row">

            {/* Column 1: Notebook */}
            <div className="compare-col compare-col--old reveal">
              <div className="compare-col-header">
                <div className="compare-col-icon"><i className="bi bi-journal-text" /></div>
                <div className="compare-col-title">Rokovnik i papiri</div>
              </div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Izgubi se u šupi ili ostane kod kuće</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Nema pretrage — liskaš stranicu po stranicu</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Radnici moraju da te zovu za svaku informaciju</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Predračun pišeš ručno — svaki put iznova</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Ko je platio, a ko nije? Moraš da liskaš unazad.</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Na odmoru nisi dostupan — ili nisi na odmoru</span></div>
            </div>

            {/* Column 2: Excel */}
            <div className="compare-col compare-col--mid reveal">
              <div className="compare-col-header">
                <div className="compare-col-icon"><i className="bi bi-table" /></div>
                <div className="compare-col-title">Excel / Google tabele</div>
              </div>
              <div className="compare-row"><i className="bi bi-dash-circle-fill cmp-icon cmp-mid" /><span>Dostupno na računaru, ali nije uvek pri ruci</span></div>
              <div className="compare-row"><i className="bi bi-dash-circle-fill cmp-icon cmp-mid" /><span>Pretraga postoji, ali nije pregledna</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Nema pristupa za radnike — previše komplikovano</span></div>
              <div className="compare-row"><i className="bi bi-dash-circle-fill cmp-icon cmp-mid" /><span>Predračun iz šablona — lako se pogreši u ceni</span></div>
              <div className="compare-row"><i className="bi bi-dash-circle-fill cmp-icon cmp-mid" /><span>Plaćanja u posebnoj koloni — može da se zaluta</span></div>
              <div className="compare-row"><i className="bi bi-x-circle-fill cmp-icon cmp-no" /><span>Na telefonu je nepraktično za koristiti</span></div>
            </div>

            {/* Column 3: Spona */}
            <div className="compare-col compare-col--spona reveal">
              <div className="compare-col-header">
                <div className="compare-col-icon"><i className="bi bi-lightning-charge-fill" /></div>
                <div className="compare-col-title">Spona</div>
              </div>
              <div className="compare-row"><i className="bi bi-check-circle-fill cmp-icon cmp-yes" /><span>Uvek dostupna sa telefona, tableta i računara</span></div>
              <div className="compare-row"><i className="bi bi-check-circle-fill cmp-icon cmp-yes" /><span>Pronađeš kupca ili porudžbinu za 2 sekunde</span></div>
              <div className="compare-row"><i className="bi bi-check-circle-fill cmp-icon cmp-yes" /><span>Svaki radnik vidi šta treba da radi</span></div>
              <div className="compare-row"><i className="bi bi-check-circle-fill cmp-icon cmp-yes" /><span>Predračun za manje od 30 sekundi — direktno iz porudžbine</span></div>
              <div className="compare-row"><i className="bi bi-check-circle-fill cmp-icon cmp-yes" /><span>Jednim klikom vidiš ko je platio, a ko duguje</span></div>
              <div className="compare-row"><i className="bi bi-check-circle-fill cmp-icon cmp-yes" /><span>Na odmoru otvoriš na telefonu — minut, sve jasno</span></div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Devices ────────────────────────────────────────────────── */}
      <section className="section-devices spona-inverse" id="uredjaji">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="eyebrow">Jednostavno kao daljinski od TV-a</div>
            <h2 className="section-title">
              Radi na telefonu,<br />tabletu i računaru
            </h2>
            <p className="section-sub">
              Nema komplikovane obuke — ako umeš da koristiš telefon, umeš da koristiš Sponu.
            </p>
          </div>
          <div className="three-col mobile-scroll-row stagger">
            <div className="device-card reveal">
              <div className="d-frame d-frame-desktop">
                <div className="d-monitor">
                  <div className="d-screen">
                    <div className="ds-bar">
                      <div className="ds-dot" /><div className="ds-dot" /><div className="ds-dot" />
                    </div>
                    <div className="ds-content">
                      <div className="ds-row hi" />
                      <div className="ds-split">
                        <div className="ds-block" />
                        <div className="ds-block ds-block--accent" />
                      </div>
                      <div className="ds-row med" />
                      <div className="ds-row sml" />
                    </div>
                  </div>
                </div>
                <div className="d-stand-neck" /><div className="d-stand-base" />
              </div>
              <div className="device-label">
                <h3>U kancelariji</h3>
                <p>Na računaru imaš pun pregled — idealno za unos i praćenje svega.</p>
              </div>
            </div>
            <div className="device-card reveal">
              <div className="d-frame d-frame-phone">
                <div className="d-phone-body">
                  <div className="d-notch" />
                  <div className="d-screen">
                    <div className="ds-content">
                      <div className="ds-row hi" />
                      <div className="ds-row full" />
                      <div className="ds-row med" />
                      <div className="ds-row full ds-row--tall" />
                      <div className="ds-row sml" />
                      <div className="ds-row med" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="device-label">
                <h3>Na terenu</h3>
                <p>Na telefonu proveriš porudžbinu ili status dok si kod kupca ili na isporuci.</p>
              </div>
            </div>
            <div className="device-card reveal">
              <div className="d-frame d-frame-tablet">
                <div className="d-tablet-body">
                  <div className="d-screen">
                    <div className="ds-bar"><div className="ds-dot" /><div className="ds-dot" /></div>
                    <div className="ds-content">
                      <div className="ds-grid">
                        <div className="ds-grid-item accent" /><div className="ds-grid-item" />
                      </div>
                      <div className="ds-row full" />
                      <div className="ds-row med" />
                      <div className="ds-row hi" />
                    </div>
                  </div>
                  <div className="d-home" />
                </div>
              </div>
              <div className="device-label">
                <h3>Na odmoru</h3>
                <p>Otvoriš Sponu na telefonu i za minut znaš šta se dešava u firmi — pa se opusti.</p>
              </div>
            </div>
          </div>
          <div className="no-install-strip reveal">
            <div className="eyebrow">Nema instalacije, nema komplikacija</div>
            <strong>
              Spona radi u pretraživaču — otvoriš kao stranicu, kao Facebook ili YouTube. Ništa posebno ne treba instalirati.
            </strong>
          </div>
        </div>
      </section>

      {/* ── Steps ──────────────────────────────────────────────────── */}
      <section className="section-steps" id="kako-poceti">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="eyebrow">Kako početi?</div>
            <h2 className="section-title">Kreneš u tri koraka —<br /><span className="accent">mi smo uz tebe</span></h2>
            <p className="section-sub">Mi smo tu za tebe — od prvog dana.</p>
          </div>
          <div className="steps-timeline mobile-scroll-row stagger">
            <div className="step-node reveal">
              <div className="step-node-icon"><i className="bi bi-person-check-fill" /></div>
              <div className="step-num-badge">01</div>
              <h3>Registruješ se</h3>
              <p>Registruješ se za 30 sekundi — bez kartice, bez čekanja.</p>
              <div className="step-duration"><i className="bi bi-clock" /> Odmah</div>
            </div>
            <div className="step-node reveal">
              <div className="step-node-icon"><i className="bi bi-person-fill-add" /></div>
              <div className="step-num-badge">02</div>
              <h3>Unosimo podatke zajedno</h3>
              <p>Mi ti pomažemo da uneseš kupce, artikle i cenovnik. Ne moraš ništa sam.</p>
              <div className="step-duration"><i className="bi bi-clock" /> ~30 minuta</div>
            </div>
            <div className="step-node reveal">
              <div className="step-node-icon active"><i className="bi bi-rocket-takeoff-fill" /></div>
              <div className="step-num-badge active">03</div>
              <h3>Kreni — sve radi</h3>
              <p>Upišeš prvu porudžbinu i odmah osetiš razliku — red na jednom mestu, bez papira, bez telefoniranja.</p>
              <div className="step-duration active"><i className="bi bi-check-circle-fill" /> Gotovo!</div>
            </div>
          </div>
          <div className="support-strip reveal">
            <div className="eyebrow">Nisi sam</div>
            <strong>
              Obučavamo tebe i tvoje radnike, odgovoramo na sva pitanja i dostupni smo kad zatreba. Nisi prepušten sam sebi.
            </strong>
          </div>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────────────────── */}
      <section className="section-testimonial">
        <div className="container">
          <div className="testimonial-card reveal">
            <div className="testimonial-stars">
              {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill" />)}
            </div>
            <blockquote className="testimonial-quote">
              "Pre Spone sam sve vodila u rokovniku — uvek nešto nedostaje, a kraj meseca je bio noćna mora.
              Sad otvoriš i sve stoji tamo gde si ostavio. Predračun se napravi sam, radnici znaju šta rade."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar"><i className="bi bi-person-fill" /></div>
              <div className="testimonial-meta">
                <strong>Vlasnica Arbor Nameštaja</strong>
                <span>Srbija · koristi Sponu od 2022.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────── */}
      <PricingSection />

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="section-cta spona-inverse" id="kontakt">
        <div className="container">
          <div className="cta-inner">
            <h2 className="reveal">Tvoj biznis,<br /><em>pod kontrolom.</em></h2>
            <p className="reveal">
              Kupci. Porudžbine. Predračuni. Zarada.<br />Sve na jednom mestu — i mirna glava na kraju dana.
            </p>
            <div className="cta-buttons reveal">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => openLeadModal('')}>
                <i className="bi bi-envelope-fill" /> Pošalji upit
              </button>
              <a href="tel:+381693318024" className="btn btn-secondary btn-lg">
                <i className="bi bi-telephone-fill" /> Pozovi nas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
