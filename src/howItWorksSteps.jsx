import { OrderCard, PaymentsCard, PredracunCard, ProfitCard, WorkerTaskCard } from './components/AppElements.jsx'

export const howItWorksSteps = [
  {
    title: 'Upišete porudžbinu',
    line: 'Kupac, artikli, rok i avans. Za par minuta, i na telefonu.',
    Picture: OrderCard,
    explanation: [
      <><b>Izaberete kupca</b> ili upišete novog.</>,
      <><b>Dodate artikle</b> iz svojih proizvoda, sa količinom i cenom.</>,
      <><b>Upišete rok, avans i napomenu.</b> Porudžbinu odmah vide svi kojima treba.</>,
    ],
  },
  {
    title: 'Pošaljete predračun',
    line: 'Spona ga napravi od porudžbine. Odštampate ga ili pošaljete kupcu kao PDF.',
    Picture: PredracunCard,
    explanation: [
      <><b>Otvorite porudžbinu</b> i izaberete predračun.</>,
      <><b>Spona složi dokument</b> sa podacima Vaše firme, artiklima i cenama.</>,
      <><b>Odštampate ga</b> ili sačuvate kao PDF i pošaljete kupcu. Predračun nije fiskalni račun.</>,
    ],
  },
  {
    title: 'Radnici vide svoj posao',
    line: 'Na telefonu ili tabletu. Vide šta prave i do kada. Cene ne vide.',
    Picture: WorkerTaskCard,
    explanation: [
      <><b>Radnik se prijavi</b> na svom telefonu ili na tabletu u radionici.</>,
      <><b>Vidi samo svoj posao:</b> šta pravi, koliko komada i do kada. Cene i uplate ne vidi.</>,
      <><b>Kad završi, dodirne Završi.</b> Vi to odmah vidite u porudžbini.</>,
    ],
  },
  {
    title: 'Uplate na jednom mestu',
    line: 'Avans, rate i ostatak. Uvek znate ko Vam koliko duguje.',
    Picture: PaymentsCard,
    explanation: [
      <><b>Upišete avans</b> kad ga kupac da. Iznos i datum, to je sve.</>,
      <><b>Svaku sledeću ratu</b> dodate isto tako, gotovinom ili na račun.</>,
      <><b>Spona sama računa</b> koliko je ostalo i pokaže Vam sve porudžbine gde neko duguje.</>,
    ],
  },
  {
    title: 'Vidite zaradu',
    line: 'Na svakoj porudžbini i za ceo mesec.',
    Picture: ProfitCard,
    explanation: [
      <><b>Uz svaki proizvod upišete trošak po komadu.</b> Jednom, ne na svakoj porudžbini.</>,
      <><b>Spona na porudžbini oduzme trošak od cene</b> i pokaže zaradu i maržu.</>,
      <><b>U Statistici vidite zaradu za ceo mesec</b> i na čemu zarađujete najviše. Radnici to ne vide.</>,
    ],
  },
]
