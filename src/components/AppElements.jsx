import { exampleOrder, exampleWorkerTask } from '../exampleOrder.js'

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

export function OrderListCard() {
  return (
    <div className="app-element" aria-label="Porudžbina u listi">
      <span className="app-element__row app-element__status">
        <span className="app-element__inline"><OrderStatusArc progressPercent={0} />Poručeno</span>
        <span className="app-element__muted">#{exampleOrder.number}</span>
      </span>
      <span className="app-element__title">{exampleOrder.customer}</span>
      <span className="app-element__amount">{exampleOrder.total} <small>RSD</small></span>
      <span className="app-element__muted">Rok {exampleOrder.deadline}</span>
    </div>
  )
}

export function WorkerTaskCard() {
  const { name, doneCount, quantity } = exampleWorkerTask
  return (
    <div className="app-element" aria-label="Zadatak radnika">
      <span className="app-element__title"><span className="app-element__quantity">{quantity}×</span> {name}</span>
      <span className="app-element__muted">{exampleOrder.customer}</span>
      <span><b>{doneCount}</b> od {quantity} gotovo</span>
      <ProgressBar percent={(doneCount / quantity) * 100} />
      <span className="app-element__buttons">
        <span className="app-element__button app-element__button--tonal">Sve ({quantity - doneCount})</span>
        <span className="app-element__button app-element__button--primary">Završi 1</span>
      </span>
    </div>
  )
}

export function ProfitCard() {
  return (
    <div className="app-element" aria-label="Zarada i uplate">
      <span className="app-element__muted">Zarada</span>
      <span className="app-element__profit">{exampleOrder.profit} <small>RSD</small></span>
      <ProgressBar percent={exampleOrder.paidPercent} />
      <span className="app-element__row"><span className="app-element__muted">Plaćeno</span><b>{exampleOrder.paid}</b></span>
      <span className="app-element__row"><span className="app-element__muted">Za uplatu</span><b>{exampleOrder.leftToPay}</b></span>
    </div>
  )
}
