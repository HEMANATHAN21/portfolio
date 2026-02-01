import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h3>Hemanathan M</h3>
        <p>
          Java Developer • Building scalable backend systems
        </p>

        <div className="socials">
          <a href="https://github.com/HEMANATHAN21" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/hemanathan-m-aa0386224/" target="_blank"><FaLinkedin /></a>
          <a href="https://www.instagram.com/_mr.solo_ofc._?igsh=amFoaWF1emM3ZjRw" target="_blank"><FaInstagram /></a>
        </div>

        <span className="copy">
          © {new Date().getFullYear()} Hemanathan M. All rights reserved.
        </span>
      </div>

      <style>{`
        footer {
          padding: 60px 24px;
          margin-top: 80px;
        }

        /* DARK MODE */
        .dark footer {
          background: #020617;
          color: #e5e7eb;
        }

        /* LIGHT MODE */
        .light footer {
          background: #f8fafc;
          color: #020617;
        }

        .footer-content {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 22px;
          font-size: 22px;
          margin: 18px 0;
        }

        .socials a {
          color: #3b82f6;
        }

        .copy {
          font-size: 14px;
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
}
