import React, { useRef } from 'react';

const Projects = () => {
  const scrollRef = useRef(null);
  
  const projects = [
    { title: 'NEO BANK', category: 'Fintech', color: 'from-cyan-500 to-blue-500', year: '2024' },
    { title: 'ORBIT SPACE', category: 'SaaS', color: 'from-purple-500 to-pink-500', year: '2023' },
    { title: 'ECHO STUDIO', category: 'Creative', color: 'from-orange-500 to-red-500', year: '2024' },
    { title: 'QUANTUM LAB', category: 'AI/ML', color: 'from-green-500 to-emerald-500', year: '2023' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Work</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-500" />
        </div>
        
        {/* Horizontal scroll container */}
        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 backdrop-blur p-3 rounded-full hidden group-hover:flex transition-all"
          >
            ←
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="shrink-0 w-[90vw] md:w-[70vw] lg:w-[50vw] group/project cursor-pointer"
              >
                <div className={`bg-linear-to-br ${project.color} p-8 rounded-3xl transform transition-all duration-500 hover:scale-105 hover:rotate-1`}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur">
                      {project.year}
                    </span>
                    <span className="text-4xl opacity-50 group-hover/project:opacity-100 transition">
                      →
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-3">{project.title}</h3>
                  <p className="text-lg opacity-80">{project.category}</p>
                  
                  <div className="mt-8 flex gap-4">
                    <button className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                      Live Demo
                    </button>
                    <button className="px-4 py-2 bg-black/30 rounded-full hover:bg-black/50 transition">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 backdrop-blur p-3 rounded-full hidden group-hover:flex transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;