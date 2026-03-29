import {
  FaJava,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiRedis, SiGithubcopilot } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Java 8", icon: <FaJava /> },
    { name: "Spring Boot", icon: <FaJava /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Hibernate", icon: <FaDatabase /> },
    { name: "JPA", icon: <FaDatabase /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Copilot", icon: <SiGithubcopilot /> },
  ];

  return (
    <section id="skills">
      {/* <h2>Skills</h2> */}
      <br></br>

      <div className="grid">
        {skills.map((s) => (
          <div className="card" key={s.name}>
            <span className="icon">{s.icon}</span>
            <span>{s.name}</span>
          </div>
        ))}
      </div>

      <style>{`

/* REMOVE FIXED HEIGHT */
#skills{
  min-height: auto;
  padding: 20px 16px;
}

/* GRID */
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* CARD */
.card {
  min-width: 140px;
  padding: 14px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
  flex: 0 1 auto; 
}

/* DARK MODE */
.dark .card {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
  color: #e5e7eb;
}

.dark .card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 15px rgba(59,130,246,0.35);
}

/* LIGHT MODE */
.light .card {
  background: #ffffff;
  color: #020617;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
}

.light .card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(59,130,246,0.25);
}

/* ICON */
.icon {
  font-size: 18px;
  color: #3b82f6;
}

/* TABLET */
@media (max-width: 1024px) {
  .grid {
    gap: 16px;
  }

  .card {
    min-width: 120px;
    padding: 12px 16px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .grid {
    gap: 12px;
  }

  .card {
    min-width: 45%; 
    justify-content: center;
  }

  .icon {
    font-size: 16px;
  }
}

`}</style>
    </section>
  );
}
