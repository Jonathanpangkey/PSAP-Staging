import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Blasting & Painting',
    description:
      'Surface preparation and protective coating for marine assets, with documented inspection at each stage.',
    tag: 'Image · Service 01',
    note: 'Hull blasting, FPSO topsides',
  },
  {
    num: '02',
    title: 'Manpower Supply',
    description:
      'Skilled marine manpower across welding, fitting, rigging, painting, and scaffolding — mobilised from our Batam pool.',
    tag: 'Image · Service 02',
    note: 'Crew shift change, platform',
  },
  {
    num: '03',
    title: 'Scaffolding',
    description:
      'Scaffolding design, erection, and dismantling for marine engineering work — sized to project scope and access conditions.',
    tag: 'Image · Service 03',
    note: 'Scaffold erection, deck-leg interface',
  },
  {
    num: '04',
    title: 'Equipment Supply',
    description:
      'A well-maintained equipment fleet supporting project execution across our service disciplines.',
    tag: 'Image · Service 04',
    note: 'Compressor & blast-pot fleet, yard floor',
  },
  {
    num: '05',
    title: 'HVAC / Mechanical-Electrical',
    description:
      'HVAC retrofit, mechanical-electrical install, and commissioning for accommodation blocks, control rooms, and electrical houses — from drawings through to commissioning.',
    tag: 'Image · Service 05',
    note: 'HVAC ductwork, accommodation block',
  },
]

export default function ServicesList() {
  return (
    <section className="sec" style={{ padding: 0 }}>
      <div className="svc-grid">
        {services.map((svc) => (
          <div className="svc" key={svc.num}>
            <div>
              <div className="svc-num">{svc.num}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </div>
            <div className="photo">
              <span className="tag">{svc.tag}</span>
              <span className="arrowmark">image →</span>
              <span className="note">{svc.note}</span>
            </div>
          </div>
        ))}

        {/* Custom scope card */}
        <div className="svc-custom">
          <div>
            <div className="eyebrow">Need Something Else?</div>
            <h3>Custom Marine Engineering Scopes</h3>
            <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.55 }}>
              We routinely take on bespoke scopes outside this list — fabrication, retrofit
              programmes, and emergency dry-dock support.
            </p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            Request Scope <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}