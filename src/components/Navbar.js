import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="navBar">
        <div className="navBar_left">
          <h2 style={{ margin: 0 }}>
            <Link to="/" className="link_style">
              theara
            </Link>
          </h2>
        </div>
        <div className="navBar_middle">
          <div className="navBar_middle_option">
            <p>
              <Link to="/blog" className="link_style">
                Ideas
              </Link>
            </p>
          </div>
          <div className="navBar_middle_option">
            <p>
              <Link to="/about" className="link_style">
                About Me
              </Link>
            </p>
          </div>
          <div className="navBar_middle_option">
            <p>
              <Link to="/contact" className="link_style">
                Chat
              </Link>
            </p>
          </div>
        </div>
        {/* <div className="navBar_right">
          <div className="navBar_right_option">
            <p className="contact">
              <Link to="/contact" className="contact_link_style">
                Text Me
              </Link>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
