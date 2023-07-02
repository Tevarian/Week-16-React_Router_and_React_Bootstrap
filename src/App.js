import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Footer from "./components/Footer";
import afaLogo from "./assets/a-funny-angle.svg";
import "./styles/App.css";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/about">About Project</Link>
            </li>
          </ul>
        </nav>
        <div className="main-logo">
          <img src={afaLogo} className="logo" alt="a funny angle" />
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
