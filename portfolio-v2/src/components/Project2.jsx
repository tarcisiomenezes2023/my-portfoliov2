import "./Project2.scss";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "Contact App",
    img: "/img/Contact-app.jpg",
    parag: "ContactApp is a simple and user-friendly application designed to manage and store contact information efficiently. With a clean and intuitive interface, users can easily add, edit, and delete contacts. Each contact entry includes essential details such as name, phone number, email address, and additional notes.",
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


const Project2 = () => {
  return (
    <section className="portfolio2">
      <div className="progress2">
        <h1>Featured Works</h1>
        <div className="progressBar2"></div>
      </div>
      {items.map((item => (
        <Single item={item} key={item.id}/>
      )))}
    </section>
  )
};

export default Project2;
