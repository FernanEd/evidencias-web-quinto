import HomeBtn from '../components/HomeBtn';

function T1_7(props: any) {
  return (
    <main className="min-h-screen bg-blue-300 flex justify-center items-center">
      <HomeBtn />

      <section className="bg-white p-2 shadow-lg flex flex-col gap-4">
        <article>
          <h2 className="text-lg font-bold text-blue-800 uppercase">
            Sobre mi
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus repellat quaerat repudiandae exercitationem aut sed
            quod aperiam debitis? Odit accusamus itaque labore, dicta eum
            mollitia placeat dolor repellendus nihil?
          </p>
        </article>
        <article>
          <h2 className="text-lg font-bold text-blue-800 uppercase">
            Mis gustos
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus repellat quaerat repudiandae exercitationem aut sed
            quod aperiam debitis? Odit accusamus itaque labore, dicta eum
            mollitia placeat dolor repellendus nihil?
          </p>
        </article>
        <article>
          <h2 className="text-lg font-bold text-blue-800 uppercase">
            Mi infancia
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus repellat quaerat repudiandae exercitationem aut sed
            quod aperiam debitis? Odit accusamus itaque labore, dicta eum
            mollitia placeat dolor repellendus nihil?
          </p>
        </article>
      </section>
    </main>
  );
}

export default T1_7;
