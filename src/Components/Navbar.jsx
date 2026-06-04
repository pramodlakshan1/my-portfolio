import React, { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Work', icon: '⚡' },
    { id: 'products', label: 'Products', icon: '🛒' },
    { id: 'experience', label: 'Journey', icon: '📅' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'services', label: 'Services', icon: '✨' },
    { id: 'contact', label: 'Connect', icon: '💬' }
  ];

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop bottom dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-cyan-500/30 px-4 py-2 shadow-2xl">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
                  active === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className={`text-sm transition-all duration-300 ${
                    hovered === item.id || active === item.id ? 'opacity-100 w-auto ml-0' : 'opacity-0 w-0 -ml-2'
                  } overflow-hidden`}>
                    {item.label}
                  </span>
                </span>
                {active === item.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="bg-black/80 backdrop-blur-xl rounded-full border border-cyan-500/30 px-4 py-2 flex justify-around">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-2xl transition-all ${active === item.id ? 'text-cyan-400 scale-110' : 'text-gray-500'}`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Download CV Button (floating) */}
      <button 
        onClick={() => alert('CV downloaded!')}
        className="fixed top-6 right-6 z-50 bg-linear-to-r from-cyan-500 to-purple-500 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all group flex items-center gap-2"
      >
        <span>📄</span>
        <span className="group-hover:hidden">CV</span>
        <span className="hidden group-hover:inline">Grab PDF →</span>
      </button>
    </>
  );
};

export default NavBar;