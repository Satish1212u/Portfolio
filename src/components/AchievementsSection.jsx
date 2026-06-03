import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiCalendar } from 'react-icons/fi';

const achievements = [
  {
    id: 1,
    title: '3rd Place — HackForge 2K25',
    category: 'Hackathon Winner',
    description: 'Project: Raksha AI — AI-powered cybersecurity assistant for scam detection and digital safety awareness.',
    tags: ['Hackathon', 'AI', 'Cybersecurity'],
    date: 'Feb 2025',
    image: '/certificates/hackforge.jpg',
    fallbackImage: 'Certificate 1.png'
  },
  {
    id: 2,
    title: 'IIT Delhi Tryst’25',
    category: 'Hackathon Participation',
    description: 'Participated in the premier technical festival of IIT Delhi, building innovative web solutions.',
    tags: ['IIT Delhi', 'Web Dev', 'Tryst'],
    date: 'Mar 2025',
    image: '/certificates/tryst.jpg',
    fallbackImage: 'Certificate 2.png'
  },
  {
    id: 3,
    title: 'HackGround India 2K25',
    category: 'Hackathon Participation',
    description: 'Collaborated with a team to develop responsive frontend applications under a tight 24-hour deadline.',
    tags: ['Frontend', 'HackGround', 'India'],
    date: 'Jan 2025',
    image: '/certificates/hackground.jpg',
    fallbackImage: 'Certificate 3.png'
  },
  {
    id: 4,
    title: 'ParanoX 2.0',
    category: 'Hackathon Participation',
    description: 'Developed modern interfaces and contributed to problem-solving in a competitive hackathon environment.',
    tags: ['ParanoX', 'UI/UX', 'Development'],
    date: 'Dec 2024',
    image: '/certificates/paranox.jpg',
    fallbackImage: 'Certificate 4.png'
  }
];

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <FiAward className="text-primary" />
            <span className="tracking-wider uppercase text-xs">Achievements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Hackathons & <span className="text-gradient">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of my competitive programming journey, certifications, and successful hackathon participations across major platforms.
          </motion.p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative glass-dark rounded-3xl p-1 overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-500"
            >
              {/* Subtle hover glow inside border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-slate-900/50 rounded-[1.4rem] p-6 h-full flex flex-col sm:flex-row gap-6 items-start">

                {/* Thumbnail */}
                <div
                  className="w-full sm:w-48 h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 relative cursor-pointer group/img"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => { e.target.onerror = null; e.target.src = item.fallbackImage; }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <FiExternalLink className="text-white text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col h-full">
                  <div className="mb-2">
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-slate-500 text-xs font-medium">
                        <FiCalendar className="mr-1.5" />
                        {item.date}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedImage(item)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-primary/10 text-white hover:text-primary border border-white/10 hover:border-primary/30 transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2 group/btn"
                    >
                      View Certificate
                      <FiExternalLink className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full glass-dark rounded-2xl p-2 border border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  onError={(e) => { e.target.onerror = null; e.target.src = selectedImage.fallbackImage; }}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-primary text-sm font-medium">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default AchievementsSection;
