import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0);
  const roles = ['Software Engineer', 'Web Developer', 'Tech Enthusiast', 'Mobile App Developer', 'Motivation Speaker'];

  useEffect(() => {
    if (index < roles.length) {
      const timeout = setTimeout(() => {
        setText(roles[index])
        setIndex(i => i + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setIndex(0);
      setText(roles[0]);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id = "hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black animate-pulse" />
      <div className="reative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
          ✨ Available for freelance
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-linear-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            I Create Iconic
          </span>
          <br />
          <span className="relative inline-block mt-2">
            Digital Experiences
            <div className="absolute -inset-2 bg-cyan-500/20 blur-2xl -z-10" />
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8">
          <span className="inline-block animate-bounce">👋</span> I'm  Pramod Lakshan {' '}
          <span className="text-cyan-400 font-mono border-r-2 border-cyan-400 animate-pulse">
            {text}
          </span>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          No templates, mo boring cards - just bold, iconic and user-first design that I eaves a mark on the digital world. Let's create something unforgettable together.
        </p>

        <div className="flex gap-4 justify-center flex-wrap ">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}  
          className="group relative px-8 py-3 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full font-semibold overflow-hidden">
            <span className="relative z-10">See my works</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />  

          </button>
           <button 
            onClick={() => alert("Let's talk!")} className="px-8 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all"
          >
            Let's talk 💬
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

    </section>
  )
}

export default Hero
