import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
{/*         <div className="navbar__figure">
          <img src="" alt="logo" className="logo" />
          <p>Robert Cabrera</p>
        </div> */}

        <div className="navbar__links">
          <a href="/" className="navbar__link">Home</a>
          <a href="/#about" className="navbar__link">Sobre mí</a>
          <a href="/#portfolio" className="navbar__link">Portfolio</a>
          <a href="/#contacto" className="navbar__link">Contacto</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar