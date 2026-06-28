'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <Link className="site-logo" href="/" onClick={handleLinkClick}>
        <Image src="/assets/psa-logo.png" alt="PSA" width={69} height={48} priority />
      </Link>

      {/* Desktop Navigation */}
      <nav className="site-nav">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="site-header-actions">
        <Link className="site-cta" href="/contact">
          Get a Quote <span>→</span>
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className={`nav-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobile-cta" href="/contact" onClick={handleLinkClick}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
