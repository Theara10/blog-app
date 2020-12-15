import React from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <div className="dashboard_container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="feed">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
