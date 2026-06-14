import { Project } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface ProjectsListProps {
  projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="sec">
      <div className="container">
        <div className="proj-grid">
          {projects.map((project) => {
            const firstPhoto = project.photos?.[0]?.photo

            return (
              <article className="proj-card" key={project.id || project.title}>
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
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}