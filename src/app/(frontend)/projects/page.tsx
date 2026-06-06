import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsList from '@/components/projects/ProjectsList'
import ProjectsCTA from '@/components/projects/ProjectsCTA'

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