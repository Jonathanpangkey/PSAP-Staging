import type { Metadata } from 'next'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsList from '@/components/projects/ProjectsList'
import ProjectsCTA from '@/components/projects/ProjectsCTA'

import { fetchProjects } from '@/lib/queries/projects'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Our Projects | PT Perintis Sarana Astra',
  description:
    'A portfolio of marine engineering projects delivered across the Asia-Pacific — FPSO coatings, scaffold frames, HVAC retrofits, and manpower mobilisations.',
}

export default async function ProjectsPage() {
  const projects = await fetchProjects()

  return (
    <main>
      <ProjectsHero />
      <ProjectsList projects={projects} />
      <ProjectsCTA />
    </main>
  )
}