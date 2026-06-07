import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import WhyServicesMatter from '@/components/services/WhyServicesMatter'
import ServicesCTA from '@/components/services/ServicesCTA'

export const metadata: Metadata = {
  title: 'Our Services | PT Perintis Sarana Astra',
  description:
    'Five marine engineering disciplines — blasting & painting, manpower supply, scaffolding, equipment supply, and HVAC / mechanical-electrical — under one accountable team.',
}

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