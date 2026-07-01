'use client'

import Link from 'next/link'
import { CompanyStat, HomeAsset } from '@/payload-types'
import PayloadImage from '../ui/PayloadImage'

interface HeroProps {
  stats: CompanyStat
  homeAsset?: HomeAsset | null
}

export default function Hero({ stats, homeAsset }: HeroProps) {
  const hasHeroImage = !!homeAsset?.heroImage

  return (
    <div className="hero">
      <div className="hero-bg" aria-hidden="true">
        {hasHeroImage ? (
          <PayloadImage
            image={homeAsset.heroImage}
            fill
            className="hero-bg-img"
            style={{ objectFit: 'cover' }}
            alt="Hero Background"
          />
        ) : (
          <video
            src="/assets/media/home/[PSAP2] Hero Landing Page.mp4"
            autoPlay
            muted
            playsInline
            loop={false}
          />
        )}
      </div>

      <div className="hero-grid">
        <div>
          <div className="eyebrow animate-fade-in-up">Marine, Oil and Gas · Contractor</div>
          <h1 className="display lg animate-fade-in-up animation-delay-100">
            Marine, Oil &amp; Gas,
            <br />
            <em>Engineered to Last</em>.
          </h1>
          <p className="lead hero-lead animate-fade-in-up animation-delay-200">
            PSA delivers variety of engineering supports for Marine and Oil &amp; Gas industry.
          </p>
          <div className="hero-cta-group animate-fade-in-up animation-delay-300">
            <Link className="btn btn-primary" href="/contact">
              Contact Us <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-secondary" href="/services">
              Explore Services <span className="arrow">→</span>
            </Link>
          </div>
          <div className="hero-trust animate-fade-in-up animation-delay-400">
            <span>{stats.projectsCompleted}+ Projects Completed</span>
            <span>Batam, Indonesia</span>
            <span>{stats.yearsOfExpertise}+ Years of Expertise</span>
          </div>
        </div>
      </div>
    </div>
  )
}
