import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import CoreServices from '@/components/home/CoreServices'
import WhyPSA from '@/components/home/WhyPSA'
import Achievements from '@/components/home/Achievements'
import RecentProjects from '@/components/home/RecentProjects'
import Clients from '@/components/home/Clients'
import CTABand from '@/components/home/CTABand'

export default function HomePage() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <CoreServices />
        <WhyPSA />
        <Achievements />
        <RecentProjects />
        <Clients />
        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
