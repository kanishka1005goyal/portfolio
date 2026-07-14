import type { SkillGroup } from '../../types'

export default function SkillCard({ label, icon, items }: SkillGroup) {
  const accent = label.toLowerCase().replace(/\s+/g, '')

  return (
    <div className="glow-card skill-card" data-accent={accent}>
      <div className="card-icon">{icon}</div>
      <div className="card-title">{label}</div>
      <div className="chip-row">
        {items.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}