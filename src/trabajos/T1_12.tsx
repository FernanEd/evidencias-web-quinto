import HomeBtn from "../components/HomeBtn";
import "./T1_12.css";

function T1_12(props: any) {
  return (
    <main className="min-h-screen bg-blue-300 flex justify-center items-center">
      <HomeBtn />

      <section id="body">
        <header>
          <nav>
            <h1 id="logo">Figaro's 2</h1>
            <ul>
              <li>Gnome</li>
              <li>Among us</li>
              <li className="active-link">Blog</li>
              <li>Memu</li>
              <li>Mews</li>
              <li>Kongtacts</li>
            </ul>
          </nav>
        </header>

        <section className="main-msg">
          <p>
            Latest <span className="highlight">From</span> the{" "}
            <span className="highlight">Blog</span>
          </p>
        </section>

        <section className="menu-grid">
          <div className="menu-grid-item">
            <img
              src="https://www.gannett-cdn.com/presto/2019/10/08/USAT/94fbaca9-bbb8-4447-8e67-c46407c88775-AFP_AFP_1KL2LG.jpg?crop=4522,3010,x0,y0&width=2560"
              alt=""
            />
          </div>
          <div className="menu-grid-item">
            <div className="menu-item-text">
              <h2 className="item-title">Sample text</h2>
              <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eum officiis molestias obcaecati corporis.
              </p>
            </div>
          </div>
          <div className="menu-grid-item">
            <img
              src="https://www.gannett-cdn.com/presto/2019/10/08/USAT/94fbaca9-bbb8-4447-8e67-c46407c88775-AFP_AFP_1KL2LG.jpg?crop=4522,3010,x0,y0&width=2560"
              alt=""
            />
          </div>
          <div className="menu-grid-item">
            <div className="menu-item-text">
              <h2 className="item-title">Sample text</h2>
              <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eum officiis molestias obcaecati corporis.
              </p>
            </div>
          </div>

          <div className="menu-grid-item">
            <div className="menu-item-text">
              <h2 className="item-title">Sample text</h2>
              <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eum officiis molestias obcaecati corporis.
              </p>
            </div>
          </div>
          <div className="menu-grid-item">
            <img
              src="https://www.gannett-cdn.com/presto/2019/10/08/USAT/94fbaca9-bbb8-4447-8e67-c46407c88775-AFP_AFP_1KL2LG.jpg?crop=4522,3010,x0,y0&width=2560"
              alt=""
            />
          </div>
          <div className="menu-grid-item">
            <div className="menu-item-text">
              <h2 className="item-title">Sample text</h2>
              <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eum officiis molestias obcaecati corporis.
              </p>
            </div>
          </div>
          <div className="menu-grid-item">
            <img
              src="https://www.gannett-cdn.com/presto/2019/10/08/USAT/94fbaca9-bbb8-4447-8e67-c46407c88775-AFP_AFP_1KL2LG.jpg?crop=4522,3010,x0,y0&width=2560"
              alt=""
            />
          </div>

          <div className="menu-grid-item">
            <img
              src="https://www.gannett-cdn.com/presto/2019/10/08/USAT/94fbaca9-bbb8-4447-8e67-c46407c88775-AFP_AFP_1KL2LG.jpg?crop=4522,3010,x0,y0&width=2560"
              alt=""
            />
          </div>
          <div className="menu-grid-item">
            <div className="menu-item-text">
              <h2 className="item-title">Sample text</h2>
              <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eum officiis molestias obcaecati corporis.
              </p>
            </div>
          </div>
          <div className="menu-grid-item">
            <img
              src="https://www.gannett-cdn.com/presto/2019/10/08/USAT/94fbaca9-bbb8-4447-8e67-c46407c88775-AFP_AFP_1KL2LG.jpg?crop=4522,3010,x0,y0&width=2560"
              alt=""
            />
          </div>
          <div className="menu-grid-item">
            <div className="menu-item-text">
              <h2 className="item-title">Sample text</h2>
              <p className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eum officiis molestias obcaecati corporis.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default T1_12;
