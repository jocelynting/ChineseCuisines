import menu from "../../data/menu";
import "../../styles/Navigation.css";
import { useState, useEffect } from "react";

function Navigation({ className, setPage }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark__mode");
      root.classList.remove("light__mode");
    } else {
      root.classList.add("light__mode");
      root.classList.remove("dark__mode");
    }
  }, [theme]);

  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.pathname);
    }
    handlePageLoad();

    window.addEventListener("popstate", handlePageLoad);

    return () => {
      window.removeEventListener("popstate", handlePageLoad);
    };
  }, []);

  function handleClick(event, item) {
    if (item.name === "Mode") {
      toggleTheme();
    } else {
      setPage(item.path);
      window.history.pushState(null, "", event.target.pathname);
    }
    event.preventDefault();
    setShowMenu(false);
  }

  const [showMenu, setShowMenu] = useState(false);

  const mode = theme === "light" ? "☀️" : "🌙";

  const navItems = menu.map((item) => {
    return (
      <li key={item.name} className="nav__item">
        <a
          href={item.path}
          className={item.name === "Mode" ? "nav__theme" : "nav__link"}
          onClick={(event) => handleClick(event, item)}
        >
          {item.name === "Mode" ? mode : item.name}
        </a>
      </li>
    );
  });

  const showClass = showMenu ? "" : "nav__list--collapsed";

  return (
    <nav className={`nav ${className}`}>
      <button
        className={`nav__toggle ${showMenu ? "rotate" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "✕" : "☰"}
      </button>
      <ul className={`nav__list ${showClass}`}>{navItems}</ul>
    </nav>
  );
}

export default Navigation;
