import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/inc/Header";
import Contact from './assets/pages/Contact';
import About from './assets/pages/About';
import Board from './assets/pages/Board';
import Banners from './assets/pages/Banners';
import Gallery from './assets/pages/Gallery';
import Press from './assets/pages/Press';
import Results from './assets/pages/Results';


function App() {
   return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/board" element={<Board />} /> 
        <Route path="/banners" element={<Banners />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/press" element={<Press />} /> 
        <Route path="/results" element={<Results />} />        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
