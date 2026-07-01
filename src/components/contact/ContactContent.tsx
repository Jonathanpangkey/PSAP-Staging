import { fetchContactInfo } from '@/lib/queries/contact-info'
import { fetchServices } from '@/lib/queries/services'
import ContactForm from './ContactForm'
import { getWhatsAppLink } from '@/lib/utils'

export default async function ContactContent() {
  const [contactInfo, services] = await Promise.all([
    fetchContactInfo(),
    fetchServices(),
  ])

  return (
    <section className="sec">
      <div className="container">
        <div className="contact-grid">
          {/* Left — contact info */}
          <div>
            <h3 className="display sm contact-heading">PT Perintis Sarana Astra</h3>
            <p className="lead contact-lead">
              Marine and Oil &amp; Gas contractor serving operators.
            </p>

            {/* Email */}
            <div className="contact-card contact-card--mb">
              <h4>Email</h4>
              <div className="row">
                <div className="ico">@</div>
                <div>
                   <div className="label">
                    <a href={`mailto:${contactInfo.emailInfo}`}>{contactInfo.emailInfo}</a>
                  </div>
                  <div className="sub">{contactInfo.emailInfoSubdesc}</div>
                </div>
              </div>
              <div className="row">
                <div className="ico">@</div>
                <div>
                  <div className="label">
                    <a href={`mailto:${contactInfo.emailTender}`}>{contactInfo.emailTender}</a>
                  </div>
                  <div className="sub">{contactInfo.emailTenderSubdesc}</div>
                </div>
              </div>
            </div>

            {/* WhatsApp · Phone */}
            <div className="contact-card contact-card--mb">
              <h4>WhatsApp · Phone</h4>
              <div className="row">
                <div className="ico">☎</div>
                <div>
                  <div className="label">
                    <a
                      href={getWhatsAppLink(contactInfo.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                  <div className="sub">{contactInfo.whatsappSubdesc}</div>
                </div>
              </div>
              <div className="row">
                <div className="ico">☎</div>
                <div>
                  <div className="label">
                    <a href={`tel:${contactInfo.phoneOffice.replace(/\s+/g, '')}`}>
                      {contactInfo.phoneOffice}
                    </a>
                  </div>
                  <div className="sub">{contactInfo.phoneOfficeSubdesc}</div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="contact-card">
              <h4>Office Location</h4>
              <div className="row">
                <div className="ico">⌖</div>
                <div>
                  <div className="label">
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PT Perintis Sarana Astra HQ
                    </a>
                  </div>
                  <div className="sub" style={{ whiteSpace: 'pre-line' }}>
                    {contactInfo.address}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ico">⤤</div>
                <div>
                  <div className="label">
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                  <div className="sub">{contactInfo.addressSubdesc}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm services={services} />
          </div>
        </div>
      </div>
    </section>
  )
}