import Navbar from "./Navbar";
import Typewriter from "./Typewriter";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="wrapper">
          <div className="textContainer">
            <h2>Hello, I am</h2>
            <h1>Tarcísio Menezes</h1>
            <h3><Typewriter text="Frontend and Backend developer" /></h3>
            <div className="buttons">
              <button>See the Latest Works</button>
              <button className="resume">Resume</button>
            </div>
          </div>
          <div className="imageContainer">
            <img src="/img/hero.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
