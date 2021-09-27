import React from "react";
import { HashRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Album from "./components/Album/index";

function App() {
  // document.documentElement.className = "h-100 bg-danger";
  // document.body.classList.add(["h-100","bg-danger"]);

  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <NavBar />
        {/* <main class="flex-shrink-0">
          <div class="container">
            <h1 class="mt-5">Sticky footer</h1>
            <p class="lead">
              Pin a footer to the bottom of the viewport in desktop browsers
              with this custom HTML and CSS.
            </p>
            <p>
              Use{" "}
              <a href="/docs/5.1/examples/sticky-footer-navbar/">
                the sticky footer with a fixed navbar
              </a>{" "}
              if need be, too.
            </p>
          </div>
        </main> */}
        <Album />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
