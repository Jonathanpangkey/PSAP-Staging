import Link from 'next/link'

export default function ServicesHero() {
  return (
    <div className="page-head">
      <div className="inner">
        <div>
          <div className="crumbs">
            <span>Home</span>
            <span>Our Services</span>
          </div>
          <h1 className="display md">Our Services</h1>
          <p className="lead sec-lead">
            One accountable engineering team, sized to scope. Coordinated across every discipline your project needs.
          </p>
        </div>
        <div>
          <Link className="btn btn-secondary" href="/contact">
            Request a Scope <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}