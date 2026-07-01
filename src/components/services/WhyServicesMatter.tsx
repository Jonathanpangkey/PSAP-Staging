const matters = [
  {
    kicker: 'A',
    title: 'Specialised Expertise',
    description:
      'Each discipline is led by people with established Marine and Oil & Gas engineering experience.',
  },
  {
    kicker: 'B',
    title: 'Equipment Capability',
    description:
      'A working fleet kept ready for mobilisation, supporting consistent project execution across disciplines.',
  },
  {
    kicker: 'C',
    title: 'Reliable Delivery',
    description: 'Schedules respect operational windows. We commit to what we can hold to.',
  },
]

export default function WhyServicesMatter() {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Why Our Services Matter</div>
        <h2 className="display md">
          Why Our Services<br />Matter
        </h2>
        <p className="lead sec-lead">
          Three commitments that shape how we approach every project.
        </p>
        <div className="pillars">
          {matters.map((item) => (
            <div className="pillar" key={item.kicker}>
              <div className="kicker">{item.kicker}</div>
              <h4>{item.title}</h4>
              <p className="pillar-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}