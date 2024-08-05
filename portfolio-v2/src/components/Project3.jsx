import "./Project3.scss";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "SimpleCal",
    img: "/img/Calendar-app.jpg",
    parag: "SimpleCal is an easy-to-use calendar application designed to help you stay organized and manage your schedule efficiently. With a straightforward and intuitive interface, users can quickly add, edit, and delete events.",
  }
]

const Single = ({ item }) => {
  return (
    <section>
      <div className="container2">
        <div className="wrapper2">
          <div className="imageContainer2">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer2">
            <h2>{item.title}</h2>
            <p>{item.parag}</p>
            <a href="https://github.com/tarcisiomenezes2023/calendar_app/tree/main/calendario-app/calender-app" target="blank">
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


const Project3 = () => {
  return (
    <section className="portfolio">
      <div className="space2"></div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  )
};

export default Project3;
