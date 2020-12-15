import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar_option">
        <DescriptionIcon fontSize="5" style={{ margin: 0 }} />
        <p className="">Blog</p>
      </div>
      <div className="sidebar_option">
        <ContactMailIcon fontSize="5" />
        <p className="">Contact</p>
      </div>
    </div>
  );
}

export default Sidebar;
