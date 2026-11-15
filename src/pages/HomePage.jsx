import HeroSection from '../sections/HeroSection.jsx'
import StepsSection from '../sections/StepsSection.jsx'
import PricingSection from '../sections/PricingSection.jsx'
import ClosingSection from '../sections/ClosingSection.jsx'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="page-width page-sections">
        <StepsSection />
        <PricingSection />
        <ClosingSection />
      </div>
    </>
  )
}
