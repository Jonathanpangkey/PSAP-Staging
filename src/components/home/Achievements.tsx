import { CompanyStat } from '@/payload-types'

interface AchievementsProps {
  stats: CompanyStat
}

export default function Achievements({ stats }: AchievementsProps) {
  const items = [
    {
      number: String(stats.yearsOfExpertise),
      label: 'Years of Expertise',
      sub: 'Established marine engineering posture',
    },
    {
      number: String(stats.projectsCompleted),
      label: 'Projects Completed',
      sub: 'Across the Asia-Pacific region',
    },
    {
      number: String(stats.skilledManpower),
      label: 'Skilled Manpower',
      sub: 'Marine engineering workforce',
    },
  ]

  return (
    <section className="sec ach">
      <div className="container">
        <div className="eyebrow dark">Our Achievements</div>
        <h2 className="display md light">
          Proof points,<br />in plain numbers.
        </h2>
        <div className="ach-grid ach-grid--3">
          {items.map((stat) => (
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