import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import  { BrowserRouter } from 'react-router-dom';
import OurTeam from './pages/OurTeam.jsx'; 
import About from './pages/About.jsx';    
import Contact from './pages/Contact.jsx';
import 'jquery';
 import 'popper.js';
  import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/our-team" element={<OurTeam/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
