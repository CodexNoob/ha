import React, { useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Product darkMode={darkMode} />
      <Protocol darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <Testimonial darkMode={darkMode} />
      <Certificate darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
