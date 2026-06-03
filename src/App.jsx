import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <ScrollToTop />
      <Cursor />
      <Navbar />

      <main className="flex-grow flex flex-col w-full relative z-10">
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/services" element={<Services />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
