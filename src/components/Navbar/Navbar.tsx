import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
{/*         <div className="navbar__figure">
          <img src="" alt="logo" className="logo" />
          <p>Robert Cabrera</p>
        </div> */}

        <div>
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/#sobre-mi" className="navbar__link">Sobre mí</Link>
          <Link to="/#portfolio" className="navbar__link">Portfolio</Link>
          <Link to="/#contacto" className="navbar__link">Contacto</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar