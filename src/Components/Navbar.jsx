import React, { useState, useEffect } from 'react';
import ThemeButton from './ThemeButton';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'projects', label: 'Work', icon: '⚡' },
  // { id: 'products', label: 'Products', icon: '🛒' },
  { id: 'experience', label: 'Journey', icon: '📅' },
  { id: 'skills', label: 'Skills', icon: '🎯' },
  { id: 'services', label: 'Services', icon: '✨' },
  { id: 'blogs', label: 'Articles', icon: '📝' },
  { id: 'contact', label: 'Connect', icon: '💬' }
];

const Navbar = () => {
  const [active, setActive] = useState('hero');

  // Intersection Observer to automatically light up items on scroll
  useEffect(() => {
    const observers = [];
    
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(item.id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );

      observer.observe(element);
      observers.push({ observer, element });
    });

    return () => {
      observers.forEach(({ observer, element }) => observer.unobserve(element));
    };
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    // NOTE: In Vite/React development, files in the 'public' directory are served from the root path '/'
    link.href = '/Pramod_Lakshan.pdf'; 
    link.download = 'Pramod_Lakshan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      {/* Desktop Navigation Dock System */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-900 px-3 py-2 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <div className="flex gap-1.5 items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                    isActive ? 'text-cyan-400 bg-gray-900/60' : 'text-gray-500 hover:text-gray-200'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  
                  <span className="text-xs font-semibold tracking-wide font-mono hidden group-hover:inline-block transition-opacity duration-300">
                    {item.label}
                  </span>

                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Interaction Bottom Dock Layer */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="bg-black/70 backdrop-blur-xl rounded-full border border-gray-900/80 px-2 py-2 flex justify-around items-center shadow-2xl">
          {NAV_ITEMS.filter(item => ['hero', 'projects', 'skills', 'services', 'contact'].includes(item.id)).map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`p-3 rounded-full text-xl transition-all duration-300 ${
                  isActive ? 'text-cyan-400 bg-gray-900/50 scale-105' : 'text-gray-500'
                }`}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* The Global Theme Button Switcher */}
        <button 
          onClick={handleResumeDownload}
          className="bg-white text-black text-xs font-mono font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-xl hover:bg-gray-100 active:scale-95 transition-all flex items-center gap-2 border border-gray-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-800"
        >
          <span>Get Resume</span>
          <span className="text-gray-400 dark:text-zinc-500">→</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;