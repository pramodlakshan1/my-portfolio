import React from 'react';

const SERVICES_DATA = [
  {
    id: 'srv-1',
    num: '01',
    title: 'Custom Web Engineering',
    tagline: 'Bespoke Digital Ecosystems',
    description: 'Engineering lighting-fast, highly secure web applications tailored perfectly to your specific operational workflows. No templates—just pristine architecture optimized completely for scalability, search visibility, and maximum user engagement.',
    deliverables: ['Single Page Apps (SPAs)', 'SaaS Platforms', 'Headless CMS Architecture'],
    tech: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    glow: 'from-cyan-500/20 via-transparent to-transparent',
    borderHover: 'hover:border-cyan-500/30'
  },
  {
    id: 'srv-2',
    num: '02',
    title: 'E-Commerce Solutions',
    tagline: 'High-Conversion Architecture',
    description: 'Building robust, transaction-optimized digital storefronts with seamless cloud assets, lightning-fast product filtering pipelines, secure payment gateways, and highly intuitive inventory structures.',
    deliverables: ['Custom Storefronts', 'Payment Engine Integration', 'Inventory Management'],
    tech: ['Spring Boot', 'React', 'MongoDB Atlas', 'AWS S3'],
    glow: 'from-purple-500/20 via-transparent to-transparent',
    borderHover: 'hover:border-purple-500/30'
  },
  {
    id: 'srv-3',
    num: '03',
    title: 'Mobile Applications',
    tagline: 'Native Feel, Cross-Platform Efficiency',
    description: 'Designing and deploying fluid, high-performance mobile applications that deliver native performance, flawless gestural responsiveness, and immersive offline-first experiences across iOS and Android.',
    deliverables: ['Cross-Platform Apps', 'UI/UX Mobile Prototyping', 'REST API Engines'],
    tech: ['Flutter', 'Dart', 'Node.js', 'Firebase'],
    glow: 'from-orange-500/20 via-transparent to-transparent',
    borderHover: 'hover:border-orange-500/30'
  },
  {
    id: 'srv-4',
    num: '04',
    title: 'Desktop Applications',
    tagline: 'Robust Machine Performance',
    description: 'Crafting reliable enterprise-grade desktop software engineered to handle intense, local processor tasks, smooth file system interaction, and stable multi-threaded hardware operations.',
    deliverables: ['Cross-Platform Desktop Software', 'System Automation Tools', 'Hardware Interfacing'],
    tech: ['Java', 'JavaFX', 'SQLite', 'Spring Framework'],
    glow: 'from-emerald-500/20 via-transparent to-transparent',
    borderHover: 'hover:border-emerald-500/30'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden selection:bg-purple-500/30">
      
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Dual Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT SIDE: Sticky Header Control Panel (Stays fixed during desktop scroll) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 block">
                Expertise & Offerings
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Engineered 
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent block">Solutions</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm font-normal">
              Transforming complex business conceptual models into beautiful, maintainable production software infrastructure.
            </p>
          </div>

          {/* RIGHT SIDE: Interactive Stacked Service Cards Deck */}
          <div className="lg:col-span-8 space-y-8">
            {SERVICES_DATA.map((service) => (
              <div 
                key={service.id}
                className={`relative group bg-gradient-to-b from-gray-950 to-black border border-gray-900/80 rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden shadow-2xl ${service.borderHover}`}
                style={{ contentVisibility: 'auto' }}
              >
                {/* Visual Ambient Internal Radial Glow Accent */}
                <div className={`absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.glow} blur-[80px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Structural Grid Content */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  <div className="space-y-4 max-w-xl">
                    {/* Number & Tagline Banner */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-gray-600 tracking-wider">
                        {service.num}
                      </span>
                      <span className="text-xs font-mono tracking-wider text-cyan-400/90 uppercase">
                        {service.tagline}
                      </span>
                    </div>

                    {/* Service Main Title */}
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    {/* Deep Feature Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Micro Core Deliverables Bullet List */}
                    <div className="pt-2">
                      <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {service.deliverables.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="w-1 h-1 bg-purple-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Core Action Asset Grouping (Tech stack mapping) */}
                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 md:mt-2 shrink-0">
                    {service.tech.map((technology, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="text-[11px] font-mono tracking-wide bg-gray-900/60 border border-gray-800 text-gray-400 px-3 py-1 rounded-lg group-hover:border-gray-700 group-hover:text-gray-300 transition-colors"
                      >
                        {technology}
                      </span>
                    ))}
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

export default Services;