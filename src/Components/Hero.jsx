import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const roles = useMemo(() => [
    'Software Engineer', 
    'Web Developer', 
    'Mobile App Developer', 
    'Fullstack developer'
  ], []);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Elite Frame-Perfect Typewriter Logic
  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];

    const determineSpeed = () => {
      if (isDeleting) return 40; // Quick erase
      if (displayedText === currentFullText) return 2000; // Hold full text
      return 100; // Natural typing speed
    };

    const handleType = () => {
      if (!isDeleting && displayedText !== currentFullText) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === currentFullText) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    timer = setTimeout(handleType, determineSpeed());
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white px-4 sm:px-6 selection:bg-cyan-500/30">
      
      {/* High-Performance Ambient Background (No layout repaints) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-gray-900/40 via-black to-black pointer-events-none" />
      
      {/* Structural Interactive Layout Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Modern Status Pill */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wide backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for freelance contracts
        </div>

        {/* High-Contrast Bold Typography */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
          <span className="bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent block">
            I Create Iconic
          </span>
          <span className="relative inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600">
            Digital Experiences
            <div className="absolute -inset-x-8 top-0 h-full bg-cyan-500/10 blur-3xl -z-10 rounded-full" />
          </span>
        </h1>

        {/* Monospaced, Zero-Shift Text Area */}
        <div className="text-lg sm:text-2xl text-gray-300 mb-10 min-h-[40px] flex items-center justify-center font-medium">
          <span>👋 I'm Pramod Lakshan, &nbsp;</span>
          <span className="text-cyan-400 font-mono border-r-2 border-cyan-400 animate-[pulse_1s_infinite] pr-1">
            {displayedText}
          </span>
        </div>

        {/* Clean, Polished Copywriting */}
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mb-12 font-normal">
          No templates, no generic components — just bold, bespoke, and user-first digital engineering designed to leave an unforgettable mark on the web.
        </p>

        {/* Clean Call To Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}  
            className="group relative px-8 py-3.5 bg-white text-black font-semibold rounded-full overflow-hidden shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">See My Work</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="px-8 py-3.5 border border-gray-800 bg-gray-950/40 backdrop-blur-md text-gray-300 hover:text-white rounded-full hover:bg-gray-900 hover:border-gray-700 transition-all active:scale-[0.98]"
          >
            Let's talk 💬
          </button>
        </div>
      </div>

      {/* Modern Low-Profile Scroll Track Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60 hidden md:block">
        <div className="w-[24px] h-[40px] border border-gray-700 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-[bounce_2s_infinite]" />
        </div>
      </div>

    </section>
  );
};

export default Hero;