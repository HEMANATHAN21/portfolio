import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero">

        {/* LEFT CONTENT */}
        <div className="left">
          <img src="src\assets\IMG_20260201_133736.jpg.jpeg" alt="profile" />

          <div className="info">
            <h1>Hemanathan M</h1>
            <h3>Java Developer</h3>

            <p className="tagline">
              Building Interfaces & REST APIs for Scalable Integrations
            </p>

            <div className="buttons">
              <a href="src/assets/Resume.pdf" download>
                <button className="primary">Download Resume</button>
              </a>
             <button className="outline"
                onClick={() => {
                    const section = document.getElementById("experience");
                    section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }}>
            View Experience
            </button>
            </div>

            <div className="icons">
                <a href="https://github.com/HEMANATHAN21" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
                <a href="https://www.linkedin.com/in/hemanathan-m-aa0386224/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
                <a href="https://www.instagram.com/_mr.solo_ofc._?igsh=amFoaWF1emM3ZjRw" target="_blank" rel="noopener noreferrer" > <FaInstagram /></a>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider" />

        {/* PROFESSIONAL SUMMARY */}
        <div className="summary">
          {/* <h4>Professional Summary</h4> */}

          <p className="summary-text">
            Dedicated Java Developer with <strong>2+ years of experience</strong> in
            designing and developing scalable web applications using Java,
            Spring Boot, and Hibernate.Skilled in RESTful API development, Microservices, and secure
            authentication using OAuth2 and JWT.Strong problem-solving and debugging abilities with a passion for
            clean code and continuous learning in Agile / Scrum environments.
          </p>
        </div>
      </div>

      <style>{`

      #hero{
      height: 25vh;

      
      }

      .icons a {
        color: inherit;      /*  keeps original icon color */
        text-decoration: none;
        }
        /* LAYOUT */
        .summary-text {
            text-align: justify;
            line-height: 1.8;
        }
        .hero-section {
          display: flex;
          justify-content: center;
          padding: 80px 32px;
        }

        .hero {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.6fr 1px 1.2fr;
          gap: 48px;
          align-items: center;
        }

        /* LEFT */
        .left {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 36px;
          align-items: center;
        }

        .left img {
          width: 280px;
          height: 360px;
          object-fit: cover;
          border-radius: 22px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
        }

        .info h1 {
          font-size: 42px;
          margin: 0;
        }

        .info h3 {
          margin: 10px 0;
          color: #60a5fa;
        }

        .tagline {
          margin-top: 6px;
          max-width: 520px;
          color: #9ca3af;
        }

        .buttons {
          margin: 24px 0;
          display: flex;
          gap: 16px;
        }

        .primary {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 26px;
          border-radius: 10px;
          cursor: pointer;
        }

        .outline {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
          padding: 12px 26px;
          border-radius: 10px;
          cursor: pointer;
        }

        .icons {
          display: flex;
          gap: 18px;
          font-size: 22px;
          color: #e5e7eb;
        }

        /* DIVIDER LINE */
        .divider {
          width: 1px;
          height: 70%;
          background: rgba(255, 255, 255, 0.15);
        }

        /* SUMMARY (NO BOX) */
        .summary {
          width: 120%; 
          line-height: 1.8;
        }

        .summary h4 {
          font-size: 18px;
          margin-bottom: 16px;
          color: #60a5fa;
        }

        .summary p {
          margin-bottom: 14px;
          color: #e5e7eb;
        }

        /* LIGHT MODE */
        .light .tagline {
          color: #374151;
        }

        .light .icons {
          color: #1f2937;
        }

        .light .divider {
          background: #d1d5db;
        }

        .light .summary h4 {
          color: #2563eb;
          font-weight: 700;
        }

        .light .summary p {
          color: #111827;
          font-weight: 500;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .divider {
            display: none;
          }

          .left {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .left img {
            margin: auto;
          }

          .buttons,
          .icons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
