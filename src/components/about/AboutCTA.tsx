import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Work With Us</div>
          <h2 className="display md light">
            Ready to discuss<br />your next <em>project</em>?
          </h2>
          <p className="lead light sec-lead">
            Talk to our team about your next Marine Oil and Gas scope.
          </p>
        </div>
        <Link className="btn btn-accent" href="/contact">
          Contact Our Team <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}