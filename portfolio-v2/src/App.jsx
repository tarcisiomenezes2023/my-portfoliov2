import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import "./app.scss";

function App() {
  return (
    <div className="app-container">
      <section id="Homepage"> <Hero /> </section>
      <section id="Work"> <Work /> </section>
      <Portfolio />
      <section id="Contact"> <Contact /> </section>
    </div>
  );
}

export default App;