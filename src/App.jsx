import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/inc/Header";
import Contact from './assets/pages/Contact';


function App() {
   return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
