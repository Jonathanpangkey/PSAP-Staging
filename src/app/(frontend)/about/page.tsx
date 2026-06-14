import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutIntro from '@/components/about/AboutIntro'
import AboutAchievements from '@/components/about/AboutAchievements'
import WhyOperators from '@/components/about/WhyOperators'
import Certifications from '@/components/about/Certifications'
import AboutCTA from '@/components/about/AboutCTA'

import { fetchCompanyStats } from '@/lib/queries/company-stats'
import { fetchCertifications } from '@/lib/queries/certifications'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Us | PT Perintis Sarana Astra',
  description:
    'PT Perintis Sarana Astra is a Marine Oil and Gas contractor based in Batam, Indonesia — ISO 9001:2015 certified, with 20+ years of experience across the Asia-Pacific.',
}

export default async function AboutPage() {
  const [stats, certifications] = await Promise.all([
    fetchCompanyStats(),
    fetchCertifications(),
  ])

  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutAchievements stats={stats} />
      <WhyOperators />
      <Certifications certifications={certifications} />
      <AboutCTA />
    </main>
  )
}