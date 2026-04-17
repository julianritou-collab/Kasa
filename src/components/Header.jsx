import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="container header__inner">
        <img src={logo} alt="logo deKasa" className="header__logo" />
        <nav className="header__nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;