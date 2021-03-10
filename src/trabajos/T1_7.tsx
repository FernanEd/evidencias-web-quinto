import HomeBtn from "../components/HomeBtn";
import { FaChessKnight, FaMusic, FaGamepad, FaUserAlt } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { MdMovie } from "react-icons/md";

function T1_7(props: any) {
  return (
    <main className="min-h-screen bg-pink-800 flex justify-center items-center">
      <HomeBtn />

      <section className="bg-white p-2 w-full md:rounded md:p-8 md:max-w-xl shadow-lg flex flex-col gap-8 sm:my-4">
        <article>
          <img
            src={process.env.PUBLIC_URL + "/yo3.jpg"}
            alt=""
            className="w-10/12 sm:w-48 mx-auto rounded-full border-4 border-blue-800"
          />
        </article>
        <article>
          <h2 className="text-lg font-bold text-blue-800 uppercase flex gap-2 items-center">
            Sobre mi
            <FaUserAlt />
          </h2>
          <p>
            Mi nombre es{" "}
            <span className="text-blue-800 font-bold">
              Fernando Edmundo Balderas Morán
            </span>
            , tengo 19 años y nací en Tampico, Tamaulipas. Actualmente estoy
            estudiando la universidad y espero en un futuro laborar como
            desarrollador web en el extranjero.
          </p>
        </article>
        <article>
          <h2 className="text-lg font-bold text-green-800 uppercase flex gap-2 items-center">
            Mis hobbies
            <FaChessKnight />
          </h2>
          <ul className="list-disc pl-4">
            <li>Ajedrez</li>
            <li>Cine</li>
            <li>Dibujar</li>
            <li>Escribir</li>
            <li>Musica</li>
            <li>Videojuegos competitivos</li>
          </ul>
        </article>
        <article>
          <h2 className="text-lg font-bold text-red-800 uppercase flex gap-2 items-center">
            Top mis peliculas favoritas
            <BiCameraMovie />
          </h2>
          <ol className="list-decimal pl-4">
            <li>Ciudad de dios</li>
            <li>Scarface</li>
            <li>Memorias de un asesinato</li>
            <li>Leon el profesional</li>
            <li>La vida es bella</li>
          </ol>
        </article>
        <article>
          <h2 className="text-lg font-bold text-yellow-800 uppercase flex gap-2 items-center">
            Top mis series favoritas
            <MdMovie />
          </h2>
          <ol className="list-decimal pl-4">
            <li>Breaking Bad</li>
            <li>Better Call Saul</li>
            <li>Dr House</li>
            <li>Sillicon Valley</li>
            <li>Out there</li>
          </ol>
        </article>
        <article>
          <h2 className="text-lg font-bold text-purple-800 uppercase flex gap-2 items-center">
            Top mis albumes favoritos
            <FaMusic />
          </h2>
          <ol className="list-decimal pl-4">
            <li>Gorillaz - Plastic Beach</li>
            <li>Rainbow - Ritchie Blackmore's Rainbow</li>
            <li>Dire Straits - Brothers in Arms</li>
            <li>Green tea - Samurai</li>
            <li>Alan Parsons Project - The Turn Of A Friendly Card</li>
          </ol>
        </article>
        <article>
          <h2 className="text-lg font-bold text-gray-800 uppercase flex gap-2 items-center">
            Top mi videojuegos favoritos
            <FaGamepad />
          </h2>
          <ol className="list-decimal pl-4">
            <li>Terraria</li>
            <li>Pokemon Esmeralda</li>
            <li>Age of Empires II</li>
            <li>Supes Smash Bros Melee</li>
            <li>Team Fortress 2</li>
          </ol>
        </article>
      </section>
    </main>
  );
}

export default T1_7;
