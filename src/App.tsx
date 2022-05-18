import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavbarContainer/NavbarContainer';
import Home from './views/Home/Home';
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />

      <div className="cursor"></div>
    </>
  );
}

export default App;
