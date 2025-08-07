import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portofolio';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;