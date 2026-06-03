import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiLayout, FiTrendingUp, FiTool } from 'react-icons/fi';

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building modern, responsive, and high-performance websites using React and Tailwind CSS.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'SEO Optimization',
    description:
      'Improving website visibility, performance, and search engine rankings with modern SEO practices.',
    icon: <FiTrendingUp size={32} />
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing clean, interactive, and user-friendly interfaces focused on better user experience.',
    icon: <FiLayout size={32} />
  },
  {
    title: 'Website Maintenance',
    description:
      'Providing regular updates, bug fixes, and performance improvements for smooth website operation.',
    icon: <FiTool size={32} />
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col pt-32 pb-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            My <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            I offer a wide range of services to help you build your digital presence and optimize your business processes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-custom text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
