'use client'

import Link from 'next/link'
import { CompanyStat, HomeAsset } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface HeroProps {
  stats: CompanyStat
  homeAsset: HomeAsset | null
}

export default function Hero({ stats, homeAsset }: HeroProps) {
  return (
    <div className="hero">
      <div className="hero-bg" aria-hidden="true">
        {homeAsset?.heroImage ? (
          <PayloadImage
            image={homeAsset.heroImage}
            fill
            className="hero-bg-img"
            alt="Hero Background"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <video
            src="/assets/home/[PSAP2] Hero Landing Page.mp4"
            autoPlay
            muted
            playsInline
            loop={false}
          />
        )}
      </div>

      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Marine Oil and Gas · Contractor</div>
          <h1 className="display lg">
            Marine Oil and Gas,
            <br />
            <em>Engineered to Last</em>.
          </h1>
          <p className="lead hero-lead">
            PSA delivers blasting &amp; painting, manpower supply, scaffolding, equipment, and
            HVAC / mechanical-electrical work for Marine Oil and Gas operators across the
            Asia-Pacific.
          </p>
          <div className="hero-cta-group">
            <Link className="btn btn-primary" href="/contact">
              Contact Us <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-secondary" href="/services">
              Explore Services <span className="arrow">→</span>
            </Link>
          </div>
          <div className="hero-trust">
            <span>{stats.projectsCompleted}+ Projects Completed</span>
            <span>Batam, Indonesia</span>
            <span>{stats.yearsOfExpertise}+ Years of Expertise</span>
          </div>
        </div>
      </div>
    </div>
  )
}
