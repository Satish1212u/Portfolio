import React from 'react';
import { motion } from 'framer-motion';
import {
  FiBookOpen,
  FiAward,
  FiShield,
  FiCode,
  FiGlobe,
  FiPenTool
} from "react-icons/fi";

const timeline = [
  {
    year: '2024 - Present',
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'Maharishi Dayanand University',
    description: 'Pursuing degree with focus on software engineering, web technologies, and database management.',
    icon: <FiBookOpen className="w-6 h-6" />
  },
  {
    year: '2023 - Present',
    title: 'Freelance Web Developer',
    subtitle: 'Self Employed',
    description: 'Built responsive and interactive websites for local businesses using React and modern CSS frameworks.',
    icon: <FiCode className="w-6 h-6" />
  },
  {
    year: '2025',
    title: 'Raksha AI Hackathon Project',
    subtitle: 'AI & Cyber Safety Platform',
    description: 'Developed an AI-powered platform to help users identify scams, understand cyber threats, and get safety guidance in simple language.',
    icon: <FiShield className="w-6 h-6" />
  },
  {
    year: '2024',
    title: 'React & Modern UI Development',
    subtitle: 'Personal Projects',
    description: 'Built modern responsive web applications using React.js, Tailwind CSS, animations, and component-based architecture.',
    icon: <FiCode className="w-6 h-6" />
  },
  {
    year: '2023',
    title: 'WordPress Development',
    subtitle: 'Freelance Experience',
    description: 'Created and customized WordPress websites for business portfolios, services, and local clients.',
    icon: <FiGlobe className="w-6 h-6" />
  },
  {
    year: '2022',
    title: 'UI/UX Design Learning',
    subtitle: 'Creative Design Journey',
    description: 'Learned modern UI/UX principles, responsive layouts, color systems, and user-centered design practices.',
    icon: <FiPenTool className="w-6 h-6" />
  },
  {
    year: '2021',
    title: 'Frontend Development Certification',
    subtitle: 'Professional Online Program',
    description: 'Successfully completed an intensive web development program focused on modern frontend technologies including HTML, CSS, JavaScript, React.js, and responsive UI design.',
    icon: <FiAward className="w-6 h-6" />
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Intro Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400">
            <p className="mb-4 text-lg leading-relaxed">
              Hello! I'm Satish Gupta — a passionate Frontend Developer and BCA student focused on building modern, scalable, and visually engaging web experiences.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              My journey into web development began with curiosity about how digital products work, which quickly evolved into a deep passion for creating impactful user experiences through code.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              I specialize in crafting responsive and high-performance frontend applications using React, Vite, Tailwind CSS, and modern web technologies. From sleek UI designs to smooth interactions, I enjoy combining creativity with functionality to build websites that feel both premium and intuitive.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond development, I actively participate in hackathons, explore emerging technologies, and continuously improve my skills by building real-world projects that solve meaningful problems.
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">Education & <span className="text-gradient">Journey</span></h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 glass-dark rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors">
                  <span className="text-primary font-bold text-sm mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                  <h4 className="text-md font-medium text-slate-500 mb-3">{item.subtitle}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
