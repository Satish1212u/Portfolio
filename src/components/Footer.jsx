import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUpRight, FiMail, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";

const footerProjects = [
  { name: 'Raksha AI', desc: 'Cybersecurity Assistant', url: '#' },
  { name: 'Airexa AI', desc: 'Intelligent AI Platform', url: '#' },
  { name: 'Beauty Store', desc: 'Modern E-commerce', url: '#' },
  { name: 'HungerHubs', desc: 'Food Delivery System', url: '#' }
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative overflow-hidden bg-slate-950 text-slate-300 pt-32 pb-12 font-sans border-t border-white/5">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />

      {/* Floating Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[150px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[150px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col">

        {/* Massive CTA Hero Area */}
        <div className="flex flex-col items-center justify-center text-center mb-32 space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping mr-3" />
            <span className="w-2 h-2 rounded-full bg-blue-500 absolute ml-4" /> {/* Static dot underneath ping */}
            <span className="ml-5">Available for freelance work</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 leading-tight">
            Let’s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x">Amazing</span> Together <span className="inline-block animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">🚀</span>
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            I craft high-performance, visually stunning digital experiences. Ready to transform your boldest ideas into next-generation web realities.
          </p>

          <Link
            onClick={handleScrollToTop}
            to="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-500 rounded-full mt-4 overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center text-lg tracking-wide">
              Start a Project
              <FiArrowUpRight className="ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
            </span>
          </Link>
        </div>

        {/* 4 Modern Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 relative">

          {/* 1. Branding Section (Span 3) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link to="/" onClick={handleScrollToTop} className="text-4xl font-black tracking-tighter text-white inline-block hover:scale-105 origin-left transition-transform duration-300">
              Satish Gupta<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed font-light pr-4">
              Frontend architect crafting high-performance, premium web applications. Turning complex problems into elegant, user-centric solutions with modern technologies.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              {[
                { icon: FiGithub, url: 'https://github.com/Satish1212u' },
                { icon: FiLinkedin, url: 'https://www.linkedin.com/in/satish-gupta4141?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                { icon: FaWhatsapp, url: 'https://wa.me/918860987442' },
                { icon: FiInstagram, url: 'https://www.instagram.com/satish_gupta4141?igsh=cDFxdXhnb3V5ZnR6/' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation (Span 2) */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase text-xs">Navigation</h3>
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <Link
                  key={link}
                  onClick={handleScrollToTop}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="group w-fit text-slate-400 hover:text-white transition-colors duration-300 text-base flex items-center font-medium"
                >
                  <span className="relative overflow-hidden pb-1">
                    {link}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Featured Projects (Span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase text-xs">Featured Work</h3>
            <div className="flex flex-col space-y-3">
              {footerProjects.map((project, i) => (
                <a
                  key={i}
                  href={project.url}
                  onClick={(e) => {
                    if (project.url === '#') e.preventDefault();
                    handleScrollToTop();
                  }}
                  className="group relative block p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative flex items-center justify-between p-4 rounded-[15px] bg-slate-900/80 backdrop-blur-xl border border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <h4 className="text-white font-bold text-base mb-1 group-hover:text-blue-400 transition-colors">{project.name}</h4>
                      <p className="text-slate-400 text-sm font-light">{project.desc}</p>
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-blue-500 group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                      <FiArrowUpRight size={18} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 4. Contact Section (Span 2) */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase text-xs">Contact</h3>
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent overflow-hidden">
              <div className="relative flex flex-col p-5 rounded-[15px] bg-slate-900/90 backdrop-blur-xl border border-white/5">
                <FiMail className="text-blue-400 mb-3" size={24} />
                <p className="text-slate-400 text-sm mb-1 font-light">Drop me a line</p>
                <a href="mailto:satishgupta6796@gmail.com" className="text-white font-medium text-sm break-all hover:text-blue-400 transition-colors">
                  satishgupta6796@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Premium Newsletter Section */}
        <div className="w-full max-w-4xl mx-auto mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 pointer-events-none" />
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-white/5 overflow-hidden shadow-2xl">
            <div className="relative bg-[#020617]/80 backdrop-blur-2xl rounded-[23px] px-6 py-12 md:p-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                <FiSend size={28} className="text-white transform -translate-y-0.5 translate-x-0.5 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Stay in the Loop</h3>
              <p className="text-slate-400 text-base md:text-lg mb-8 max-w-md font-light">
                Join my premium newsletter for the latest frontend engineering insights, project updates, and exclusive resources.
              </p>

              <form className="w-full max-w-lg relative flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <FiMail className="text-slate-500" size={18} />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your best email..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-4 text-base text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-inner"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 text-base font-bold hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex-shrink-0 flex items-center justify-center"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 space-y-4 md:space-y-0">
          <p className="font-light tracking-wide">
            &copy; {new Date().getFullYear()} Satish Gupta. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 font-light tracking-wide bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span>Built with</span>
            <span className="text-white font-medium">React</span>
            <span>&</span>
            <span className="text-blue-400 font-medium">Tailwind CSS</span>
            <span className="animate-pulse text-red-500 ml-1">❤️</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
