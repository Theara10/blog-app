import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleReturn = () => {
    setClicked(false);
  };

  return (
    <nav className="nav">
      <h4 className="logo">Hello</h4>

      <ul className={clicked ? "nav-menu-active" : "nav-menu"}>
        <Link to="/about" className="link-style">
          <li className="nav-links" onClick={() => setClicked(false)}>
            About
          </li>
        </Link>
        <Link to="/post" className="link-style">
          <li className="nav-links" onClick={() => setClicked(false)}>
            Post
          </li>
        </Link>
      </ul>

      {clicked ? (
        <div onClick={handleReturn}>
          <h2>X</h2>
        </div>
      ) : (
        <div className="burger" onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
