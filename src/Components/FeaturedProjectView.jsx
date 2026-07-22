import React from 'react';

// Production-grade data contract (Separate data from layout)
const FEATURED_PROJECT = {
  title: "Computer Parts E-Commerce Platform",
  softwareType: "Full-Stack Web Application",
  description: "A high-performance e-commerce engine designed to handle real-time inventory tracking, multi-category structural indexing, and zero-latency file uploads for modern hardware distribution channels.",
  problemSolved: "Traditional hardware storefronts suffer from inventory desynchronization and sluggish media loading. This platform bridges that gap by implementing reactive state management and direct, secure cloud asset storage streaming, reducing customer dropout rates by 35%.",
  liveUrl: "https://your-live-link.web.app",
  githubUrl: "https://github.com/your-repo",
  tags: ["React", "Spring Boot", "AWS S3", "Tailwind CSS", "MongoDB"],
  images: {
    desktop: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80", // Replace with your actual project screenshots
    mobile: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"     // Replace with your actual project screenshots
  }
};

const FeaturedProjectView = () => {
  const proj = FEATURED_PROJECT;

  return (
    <section id="featured-work" className="py-24 md:py-32 px-4 sm:px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Context Flag */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-[0.2em] text-cyan-400 uppercase block mb-2">
            Featured Case Study
          </span>
          <div className="h-px w-12 bg-cyan-500/50" />
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Metadata & Technical Storytelling (7 cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Header Block */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-mono font-medium rounded-full bg-gray-900 border border-gray-800 text-gray-400 mb-3">
                {proj.softwareType}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white/90">
                {proj.title}
              </h3>
            </div>

            {/* Description Card */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              {proj.description}
            </p>

            {/* Problem Space Callout (High UX Importance) */}
            <div className="bg-linear-to-r from-gray-950 to-gray-900 border border-gray-900 rounded-2xl p-6 shadow-xl">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-2">
                <span>🛡️</span> Real-World Problem Solved
              </h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {proj.problemSolved}
              </p>
            </div>

            {/* Tech Ecosystem Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {proj.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-gray-900/40 text-gray-300 border border-gray-800/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold text-sm tracking-wide px-6 py-3 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg shadow-white/5 active:scale-95"
              >
                <span>Live Review</span>
                <span className="text-xs">🔗</span>
              </a>
              <a 
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-gray-400 hover:text-white font-semibold text-sm tracking-wide px-5 py-3 rounded-xl transition-colors border border-gray-900 hover:border-gray-800 flex items-center gap-2"
              >
                <span>Source Code</span>
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Mockup Presentation (5 cols on Desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-112.5 aspect-square lg:aspect-auto lg:h-125">
              
              {/* Outer Glow Backdrop */}
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -z-10" />

              {/* Desktop Frame Canvas */}
              <div className="absolute top-0 left-0 w-[85%] aspect-16/10 bg-gray-950 rounded-xl border border-gray-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] group/desktop">
                {/* Browser Top Window Bar Decoration */}
                <div className="h-6 bg-gray-900/80 border-b border-gray-800 flex items-center gap-1.5 px-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <img 
                  src={proj.images.desktop} 
                  alt={`${proj.title} Desktop Showcase`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Mobile Device Frame Mockup */}
              <div className="absolute bottom-4 right-0 w-[32%] aspect-9/19 bg-black rounded-[2.5rem] border-4 border-gray-800 shadow-[0_25px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-500 hover:scale-105 group/mobile">
                {/* Phone Speaker Notch Decoration */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-20" />
                <img 
                  src={proj.images.mobile} 
                  alt={`${proj.title} Mobile Responsive Showcase`}
                  className="w-full h-full object-cover object-top relative z-10"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectView;