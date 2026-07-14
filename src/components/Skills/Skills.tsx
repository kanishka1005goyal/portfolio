import SkillCard from '../SkillCard/SkillCard'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">What I Do</h2>
          <div className="section-underline" />
          <p className="section-lede">
            A quick export of everything I reach for regularly, from UI to database.
          </p>
        </div>

        <div className="grid-4">
          {skills.map((group) => (
            <SkillCard key={group.label} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}