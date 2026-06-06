import Link from 'next/link'

export function ServicesCTA() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Need a Specific Service?</div>
          <h2 className="display md light">
            Need a <em>specific</em><br />service?
          </h2>
          <p className="lead light" style={{ marginTop: 18 }}>
            Contact our team to discuss requirements and receive a customised solution.
          </p>
        </div>
        <Link className="btn btn-accent" href="/contact">
          Get In Touch <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}