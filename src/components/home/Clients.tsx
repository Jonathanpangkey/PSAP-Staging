const clients = ['PERTAMINA', 'McDermott', 'Saipem', 'PaxOcean', 'Sembcorp']

export default function Clients() {
  return (
    <section className="sec">
      <div className="container">
        <div className="eyebrow">Our Clients</div>
        <h2 className="display md">Our Clients</h2>
        <p className="lead" style={{ marginTop: 18 }}>
          Long-standing partnerships with the operators and yards driving the Asia-Pacific Oil &amp; Gas industry.
        </p>
        <div className="clients-row">
          {clients.map((client) => (
            <div className="client-cell" key={client}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}