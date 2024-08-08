import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Passionate Fullstack Developer 💻",
      "Turning Ideas into Dynamic Digital Experiences 💡",
      "Dedicated to Building High-Performance Applications 💪",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 10,
  });

  const handleDownloadCV = () => {
    const CV = 'https://drive.google.com/file/d/16bManq_KUCw9gqjI1FZoGG2Ayxu6vh-A/view?usp=sharing';
    window.open(CV, '_blank');
  }

  return (
      <div className="hero">
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <h2>Hello 👋, I am</h2>
            <h1>Tarcísio Menezes</h1>
            <span>{text} <Cursor cursorStyle="|" /></span>
            <div className="buttons">
              <button>See the Latest Works</button>
              <button className="resume" onClick={handleDownloadCV}>Resume</button>
            </div>
          </motion.div>
          <div className="imageContainer">
            <div className="aura"></div>
            <img src="/img/hero.png" alt="Hero Image" />
          </div>
        </div>
      </div>
  );
};

export default Hero;