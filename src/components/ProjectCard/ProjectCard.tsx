import type { ProjectItem } from '../../types'

export default function ProjectCard({ name, stack, date, points, link }: ProjectItem) {
  return (
    <div className="glow-card">
      <div className="card-icon">🚀</div>
      <div className="card-title">{name}</div>
      <div className="card-meta">
        {stack} · {date}
      </div>
      <div className="card-body">
        <ul>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      {link && (
        <a className="btn btn-primary" href={link} target="_blank" rel="noreferrer" style={{ marginTop: '1rem' }}>
          View Project
        </a>
      )}
    </div>
  )
}