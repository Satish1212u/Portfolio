import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';

const StatCard = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="glass-dark p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 border border-white/5 hover:border-primary/30 transition-colors"
  >
    <div className="p-2 rounded-lg bg-primary/10 text-primary">
      <Icon size={20} />
    </div>
    <span className="text-2xl font-bold text-white">{value}</span>
    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">{label}</span>
  </motion.div>
);

const TechBadge = ({ icon: Icon, color, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}

    animate={{
      y: [0, -12, 0],
    }}

    transition={{
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}

    className={`absolute p-4 rounded-2xl glass-dark border border-white/10 flex items-center justify-center shadow-xl ${className}`}
  >
    <Icon className={`text-3xl ${color}`} />
  </motion.div>
);

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>About Me</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Crafting digital excellence through <span className="text-gradient">code and design.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                I am a passionate Frontend Developer dedicated to building high-performance,
                accessible, and visually stunning web applications. With a focus on React
                and modern CSS, I transform complex ideas into seamless digital experiences
                that prioritize user needs and business goals.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <StatCard
                icon={FiCode}
                label="Projects"
                value="15+"
                delay={0.2}
              />
              <StatCard
                icon={FiLayers}
                label="Tech Stack"
                value="10+"
                delay={0.3}
              />
              <StatCard
                icon={FiZap}
                label="Learning"
                value="∞"
                delay={0.4}
              />
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] flex items-center justify-center"
          >
            {/* Main Profile Card */}
            {/* Main Profile Card */}
            <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden glass-dark border border-white/10 group p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/Satish pf 2.png"
                  alt="Satish Gupta"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://api.dicebear.com/7.x/notionists/svg?seed=Satish&backgroundColor=transparent";
                  }}
                />
              </div>

              {/* Animated Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10" />
            </div>
            {/* Floating Tech Badges */}
            <TechBadge
              icon={SiReact}
              color="text-cyan-400"
              className="-top-4 -left-4 md:-left-8"
              delay={0.1}
            />
            <TechBadge
              icon={SiJavascript}
              color="text-yellow-400"
              className="top-1/4 -right-4 md:-right-8"
              delay={0.3}
            />
            <TechBadge
              icon={SiTailwindcss}
              color="text-sky-400"
              className="bottom-1/4 -left-6 md:-left-12"
              delay={0.5}
            />
            <TechBadge
              icon={SiNodedotjs}
              color="text-green-500"
              className="-bottom-4 right-4"
              delay={0.7}
            />

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" style={{ animationDuration: '3s' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
