import Link from 'next/link'

export default function ProjectsCTA() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <div className="eyebrow dark">Interested in Working With Us?</div>
          <h2 className="display md light">
            Interested in <em>working</em><br />with us?
          </h2>
          <p className="lead light sec-lead">
            Let's discuss how PSA can support your next Marine Oil and Gas project.
          </p>
        </div>
        <Link className="btn btn-accent" href="/contact">
          Get In Touch <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}