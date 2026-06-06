import Link from 'next/link'

const pillars = [
  {
    title: 'Long-Standing Experience',
    description:
      'Years of work across marine engineering disciplines, from yard floor to platform deck.',
  },
  {
    title: 'One Team, Five Disciplines',
    description:
      'Blasting, manpower, scaffolding, equipment, HVAC — coordinated under a single accountable project team.',
  },
  {
    title: 'Asia-Pacific Reach',
    description:
      'A Batam base serving operators across Indonesia, Malaysia, Singapore, and Australia.',
  },
]

export default function WhyPSA() {
  return (
    <section className="sec why">
      <div className="container">
        <div className="why-grid">
          <div>
            <div className="eyebrow">Why Choose PSA?</div>
            <h2 className="display md">
              A partner you
              <br />
              can keep
              <br />
              <em>coming back to</em>.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Three commitments that shape how we work — at every layer of the partnership.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/about">
                About PSA <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="why-list">
            {pillars.map((pillar) => (
              <div className="why-item" key={pillar.title}>
                <h5>{pillar.title}</h5>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
