const projects = [
  {
    note: 'FPSO topsides, Project Ceres',
    title: 'Ceres FPSO — Topsides Coating',
    description:
      'Topsides surface preparation and protective coating for FPSO Ceres, executed under a documented quality plan.',
  },
  {
    note: 'Karimun yard, FSO conversion',
    title: 'Karimun Yard — FSO Scaffold Frame',
    description:
      'Engineered scaffold frame for FSO conversion, sized and erected to project scope.',
  },
  {
    note: 'Accommodation HVAC retrofit',
    title: 'Accommodation Block — HVAC Retrofit',
    description:
      'Mechanical-electrical retrofit of accommodation HVAC system, with commissioning to operator sign-off.',
  },
  {
    note: 'Marine manpower mobilisation',
    title: 'Natuna Basin — Manpower Mobilisation',
    description:
      'Mobilisation of skilled marine manpower across welding, painting, scaffolding, and rigging disciplines.',
  },
  {
    note: 'Compressor station blast & paint',
    title: 'Anoa Field — Compressor Module Refit',
    description:
      'Compressor module refit, with full surface preparation and protective coating.',
  },
  {
    note: 'Electrical house install',
    title: 'Electrical House — Install & Commissioning',
    description:
      'Electrical house installation, termination, and commissioning to operator sign-off.',
  },
]

export default function ProjectsList() {
  return (
    <section className="sec">
      <div className="container">
        <div className="proj-grid">
          {projects.map((project) => (
            <article className="proj-card" key={project.title}>
              <div className="photo">
                <span className="tag">Image · Project</span>
                <span className="arrowmark">image →</span>
                <span className="note">{project.note}</span>
              </div>
              <div className="body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}