import './Homepage.css';
import Footer from './Footer';
import Trabajos from './Trabajos';

function Homepage(props: any) {
  return (
    <main className="h-screen flex flex-col justify-between bg-blue-600">
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

export default Homepage;
