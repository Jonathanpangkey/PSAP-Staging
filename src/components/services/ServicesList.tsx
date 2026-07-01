'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Service } from '@/payload-types'
import ServiceCarousel from '../ui/ServiceCarousel'

interface ServicesListProps {
  services: Service[]
}

export default function ServicesList({ services }: ServicesListProps) {
  const [expandedIds, setExpandedIds] = useState<Record<string | number, boolean>>({})

  return (
    <section className="sec svc-section">
      <div className="svc-grid">
        {services.map((svc, index) => {
          const numStr = String(index + 1).padStart(2, '0')
          const isExpanded = !!expandedIds[svc.id]
          const showToggle = svc.description && svc.description.length > 180

          return (
            <div className="svc" key={svc.id || svc.title}>
              <div>
                <div className="svc-num">{numStr}</div>
                <h3>{svc.title}</h3>
                <p className={isExpanded ? '' : 'clamp'}>{svc.description}</p>
                {showToggle && (
                  <button
                    type="button"
                    onClick={() => setExpandedIds((prev) => ({ ...prev, [svc.id]: !isExpanded }))}
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
              <div className="photo" style={{ position: 'relative' }}>
                <ServiceCarousel photos={svc.photos} alt={svc.title} />
                <span className="tag">Service · {numStr}</span>
                <span className="note">{svc.title}</span>
              </div>
            </div>
          )
        })}

        {/* Custom scope card */}
        <div className="svc-custom">
          <div>
            <div className="eyebrow">Need Something Else?</div>
            <h3>Custom Marine and Oil &amp; Gas Engineering Scopes</h3>
            <p className="svc-custom-desc">
              We take on scopes outside this list, tailored to project requirements.
            </p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            Request Scope <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}