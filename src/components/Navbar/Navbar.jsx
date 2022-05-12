import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__figure">
        <img src="" alt="logo" className="logo" />
      </div>

      <div>
        <Link to="/home" className="navbar__link">Home</Link>
        <Link to="/#sobre-mi" className="navbar__link">Sobre mí</Link>
        <Link to="/#portfolio" className="navbar__link">Portfolio</Link>
        <Link to="/#contacto" className="navbar__link">Contacto</Link>
      </div>
    </nav>
  )
}

export default Navbar