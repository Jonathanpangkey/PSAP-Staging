import Link from 'next/link'

const projects = [
  {
    tag: 'Image · Project',
    note: 'FPSO topsides coating',
    title: 'Ceres FPSO — Topsides Coating',
    description: 'Topsides surface preparation and protective coating for FPSO Ceres.',
  },
  {
    tag: 'Image · Project',
    note: 'Yard scaffolding mobilisation',
    title: 'Karimun Yard — Scaffolding Frame',
    description:
      'Engineered scaffold frame for FSO conversion, sized and erected to project scope.',
  },
  {
    tag: 'Image · Project',
    note: 'HVAC retrofit, accommodation block',
    title: 'Accommodation Block — HVAC Retrofit',
    description:
      'Mechanical-electrical retrofit of accommodation HVAC system, with commissioning to operator sign-off.',
  },
]

export default function RecentProjects() {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Recent Projects</div>
        <h2 className="display md">Recent Projects</h2>
        <p className="lead" style={{ marginTop: 18 }}>
          A snapshot of recent work delivered across the Asia-Pacific Marine Oil and Gas industry.
        </p>

        <div className="recent-grid">
          {projects.map((project) => (
            <article className="service-card" key={project.title}>
              <div className="photo">
                <span className="tag">{project.tag}</span>
                <span className="arrowmark">image →</span>
                <span className="note">{project.note}</span>
              </div>
              <div className="body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <Link className="btn-link" href="/projects">
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link className="btn btn-secondary" href="/projects">
            View More Projects <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
