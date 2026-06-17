import { fetchContactInfo } from '@/lib/queries/contact-info'
import { getWhatsAppLink } from '@/lib/utils'

export default async function ProjectsCTA() {
  const contactInfo = await fetchContactInfo()
  const waUrl = getWhatsAppLink(contactInfo.whatsapp)

  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Interested in Working With Us?</div>
          <h2 className="display md light">
            Interested in <em>working</em><br />with us?
          </h2>
          <p className="lead light sec-lead">
            Let's discuss how PSA can support your next Marine Oil and Gas project.
          </p>
        </div>
        <a
          className="btn btn-accent"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}