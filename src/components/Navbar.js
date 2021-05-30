import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar_left">
          <h1 style={{ margin: 0, fontSize: 30 }}>
            <Link to="/" className="">
              TheDarkKnight
            </Link>
          </h1>
        </div>
        <div className="navbar_right">
          <p className="link_style">
            <Link to="/" className="link_style">
              Ideas
            </Link>
          </p>

          <p className="link_style">
            <Link to="/about" className="link_style">
              About Me
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
