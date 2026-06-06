const stats = [
  {
    num: '20',
    label: 'Years of Expertise',
    sub: 'Established marine engineering posture',
  },
  {
    num: '300',
    label: 'Projects Completed',
    sub: 'Across the Asia-Pacific region',
  },
  {
    num: '1200',
    label: 'Skilled Manpower',
    sub: 'Marine engineering workforce',
  },
]

export default function AboutAchievements() {
  return (
    <section className="sec why">
      <div className="container">
        <div className="eyebrow">Our Achievements</div>
        <h2 className="display md">Our Achievements</h2>
        <p className="lead" style={{ marginTop: 18 }}>
          Proof points, in plain numbers.
        </p>
        <div
          className="ach-grid"
          style={{ marginTop: 48, paddingTop: 0, borderTop: 0, gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {stats.map((stat) => (
            <div className="ach-tile" key={stat.label}>
              <div className="ach-tile-num">
                {stat.num}<em>+</em>
              </div>
              <div className="ach-tile-rule" />
              <div className="ach-tile-lab">{stat.label}</div>
              <div className="ach-tile-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}