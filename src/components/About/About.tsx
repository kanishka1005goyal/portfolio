<<<<<<< HEAD
import { aboutCards } from "../../data/About";
=======
import { aboutCards } from '../../data/About'
>>>>>>> 8f880c0c6311a7174a2a893281019bdb8e658472
import '../../styles/about.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline" />
        </div>

        <div className="grid-3">
          {aboutCards.map((card) => (
            <div className="about-card" key={card.title}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-body">{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
