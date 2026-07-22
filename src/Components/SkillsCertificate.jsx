import React from 'react';

import AWSLogo from '../assets/Amazon_Web_Services-Logo.wine.svg';
import GENAILogo from '../assets/GenaiLogo.png'; 

// Isolated Data Architecture
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
    issuer: 'ESOFT Metro Campus / Kingston University',
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

// Production UX Architecture: Rendered with Local Image Assets
const CLOUD_BADGES = [
  {
    id: 'badge-gcp-1',
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    issuer: 'Google Cloud',
    status: 'Verified',
    verificationUrl: 'https://www.skills.google/public_profiles/d0e47ad3-5d4e-47b3-84c6-e2835f368a4c/badges/24647258',
    logo: GENAILogo,
    alt: 'Google Cloud Logo',
    badgeStyle: 'border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40',
    statusStyle: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    id: 'badge-aws-1',
    title: 'AWS Cloud Explorer / Foundations',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    verificationUrl: '#',
    logo: AWSLogo,
    alt: 'AWS Logo',
    badgeStyle: 'border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40',
    statusStyle: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
  }
];

const SkillAndCertificate = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      {/* Structural Ambient Lights */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Layout */}
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

        {/* Master Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* LEFT COLUMN: Skill Ecosystem (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-mono text-gray-400 tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
              Technical Ecosystem
            </h3>

            <div className="space-y-6">
              {SKILL_CATEGORIES.map((category) => (
                <div 
                  key={category.id}
                  className="bg-gradient-to-br from-gray-900/30 to-gray-950/40 border border-gray-900 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <h4 className={`text-lg font-bold mb-4 ${category.accent.split(' ')[2]}`}>
                    {category.title}
                  </h4>
                  
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

          {/* RIGHT COLUMN: Institutional Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-mono text-gray-400 tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              Verified Credentials
            </h3>

            <div className="space-y-6">
              {CERTIFICATES.map((cert) => (
                <div 
                  key={cert.id}
                  className="group/cert relative bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-900 rounded-2xl p-6 transition-all duration-300 hover:border-gray-700 shadow-xl"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className={`inline-block text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${cert.badgeColor}`}>
                        Academic
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

                  <div className="pt-4 border-t border-gray-900/60 flex justify-end">
                    <a 
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link"
                    >
                      View Credential <span className="transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* BOTTOM SECTION: Compact Cloud Specializations Grid */}
        <div className="pt-12 border-t border-gray-900 space-y-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-mono text-gray-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              Cloud Specializations
            </h3>
            <p className="text-xs text-gray-500 font-mono pl-3.5">Continuous Professional Development</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLOUD_BADGES.map((badge) => (
              <div 
                key={badge.id}
                className={`group/badge flex flex-col justify-between border rounded-2xl p-5 max-w-sm w-full transition-all duration-300 backdrop-blur-sm ${badge.badgeStyle}`}
              >
                {/* 1. Entire Logo Container Area */}
                <div className="w-full bg-black/60 rounded-xl border border-gray-900/60 p-4 mb-4 relative overflow-hidden flex items-center justify-center min-h-[100px] group-hover/badge:border-gray-800 transition-colors">
                  <img 
                    src={badge.logo} 
                    alt={badge.alt} 
                    className="max-h-40 w-auto object-contain z-10 transition-transform duration-300 group-hover/badge:scale-105" 
                  />
                  <span className={`absolute top-2 right-2 text-[9px] font-mono border uppercase tracking-wider px-2 py-0.5 rounded-md ${badge.statusStyle}`}>
                    {badge.status}
                  </span>
                </div>

                {/* 2. Title of the Credential */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">
                    {badge.issuer}
                  </span>
                  <h4 className="text-sm font-bold text-white/90 group-hover/badge:text-white tracking-tight line-clamp-2">
                    {badge.title}
                  </h4>
                </div>

                {/* 3. Link or Button to view credential */}
                <div className="pt-3 border-t border-gray-900/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-600">
                    {badge.id.split('-')[1].toUpperCase()}
                  </span>
                  <a 
                    href={badge.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover/badge:text-white transition-colors group/link"
                  >
                    View Credential 
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-gray-600 group-hover/badge:text-white">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillAndCertificate;