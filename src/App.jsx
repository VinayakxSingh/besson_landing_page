import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Logo from './components/Logo';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-black min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1">
          <Hero />
          <Logo />
          <About />
          <SocialLinks />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;