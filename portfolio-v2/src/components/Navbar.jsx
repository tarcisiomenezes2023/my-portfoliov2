import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Tarcísio Menezes</span>
        <div className="social">
          <a href="#"><img src="/img/github1.png" alt="Github" /></a>
          <a href="#"><img src="/img/linkedin1.png" alt="Linkedin" /></a>
          <a href="#"><img src="/img/instagram1.png" alt="Instagram" /></a>
          <a href="#"><img src="/img/facebook2.png" alt="Facebook" /></a>
          <a href="#"><img src="/img/outlook1.png" alt="Outlook" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

