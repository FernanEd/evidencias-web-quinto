import { Link } from '@reach/router';

function Trabajos(props: any) {
  return (
    <section>
      <h1 className="text-4xl font-bold pb-16 text-center text-white uppercase">
        Portafolio de evidencias
      </h1>
      <section
        id="trabajos"
        className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4"
      >
        <article
          className="trabajos-item rounded-xl shadow-xl bg-white
            flex-auto sm:flex-grow-0 
            flex flex-col items-center max-w-sm 
            overflow-hidden cursor-pointer"
        >
          <Link to="T1_4">
            <img
              src="https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg"
              alt=""
              className="w-full"
            />
          </Link>
          <p className="text-xl text-center py-2">Titulo</p>
        </article>
      </section>
    </section>
  );
}

export default Trabajos;
