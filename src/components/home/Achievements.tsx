const stats = [
    {
      number: '20',
      label: 'Years of Expertise',
      sub: 'Established marine engineering posture',
    },
    {
      number: '300',
      label: 'Projects Completed',
      sub: 'Across the Asia-Pacific region',
    },
    {
      number: '1200',
      label: 'Skilled Manpower',
      sub: 'Marine engineering workforce',
    },
  ]
  
  export default function Achievements() {
    return (
      <section className="sec ach">
        <div className="container">
          <div className="eyebrow dark">Our Achievements</div>
          <h2 className="display md light">
            Proof points,<br />in plain numbers.
          </h2>
          <div className="ach-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="ach-num">
                  {stat.number}<em>+</em>
                </div>
                <div className="ach-rule" />
                <div className="ach-lab">{stat.label}</div>
                <div className="ach-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }