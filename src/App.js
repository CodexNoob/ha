import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Protocol from './components/Protocol';
import Gallery from './components/Gallery';
// import Videos from './components/Video';
import Testimonial from './components/Testimonial';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Protocol />
      <Gallery />
      <Testimonial />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
