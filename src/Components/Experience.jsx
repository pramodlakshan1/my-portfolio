import React from 'react';

const Experience = () => {
  const experiences = [
    { year: '2022-2024', role: 'Lead Designer', company: 'Creative Studio', color: 'cyan' },
    { year: '2020-2022', role: 'Frontend Dev', company: 'Tech Corp', color: 'purple' },
    { year: '2018-2020', role: 'Freelancer', company: 'Self-employed', color: 'orange' },
  ];

  return (
    <section id="experience" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-right">
          Journey
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Timeline</span>
        </h2>
        
        {/* Horizontal road timeline */}
        <div className="relative">
          {/* Road line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />
          
          <div className="flex flex-col md:flex-row justify-between gap-8 relative">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex-1 text-center relative group">
                {/* Dot on road */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-black shadow-lg group-hover:scale-150 transition`} />
                
                {/* Card above/below alternating */}
                <div className={`mt-12 md:mt-0 ${idx % 2 === 0 ? 'md:-translate-y-32' : 'md:translate-y-32'} transform group-hover:scale-105 transition`}>
                  <div className="bg-gray-900/80 backdrop-blur rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition">
                    <div className="text-cyan-400 text-sm mb-2">{exp.year}</div>
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
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

export default Experience;