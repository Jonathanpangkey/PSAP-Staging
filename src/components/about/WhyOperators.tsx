const pillars = [
  {
    kicker: 'Team',
    title: 'Working Team',
    description:
      'A team that knows the work, the yard, and the operator — built up through project delivery.',
  },
  {
    kicker: 'Process',
    title: 'Process Consistency',
    description:
      'Quality discipline applied across projects, with documented steps that make every handover predictable.',
  },
  {
    kicker: 'Partnership',
    title: 'Continued Partnership',
    description:
      'Service that doesn\'t end at handover — we stay reachable when operators need us.',
  },
]

export default function WhyOperators() {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Why Operators Choose Us</div>
        <h2 className="display md">
          Why Operators<br />Choose Us
        </h2>
        <p className="lead sec-lead">
          Three pillars that define how we work with our partners.
        </p>
        <div className="pillars">
          {pillars.map((pillar) => (
            <div className="pillar" key={pillar.kicker}>
              <div className="kicker">{pillar.kicker}</div>
              <h4>{pillar.title}</h4>
              <p className="pillar-desc">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}