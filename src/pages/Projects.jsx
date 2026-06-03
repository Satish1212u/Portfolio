import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const allProjects = [


  {
    title: 'AtmosIQ',
    description: 'A forecasting app using OpenWeather API with dynamic backgrounds based on the current weather condition.',
    tags: ['JavaScript', 'API'],
    category: 'AI / API',
    image: 'Atmos.png',
    liveUrl: 'https://atmos-iq-chi.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/AtmosIQ',
  },

  {
    title: 'Aivra AI',
    description: 'A text-based AI chatbot that provides instant answers across coding, maths, language, and writing.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'AI / API',
    image: 'aivra ai img.png',
    liveUrl: 'https://aviraai.netlify.app/',
    githubUrl: 'https://github.com/Satish1212u/aivrachat',
  },
  {
    title: 'Airexa-Ai',
    description: 'A multi-feature AI platform offering chat, text classification, voice recognition, and image analysis in one place.',
    tags: ['Next.js', 'OpenAI'],
    category: 'AI / API',
    image: 'Airexa img.png',
    liveUrl: 'https://airexaai.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/Airexaai',
  },
  {
    title: 'JanSaathi Ai',
    description: 'An AI-powered platform that helps users discover government schemes based on their personal needs.',
    tags: ['React', 'Tailwind'],
    category: 'AI / API',
    image: 'Jansaathi img.png',
    liveUrl: 'https://jansaathi.netlify.app/',
    githubUrl: 'https://github.com/Satish1212u/jansaathi',
  },
  {
    title: 'MediCare Services',
    description: '“A smart healthcare web app that allows patients to discover and select hospitals based on services and availability',
    tags: ['Java script', 'Tailwind css', 'Html', 'Framer Motion'],
    category: 'Frontend',
    image: ' Medicare img.png',
    liveUrl: 'https://medicareservices.netlify.app/',
    githubUrl: 'https://github.com/Satish1212u/Medicare',
  },
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
    title: 'HungerHubs',
    description: 'A modern food delivery web application with fast search, category-based browsing, and an intuitive user interface for seamless ordering experience.',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    category: 'Frontend',
    image: 'HungerHubs.png',
    liveUrl: 'https://hungerhub-psi.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/hungerhub',
  },


  {
    title: 'ScholarLine',
    description: 'A premium academic writing platform built with a modern UI/UX, service showcase sections, smooth animations, and responsive layouts for students and researchers.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    image: 'scholarline.png',
    liveUrl: 'https://www.scholar-line.com/',
    githubUrl: 'https://github.com/Satish1212u/scholarline',
  },

  {
    title: 'Beauty Ecommerce',
    description: 'A beautiful, responsive e-commerce website for a beauty brand with a modern design and seamless user experience.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Responsive Design'],
    category: 'Frontend',
    image: 'Beauty.png',
    liveUrl: 'https://beauty-pink.vercel.app/',
    githubUrl: 'https://github.com/Satish1212u/BEAUTY',
  },

];

const categories = ['All', 'Frontend', 'Full Stack', 'AI / API'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = allProjects.filter(project =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            My <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A collection of my recent work showcasing my expertise in web development, from beautiful UI designs to complex full-stack applications.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${filter === cat
                ? 'bg-gradient-custom text-white shadow-lg shadow-primary/30 scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
