import Link from 'next/link'
import { Project } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface RecentProjectsProps {
  projects: Project[]
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
  const displayProjects = projects.slice(0, 3)

  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Recent Projects</div>
        <h2 className="display md">Recent Projects</h2>
        <p className="lead sec-lead">
          A snapshot of recent work delivered across the Asia-Pacific Marine Oil and Gas industry.
        </p>

        <div className="recent-grid">
          {displayProjects.map((project) => {
            const firstPhoto = project.photos?.[0]?.photo

            return (
              <article className="service-card" key={project.id || project.title}>
                <div className="photo" style={{ position: 'relative' }}>
                  {firstPhoto && (
                    <PayloadImage
                      image={firstPhoto}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt={project.title}
                    />
                  )}
                  <span className="tag">Project</span>
                  {!firstPhoto && <span className="arrowmark">image →</span>}
                  <span className="note">{project.title}</span>
                </div>
                <div className="body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Link className="btn-link" href="/projects">
                    Learn More
                  </Link>
                </div>
              </article>
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

