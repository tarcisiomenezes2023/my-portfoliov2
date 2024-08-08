import "./Project1.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Working on right now...",
    img: "/img/ApolloAI.png",
    parag: "Introducing Apollo, your dedicated environmental engineering assistant! Apollo is designed to empower students with knowledge and support in the field of environmental engineering. Apollo is in development with React 19, Node js and Clerk Auth.",
    link: "https://github.com/tarcisiomenezes2023/Apollo_AI/tree/master/environmental_engineering_ai",
  },
  {
    id: 1,
    title: "Contact App",
    img: "/img/Contact-app.jpg",
    parag: "ContactApp is a simple and user-friendly application designed to manage and store contact information efficiently. Made with React Native Expo Go.",
    link: "https://github.com/tarcisiomenezes2023/contact-app",
  },
  {
    id: 1,
    title: "SimpleCal",
    img: "/img/Calendar-app.jpg",
    parag: "SimpleCal is an easy-to-use calendar application designed to help you stay organized and manage your schedule efficiently. With a straightforward and intuitive interface, users can quickly add, edit, and delete events.",
    link: "https://github.com/tarcisiomenezes2023/calendar_app",
  },
];

const Single = ({ item }) => (
  <motion.section
    variants={variants}
    initial="initial"
    animate="animate"
    className="single-item"
  >
    <div className="container1">
      <div className="wrapper1">
        <div className="imageContainer1">
          <img src={item.img} alt="" />
        </div>
        <div className="textContainer1">
          <h2>{item.title}</h2>
          <p>{item.parag}</p>
          <a href={item.link} target="blank">
            <button>See on Github</button>
          </a>
        </div>
      </div>
    </div>
  </motion.section>
);

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    parag: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const variants = {
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.1,
    },
  },
};

const secondVariants = {
  initial: {
    x: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.1,
    },
  },
};

const Project1 = () => {
  return (
    <section className="portfolio">
      <div className="progress">
        <motion.h1 variants={variants} initial="initial" animate="animate">
          Featured Works
        </motion.h1>
        <motion.div className="progressBar" variants={secondVariants} initial="initial" animate="animate"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Project1;