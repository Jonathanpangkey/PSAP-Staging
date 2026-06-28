import Image from 'next/image'
import Link from 'next/link'
import { fetchContactInfo } from '@/lib/queries/contact-info'
import { getWhatsAppLink } from '@/lib/utils'

export default async function Footer() {
  const contactInfo = await fetchContactInfo()

  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <div className="site-footer-plate">
            <Image src="/assets/psa-logo.png" alt="PSA" width={57} height={40} />
          </div>
          <div className="tag">
            PT Perintis Sarana Astra — Marine Oil and Gas contractor, based in Batam, Indonesia.
          </div>
        </div>
        <div>
          <h5>Menu</h5>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>
              <a
                href={getWhatsAppLink(contactInfo.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.emailInfo}`}>{contactInfo.emailInfo}</a>
            </li>
            <li>Batam, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© 2026 PT Perintis Sarana Astra. All rights reserved.</span>
      </div>
    </footer>
  )
}

