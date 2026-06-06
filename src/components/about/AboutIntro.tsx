import Link from 'next/link'

export default function AboutIntro() {
  return (
    <section className="sec">
      <div className="container">
        <div className="about-hero">
          <div>
            <div className="eyebrow">About PSA</div>
            <h2 className="display md">
              <em>Trusted</em> in Marine<br />Oil and Gas.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              PT Perintis Sarana Astra specialises in marine contractor work for the Marine Oil
              and Gas industry. We deliver blasting &amp; painting, manpower supply, scaffolding,
              equipment, and HVAC / mechanical-electrical work.
            </p>
            <p className="lead" style={{ marginTop: 14 }}>
              Founded in Batam, we have established ourselves as a Marine Oil and Gas contractor,
              supported by ISO 9001:2015 certified processes.
            </p>
            <p className="lead" style={{ marginTop: 14 }}>
              We work in five connected disciplines under one accountable project team —
              coordinated from our Batam base.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/services">
                See Our Services <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="photo">
            <span className="tag">Image · About</span>
            <span className="arrowmark">image →</span>
            <span className="note">Yard floor, Batam HQ</span>
          </div>
        </div>
      </div>
    </section>
  )
}