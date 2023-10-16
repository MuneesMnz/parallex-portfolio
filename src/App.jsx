import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      {/* <Test /> */}
      <section className="section" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="section" id="Services">
        <Parallax type="services" />
      </section>
      <section className="section">
        <Services />
      </section>
      <section className="section" id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section className="section">portfolio1</section>
      <section className="section">portfolio2</section>
      <section className="section">portfolio3</section>
      <section className="section" id="Contact">
        contact
      </section>
    </div>
  );
};

export default App;
