import React, { useState } from 'react';

const Contact = () => {
  // 1. Manage form state and submission statuses
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: null, message: '' });

    const ACCESS_KEY = "3161a6e5-2958-4b4a-9105-99cbecec0f1e";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: 'Message transmitted successfully! 🚀' });
        setFormData({ name: '', email: '', message: '' }); // Clear inputs
      } else {
        setStatus({ success: false, message: result.message || 'Transmission failed. Please try again.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Network error. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-white dark:bg-black text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column */}
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
            
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Have an enterprise vision, an application pipeline requirement, or an open project role? Reach out and let's construct something monumental.
            </p>

            <div className="pt-6 space-y-3 font-mono text-xs text-gray-500">
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">⚡</span> Direct Communication Available Mon - Fri
              </p>
            </div>
          </div>

          {/* Right Column: Form Layer */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-neutral-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-neutral-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Message Input Area */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project Specification</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your architectural requirements, timelines, or role overview..."
                  className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-neutral-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.success ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Transmitting...' : 'Transmit Message 💬'}
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