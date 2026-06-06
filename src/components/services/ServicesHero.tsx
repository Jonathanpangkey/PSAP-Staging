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
          <div className="eyebrow">Our Services</div>
          <h1 className="display md">Our Services</h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Five specialised disciplines to support your Marine Oil and Gas operations —
            under one accountable engineering team.
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