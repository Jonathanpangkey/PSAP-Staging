import { fetchContactInfo } from '@/lib/queries/contact-info'
import { getWhatsAppLink } from '@/lib/utils'

export default async function AboutCTA() {
  const contactInfo = await fetchContactInfo()
  const waUrl = getWhatsAppLink(contactInfo.whatsapp)

  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Work With Us</div>
          <h2 className="display md light">
            Ready to discuss<br />your next <em>project</em>?
          </h2>
          <p className="lead light sec-lead">
            Talk to our team about your next Marine Oil and Gas scope.
          </p>
        </div>
        <a
          className="btn btn-accent"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Our Team <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}