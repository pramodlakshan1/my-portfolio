import React, { useRef } from 'react';
import { useNavigate } from 'react-router'; // Correct hook for functional navigation

const Projects = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // Initialize the navigation router hook

  const projects = [
    {
      id: 'neo-bank', // Slug matched to dynamic parameter routing
      title: 'NEO BANK',
      category: 'Fintech Platform',
      year: '2024',
      description: 'A next-generation digital banking experience engineered with high-throughput microservices and real-time ledger accounting.',
      technologies: ['React', 'Node.js', 'Spring Boot', 'MongoDB'],
      accentColor: 'border-cyan-500/30 hover:border-cyan-400 group-hover/card:shadow-cyan-500/10',
      tagStyle: 'text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 'orbit-space',
      title: 'ORBIT SPACE',
      category: 'SaaS Workspace',
      year: '2023',
      description: 'A cloud-native intuitive team workspace combining document collaboration, custom kanban streams, and metrics reporting dashboards.',
      technologies: ['Next.js', 'Tailwind CSS', 'AWS S3', 'Socket.io'],
      accentColor: 'border-purple-500/30 hover:border-purple-400 group-hover/card:shadow-purple-500/10',
      tagStyle: 'text-purple-400 bg-purple-500/10'
    },
    {
      id: 'echo-studio',
      title: 'ECHO STUDIO',
      category: 'Creative Hub',
      year: '2024',
      description: 'An AI-powered automated translation and video audio sync engine providing real-time lip-synchronization profiling.',
      technologies: ['React', 'Python', 'FastAPI', 'Llama 3'],
      accentColor: 'border-orange-500/30 hover:border-orange-400 group-hover/card:shadow-orange-500/10',
      tagStyle: 'text-orange-400 bg-orange-500/10'
    },
    {
      id: 'quantum-lab',
      title: 'QUANTUM LAB',
      category: 'AI/ML Suite',
      year: '2023',
      description: 'Predictive statistical analytics application providing deep neural network abstractions for data pipelines.',
      technologies: ['TypeScript', 'Node.js', 'Docker', 'TensorFlow'],
      accentColor: 'border-emerald-500/30 hover:border-emerald-400 group-hover/card:shadow-emerald-500/10',
      tagStyle: 'text-emerald-400 bg-emerald-500/10'
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -width * 0.75 : width * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Layout with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Featured
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-xl border border-gray-800 bg-gray-950/50 hover:bg-gray-900 text-gray-400 hover:text-white transition-all active:scale-95"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-xl border border-gray-800 bg-gray-950/50 hover:bg-gray-900 text-gray-400 hover:text-white transition-all active:scale-95"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Dynamic Horizontal Scroll Wrapper */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory no-scrollbar"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="shrink-0 w-[88vw] sm:w-[60vw] lg:w-[38vw] snap-start group/card"
              >
                <div className={`h-full flex flex-col justify-between bg-gradient-to-b from-gray-900/60 to-gray-950/90 border rounded-3xl p-6 md:p-8 transition-all duration-500 group-hover/card:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${project.accentColor}`}>
                  
                  <div>
                    {/* Category & Year */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${project.tagStyle}`}>
                        {project.category}
                      </span>
                      <span className="text-sm font-mono text-gray-500">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-white group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-gray-400 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Project Introduction */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-normal line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges & Interactive Learn More CTA */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="text-xs bg-gray-900 border border-gray-800 text-gray-400 px-2.5 py-1 rounded-md font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Fixed Core CTA Action Row */}
                    <div className="pt-4 border-t border-gray-900 flex items-center justify-between">
                      <button 
                        onClick={() => navigate(`/project/${project.id}`)} 
                        className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white group/btn transition-colors"
                      >
                        <span>Learn More</span> 
                        <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1 text-base">
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;