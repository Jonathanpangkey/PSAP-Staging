import { CompanyStat } from '@/payload-types'

interface AboutAchievementsProps {
  stats: CompanyStat
}

export default function AboutAchievements({ stats }: AboutAchievementsProps) {
  const items = [
    {
      num: String(stats.yearsOfExpertise),
      label: 'Years of Expertise',
      sub: 'Established marine engineering posture',
    },
    {
      num: String(stats.projectsCompleted),
      label: 'Projects Completed',
      sub: 'Across the Asia-Pacific region',
    },
    {
      num: String(stats.skilledManpower),
      label: 'Skilled Manpower',
      sub: 'Marine engineering workforce',
    },
  ]

  return (
    <section className="sec why">
      <div className="container">
        <div className="eyebrow">Our Achievements</div>
        <h2 className="display md">Our Achievements</h2>
        <p className="lead sec-lead">
          Proof points, in plain numbers.
        </p>
        <div className="ach-grid ach-grid--3 ach-grid--tiles">
          {items.map((stat) => (
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