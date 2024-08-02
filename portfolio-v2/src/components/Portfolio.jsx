import { useRef } from "react";
import "./Portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion";
import PropTypes from 'prop-types';

const items = [
  {
    id: 1,
    title: "Working on right now...",
    img: "./img/ApolloAI.png",
    description: "Apollo is an Environmental Engineering AI, an innovative ChatGPT-based assistant designed specifically for university students. This AI leverages cutting-edge natural language processing to provide real-time support on a wide range of environmental engineering topics.",
  },
  {
    id: 2,
    title: "Contact App",
    img: "./img/Contact-app.jpg",
    description: "Designed to keep all your important contacts organized and easily accessible. With a user-friendly interface, you can effortlessly add, edit, and manage your contact information.",
  },
  {
    id: 3,
    title: "Calendar App",
    img: "./img/Calendar-app.jpg",
    description: "A simple Calendar App designed to help you manage your schedule effortlessly. With a clean and intuitive interface, this app allows you to quickly add, edit, and view events and appointments.",
  }
];

const Single = ({ item }) => {
  return (
    <section>
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} />
      <p>{item.description}</p>
    </section>
  )
}

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio;
