import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactContent from '@/components/contact/ContactContent'

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