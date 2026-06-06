'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="site-header">
      <Link className="site-logo" href="/">
        <Image src="/assets/psa-logo.png" alt="PSA" width={48} height={48} />
      </Link>
      <nav className="site-nav">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="site-cta" href="/contact">
        Get a Quote <span>→</span>
      </Link>
    </header>
  )
}
