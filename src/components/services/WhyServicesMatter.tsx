const matters = [
  {
    ico: 'A',
    title: 'Specialised Expertise',
    description:
      'Each discipline is led by people with established marine engineering experience — depth over breadth.',
  },
  {
    ico: 'B',
    title: 'Equipment Capability',
    description:
      'A working fleet kept ready for mobilisation, supporting consistent project execution across disciplines.',
  },
  {
    ico: 'C',
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
        <div className="matter-grid">
          {matters.map((item) => (
            <div className="matter-card" key={item.ico}>
              <div className="ico">{item.ico}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}