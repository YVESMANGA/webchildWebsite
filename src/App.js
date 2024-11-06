import React from 'react';
import Services from './components/Services';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;