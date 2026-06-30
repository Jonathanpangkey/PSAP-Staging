import Link from 'next/link'
import ScrollReveal from '../ui/ScrollReveal'

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
    title: 'Strategically Positioned',
    description:
      'Operating from Batam, at the crossroads of Southeast Asia\'s busiest trade corridor.',
  },
]

export default function WhyPSA() {
  return (
    <section className="sec why">
      <div className="container">
        <div className="why-grid">
          <ScrollReveal>
            <div>
              <div className="eyebrow">Why Choose PSA?</div>
              <h2 className="display md">
                A partner you
                <br />
                can keep
                <br />
                <em>coming back to</em>.
              </h2>
              <p className="lead sec-lead">
                Three commitments that shape how we work — at every layer of the partnership.
              </p>
              <div className="sec-cta">
                <Link className="btn btn-primary" href="/about">
                  About PSA <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <div className="why-list">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.title} delay={idx * 150}>
                <div className="why-item">
                  <h5>{pillar.title}</h5>
                  <p>{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

