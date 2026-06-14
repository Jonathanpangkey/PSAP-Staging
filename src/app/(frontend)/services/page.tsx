import type { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import WhyServicesMatter from '@/components/services/WhyServicesMatter'
import ServicesCTA from '@/components/services/ServicesCTA'

import { fetchServices } from '@/lib/queries/services'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Our Services | PT Perintis Sarana Astra',
  description:
    'Five marine engineering disciplines — blasting & painting, manpower supply, scaffolding, equipment supply, and HVAC / mechanical-electrical — under one accountable team.',
}

export default async function ServicesPage() {
  const services = await fetchServices()

  return (
    <main>
      <ServicesHero />
      <ServicesList services={services} />
      <WhyServicesMatter />
      <ServicesCTA />
    </main>
  )
}