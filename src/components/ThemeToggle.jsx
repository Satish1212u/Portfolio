import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-white/20 dark:hover:bg-slate-800/50 transition-colors"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FiSun className="w-5 h-5 text-yellow-400" />
        ) : (
          <FiMoon className="w-5 h-5 text-slate-700" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
