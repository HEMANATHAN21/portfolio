import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("hero");
  const indicatorRef = useRef(null);
  const menuRef = useRef({});

  const sections = ["profile", "skills", "experience", "projects", "contact"];

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

        {/* SMOOTH INDICATOR */}
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
  flex-wrap: wrap; 
}

/* TITLE */
nav h3 {
  white-space: nowrap;
}

/* MENU */
.menu {
  position: relative;
  display: flex;
  gap: 32px;
  flex-wrap: wrap; 
  justify-content: center;
}

/* MENU ITEMS */
.menu span {
  cursor: pointer;
  font-weight: 500;
  padding-bottom: 10px;
  white-space: nowrap;
}

/* INDICATOR */
.indicator {
  position: absolute;
  bottom: 0;
  height: 3px;
  background: #3b82f6;
  border-radius: 4px;
  transition: all 0.35s ease;
}

/* BUTTON */
button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}


/*  TABLET */
@media (max-width: 1024px) {
  nav {
    padding: 12px 5%;
  }

  .menu {
    gap: 20px;
  }
}

/* MOBILE */
@media (max-width: 768px) {

  nav {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  nav h3 {
    font-size: 16px;
  }

  .menu {
    gap: 16px;
  }

  /* Disable indicator when wrapped */
  .indicator {
    display: none;
  }

  button {
    position: absolute;
    right: 16px;
    top: 16px;
  }
}

`}</style>
    </nav>
  );
}
