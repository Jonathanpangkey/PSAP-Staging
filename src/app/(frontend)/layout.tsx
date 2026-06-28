import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './styles.css'

export const dynamic = 'force-dynamic'

import { fetchContactInfo } from '@/lib/queries/contact-info'
import { getWhatsAppLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'PT Perintis Sarana Astra',
  description: 'Marine Oil and Gas contractor, based in Batam, Indonesia.',
  icons: {
    icon: '/assets/favicon-square-white.png',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const contactInfo = await fetchContactInfo()
  const waUrl = getWhatsAppLink(contactInfo.whatsapp)

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700;1,800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site">
          <Header />
          {children}
          <Footer />

          {/* Floating WhatsApp button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="currentColor"
              style={{ flexShrink: 0 }}
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.672 4.8 1.845 6.797L2 30l7.42-1.818A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 01-5.88-1.607l-.422-.25-4.403 1.079 1.112-4.28-.276-.44A11.554 11.554 0 014.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.33-8.674c-.347-.174-2.055-1.013-2.374-1.13-.319-.115-.55-.172-.782.174-.232.347-.9 1.13-1.102 1.362-.203.23-.405.26-.752.086-.347-.174-1.464-.54-2.788-1.72-1.03-.92-1.726-2.055-1.928-2.402-.202-.347-.021-.534.152-.707.156-.155.347-.405.52-.608.174-.202.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.782-1.884-1.072-2.58-.282-.678-.569-.586-.782-.597l-.666-.011c-.232 0-.608.087-.927.434-.319.347-1.217 1.189-1.217 2.899s1.246 3.363 1.42 3.595c.174.231 2.452 3.742 5.942 5.247.83.358 1.479.572 1.984.733.833.265 1.592.228 2.19.138.668-.1 2.055-.84 2.346-1.651.29-.811.29-1.507.203-1.651-.086-.145-.318-.232-.666-.405z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}
