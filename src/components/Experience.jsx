export default function Experience() {
  const experiences = [
    {
      year: "November 2025 – Present",
      title: "TDConnex | Full Stack Developer",
      active: true,
      points: [
        "Playing a key role in Oracle ERP migration, developing multiple interfaces to securely transfer data between heterogeneous source and target systems",
        "Designed and implemented scalable integration services using Spring Boot, ensuring reliable data processing and performance.",
        "Acting as DRI (Directly Responsible Individual) for SCM module, owning end-to-end development,enhancements, and production stability.",
        "Developed and enhanced application features based on evolving business and user requirements.",
        "Improved performance using Redis caching strategies in backend services.",
        "Built and maintained UI components using React.js and Vue.js for internal dashboards and tools.",
        "Managed application deployments through Jump Server across environments.",
        "Used GitLab for version control and CI/CD workflows, collaborating across cross-functional teams.",
      ],
    },
    {
      year: "April 2024 – October 2025",
      title: "HCLTech | Software Developer",
      points: [
        "Developed and maintained scalable, high-performance web applications using Java and Spring Boot.",
        "Designed and implemented RESTful APIs for core business modules, ensuring maintainability and performance.",
        "Integrated Spring Security, Google OAuth2, and JWT tokens to enhance authentication and authorization.",
        "Participated in code reviews, unit testing, and performance optimization using JUnit and Postman.",
        "Utilized tools such as Git, Maven, Swagger, and Azure DevOps for version control and CI/CD management.",
      ],
    },
    {
      year: "July 2023 – February 2024",
      title: "JSpider | Intern",
      points: [
        "Developed full-stack applications using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript.",
        "BDeveloped REST APIs and implemented CRUD operations using Spring Boot and Hibernate.",
        "Applied OOP concepts, data structures, and design patterns in real-time projects.",
      ],
    },
  ];

  return (
    <section id="experience">
      {/* <h2>Experience</h2> */}
        <br></br>
      <div className="exp-container">
        {/* LEFT CARD */}
        <div className="left">
          <div className="summary-card">
            <h4 className="company">TDConnex</h4>
            <h3>
              Oracle ERP Migration <br /> & Interface Development
            </h3>
            <p>
              Involved in migrating Oracle ERP, developed multiple interfaces
              to capture & push data seamlessly.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="row" key={i}>
              {/* MARKER */}
              <div className="marker">
                <span className={`dot ${exp.active ? "active" : ""}`} />
                {i !== experiences.length - 1 && (
                  <span className="line" />
                )}
              </div>

              {/* CONTENT */}
              <div className={`content ${exp.active ? "active" : ""}`}>
                <span className="year">{exp.year}</span>
                <h4>{exp.title}</h4>

                <ul className="points">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`

/* REMOVE FIXED HEIGHT */
#experience{
  min-height: auto;
  padding: 40px 16px;
}

.exp-container {
  display: grid;
  grid-template-columns: 1fr 1.7fr;
  gap: 60px;
  max-width: 1200px;
  margin: auto;
}

/* LEFT CARD */
.summary-card {
  background: linear-gradient(135deg, #1e40af, #2563eb);
  color: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 25px 45px rgba(37,99,235,0.45);
  width: 150%;          /* ✅ FIX overflow */
  max-width: 450px;
  align-self: flex-start;
  text-align: justify;
}

.company {
  color: #bfdbfe;
  margin-bottom: 10px;
}

/* TIMELINE */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 50px;  /* ✅ reduced */
  width: 100%; /* ✅ FIX overflow */
  text-align: justify;
}

.row {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 20px;
  align-items: stretch;
}

/* MARKER */
.marker {
  position: relative;
  display: flex;
  justify-content: center;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #94a3b8;
  z-index: 2;
}

.dot.active {
  background: #3b82f6;
  box-shadow: 0 0 0 6px rgba(59,130,246,0.35);
}

/* LINE */
.line {
  position: absolute;
  top: 18px;
  bottom: -50px; /* match new gap */
  width: 3px;
  background: #3b82f6;
}

/* CONTENT */
.content {
  opacity: 0.75;
}

.content.active {
  opacity: 1;
}

.year {
  font-size: 13px;
  color: #3b82f6;
  font-weight: 600;
}

/* BULLETS */
.points {
  list-style: none;
  padding: 0;
  margin-top: 12px;
}

.points li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 10px;
  line-height: 1.6;
  word-break: break-word;
}

.points li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #3b82f6;
  font-size: 20px;
}

/* LIGHT MODE */
.light .summary-card {
  background: #e0ecff;
  color: #020617;
  box-shadow: 0 20px 40px rgba(59,130,246,0.25);
}

.light .content {
  color: #020617;
}

/*  TABLET */
@media (max-width: 1024px) {
  .exp-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .summary-card {
    margin: auto;
    text-align: center;
  }
}

/* MOBILE */
@media (max-width: 768px) {

  .exp-container {
    gap: 30px;
  }

  .timeline {
    gap: 40px;
  }

  .row {
    grid-template-columns: 20px 1fr;
    gap: 14px;
  }

  .line {
    bottom: -40px;
  }

  .summary-card {
    padding: 20px;
  }

  .points li {
    font-size: 14px;
  }
}

`}</style>
    </section>
  );
}
