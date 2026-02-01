import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("hero");
  const indicatorRef = useRef(null);
  const menuRef = useRef({});

  const sections = ["hero", "skills", "experience", "projects", "contact"];

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // 🔹 Move blue indicator smoothly
  useEffect(() => {
    const el = menuRef.current[active];
    const indicator = indicatorRef.current;

    if (el && indicator) {
      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
    }
  }, [active]);

  // 🔹 Update active section on scroll (less aggressive)
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <h3>Hemanathan Manoharan</h3>

      <div className="menu">
        {sections.map((sec) => (
          <span
            key={sec}
            ref={(el) => (menuRef.current[sec] = el)}
            onClick={() => scrollTo(sec)}
            className={active === sec ? "active" : ""}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </span>
        ))}

        {/* 🔵 ONE SMOOTH INDICATOR */}
        <div ref={indicatorRef} className="indicator" />
      </div>

      <button onClick={() => setDark(!dark)}>
        {dark ? <FaSun /> : <FaMoon />}
      </button>

      <style>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 8%;
          backdrop-filter: blur(10px);
        }

        .menu {
          position: relative;
          display: flex;
          gap: 32px;
        }

        .menu span {
          cursor: pointer;
          font-weight: 500;
          padding-bottom: 10px;
        }

        /* SLIDING LINE */
        .indicator {
          position: absolute;
          bottom: 0;
          height: 3px;
          background: #3b82f6;
          border-radius: 4px;
          transition: all 0.35s ease;
        }

        button {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
}
