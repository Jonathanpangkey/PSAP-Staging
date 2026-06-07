import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsList from '@/components/projects/ProjectsList'
import ProjectsCTA from '@/components/projects/ProjectsCTA'

export const metadata: Metadata = {
  title: 'Our Projects | PT Perintis Sarana Astra',
  description:
    'A portfolio of marine engineering projects delivered across the Asia-Pacific — FPSO coatings, scaffold frames, HVAC retrofits, and manpower mobilisations.',
}

export default function ProjectsPage() {
  return (
    <div className="site">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsList />
        <ProjectsCTA />
      </main>
      <Footer />
    </div>
  )
}