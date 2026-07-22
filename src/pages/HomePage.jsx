import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero'
import Projects from '../Components/Projects';
import Products from '../Components/Products';
import Experience from '../Components/Experience';
import SkillAndCertificate from '../Components/SkillsCertificate';
import Services from '../Components/Service';
import Blogs from '../Components/Blogs';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';


function HomePage() {
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
      <SkillAndCertificate />
      <Services />
      <Blogs />
      <Contact />
      <Footer />  
    </div>
  );
}

export default HomePage
