import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";

import "./app.scss";

function App() {
  return (
    <div className="app-container">
      <section id="Homepage"> <Hero /> </section>
      <section id="Work"> <Work /> </section>
      <section id="Projects"> <Project1 /> </section>
      <section><Project2 /> </section>
      <section><Project3 /> </section>
      <section id="Contact"> <Contact /> </section>
    </div>
  );
}

export default App;