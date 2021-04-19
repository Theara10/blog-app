import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="sidebar_option">
        <DescriptionIcon fontSize="5" style={{ margin: 0 }} />
        <p className="">
          <Link to="/">Blog</Link>
        </p>
      </div>
      <div className="sidebar_option">
        <ContactMailIcon fontSize="5" />
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
