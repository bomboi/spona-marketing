import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, VIBER_LINK } from '../contact.js'

export default function TrustSection() {
  return (
    <section className="band band--white" aria-labelledby="trust-title">
      <div className="page-width split split--top">
        <div className="story">
          <h2 className="section-title" id="trust-title">Ko stoji iza Spone.</h2>
          <p className="story__quote">Spona je nastala u radionici nameštaja i tamo se koristi svakog dana od 2022. godine.</p>
        </div>
        <div className="facts">
          <div className="fact">
            <b>Pomažemo na početku.</b>
            <span>Zajedno otvorimo nalog i unesemo Vaše kupce i proizvode. Dovoljno je pola sata.</span>
          </div>
          <div className="fact">
            <b>Javlja se čovek.</b>
            <span><a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a> i <a href={VIBER_LINK}>Viber</a>, radnim danima od 13 do 20 h. Ako ne stignemo da se javimo, zovemo Vas mi.</span>
          </div>
          <div className="fact">
            <b>Vaši podaci su Vaši.</b>
            <span>Vidi ih samo Vaša firma. Radnici ne vide cene. Rezervnu kopiju pravimo svakog dana.</span>
          </div>
          <div className="fact">
            <b>Bez ugovora i bez kartice.</b>
            <span>30 dana besplatno. Posle plaćate mesečno i prestajete kad hoćete.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
