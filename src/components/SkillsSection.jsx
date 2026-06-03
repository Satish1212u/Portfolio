import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGithub,
  SiFigma,
  SiWordpress,
  SiVite
} from 'react-icons/si';

import { FaCss3Alt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  ],

  tools: [
    { name: 'GitHub', icon: SiGithub, color: 'text-white' },
    { name: 'VS Code', icon: FaCode, color: 'text-blue-500' },
    { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
    { name: 'WordPress', icon: SiWordpress, color: 'text-blue-400' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
  ]
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.05 }}
    className="relative group"
  >
    {/* Glow effect on hover */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

    <div className="relative glass-dark h-full p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 border border-white/5 group-hover:border-primary/50 transition-all duration-300">
      <div className={`text-4xl md:text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]`}>
        <skill.icon />
      </div>
      <h3 className="text-slate-200 font-medium tracking-wide text-sm md:text-base">{skill.name}</h3>

      {/* Subtle floating glow */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

        {/* Floating animated blobs */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="tracking-wider uppercase text-xs">Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Technologies I <span className="text-gradient">Work With</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            I leverage the latest tools and frameworks to build exceptional digital experiences
            that are both beautiful and functional.
          </motion.p>
        </div>

        {/* Frontend Skills Grid */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-primary to-transparent mr-4"></div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-100">Frontend Development</h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center mb-10"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-secondary to-transparent mr-4"></div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-100">Tools & Ecosystem</h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {skills.tools.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
