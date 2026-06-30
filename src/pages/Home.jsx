import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import SkillsSection from "../components/SkillsSection";

const featuredProjects = [
  {
    title: 'Raksha Ai',
    description: 'An AI-powered cybersecurity assistant that helps users detect scams, understand threats, and get step-by-step safety guidance.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'API Integration'],
    category: 'Full Stack',
    image: 'Raksha Ai.png',
    liveUrl: 'https://raksha-ai-hazel.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/rakshaai-frontend',
  },
  {
    title: 'AtmosIQ',
    description: 'A forecasting app using OpenWeather API with dynamic backgrounds based on the current weather condition.',
    tags: ['JavaScript', 'API'],
    category: 'Frontend',
    image: 'AtmosIQ.png',
    imageFit: 'contain',
    liveUrl: 'https://atmos-iq-chi.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/AtmosIQ',
  },
  {
    title: 'Beauty Ecommerce',
    description: 'A beautiful, responsive e-commerce website for a beauty brand with a modern design and seamless user experience.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Responsive Design'],
    image: 'Beauty.png',
    liveUrl: 'https://beauty-pink.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/BEAUTY',
  }
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[30%] right-[20%] w-[30rem] h-[30rem] bg-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute bottom-[10%] left-[40%] w-[30rem] h-[30rem] bg-tertiary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Satish <span className="text-gradient">Gupta</span>
            </h1>
            <div className="text-2xl md:text-4xl font-semibold h-12 text-slate-700 dark:text-slate-200">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Freelancer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I build modern, responsive, and user-focused web experiences using React and cutting-edge frontend technologies.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-custom text-white font-semibold flex items-center justify-center hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1">
                Hire Me <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass border border-slate-300 dark:border-slate-600 font-semibold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                View Projects
              </Link>
              <a href="/Satish_Gupta_Resume.pdf" download="Satish_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass border border-slate-300 dark:border-slate-600 font-semibold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="w-[450px] h-[450px] rounded-full border border-slate-200 dark:border-white/10 relative flex items-center justify-center p-8 mt-10">
              <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin" style={{ animationDuration: '12s' }} />
              <div className="absolute inset-8 border-l-2 border-secondary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="w-full h-full rounded-full overflow-hidden bg-white/50 dark:bg-slate-800/50 glass-dark flex items-center justify-center shadow-2xl relative z-10">
                <img
                  src="/satish pf.jpeg"
                  alt="Satish Gupta"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://api.dicebear.com/7.x/notionists/svg?seed=Satish&backgroundColor=transparent";
                    e.target.className = "w-4/5 h-4/5 object-contain";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />

      {/* Featured Projects Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Featured <span className="text-gradient">Projects</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">A selection of my recent work displaying complex problem-solving.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-primary hover:underline font-medium text-lg mt-4 md:mt-0">
              View all works <FiArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Link to="/projects" className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <SkillsSection />
      <AchievementsSection />
    </motion.div>
  );
};

export default Home;
