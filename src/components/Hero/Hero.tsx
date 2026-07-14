import Button from '../Button/Button'
import { useTyping } from '../../hooks/useTyping'
import heroPhoto from '../../assets/images/hero.jpeg'

const ROLES = ['Full-Stack Developer', 'MERN Stack Engineer', 'AI-powered App Builder']

export default function Hero() {
  const typed = useTyping(ROLES)

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="hero">
      <div className="container">
        <div>
          <div className="hero-eyebrow">open to internships &amp; full-time roles</div>
          <h1>Kanishka Goyal</h1>
          <div className="hero-role">
            I'm a <span className="highlight">{typed}</span>
            <span className="cursor" />
          </div>
          <p className="lede">
            B.Tech CSE student who likes building things across the whole
            stack — MERN on the frontend/backend, Python and FastAPI when a
            project needs some AI wired in, and DSA in between to keep my
            brain sharp.
          </p>
          <div className="hero-actions">
            <Button variant="primary" onClick={() => scrollTo('projects')}>
              View Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </Button>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <img src={heroPhoto} alt="Kanishka Goyal" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}