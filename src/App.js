import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ServicesPages from './components/ServicesPages';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WebsiteP from './components/WebsiteP';
import LogosP from './components/LogosP';
import FlyersP from './components/FlyersP';
import About from './components/About';


function App() {
  return (
    <div>

      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          

          <Route path="/services" element={<ServicesPages />} />
          <Route path="/website" element={<WebsiteP />} />
          <Route path="/logos" element={<LogosP />} />
          <Route path="/flyers" element={<FlyersP />} />
          <Route path="/About" element={<About />} />




        </Routes>
        <Footer/>

      </Router>

     
    </div>
  );
}

export default App;