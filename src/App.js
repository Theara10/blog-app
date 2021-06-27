import "./App.css";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Playground from "./screens/Playground";

function App() {
  return (
    <Router>
      {/* <Route path="/about" component={About} />
      <Route path="/playground" component={Playground} /> */}
      <div className="App">
        <div className="app-container">
          <Navbar />
          <div style={{ height: "calc(100% - 270px)" }}>
            <Switch>
              <Route path="/" component={Blog} exact />
              <Route path="/blog" component={Blog} />
              <Route path="/blog-detail/:id" component={BlogDetail} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/post" component={Post} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
