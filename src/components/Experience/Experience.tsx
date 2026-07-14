import Timeline from '../Timeline/Timeline'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Full Stack Developer</h2>
          <div className="section-underline" />
          <p className="section-lede">
            Hi, I'm Kanishka — a B.Tech CSE student focused on building
            full-stack and AI-powered products. Skilled in frontend, backend
            and databases, I love turning ideas into real, working software.
          </p>
        </div>

        <Timeline items={experience} />
      </div>
    </section>
  )
}