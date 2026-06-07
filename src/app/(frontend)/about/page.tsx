import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import AboutIntro from '@/components/about/AboutIntro'
import AboutAchievements from '@/components/about/AboutAchievements'
import WhyOperators from '@/components/about/WhyOperators'
import Certifications from '@/components/about/Certifications'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About Us | PT Perintis Sarana Astra',
  description:
    'PT Perintis Sarana Astra is a Marine Oil and Gas contractor based in Batam, Indonesia — ISO 9001:2015 certified, with 20+ years of experience across the Asia-Pacific.',
}

export default function AboutPage() {
  return (
    <div className="site">
      <Header />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutAchievements />
        <WhyOperators />
        <Certifications />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}