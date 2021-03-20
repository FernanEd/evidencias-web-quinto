import { Link } from "@reach/router";

function Trabajos(props: any) {
  interface trabajoItem {
    name: string;
    imgURL: string;
  }

  let trabajosItems: trabajoItem[] = [
    {
      name: "T1_4",
      imgURL: "T1_4.png",
    },
    {
      name: "T1_5",
      imgURL: "T1_5.png",
    },
    {
      name: "T1_7",
      imgURL: "T1_7.png",
    },
    {
      name: "T1_11",
      imgURL: "T1_11.png",
    },
    {
      name: "T1_12",
      imgURL: "T1_12.png",
    },
  ];

  return (
    <section>
      <h1 className="text-4xl font-bold pb-16 text-center text-white uppercase">
        Portafolio de evidencias
      </h1>
      <section
        id="trabajos"
        className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4"
      >
        {trabajosItems.map((trabajo: trabajoItem) => (
          <article
            className="trabajos-item rounded-xl shadow-xl bg-white
            flex-auto sm:flex-grow-0 
            flex flex-col items-center max-w-sm 
            overflow-hidden cursor-pointer"
          >
            <Link to={trabajo.name}>
              <img
                src={
                  trabajo.imgURL
                    ? process.env.PUBLIC_URL + "/thumbnails/" + trabajo.imgURL
                    : process.env.PUBLIC_URL + "/thumbnails/default.png"
                }
                alt=""
                className="w-full"
              />
            </Link>
            <p className="text-xl text-center py-2">
              {trabajo.name.replace("_", ".")}
            </p>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Trabajos;
