import NavbarLinks from "../NavbarLinks/NavbarLinks";
import {CgMenuRound} from "react-icons/cg";
import {CgCloseO} from "react-icons/cg"
import { useState } from "react";
import "./MobileNavbar.scss";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const changeViewMenu = () => {
    setOpenMenu(!openMenu)
  }

  const openIcon = <CgMenuRound className="navbar__hamburger" size="30px" color="black" onClick={changeViewMenu} />
  const closeIcon = <CgCloseO className="navbar__hamburger" size="30px" color="black" onClick={changeViewMenu} />

  const closeMobileMenu = () => setOpenMenu(false);

  return (
    <nav className="navbar mobile-nav">
      {openMenu ? closeIcon : openIcon}
      {openMenu && <NavbarLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  )
}

export default MobileNavbar