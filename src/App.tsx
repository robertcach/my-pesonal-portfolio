import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import { Routes, Route } from "react-router";
import { useState } from 'react';

function App() {
/*   const[cursorX,setCursorX] =useState()
  const[cursorY,setCursorY] =useState() */



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
