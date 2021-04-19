import React from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import "./Dashboard.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import EditBlog from "./components/EditBlog";
import { AddBlog } from "./components/AddBlog";

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
                <Route path="/" component={Feed} exact />
                <Route path="/contact" component={Contact} />
                <Route path="/edit" component={EditBlog} />
                <Route path="/add" component={AddBlog} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Dashboard;
