'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Service } from '@/payload-types'
import ServiceCarousel from '../ui/ServiceCarousel'
import ScrollReveal from '../ui/ScrollReveal'

interface CoreServicesProps {
  services: Service[]
}

export default function CoreServices({ services }: CoreServicesProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(services.length / itemsPerPage)

  const displayServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section className="sec">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">Our Core Services</div>
          <h2 className="display md">Our Core Services</h2>
          <p className="lead sec-lead">
            One accountable engineering team, sized to scope. Coordinated across every discipline your project needs.
          </p>
        </ScrollReveal>

        <div className="service-grid">
          {displayServices.map((service, index) => {
            return (
              <ScrollReveal key={service.id || service.title} delay={index * 100}>
                <article className="service-card">
                  <div className="photo" style={{ position: 'relative' }}>
                    <ServiceCarousel photos={service.photos} alt={service.title} />
                    <span className="tag">Service · 0{(currentPage - 1) * itemsPerPage + index + 1}</span>
                    <span className="note">{service.title}</span>
                  </div>
                  <div className="body">
                    <h4>{service.title}</h4>
                    <p>
                      {service.description && service.description.length > 140
                        ? service.description.slice(0, 140).trim() + '...'
                        : service.description}
                    </p>
                    <Link className="btn-link" href="/services">
                      Learn More
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        {totalPages > 1 && (
          <div className="pager">
            <button
              type="button"
              className="arrow"
              onClick={handlePrev}
              disabled={currentPage === 1}
              style={{
                opacity: currentPage === 1 ? 0.4 : 1,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                background: 'none',
                border: '1px solid var(--color-border-strong)',
                font: 'inherit',
              }}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`num ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
                style={{
                  cursor: 'pointer',
                  background: currentPage === page ? 'var(--psa-purple-600)' : 'none',
                  border: 'none',
                  font: 'inherit',
                  color: currentPage === page ? '#fff' : 'inherit',
                }}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="arrow"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              style={{
                opacity: currentPage === totalPages ? 0.4 : 1,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                background: 'none',
                border: '1px solid var(--color-border-strong)',
                font: 'inherit',
              }}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  )
}