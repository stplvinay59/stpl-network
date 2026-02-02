import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="stpl-reveal" id="stpl-header-section">
      <header className="stpl-header" id="stpl-header">
        <div className="stpl-container">
          <img
            src="logo.png"
            alt="Sudhana Telecommunications logo"
            className="stpl-logo"
            id="stpl-logo"
          />

          <h1 className="stpl-title" id="stpl-title">
            Sudhana Telecommunications Private Limited
          </h1>

          <nav
            className="stpl-navbar"
            id="stpl-navbar"
            aria-label="Primary"
          >
            {/* Hamburger */}
            <div
              className="stpl-menu-icon"
              id="stpl-menu-toggle"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              &#9776;
            </div>

            <ul
              className={`stpl-nav-list ${open ? "open" : ""}`}
              id="stpl-nav-links"
            >
              <li className="stpl-nav-item">
                <NavLink to="/" end onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="stpl-nav-item">
                <NavLink to="/about" onClick={() => setOpen(false)}>
                  About Us
                </NavLink>
              </li>
              <li className="stpl-nav-item">
                <NavLink to="/services" onClick={() => setOpen(false)}>
                  Services
                </NavLink>
              </li>
              <li className="stpl-nav-item">
                <NavLink to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </NavLink>
              </li>
              <li className="stpl-nav-item">
                <NavLink to="/company" onClick={() => setOpen(false)}>
                  Company
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
