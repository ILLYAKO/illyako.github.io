import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Album from "./components/Album";
import AboutPage from "./components/AboutPage";
import store from "./store";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column h-100">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Album}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/dashboard" component={DashboardPage}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
