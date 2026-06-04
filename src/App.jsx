import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './components/Projects';
import Products from './components/Products';
import Experience from './components/Experience';
// import SkillsCertificates from './components/SkillsCertificates';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Custom cursor follower */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none transition-all duration-300 z-0"
        style={{ 
          left: cursorPosition.x - 192, 
          top: cursorPosition.y - 192 
        }}
      />
      
      <Navbar />
      <Hero />
      <Projects />
      <Products />
      <Experience /> 
      {/* <SkillsCertificates />
      <Services />
      <Contact />
      <Footer />  */}
    </div>
  );
}

export default App
