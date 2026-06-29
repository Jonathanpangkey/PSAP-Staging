import { fetchContactInfo } from '@/lib/queries/contact-info'
import { getWhatsAppLink } from '@/lib/utils'

export default async function CTABand() {
  const contactInfo = await fetchContactInfo()
  const waUrl = getWhatsAppLink(contactInfo.whatsapp)
  const pdfUrl =
    contactInfo.companyProfilePdf && typeof contactInfo.companyProfilePdf === 'object'
      ? contactInfo.companyProfilePdf.url
      : null

  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Get In Touch</div>
          <h2 className="display md light">
            Ready to move<br />your project <em>forward</em>?
          </h2>
          <p className="lead light sec-lead">
            Contact our team today to scope your blasting, scaffolding, manpower, or HVAC
            requirement and receive a customised quote.
          </p>
        </div>
        <div className="cta-btn-group">
          <a
            className="btn btn-accent"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get In Touch <span className="arrow">→</span>
          </a>
          {pdfUrl ? (
            <a
              className="btn btn-ghost-light"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Profile
            </a>
          ) : (
            <a
              className="btn btn-ghost-light"
              href="#"
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
              title="Company Profile is not available yet"
            >
              Download Profile
            </a>
          )}
        </div>
      </div>
    </section>
  )
}