import "./Project2.scss";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "Contact App",
    img: "/img/Contact-app.jpg",
    parag: "ContactApp is a simple and user-friendly application designed to manage and store contact information efficiently. Made with React Native Expo Go.",
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
            <a href="https://github.com/tarcisiomenezes2023/contact-app" target="blank">
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

const Project2 = () => {
  return (
    <section className="portfolio">
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  )
};

export default Project2;