import "./Portfolio.scss"


const items = [
  {
    id: 1,
    title: "Apollo",
    img: "./img/ApolloAI.png",
    description: "Apollo is a Environmental Engineering AI is an innovative ChatGPT-based assistant designed specifically for university students. This AI leverages cutting-edge natural language processing to provide real-time support on a wide range of environmental engineering topics.",
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

const Single = ({item}) => {
  return (
    <section>
      {item.title}
    </section>
  )
}
const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
