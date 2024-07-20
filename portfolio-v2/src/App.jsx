import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import "./app.scss";

function App() {
  return (
    <div className="app-container">
      <section> <Hero /> </section>
      <section> <Who /> </section>
      <section> <Work /> </section>
      <section> <Project1 /> </section>
      <section> <Project2 /> </section>
      <section> <Project3 /> </section>
      <section> <Project4 /> </section>
      <section> <Contact /> </section>
    </div>
  );
}

export default App;
