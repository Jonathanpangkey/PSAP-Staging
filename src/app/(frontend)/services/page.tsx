import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import WhyServicesMatter from '@/components/services/WhyServicesMatter'
import { ServicesCTA } from '@/components/services/ServicesCTA'

export default function ServicesPage() {
  return (
    <div className="site">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <WhyServicesMatter />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}