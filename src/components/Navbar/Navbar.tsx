import { useState } from 'react'

const LINKS: { id: string; label: string }[] = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Services' },
  { id: 'experience', label: 'Fullstack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container">
        <button className="navbar-logo" onClick={() => scrollTo('top')}>
          Kanishka Goyal
        </button>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <button className="navbar-toggle-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}