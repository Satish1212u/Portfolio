import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const primarySkills = [
  { name: 'HTML', level: 95, color: 'bg-orange-500' },
  { name: 'CSS', level: 90, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
  { name: 'React', level: 80, color: 'bg-cyan-400' },
  { name: 'WordPress', level: 75, color: 'bg-indigo-500' },
];

const learningSkills = [
  { name: 'C', color: 'bg-blue-600' },
  { name: 'C++', color: 'bg-blue-800' },
  { name: 'Python', color: 'bg-yellow-500' },
];

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Sysslan IT Solutions',
    period: 'April 2026 - Present',
    description:
      'Built responsive e-commerce interfaces and modern UI systems using React.js and Tailwind CSS.',
    border: 'hover:border-cyan-400/40',
    companyColor: 'text-cyan-400',
  },
  {
    role: 'Web Developer',
    company: 'DesynTech',
    period: 'Sep 2025 - Jan 2026',
    description:
      'Designed and developed responsive websites and WordPress-based platforms for clients remotely.',
    border: 'hover:border-purple-400/40',
    companyColor: 'text-purple-400',
  },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
        {skill.name}
      </h3>

      {skill.level && (
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {skill.level}%
        </span>
      )}
    </div>

    {skill.level && (
      <div className="w-full bg-slate-200 dark:bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{
            duration: 1,
            delay: 0.5 + index * 0.1,
            ease: 'easeOut',
          }}
          className={`h-2.5 rounded-full ${skill.color}`}
        />
      </div>
    )}
  </motion.div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen pt-32 pb-24 flex flex-col items-center"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A look at my technical expertise and the tools I use to build modern digital experiences.
          </motion.p>
        </div>

        {/* Primary Skills */}
        <div className="mb-16">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 border-l-4 border-primary pl-4"
          >
            Primary Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primarySkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mb-20">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 border-l-4 border-secondary pl-4"
          >
            Currently Learning
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                }}
                className="p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-4 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-3 h-3 rounded-full animate-pulse ${skill.color}`}
                />

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 border-l-4 border-primary pl-4"
          >
            Experience
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 ${exp.border} hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {exp.role}
                    </h3>

                    <p className={`font-medium ${exp.companyColor}`}>
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Download Resume */}
        <div className="flex justify-center">
          <motion.a
            href="/Satish_Gupta_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition duration-300"
          >
            <FiDownload size={20} />
            Download Resume
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;