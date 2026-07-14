import type { FormEvent } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const EMAIL = "kanishkagoyal181@gmail.com";
const PHONE = "+91-8690345346";
const LOCATION = "Jaipur, Rajasthan";

// Replace with your actual profiles
const GITHUB = "https://github.com/kanishka1005goyal";
const LINKEDIN = "https://linkedin.com/in/YOUR-LINKEDIN";
const INSTAGRAM = "https://instagram.com/YOUR_INSTAGRAM";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Section Heading */}
        <div className="section-head">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-underline" />
        </div>

        <div className="contact-grid">
          {/* Left Contact Card */}
          <div className="glow-card contact-info-card">

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <p>Email</p>

                <a href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <p>Phone</p>

                <a href={`tel:${PHONE}`}>
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p>Location</p>

                <span>{LOCATION}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-row">

              <a
                className="social-circle"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                className="social-circle"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                className="social-circle"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              required
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}