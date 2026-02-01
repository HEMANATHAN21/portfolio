import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Movie Booking ",
      desc: "This Movie Booking application is built on Spring Boot, It contains 3 modules which are App Admin, Theatre Admin, and User. This Application provides users with a seamless platform to browse through a variety of movies, view showtimes, and book tickets effortlessly.",
      tech: "Java, SpringBoot, Hibernate, Mysql",
      github: "https://github.com/HEMANATHAN21/bookmyshow",
      demo: "#",
    },
    {
      title: "Enhancing Security in File Exchange with AES Encryption",
      desc: "It is a web application designed to enhance the security of file exchange. Using the advanced AES Algorithm, the application ensures the confidentiality and safety of sensitive information during file transmission.",
      tech: "Java, Jdbc, Servlet, Jsp, Html, Css.",
      github: "https://github.com/HEMANATHAN21/SafeTransmit-Enhancing-Security-in-File-Exchange-with-AES-Encryption",
      demo: "#",
    },
    {
      title: "Women Safety Application With Hidden Camera Detector & Live Video Streaming",
      desc: "In this project, I have developed some new features in the existing system. Also, I created a home-side server, this server is fully monitored by family members only, there is no need to maintain the server by third parties.",
      tech: "Java, Sql Lite3, XML, ANT Media Server.",
      github: "http://www.ijcrt.org/viewfull.php?&p_id=IJCRT2305371",
      demo: "#",
    },
  ];

  return (
    <section id="projects">
      {/* <h2>Projects</h2> */}
    <br></br>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p className="desc">{p.desc}</p>
            <p className="tech">{p.tech}</p>

            <div className="links">
              <a href={p.github} target="_blank">
                <FaGithub /> Code
              </a>
              <a href={p.demo} target="_blank">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #projects {
          padding: 80px 24px;
        //   max-width: 1200px;
          margin: 130px;
         width:85%;
         height:15vh;

        }

        h2 {
          text-align: center;
          margin-bottom: 50px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .project-card {
          padding: 26px;
          border-radius: 18px;
          transition: all 0.3s ease;
        //   width : 100%;
        text-align: justify;
        }

        /* DARK MODE */
        .dark .project-card {
          background: rgba(255,255,255,0.06);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
          color: #e5e7eb;
        }

        .dark .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(59,130,246,0.35);
        }

        /* LIGHT MODE */
        .light .project-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .light .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 26px rgba(59,130,246,0.25);
          border-color: #3b82f6;
        }

        .desc {
          margin: 12px 0;
          line-height: 1.6;
        }

        .tech {
          font-size: 14px;
          color: #3b82f6;
          font-weight: 600;
        }

        .links {
          display: flex;
          gap: 18px;
          margin-top: 16px;
        }

        .links a {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #3b82f6;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
