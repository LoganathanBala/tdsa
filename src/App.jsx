import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/inc/Header";
import Contact from './assets/pages/Contact';
import About from './assets/pages/About';
import Board from './assets/pages/Board';
import Members from './assets/pages/Members';
import Gallery from './assets/pages/Gallery';
import Press from './assets/pages/Press';
import Results from './assets/pages/Results';
// import Team from './assets/pages/Team';


function App() {
   return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/board" element={<Board />} /> 
        <Route path="/members" element={<Members />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/press" element={<Press />} /> 
        <Route path="/results" element={<Results />} />        
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/team" element={<Team />} /> */}
      </Routes>
    </Router>
     
    </>
  )
}

export default App
