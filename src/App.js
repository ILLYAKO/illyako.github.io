import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Album from "./components/Album/index";
import AboutPage from "./components/AboutPage";

function App() {
  // document.documentElement.className = "h-100 bg-danger";
  // document.body.classList.add(["h-100","bg-danger"]);

  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Album}></Route>
          <Route path="/about" component={AboutPage}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
