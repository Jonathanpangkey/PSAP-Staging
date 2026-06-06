import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <div className="site-footer-plate">
            <Image src="/assets/psa-logo.png" alt="PSA" width={48} height={48} />
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
            <li>+62 811-2111-1681</li>
            <li>info@perintissaranaastra.com</li>
            <li>Batam, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© 2026 PT Perintis Sarana Astra. All rights reserved.</span>
        <span>Designed by Bluebridge</span>
      </div>
    </footer>
  )
}
