import { CompanyStat } from '@/payload-types'
import ScrollReveal from '../ui/ScrollReveal'
import CountUp from '../ui/CountUp'

interface AboutAchievementsProps {
  stats: CompanyStat
}

export default function AboutAchievements({ stats }: AboutAchievementsProps) {
  const items = [
    {
      value: stats.yearsOfExpertise,
      label: 'Years of Expertise',
      sub: 'Established Marine and Oil & Gas engineering posture',
    },
    {
      value: stats.projectsCompleted,
      label: 'Projects Completed',
      sub: 'Serving Marine and Oil & Gas industrial sector',
    },
    {
      value: stats.skilledManpower,
      label: 'Skilled Manpower',
      sub: 'Marine and Oil & Gas engineering workforce',
    },
  ]

  return (
    <section className="sec why">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">Our Achievements</div>
          <h2 className="display md">Our Achievements</h2>
          <p className="lead sec-lead">
            Proof points, in plain numbers.
          </p>
        </ScrollReveal>
        <div className="ach-grid ach-grid--3 ach-grid--tiles">
          {items.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 150} className="ach-reveal">
              <div className="ach-tile">
                <div className="ach-tile-num">
                  <CountUp end={stat.value} /><em>+</em>
                </div>
                <div className="ach-tile-rule" />
                <div className="ach-tile-lab">{stat.label}</div>
                <div className="ach-tile-sub">{stat.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}