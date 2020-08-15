import React from "react"
import { Link } from "gatsby"
import CV from "../assets/cv.pdf"
import HamburgerClose from "../assets/hamburger-close.svg"

const Navbar = ({ handleToggleHamburger, toggleMenu }) => {
  return (
    <nav className={`nav ${toggleMenu ? "active" : ""}`}>
      <button className="hamburger-close" onClick={handleToggleHamburger}>
        <img src={HamburgerClose} alt="closes the side menu" />
      </button>
      <ul className="navbar">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/blog" className="nav__link">
            Blog
          </Link>
        </li>
        <li className="nav__item">
          <Link to={CV} className="nav__link">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
