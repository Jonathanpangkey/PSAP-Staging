'use client'

import { useState } from 'react'
import { Project } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface ProjectsListProps {
  projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [expandedIds, setExpandedIds] = useState<Record<string | number, boolean>>({})

  return (
    <section className="sec">
      <div className="container">
        <div className="proj-grid">
          {projects.map((project) => {
            const firstPhoto = project.photos?.[0]?.photo
            const isExpanded = !!expandedIds[project.id]
            const showToggle = project.description && project.description.length > 180

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
                  {!firstPhoto && <span className="arrowmark">image →</span>}
                </div>
                <div className="body">
                  <h4>{project.title}</h4>
                  <p className={isExpanded ? '' : 'clamp'}>{project.description}</p>
                  {showToggle && (
                    <button
                      type="button"
                      onClick={() => setExpandedIds((prev) => ({ ...prev, [project.id]: !isExpanded }))}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '8px 0 0',
                        color: 'var(--psa-purple-600)',
                        font: '600 12px/1 var(--font-sans)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
                    </button>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}