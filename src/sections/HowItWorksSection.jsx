import { useEffect, useRef, useState } from 'react'
import { Chevron } from '../components/AppElements.jsx'
import { useLandingActions } from '../context/LandingActionsContext.jsx'
import { howItWorksSteps } from '../howItWorksSteps.jsx'

const STEP_COUNT = howItWorksSteps.length
const FULLY_OPEN_STRETCH = 0.2
const CHANGE_STRETCH = 0.6
const GLIDE_DURATION_MS = 420
// A picture shows only once its step is mostly open, so two pictures never stack half-visible.
const PICTURE_FADE_START = 0.4

function clamp(value, smallest, largest) {
  return Math.min(Math.max(value, smallest), largest)
}

// How open a step is (0 to 1) for how far the reader has scrolled through the pinned list.
function findOpenness(stepIndex, stepsPassed) {
  const centre = stepIndex + 0.5
  if (stepIndex === 0 && stepsPassed < centre) return 1
  if (stepIndex === STEP_COUNT - 1 && stepsPassed > centre) return 1
  const distance = Math.abs(stepsPassed - centre)
  return clamp(1 - (distance - FULLY_OPEN_STRETCH) / CHANGE_STRETCH, 0, 1)
}

export default function HowItWorksSection() {
  const { openStepExplanation } = useLandingActions()
  const [openStepIndex, setOpenStepIndex] = useState(0)
  const trackRef = useRef(null)
  const listRef = useRef(null)
  const picturesRef = useRef(null)
  const stepRefs = useRef([])
  const bodyRefs = useRef([])
  const insideRefs = useRef([])
  const pictureRefs = useRef([])
  const followScrollRef = useRef(() => {})
  const glideTimerRef = useRef(0)

  useEffect(() => {
    let isFramePending = false

    function followScroll() {
      const track = trackRef.current
      if (!track) return
      const scrollableDistance = track.offsetHeight - window.innerHeight
      const progress = scrollableDistance > 0 ? clamp(-track.getBoundingClientRect().top / scrollableDistance, 0, 1) : 0
      const stepsPassed = progress * STEP_COUNT
      const insideHeights = insideRefs.current.map((inside) => inside.offsetHeight)
      let mostOpenIndex = 0
      let largestOpenness = -1
      howItWorksSteps.forEach((_, index) => {
        const openness = findOpenness(index, stepsPassed)
        stepRefs.current[index].style.setProperty('--open', openness.toFixed(3))
        bodyRefs.current[index].style.height = `${Math.round(insideHeights[index] * openness)}px`
        pictureRefs.current[index].style.setProperty('--open', clamp((openness - PICTURE_FADE_START) / (1 - PICTURE_FADE_START), 0, 1).toFixed(3))
        pictureRefs.current[index].style.setProperty('--shift', `${((index + 0.5 - stepsPassed) * 60).toFixed(1)}px`)
        if (openness > largestOpenness) {
          largestOpenness = openness
          mostOpenIndex = index
        }
      })
      setOpenStepIndex(mostOpenIndex)
    }

    function followScrollOnNextFrame() {
      if (isFramePending) return
      isFramePending = true
      requestAnimationFrame(() => {
        isFramePending = false
        followScroll()
      })
    }

    followScrollRef.current = followScroll
    window.addEventListener('scroll', followScrollOnNextFrame, { passive: true })
    window.addEventListener('resize', followScrollOnNextFrame)
    followScroll()
    return () => {
      window.removeEventListener('scroll', followScrollOnNextFrame)
      window.removeEventListener('resize', followScrollOnNextFrame)
      clearTimeout(glideTimerRef.current)
    }
  }, [])

  function showStep(stepIndex) {
    const track = trackRef.current
    const scrollableDistance = track.offsetHeight - window.innerHeight
    const trackTop = track.getBoundingClientRect().top + window.scrollY
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      listRef.current.classList.add('is-gliding')
      picturesRef.current.classList.add('is-gliding')
      clearTimeout(glideTimerRef.current)
      glideTimerRef.current = setTimeout(() => {
        listRef.current?.classList.remove('is-gliding')
        picturesRef.current?.classList.remove('is-gliding')
      }, GLIDE_DURATION_MS)
    }
    window.scrollTo({ top: trackTop + ((stepIndex + 0.5) / STEP_COUNT) * scrollableDistance, behavior: 'instant' })
    followScrollRef.current()
  }

  return (
    <section className="how" aria-labelledby="how-title">
      <div className="page-width how__head">
        <h2 className="section-title" id="how-title">Kako radi.</h2>
        <p className="lead">Pet koraka jedne porudžbine. Skrolujte ili kliknite korak.</p>
      </div>
      <div className="how__track" ref={trackRef}>
        <div className="how__stage">
          <div className="page-width how__grid">
            <ol className="how__steps" ref={listRef}>
              {howItWorksSteps.map((step, index) => {
                const isOpen = index === openStepIndex
                const { Picture } = step
                return (
                  <li key={step.title} className={`how-step${isOpen ? ' is-open' : ''}`} ref={(element) => { stepRefs.current[index] = element }}>
                    <button className="how-step__top" type="button" aria-expanded={isOpen} aria-controls={`korak-${index + 1}`} onClick={() => showStep(index)}>
                      <span className="how-step__number">{index + 1}</span>
                      <span>
                        <span className="how-step__title">{step.title}</span>
                        <span className="how-step__line">{step.line}</span>
                      </span>
                    </button>
                    <div className="how-step__body" id={`korak-${index + 1}`} ref={(element) => { bodyRefs.current[index] = element }}>
                      <div className="how-step__inside" ref={(element) => { insideRefs.current[index] = element }}>
                        <span className="how-step__line-open">{step.line}</span>
                        <Picture />
                        <button className="button button--tonal how__more" type="button" tabIndex={isOpen ? 0 : -1} onClick={() => openStepExplanation(index)}>
                          Pogledajte kako <Chevron />
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
            <div className="how__pictures" ref={picturesRef}>
              {howItWorksSteps.map((step, index) => {
                const isShown = index === openStepIndex
                const { Picture } = step
                return (
                  <div key={step.title} className={`how-picture${isShown ? ' is-shown' : ''}`} aria-hidden={!isShown} ref={(element) => { pictureRefs.current[index] = element }}>
                    <Picture />
                    <button className="button button--tonal how__more" type="button" tabIndex={isShown ? 0 : -1} onClick={() => openStepExplanation(index)}>
                      Pogledajte kako <Chevron />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
