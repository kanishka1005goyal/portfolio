import type { ExperienceItem } from '../../types'

interface TimelineProps {
  items: ExperienceItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className={`glow-card timeline-item ${i === 0 ? 'featured' : ''}`} key={item.role + item.org}>
          <div className="card-icon">💼</div>
          <div className="card-title">
            {item.role} · {item.org}
          </div>
          <div className="card-meta">
            {item.duration} — {item.dept}
          </div>
          <div className="card-body">
            <ul>
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}