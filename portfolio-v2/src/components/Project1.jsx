import "./Project1.scss";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "Working on right now...",
    img: "/img/ApolloAI.png",
    parag: "Introducing Apollo, your dedicated environmental engineering assistant! Apollo is designed to empower students with knowledge and support in the field of environmental engineering. Apollo is in development with React 19, Node js and Clerk Auth.",
  }
]

const Single = ({ item }) => {
  return (
    <section>
      <div className="container1">
        <div className="wrapper1">
          <div className="imageContainer1">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer1">
            <h2>{item.title}</h2>
            <p>{item.parag}</p>
            <a href="https://github.com/tarcisiomenezes2023/Apollo_AI/tree/master/environmental_engineering_ai" target="_blank" rel="noopener noreferrer">
              <button>See on Github</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    parag: PropTypes.string.isRequired,
  }).isRequired,
};


const Project1 = () => {
  return (
    <section className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  )
};

export default Project1;