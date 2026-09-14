import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiLayout, FiTrendingUp, FiTool } from 'react-icons/fi';

const services = [
  {
    title: 'Website Development',
    description:
      'Creating responsive, high-performance websites using modern technologies.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'WordPress Development',
    description:
      'Creating responsive, high-performance websites using modern technologies.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'Social Media Marketing',
    description:
      'Creating, managing, and boosting social media accounts for businesses and individuals to enhance brand visibility and engagement.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'Content Writing',
    description:
      'Creating high-quality, engaging content for websites, social media, and other platforms.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'AI Chatbot',
    description:
      'Creating AI chatbots for businesses to enhance customer service.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'AI Automations',
    description:
      'Creating AI Automations for businesses to enhance productivity.',
    icon: <FiMonitor size={32} />
  },
  {
    title: 'SEO Optimization',
    description:
      'Enhancing website visibility, performance, and search engine rankings with modern SEO strategies.',
    icon: <FiTrendingUp size={32} />
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive, visually appealing interfaces that prioritize user experience.',
    icon: <FiLayout size={32} />
  },
  {
    title: 'Website Maintenance',
    description:
      'Offering regular updates, bug fixes, and performance improvements for seamless website operation.',
    icon: <FiTool size={32} />
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col pt-32 pb-24 relative overflow-hidden bg-[#080808]"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5]"
          >
            My <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#A3A3A3] max-w-2xl mx-auto"
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
              className="bg-[#111111] p-8 rounded-3xl border border-[#262626] hover:border-[#525252] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#262626] to-[#141414] border border-[#333333] text-[#E5E5E5] flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">{service.title}</h3>
              <p className="text-[#A3A3A3] leading-relaxed text-lg">
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
