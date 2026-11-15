import { ComputerFrame, TabletFrame } from '../components/DeviceFrames.jsx'

const STEPS = [
  {
    title: 'Unesete porudžbinu',
    text: 'Kupac, šta pravite, cena i rok. Avans upišete odmah.',
    details: ['Rok može da teče od dana kad kupac uplati avans', 'Predračun i radni nalog pravite iz porudžbine', 'Saloni i partneri mogu sami da unose porudžbine, a Vi ih potvrdite'],
    screen: <ComputerFrame src="/screens/order-articles-computer.jpg" alt="Porudžbina sa tri artikla, za svaki se vidi koliko je gotovo" width={1832} height={1484} />,
  },
  {
    title: 'Radionica je napravi',
    text: 'Radnik na telefonu ili tabletu vidi šta treba da napravi i označi kad je gotovo. Cene ne vidi.',
    details: ['Vi vidite koliko je urađeno, bez telefoniranja', 'Jedan zajednički tablet u radionici je dovoljan'],
    isScreenHiddenOnPhone: true,
    screen: <TabletFrame src="/screens/worker-tablet.jpg" alt="Ekran radnika na tabletu sa listom artikala i dugmetom Završi 1" width={2360} height={1640} />,
  },
  {
    title: 'Vidite uplate i zaradu',
    text: 'Šta je plaćeno, koliko je ostalo i koliko ste zaradili na svakoj porudžbini.',
    details: ['Avans, rate i ostatak pri isporuci', 'Spona označi artikal koji prodajete ispod troška', 'Radnici i partneri ovo ne vide'],
    screen: <ComputerFrame src="/screens/payments-computer.jpg" alt="Plaćanje: vrednost porudžbine, zarada, plaćeno i za uplatu, sa listom uplata" width={1740} height={610} />,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section" aria-labelledby="how-title">
      <h2 className="section__title" id="how-title">Kako radi</h2>
      <ol className="steps">
        {STEPS.map(({ title, text, details, screen, isScreenHiddenOnPhone }, index) => (
          <li className="step" key={title}>
            <div className="step__copy">
              <span className="step__number" aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="step__details">
                {details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
            <div className={`step__screen${isScreenHiddenOnPhone ? ' hide-on-phone' : ''}`}>{screen}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
