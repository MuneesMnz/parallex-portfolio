import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
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
      <Portfolio />
      <section className="section" id="Contact">
       <Contact/>
      </section>
    </div>
  );
};

export default App;
