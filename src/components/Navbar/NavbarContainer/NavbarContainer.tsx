import './NavbarContainer.scss';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import DesktopNavbar from '../DesktopNavbar/DesktopNavbar';

const Navbar = () => {
  return (
    <header>
      <>
        <DesktopNavbar />
        <MobileNavbar />
      </>
    </header>
  )
}

export default Navbar