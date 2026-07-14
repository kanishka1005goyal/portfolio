import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <div className="section-underline" />
        </div>

        <div className="grid-3">
          {projects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
      </div>
    </section>
  )
}