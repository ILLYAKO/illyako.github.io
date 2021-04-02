// import logo from "./logo.svg";
// import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import WorkList from "./components/WorkList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Jumbotron/>
      <WorkList/>
      <Footer/>
    </div>
  );
}

export default App;
