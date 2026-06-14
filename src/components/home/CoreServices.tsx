import Link from 'next/link'
import { Service } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface CoreServicesProps {
  services: Service[]
}

export default function CoreServices({ services }: CoreServicesProps) {
  const displayServices = services.slice(0, 3)

  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Our Core Services</div>
        <h2 className="display md">Our Core Services</h2>
        <p className="lead sec-lead">
          Five disciplines, one accountable engineering team — sized to scope, on the schedule your
          project needs.
        </p>

        <div className="service-grid">
          {displayServices.map((service, index) => {
            const firstPhoto = service.photos?.[0]?.photo

            return (
              <article className="service-card" key={service.id || service.title}>
                <div className="photo" style={{ position: 'relative' }}>
                  {firstPhoto && (
                    <PayloadImage
                      image={firstPhoto}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt={service.title}
                    />
                  )}
                  <span className="tag">Service · 0{index + 1}</span>
                  {!firstPhoto && <span className="arrowmark">image →</span>}
                  <span className="note">{service.title}</span>
                </div>
                <div className="body">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Link className="btn-link" href="/services">
                    Learn More
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}