import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section" id="profile">
      <div className="hero">

        {/* LEFT CONTENT */}
        <div className="left">
          <img src="/IMG_20260201_133736.jpg.jpeg" alt="profile" />

          <div className="info">
            <h1>Hemanathan M</h1>
            <h3>Java Developer</h3>

            <p className="tagline">
              Building Interfaces & REST APIs for Scalable Integrations
            </p>

            <div className="buttons">
              <a href="/Resume.pdf" download>
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

/* REMOVE FIXED HEIGHT */
#hero{
  min-height: auto;
}

/* LAYOUT */
.hero-section {
  display: flex;
  justify-content: center;
  padding: 80px 32px;
}

.hero {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.4fr 1px 1.2fr;
  gap: 48px;
  align-items: center;
}

/* LEFT */
.left {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 36px;
  align-items: center;
}

/* MAKE IMAGE RESPONSIVE */
.left img {
  width: 100%;
  max-width: 280px;
  height: auto;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
}

/* TEXT */
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

/* BUTTONS */
.buttons {
  margin: 24px 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap; 
}

.primary,
.outline {
  padding: 12px 20px; /* slightly smaller */
}

/* ICONS */
.icons {
  display: flex;
  gap: 18px;
  font-size: 22px;
  color: #e5e7eb;
  flex-wrap: wrap;
}
  /* FORCE SAME COLOR FOR ALL ICONS */
.icons svg {
  color: #3b82f6;;
  fill: currentColor;
}

/* DIVIDER */
.divider {
  width: 1px;
  height: 70%;
  background: rgba(255, 255, 255, 0.15);
}
  .light .divider {
  background: #d1d5db; /* soft gray */
}

/* SUMMARY */
.summary {
  width: 100%; 
  line-height: 1.8;
}

.summary-text {
  text-align: justify;
}

/* TABLET */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .divider {
    display: none;
  }

  .summary {
    text-align: center;
  }
}

/* MOBILE */
@media (max-width: 768px) {

  .hero-section {
    padding: 40px 16px;
  }

  .left {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .left img {
    margin: auto;
  }

  .info h1 {
    font-size: 32px;
  }

  .buttons {
    justify-content: center;
  }

  .icons {
    justify-content: center;
  }

  .summary {
    text-align: center;
  }

  .summary-text {
    text-align: left; /* better readability */
  }
}

`}</style>
    </section>
  );
}
