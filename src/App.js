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
    <>
      <Navbar/>
      <Jumbotron/>
      <WorkList/>
      <Footer/>
    </>
  );
}

export default App;
