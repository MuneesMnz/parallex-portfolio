import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <a href="#">
          <Navbar />
        </a>
      </section>
      <section>
        <a href="#">Paralex</a>
      </section>
      <section>
        <a href="#">services</a>
      </section>
      <section>
        <a href="#">paralex</a>
      </section>
      <section>
        <a href="#">portfolio1</a>
      </section>
      <section>
        <a href="#">portfolio2</a>
      </section>
      <section>
        <a href="#">portfolio3</a>
      </section>
      <section>
        <a href="#">contact</a>
      </section>
    </div>
  );
};

export default App;
