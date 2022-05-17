import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
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
    </>
  );
}

export default App;
