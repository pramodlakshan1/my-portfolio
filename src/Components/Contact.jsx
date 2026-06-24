import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your submission API handler here safely
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Context Call-to-Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Let's Build 
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent block">Together</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Have an enterprise vision, an application pipeline requirement, or an open project role? Reach out and let's construct something monumental.
            </p>

            <div className="pt-6 space-y-3 font-mono text-xs text-gray-500">
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">⚡</span> Direct Communication Available Mon - Fri
              </p>
            </div>
          </div>

          {/* Right Column: Premium Modular Interactive Form Layer */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-900/50 border border-gray-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all font-normal text-sm"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-900/50 border border-gray-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all font-normal text-sm"
                  />
                </div>
              </div>

              {/* Message Input Area */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Project Specification</label>
                <textarea 
                  rows="5"
                  required
                  placeholder="Tell me about your architectural requirements, timelines, or role overview..."
                  className="w-full bg-gray-900/50 border border-gray-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all font-normal text-sm resize-none"
                />
              </div>

              {/* Interactive Premium Submit Trigger Button */}
              <button 
                type="submit" 
                className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Transmit Message 💬
                </span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;