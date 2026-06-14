import { Certification } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface CertificationsProps {
  certifications: Certification[]
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="sec why">
      <div className="container">
        <div className="eyebrow">Certification and Awards</div>
        <h2 className="display md">
          Certification <em>and Awards</em>
        </h2>
        <p className="lead sec-lead">
          Quality Management Systems and operational certifications supporting our marine
          engineering work.
        </p>
        <div className="cert-list">
          {certifications.map((cert) => (
            <article className="cert-list-card" key={cert.id || cert.title}>
              <div className="photo" style={{ position: 'relative' }}>
                {cert.image && (
                  <PayloadImage
                    image={cert.image}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={cert.title}
                  />
                )}
                <span className="tag">Certificate</span>
                {!cert.image && <span className="arrowmark">image →</span>}
                <span className="note">{cert.title}</span>
              </div>
              <div className="body">
                <div className="meta">Issued</div>
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>
              </div>
            </article>
          ))}

          {/* CMS helper slot shown if there is only 1 certification */}
          {certifications.length <= 1 && (
            <article className="cert-list-card">
              <div className="photo photo--placeholder-empty">
                <span className="tag">Image · Add Certificate</span>
                <span className="arrowmark">+ add</span>
                <span className="note">CMS · Certifications &amp; Awards</span>
              </div>
              <div className="body">
                <div className="meta">CMS · Empty Slot</div>
                <h4>Future Certificate or Award</h4>
                <p>
                  Add new certifications or awards as a list of cards via the CMS — image, title,
                  and description per entry.
                </p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}