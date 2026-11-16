import { exampleOrder } from '../exampleOrder.js'

export function OrderStatusArc({ progressPercent }) {
  return (
    <svg className="status-arc" viewBox="0 0 16 16" aria-hidden="true">
      <circle className="status-arc__track" cx="8" cy="8" r="5.5" />
      {progressPercent > 0 && (
        <circle className="status-arc__progress" cx="8" cy="8" r="5.5" pathLength="100" strokeDasharray={`${progressPercent} 100`} />
      )}
    </svg>
  )
}

export function ProgressBar({ percent }) {
  return (
    <span className="progress-bar" aria-hidden="true">
      <span className="progress-bar__fill" style={{ width: `${percent}%` }} />
    </span>
  )
}

export function Chevron() {
  return (
    <svg className="chevron" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  )
}

function Row({ label, children, className = '' }) {
  return (
    <span className={`app-element__row ${className}`}>
      <span className="app-element__muted">{label}</span>
      <b>{children}</b>
    </span>
  )
}

export function OrderCard() {
  return (
    <div className="app-element" aria-label="Porudžbina u Sponi">
      <span className="app-element__row">
        <span className="app-element__status"><OrderStatusArc progressPercent={0} />Poručeno</span>
        <span className="app-element__muted">#{exampleOrder.number}</span>
      </span>
      <span className="app-element__title">{exampleOrder.customer}</span>
      <span className="app-element__muted">{exampleOrder.title} · {exampleOrder.articles.length} artikla</span>
      <Row label="Ukupno">{exampleOrder.total} RSD</Row>
      <Row label="Avans">{exampleOrder.deposit} RSD</Row>
      <Row label="Rok">{exampleOrder.deadline}</Row>
    </div>
  )
}

export function PredracunCard() {
  return (
    <div className="app-element" aria-label="Predračun">
      <span className="app-element__row">
        <span className="app-element__firm"><i />Vaša radionica</span>
        <span className="app-element__muted">Br. {exampleOrder.number}</span>
      </span>
      <span className="app-element__title">Predračun</span>
      <span className="app-element__muted app-element__wide-only">{exampleOrder.title}, {exampleOrder.customer}</span>
      {exampleOrder.articles.map((article) => <Row key={article.name} label={article.name}>{article.price}</Row>)}
      <span className="app-element__row app-element__total"><span>Ukupno</span><span>{exampleOrder.total} RSD</span></span>
      <span className="app-element__buttons">
        <span className="app-element__button app-element__button--tonal">Odštampaj</span>
        <span className="app-element__button app-element__button--primary">Preuzmi PDF</span>
      </span>
    </div>
  )
}

export function WorkerTaskCard() {
  return (
    <div className="app-element" aria-label="Posao radnika na telefonu">
      <span className="app-element__title"><span className="app-element__quantity">1×</span> Radna ploča, hrast</span>
      <span className="app-element__muted">{exampleOrder.customer} · rok {exampleOrder.deadlineShort}</span>
      <span className="app-element__status"><OrderStatusArc progressPercent={0} />Čeka izradu</span>
      <span className="app-element__buttons">
        <span className="app-element__button app-element__button--primary">Završi</span>
      </span>
    </div>
  )
}

export function PaymentsCard() {
  return (
    <div className="app-element" aria-label="Uplate na porudžbini">
      <span className="app-element__row">
        <span><span className="app-element__block">Avans</span><span className="app-element__muted app-element__small">{exampleOrder.depositDate}</span></span>
        <b>{exampleOrder.deposit}</b>
      </span>
      <span className="app-element__row">
        <span><span className="app-element__block">Druga rata</span><span className="app-element__muted app-element__small">{exampleOrder.secondPaymentDate}</span></span>
        <b>{exampleOrder.secondPayment}</b>
      </span>
      <ProgressBar percent={exampleOrder.paidPercent} />
      <span className="app-element__row app-element__total"><span>Ostaje</span><span>{exampleOrder.leftToPay} RSD</span></span>
    </div>
  )
}

export function ProfitCard() {
  return (
    <div className="app-element" aria-label="Zarada na porudžbini">
      <span className="app-element__muted">Zarada</span>
      <span className="app-element__profit">{exampleOrder.profit} <small>RSD</small></span>
      <Row label="Prihod">{exampleOrder.total}</Row>
      <Row label="Trošak">{exampleOrder.cost}</Row>
      <Row label="Marža">{exampleOrder.margin}</Row>
    </div>
  )
}
