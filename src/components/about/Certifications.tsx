export default function Certifications() {
  return (
    <section className="sec why">
      <div className="container">
        <div className="eyebrow">Certification and Awards</div>
        <h2 className="display md">
          Certification <em>and Awards</em>
        </h2>
        <p className="lead sec-lead">
          Quality Management Systems and operational certifications supporting our marine
          engineering work.
        </p>
        <div className="cert-list">
          {/* Seeded cert — ISO 9001:2015 */}
          <article className="cert-list-card">
            <div className="photo">
              <span className="tag">Image · Certificate</span>
              <span className="arrowmark">image →</span>
              <span className="note">ISO 9001:2015 certificate scan</span>
            </div>
            <div className="body">
              <div className="meta">Issued · TCCPL</div>
              <h4>ISO 9001:2015 — Quality Management Systems</h4>
              <p>
                Manpower Supply for the Marine Oil and Gas industry, and provision of Steel
                Construction; Structural, Piping, Blasting &amp; Painting; Electrical,
                Mechanical, Scaffolding, and Cleaning works.
              </p>
            </div>
          </article>

          {/* CMS empty slot */}
          <article className="cert-list-card">
            <div className="photo photo--placeholder-empty">
              <span className="tag">Image · Add Certificate</span>
              <span className="arrowmark">+ add</span>
              <span className="note">CMS · Certifications &amp; Awards</span>
            </div>
            <div className="body">
              <div className="meta">CMS · Empty Slot</div>
              <h4>Future Certificate or Award</h4>
              <p>
                Add new certifications or awards as a list of cards via the CMS — image, title,
                and description per entry.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}