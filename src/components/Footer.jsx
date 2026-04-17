import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <img src={logo} alt="logo deKasa" className="footer__logo" />
        <p className="footer__text">© 2026 Kasa. All<span className="footer__break"> </span>rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;