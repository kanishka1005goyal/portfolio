import { certificates } from '../../data/certificates'
import { Code2, Sparkles, BarChart3, Trophy, Award } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Code2,
  Sparkles,
  BarChart3,
  Trophy,
  Award,
}

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Certificates</h2>
          <div className="section-underline" />
        </div>

        <div className="grid-2 cert-card">
          {certificates.map((c) => {
            const Icon = iconMap[c.icon || 'Award']
            return (
              <div className="cert-neu-card" key={c.title}>
                <div className="cert-neu-icon">
                  <Icon size={28} />
                </div>
                <div className="cert-neu-title">{c.title}</div>
                <div className="cert-neu-body">{c.issuer}</div>
                <button
                  className="cert-neu-btn"
                  disabled={!c.file}
                  onClick={() => c.file && window.open(c.file, '_blank', 'noopener,noreferrer')}
                >
                  {c.file ? 'View Certificate' : 'Coming Soon'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}