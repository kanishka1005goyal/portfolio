import { achievements } from '../../data/achievements'

const ICONS = ['🏆', '🎖️', '🧮']

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Achievements</h2>
          <div className="section-underline" />
        </div>

        <div className="grid-3">
          {achievements.map((a, i) => (
            <div className={`glow-card ${i === 1 ? 'featured' : ''}`} key={a}>
              <div className="card-icon">{ICONS[i % ICONS.length]}</div>
              <div className="card-body">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}