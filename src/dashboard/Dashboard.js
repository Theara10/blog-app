import React from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact"
import "./Dashboard.css"; 
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Router>
      <Header />
      <div className="dashboard">
        <div className="dashboard_container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="feed">
            <Switch>
              <Route path="/dashboard" component={Feed}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default Dashboard;
