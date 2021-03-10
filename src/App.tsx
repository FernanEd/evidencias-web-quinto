import "./App.css";
import Footer from "./components/Footer";
import Trabajos from "./components/Trabajos";
import { Router, Link } from "@reach/router";
import T1_4 from "./trabajos/T1_4";
import Homepage from "./components/Homepage";
import T1_5 from "./trabajos/T1_5";
import T1_7 from "./trabajos/T1_7";
import T1_8 from "./trabajos/T1_8";

function App() {
  return (
    <Router>
      <Homepage path="/evidencias-web-quinto" />
      <T1_4 path="/evidencias-web-quinto/T1_4" />
      <T1_5 path="/evidencias-web-quinto/T1_5" />
      <T1_7 path="/evidencias-web-quinto/T1_7" />
      <T1_8 path="/evidencias-web-quinto/T1_8" />
    </Router>
  );
}

export default App;
