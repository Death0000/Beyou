import { Nav } from '../components/Nav'
import HeroSection from '../components/HeroSection'
import WhySection from '../components/WhySection'
import AISection from '../components/AISection'
import BusinessSection from '../components/BusinessSection'
import MoneySection from '../components/MoneySection'
import PlatformSection from '../components/PlatformSection'
import ShowcaseSection from '../components/ShowcaseSection'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../lib/useSmoothScroll'

export default function LandingPage() {
  useSmoothScroll()

  return (
    <>
      <Nav />
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
        <main id="smooth-content" style={{ backgroundColor: '#050505' }}>
          <HeroSection />
          <WhySection />
          <AISection />
          <BusinessSection />
          <MoneySection />
          <PlatformSection />
          <ShowcaseSection />
          <Footer />
        </main>
      </div>
    </>
  )
}
