import Link from 'next/link'

const services = [
  {
    tag: 'Image · Service 01',
    note: 'Hull blasting underway, FPSO refit',
    title: 'Blasting & Painting',
    description:
      'Surface preparation and protective coating for marine assets, with documented inspection at each stage.',
  },
  {
    tag: 'Image · Service 02',
    note: 'PSA crew on-shift, platform',
    title: 'Manpower Supply',
    description:
      'Skilled marine manpower across welding, fitting, rigging, painting, and scaffolding — mobilised from our Batam pool.',
  },
  {
    tag: 'Image · Service 03',
    note: 'Scaffold erection, deck-leg interface',
    title: 'Scaffolding',
    description:
      'Scaffolding design, erection, and dismantling for marine engineering work — sized to project scope and access conditions.',
  },
]

export default function CoreServices() {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Our Core Services</div>
        <h2 className="display md">Our Core Services</h2>
        <p className="lead sec-lead">
          Five disciplines, one accountable engineering team — sized to scope, on the schedule your
          project needs.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="photo">
                <span className="tag">{service.tag}</span>
                <span className="arrowmark">image →</span>
                <span className="note">{service.note}</span>
              </div>
              <div className="body">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link className="btn-link" href="/services">
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="pager">
          <span className="arrow">‹</span>
          <span className="num active">1</span>
          <span className="num">2</span>
          <span className="num">3</span>
          <span className="arrow">›</span>
        </div>
      </div>
    </section>
  )
}