import Dialog from './Dialog.jsx'
import { Chevron } from './AppElements.jsx'
import { howItWorksSteps } from '../howItWorksSteps.jsx'

export default function StepExplanation({ stepIndex, onShowStep, onClose }) {
  const step = howItWorksSteps[stepIndex]
  const nextStep = howItWorksSteps[stepIndex + 1]
  const { Picture } = step
  return (
    <Dialog key={stepIndex} labelledBy="explanation-title" onClose={onClose} className="dialog--explanation">
      <div className="dialog__head">
        <h2 id="explanation-title">{step.title}</h2>
        <button className="dialog__close" type="button" aria-label="Zatvori" onClick={onClose}>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" /></svg>
        </button>
      </div>
      <ol className="explanation__steps">
        {step.explanation.map((line, index) => <li key={index}>{line}</li>)}
      </ol>
      <Picture />
      {nextStep ? (
        <button className="button button--primary button--large" type="button" onClick={() => onShowStep(stepIndex + 1)}>
          Sledeće: {nextStep.title.toLowerCase()} <Chevron />
        </button>
      ) : (
        <button className="button button--tonal button--large" type="button" onClick={onClose}>Zatvori</button>
      )}
    </Dialog>
  )
}
