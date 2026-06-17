import { fetchContactInfo } from '@/lib/queries/contact-info'
import { getWhatsAppLink } from '@/lib/utils'

export default async function ServicesCTA() {
  const contactInfo = await fetchContactInfo()
  const waUrl = getWhatsAppLink(contactInfo.whatsapp)

  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Need a Specific Service?</div>
          <h2 className="display md light">
            Need a <em>specific</em><br />service?
          </h2>
          <p className="lead light sec-lead">
            Contact our team to discuss requirements and receive a customised solution.
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