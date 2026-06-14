import Link from 'next/link'
import { Service } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface ServicesListProps {
  services: Service[]
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <section className="sec svc-section">
      <div className="svc-grid">
        {services.map((svc, index) => {
          const firstPhoto = svc.photos?.[0]?.photo
          const numStr = String(index + 1).padStart(2, '0')

          return (
            <div className="svc" key={svc.id || svc.title}>
              <div>
                <div className="svc-num">{numStr}</div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </div>
              <div className="photo" style={{ position: 'relative' }}>
                {firstPhoto && (
                  <PayloadImage
                    image={firstPhoto}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={svc.title}
                  />
                )}
                <span className="tag">Service · {numStr}</span>
                {!firstPhoto && <span className="arrowmark">image →</span>}
                <span className="note">{svc.title}</span>
              </div>
            </div>
          )
        })}

        {/* Custom scope card */}
        <div className="svc-custom">
          <div>
            <div className="eyebrow">Need Something Else?</div>
            <h3>Custom Marine Engineering Scopes</h3>
            <p className="svc-custom-desc">
              We routinely take on bespoke scopes outside this list — fabrication, retrofit
              programmes, and emergency dry-dock support.
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