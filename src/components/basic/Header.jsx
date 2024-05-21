import Navigation from "./Navigation";
import "../../styles/Header.css";

function Header({ setPage }) {
  return (
    <header className="header">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <h1 className="header__title">Chinese Cuisines &#129368;</h1>
      <Navigation className="header__nav" setPage={setPage} />
    </header>
  );
}

export default Header;
