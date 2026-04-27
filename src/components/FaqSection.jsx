import { useState } from 'react'

const FAQS = [
  {
    q: 'Da li postoji besplatni probni period?',
    a: 'Da! Svaki plan dolazi sa 14 dana besplatnog korišćenja — bez kreditne kartice. Možeš testirati sve funkcije pre nego što se odlučiš.',
  },
  {
    q: 'Da li moram da instaliram nešto?',
    a: 'Ne. Spona je internet aplikacija koju koristiš direktno iz browsera. Nema instalacije, nema ažuriranja — uvek si na najnovijoj verziji.',
  },
  {
    q: 'Kako počinjem?',
    a: 'Registruj se, unesite podatke o firmi i spreman si za rad. Vodićemo te kroz svaki korak procesa.',
  },
  {
    q: 'Da li su moji podaci bezbedni?',
    a: 'Apsolutno. Svi podaci su šifrovani SSL/TLS protokolom, a serveri se nalaze u EU datacentrima koji zadovoljavaju GDPR standarde.',
  },
  {
    q: 'Kakva podrška je dostupna?',
    a: 'Dostupan je email i telefon. Starter plan ima standardnu email podršku, dok Standard i Pro planovi imaju prioritetni pristup sa kraćim vremenom odgovora.',
  },
  {
    q: 'Mogu li da otkažem pretplatu u bilo kom trenutku?',
    a: 'Da, bez ikakvih penala. Možeš otkazati pretplatu direktno iz podešavanja naloga. Pristup ostaje aktivan do kraja plaćenog perioda.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section-faq" id="pitanja">
      <div className="container">
        <div className="section-header-center reveal">
          <div className="eyebrow">Česta pitanja</div>
          <h2 className="section-title">
            Imaš pitanja? <span className="accent">Imamo odgovore.</span>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item reveal${openIndex === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faq-icon">
                  <i className="bi bi-plus" />
                </span>
              </button>
              <div className={`faq-a${openIndex === i ? ' open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
