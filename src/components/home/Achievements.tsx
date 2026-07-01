import { CompanyStat } from '@/payload-types'
import ScrollReveal from '../ui/ScrollReveal'
import CountUp from '../ui/CountUp'

interface AchievementsProps {
  stats: CompanyStat
}

export default function Achievements({ stats }: AchievementsProps) {
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
    <section className="sec ach">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow dark">Our Achievements</div>
          <h2 className="display md light">
            Proof points,<br />in plain numbers.
          </h2>
        </ScrollReveal>
        <div className="ach-grid ach-grid--3">
          {items.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 150}>
              <div>
                <div className="ach-num">
                  <CountUp end={stat.value} /><em>+</em>
                </div>
                <div className="ach-rule" />
                <div className="ach-lab">{stat.label}</div>
                <div className="ach-sub">{stat.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}