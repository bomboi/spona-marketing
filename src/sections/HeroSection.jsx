import { ComputerFrame, PhoneFrame } from '../components/DeviceFrames.jsx'
import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../contact.js'

export default function HeroSection() {
  const { openRequestForm } = useLandingActions()
  return (
    <section className="section" aria-labelledby="hero-title">
      <div className="hero">
        <div className="hero__copy">
          <span className="eyebrow">Za radionice koje rade po meri</span>
          <h1 className="hero__title" id="hero-title">
            Sve porudžbine na jednom mestu. Znate šta je gotovo i koliko ste zaradili.
          </h1>
          <p className="lead">Umesto sveske i Excel tabele. Radi na telefonu, tabletu i računaru.</p>
          <div>
            <button className="button button--primary button--large hero__try" type="button" onClick={openRequestForm}>
              Probajte besplatno 30 dana
            </button>
          </div>
          <p className="hero__call">
            Ili nas pozovite: <a href={PHONE_NUMBER_LINK}>{PHONE_NUMBER_DISPLAY}</a> (i Viber)
          </p>
          <p className="hero__small">Bez platne kartice. Mi Vam otvaramo nalog i unosimo Vaše proizvode.</p>
        </div>
        <div className="hero__screens">
          <ComputerFrame
            className="hero__computer"
            src="/screens/order-payments-computer.jpg"
            alt="Porudžbina u Sponi na računaru: uplate, preostali iznos i zarada"
            width={1892}
            height={1216}
            isLazy={false}
          />
          <PhoneFrame
            className="hero__phone"
            src="/screens/worker-phone.jpg"
            alt="Ekran radnika na telefonu: Gornji elementi, 1 od 4 gotovo, dugme Završi 1"
            width={780}
            height={1688}
            isLazy={false}
          />
        </div>
      </div>
      <p className="screens-note">Primer radionice sa izmišljenim kupcima i iznosima.</p>
    </section>
  )
}
