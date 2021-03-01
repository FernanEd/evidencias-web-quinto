import './App.css';
import Footer from './components/Footer';
import Trabajos from './components/Trabajos';
import { Router, Link } from '@reach/router';
import T1_4 from './trabajos/T1_4';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Homepage path="/evidencias-web-quinto" />
      <T1_4 path="/evidencias-web-quinto/T1_4" />
    </Router>
  );
}

export default App;
