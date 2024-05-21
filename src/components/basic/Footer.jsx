import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        &copy; 2024 Chinese Cuisine. All rights reserved.
      </p>
      <p className="footer__author">
        Created by{" "}
        <a
          className="footer__author-email"
          href="mailto:wan.jian@northeastern.edu"
        >
          Jiangting(Jocelyn) Wan
        </a>
      </p>
    </footer>
  );
}

export default Footer;
