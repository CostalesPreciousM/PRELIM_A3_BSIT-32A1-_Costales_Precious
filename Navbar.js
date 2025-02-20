import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/">🏠 Home</Link>
          </li>
          <li>
            <Link to="/about">📖 About</Link>
          </li>
          <li>
            <Link to="/news">📰 News</Link>
          </li>
          <li>
            <Link to="/contact">📞 Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
