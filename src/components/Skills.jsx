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
      #skills{
      height: 10vh;
      }
        .grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .card {
          min-width: 140px;
          padding: 14px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          transition: all 0.3s ease;
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
        //   border: 1px solid #e5e7eb;
          color: #020617;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
        }

        .light .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(59,130,246,0.25);
          border-color: #3b82f6;
        }

        .icon {
          font-size: 18px;
          color: #3b82f6;
        }
      `}</style>
    </section>
  );
}
