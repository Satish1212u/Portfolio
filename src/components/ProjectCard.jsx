import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Tilt
        options={{ max: 12, scale: 1.02, speed: 400 }}
        className="glass-dark bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col h-full shadow-xl hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] transition-shadow duration-300"
      >
        <div className="relative w-full aspect-video overflow-hidden group bg-slate-950/20">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
              project.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'
            }`}
          />
          {/* Subtle overlay that darkens slightly on hover */}
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500" />
          {/* Gradient at the bottom of the image for smooth transition */}
          {project.imageFit !== 'contain' && (
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-90" />
          )}
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{project.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 mt-auto">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center flex-1 py-3 rounded-xl bg-gradient-custom text-white transition-all text-sm font-bold shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.6)] hover:-translate-y-1">
                <FiExternalLink className="mr-2" size={18} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-all text-sm font-bold hover:shadow-lg hover:-translate-y-1">
                <FiGithub className="mr-2" size={18} /> GitHub
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
