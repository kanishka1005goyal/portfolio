import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

const EMAIL = "kanishkagoyal181@gmail.com";
const PHONE = "+91-8690345346";
const LOCATION = "Jaipur, Rajasthan";

const GITHUB = "https://github.com/kanishka1005goyal";

const LINKEDIN = "https://linkedin.com/in/<your-linkedin-id>";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Avatar */}
        <div className="footer-avatar">KG</div>

        {/* Name */}
        <h2 className="footer-name">Kanishka Goyal</h2>

        {/* Tagline */}
        <div className="footer-tagline">
          <p>Full Stack Developer • MERN Stack Engineer • AI Enthusiast</p>
          <p>
            Building scalable web applications, AI-powered products,
            and modern user experiences.
          </p>
        </div>

        {/* Availability */}
        <div className="availability">
          🟢 Available for Internships & Freelance
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

        </div>

        {/* Contact */}
        <div className="footer-contact-row">

          <span>
            <FaEnvelope /> {EMAIL}
          </span>

          <span>
            <FaPhoneAlt /> {PHONE}
          </span>

          <span>
            <FaMapMarkerAlt /> {LOCATION}
          </span>

        </div>

        {/* Buttons */}
        <div className="footer-buttons">

          <a
            href="/resume.pdf"
            download
            className="btn btn-ghost"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="#contact"
            className="btn btn-primary"
          >
            <FaPaperPlane />
            Hire Me
          </a>

        </div>

        {/* Copyright */}
        <div className="copyright">
          © {new Date().getFullYear()} Kanishka Goyal. All Rights Reserved.
          <br />
          Built with ❤️ using React + TypeScript.
        </div>

      </div>
    </footer>
  );
}