import Link from 'next/link'
import { Project } from '@/payload-types'
import ServiceCarousel from '../ui/ServiceCarousel'
import ScrollReveal from '../ui/ScrollReveal'

interface RecentProjectsProps {
  projects: Project[]
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
  const displayProjects = projects.slice(0, 3)

  return (
    <section className="sec">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">Recent Projects</div>
          <h2 className="display md">Recent Projects</h2>
          <p className="lead sec-lead">
            A snapshot of recent work delivered across Marine and Oil &amp; Gas industry.
          </p>
        </ScrollReveal>

        <div className="recent-grid">
          {displayProjects.map((project, idx) => {
            return (
              <ScrollReveal key={project.id || project.title} delay={idx * 100}>
                <article className="service-card">
                  <div className="photo" style={{ position: 'relative' }}>
                    <ServiceCarousel photos={project.photos} alt={project.title} />
                    <span className="tag">Project</span>
                    <span className="note">{project.title}</span>
                  </div>
                  <div className="body">
                    <h4>{project.title}</h4>
                    <p>
                      {project.description && project.description.length > 140
                        ? project.description.slice(0, 140).trim() + '...'
                        : project.description}
                    </p>
                    <Link className="btn-link" href="/projects">
                      Learn More
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="sec-view-more">
          <Link className="btn btn-secondary" href="/projects">
            View More Projects <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}


