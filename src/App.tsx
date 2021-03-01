import './App.css';
import Footer from './components/Footer';
import Trabajos from './components/Trabajos';

function App() {
  return (
    <main
      id="app"
      className="h-80 flex flex-col justify-between pt-2 bg-blue-600"
    >
      <section
        id="main-content"
        className="mx-2 lg:w-10/12 lg:mx-auto py-4 pt-24"
      >
        <Trabajos />
      </section>
      <Footer />
    </main>
  );
}

export default App;
