import "./App.css";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="app_body">
          <Switch>
            <Route path="/" component={Blog} exact />
            <Route path="/blog" component={Blog} />
            <Route path="/blog-detail/:id" component={BlogDetail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
      {/* <Dashboard /> */}
    </Router>
  );
}

export default App;
