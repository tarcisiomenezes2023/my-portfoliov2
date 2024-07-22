import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./Navbar";
import "./Hero.scss";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Passionate Fullstack Developer 💻",
      "Turning Ideas into Dynamic Digital Experiences 💡",
      "Dedicated to Building High-Performance Applications 💪",
    ],
    loop: true, 
    typeSpeed: 70,
    deleteSpeed: 30,
  });

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="wrapper">
          <div className="textContainer">
            <h2>Hello 👋, I am</h2>
            <h1>Tarcísio Menezes</h1>
            <span>{text} <Cursor cursorStyle='|' /></span>
            
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