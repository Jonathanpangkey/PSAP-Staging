import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactContent from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us | PT Perintis Sarana Astra',
  description:
    'Get in touch with PSA for quotes, scope discussions, or project mobilisation requests. Based in Batam, Indonesia, serving Marine Oil and Gas operators across the Asia-Pacific.',
}

export default function ContactPage() {
  return (
    <div className="site">
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </div>
  )
}