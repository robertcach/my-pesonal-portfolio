import {motion} from "framer-motion";
import { Link } from "react-router-dom";

type NavarProps = {
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}

const NavbarLinks = (props: NavarProps): JSX.Element  => {
  const animateFrom = {opacity: 0, y:-40}
  const animateTo = {opacity: 1, y:0}

  return (
    <ul className="navbar__ul">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        className="navbar__li"
        onClick={() => props?.isMobile && props.closeMobileMenu?.()}>
        <Link to="/" className="navbar__link">Inicio</Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        className="navbar__li"
        onClick={() => props?.isMobile && props.closeMobileMenu?.()}>
        <a href="/#about" className="navbar__link">Sobre mí</a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.20}}
        className="navbar__li"
        onClick={() => props?.isMobile && props.closeMobileMenu?.()}>
        <a href="/#portfolio" className="navbar__link">Portfolio</a>
      </motion.li>

      {/* <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        className="navbar__li"
        onClick={() => props?.isMobile && props.closeMobileMenu?.()}>
        <a href="/#contacto" className="navbar__link">Contacto</a>
      </motion.li> */}
    </ul>
  )
}

export default NavbarLinks;