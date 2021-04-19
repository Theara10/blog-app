import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="dashboard_header">
      <div className="header_container">
        <h3>Dashboard</h3>

        <button>
          <Link to="/add">Create</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
