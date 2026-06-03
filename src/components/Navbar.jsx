import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-40 transition-all duration-300',
      scrolled ? 'glass-dark py-3 !bg-slate-900/80' : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter mix-blend-difference z-50">
          <span className="text-gradient">Satish Gupta </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative',
                  isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-800 dark:text-slate-200">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark !bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-col py-4 px-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'py-3 text-lg font-medium border-b border-slate-200 dark:border-slate-800/50',
                  location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
