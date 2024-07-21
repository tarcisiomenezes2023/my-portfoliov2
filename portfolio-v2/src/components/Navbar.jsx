import "./Navbar.scss"
import Sidebar from "./siderbar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Tarcísio Menezes</span>
        <div className="social">
          <a href="https://github.com/tarcisiomenezes2023" target="blank"><img src="/img/github1.png" alt="Github" /></a>
          <a href="https://www.linkedin.com/in/tarc%C3%ADsio-menezes-03b8a0233/" target="blank"><img src="/img/linkedin1.png" alt="Linkedin" /></a>
          <a href="https://www.instagram.com/tarcisio.menezes19/" target="blank"><img src="/img/instagram1.png" alt="Instagram" /></a>
          <a href="https://www.facebook.com/profile.php?id=100092629518329" target="blank"><img src="/img/facebook2.png" alt="Facebook" /></a>
          <a href="mailto:tarcisiomenezes2019@hotmail.com" target="blank"><img src="/img/outlook1.png" alt="Email" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;