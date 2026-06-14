import Hero from '@/components/home/Hero'
import CoreServices from '@/components/home/CoreServices'
import WhyPSA from '@/components/home/WhyPSA'
import Achievements from '@/components/home/Achievements'
import RecentProjects from '@/components/home/RecentProjects'
import Clients from '@/components/home/Clients'
import CTABand from '@/components/home/CTABand'

import { fetchCompanyStats } from '@/lib/queries/company-stats'
import { fetchServices } from '@/lib/queries/services'
import { fetchProjects } from '@/lib/queries/projects'
import { fetchClients } from '@/lib/queries/clients'

export const revalidate = 60

export default async function HomePage() {
  const [stats, services, projects, clients] = await Promise.all([
    fetchCompanyStats(),
    fetchServices(),
    fetchProjects(),
    fetchClients(),
  ])

  return (
    <main>
      <Hero stats={stats} />
      <CoreServices services={services} />
      <WhyPSA />
      <Achievements stats={stats} />
      <RecentProjects projects={projects} />
      <Clients clients={clients} />
      <CTABand />
    </main>
  )
}
