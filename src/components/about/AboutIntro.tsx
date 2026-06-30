import Link from 'next/link'
import Image from 'next/image'

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
            <p className="lead sec-lead">
              PT Perintis Sarana Astra specialises in marine contractor work for the Marine Oil
              and Gas industry. We deliver blasting &amp; painting, manpower supply, scaffolding,
              equipment, and HVAC / mechanical-electrical work.
            </p>
            <p className="lead sec-lead--sm">
              Founded in Batam, we have established ourselves as a Marine Oil and Gas contractor,
              supported by ISO 9001:2015 certified processes.
            </p>
            <p className="lead sec-lead--sm">
              We work in five connected disciplines under one accountable project team —
              coordinated from our Batam base.
            </p>
            <div className="sec-cta">
              <Link className="btn btn-primary" href="/services">
                See Our Services <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="photo" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/assets/media/about/about.webp"
              fill
              style={{ objectFit: 'cover' }}
              alt="Yard floor, Batam HQ"
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <span className="tag">About Us</span>
            <span className="note">Yard floor, Batam HQ</span>
          </div>
        </div>
      </div>
    </section>
  )
}