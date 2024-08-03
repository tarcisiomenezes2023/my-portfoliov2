import "./Project1.scss";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "Working on right now...",
    img: "/img/ApolloAI.png",
    parag: "Introducing Apollo, your dedicated environmental engineering assistant! Apollo is designed to empower students with knowledge and support in the field of environmental engineering. With expertise in sustainable practices, waste management, water resources, and pollution control, Apollo is here to guide you through your studies, answer your questions, and provide valuable insights into creating a greener, more sustainable world.",
  }
]

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.parag}</p>
            <button>See on Github</button>
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


const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
      {items.map((item => (
        <Single item={item} key={item.id}/>
      )))}
    </section>
  )
};

export default Portfolio;
