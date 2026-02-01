import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : "light"}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>

      <style>{`
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
        }

        .dark {
          background: radial-gradient(circle at top, #0f172a, #020617);
          color: #e5e7eb;
        }

        .light {
          background: #f8fafc;
          color: #020617;
        }

        section {
          padding: 80px 8%;
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
        }

        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
