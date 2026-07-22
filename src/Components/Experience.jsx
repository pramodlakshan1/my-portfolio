import React from 'react';

const TIMELINE_DATA = [
  { 
    id: 'exp-1',
    year: '2022-2024', 
    role: 'Lead Designer', 
    company: 'Creative Studio',
    variant: 'cyan'
  },
  { 
    id: 'exp-2',
    year: '2020-2022', 
    role: 'Frontend Dev', 
    company: 'Tech Corp',
    variant: 'purple'
  },
  { 
    id: 'exp-3',
    year: '2018-2020', 
    role: 'Freelancer', 
    company: 'Self-employed',
    variant: 'orange'
  },
];

const THEME_MAP = {
  cyan: {
    dot: 'bg-cyan-500 ring-cyan-500/20',
    border: 'hover:border-cyan-500/40',
    accent: 'text-cyan-400'
  },
  purple: {
    dot: 'bg-purple-500 ring-purple-500/20',
    border: 'hover:border-purple-500/40',
    accent: 'text-purple-400'
  },
  orange: {
    dot: 'bg-orange-500 ring-orange-500/20',
    border: 'hover:border-orange-500/40',
    accent: 'text-orange-400'
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6 bg-black text-white selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 md:mb-32 text-center">
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3">
            Professional Path
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
            Journey 
            <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent"> Timeline</span>
          </h2>
        </div>
        
        {/* Timeline Container */}
        <div className="relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-gray-800 before:via-gray-700 before:to-gray-800 before:-translate-x-1/2 space-y-12 md:space-y-0">
          
          {TIMELINE_DATA.map((exp, idx) => {
            const theme = THEME_MAP[exp.variant] || THEME_MAP.cyan;
            const isLeft = idx % 2 === 0;
            
            return (
              <div 
                key={exp.id} 
                className="relative md:grid md:grid-cols-2 md:gap-16 items-center group pl-10 md:pl-0 md:mb-24 last:mb-0"
                style={{ contentVisibility: 'auto', containIntrinsicSize: '200px' }}
              >
                
                {/* Central Indicator Dot */}
                <div className={`absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10 w-3 h-3 rounded-full border-2 border-black ring-4 transition-all duration-500 group-hover:scale-125 ${theme.dot}`} />

                {/* Left Side Slot (Desktop Only) */}
                <div className="hidden md:block">
                  {isLeft && (
                    <div className="transition-all duration-500 transform group-hover:-translate-y-1">
                      <TimelineCard exp={exp} theme={theme} />
                    </div>
                  )}
                </div>

                {/* Right Side Slot (Mobile: Holds EVERYTHING | Desktop: Holds odd items only) */}
                <div className={isLeft ? 'md:hidden' : 'md:col-start-2'}>
                  <div className="transition-all duration-500 transform group-hover:-translate-y-1">
                    <TimelineCard exp={exp} theme={theme} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ exp, theme }) => (
  <div className={`relative bg-linear-to-b from-gray-900/40 to-gray-950/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-900/60 transition-all duration-500 ${theme.border} shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
    <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-transparent to-white/[0.02] pointer-events-none" />

    <div className="flex flex-col gap-1 relative z-10">
      <time className="font-mono text-xs font-semibold tracking-wider text-gray-500 mb-2 block">
        {exp.year}
      </time>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
        {exp.role}
      </h3>
      <p className={`text-sm md:text-base font-medium text-gray-400 group-hover:${theme.accent} transition-colors duration-300`}>
        {exp.company}
      </p>
    </div>
  </div>
);

export default Experience;