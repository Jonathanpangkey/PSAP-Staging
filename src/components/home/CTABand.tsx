import Link from 'next/link'

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Get In Touch</div>
          <h2 className="display md light">
            Ready to move<br />your project <em>forward</em>?
          </h2>
          <p className="lead light sec-lead">
            Contact our team today to scope your blasting, scaffolding, manpower, or HVAC
            requirement and receive a customised quote.
          </p>
        </div>
        <div className="cta-btn-group">
          <Link className="btn btn-accent" href="/contact">
            Get In Touch <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost-light" href="#">
            Download Profile
          </Link>
        </div>
      </div>
    </section>
  )
}