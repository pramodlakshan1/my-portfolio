import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-950 py-12 px-4 sm:px-6 text-gray-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright Stamp */}
        <div>
          <p>© {currentYear} Pramod Lakshan. All rights reserved.</p>
        </div>

        {/* Center/Right Side: Fast Navigation Action Hooks */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          <button onClick={() => handleScroll('hero')} className="hover:text-white transition-colors">Top</button>
          <button onClick={() => handleScroll('experience')} className="hover:text-white transition-colors">Journey</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-white transition-colors">Work</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-white transition-colors">Capabilities</button>
          <button onClick={() => handleScroll('services')} className="hover:text-white transition-colors">Services</button>
          <button onClick={() => handleScroll('blogs')} className="hover:text-white transition-colors">Writing</button>
        </div>

        {/* Built Metric Trace */}
        <div className="text-[10px] text-gray-600 hidden lg:block">
          <span>Engineered via React & Tailwind</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;