import React from 'react';

// Production-ready dataset completely isolated from view logic
const SKILL_CATEGORIES = [
  {
    id: 'cat-1',
    title: 'Backend Architecture',
    accent: 'from-emerald-500/20 to-emerald-400/5 text-emerald-400 border-emerald-500/20',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices']
  },
  {
    id: 'cat-2',
    title: 'Frontend & Apps',
    accent: 'from-cyan-500/20 to-cyan-400/5 text-cyan-400 border-cyan-500/20',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Flutter']
  },
  {
    id: 'cat-3',
    title: 'Cloud & Database',
    accent: 'from-purple-500/20 to-purple-400/5 text-purple-400 border-purple-500/20',
    skills: ['MongoDB Atlas', 'AWS S3', 'SQL', 'Docker', 'Git / GitHub', 'Vercel']
  }
];

const CERTIFICATES = [
  {
    id: 'cert-1',
    title: 'BSc (Hons) in Computing',
    issuer: 'ESOFT Metro Campus',
    date: '2025',
    verificationUrl: '#', 
    badgeColor: 'text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 'cert-2',
    title: 'Software Engineer Internship (6-Month)',
    issuer: 'Gamage Recruiters',
    date: '2026',
    verificationUrl: '#',
    badgeColor: 'text-purple-400 bg-purple-500/10'
  }
];

const SkillAndCertificate = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      {/* Background Graphic Ambient Accent */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 block">
            Capabilities & Credentials
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Skills & 
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"> Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Master Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Skills Ecosystem (Takes 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-mono text-gray-400 tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
              Technical Ecosystem
            </h3>

            <div className="space-y-6">
              {SKILL_CATEGORIES.map((category) => (
                <div 
                  key={category.id}
                  className={`bg-gradient-to-br ${category.accent.split(' ')[0]} ${category.accent.split(' ')[1]} border ${category.accent.split(' ')[3]} rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01]`}
                >
                  <h4 className={`text-lg font-bold mb-4 ${category.accent.split(' ')[2]}`}>
                    {category.title}
                  </h4>
                  
                  {/* Skill Badge Pill Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3.5 py-1.5 text-sm bg-black/40 border border-gray-800/80 text-gray-300 rounded-xl font-medium transition-all duration-300 hover:border-gray-600 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Certifications Timeline (Takes 5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-mono text-gray-400 tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              Verified Credentials
            </h3>

            <div className="space-y-6">
              {CERTIFICATES.map((cert) => (
                <div 
                  key={cert.id}
                  className="group/cert relative bg-gradient-to-b from-gray-900/50 to-gray-950/80 border border-gray-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-gray-700 shadow-xl"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className={`inline-block text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${cert.badgeColor}`}>
                        Verified
                      </span>
                      <h4 className="text-lg font-bold tracking-tight text-white/90 group-hover/cert:text-white mt-2 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-400 font-medium mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2.5 py-1 rounded-md shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {/* Clean verification CTA anchor */}
                  <div className="pt-4 border-t border-gray-900/60 flex justify-end">
                    <a 
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link"
                    >
                      View Credential 
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillAndCertificate;