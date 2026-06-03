import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit logic handling (UI only)
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col pt-32 pb-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              I'm currently looking for new opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass bg-slate-100 dark:bg-white/10 flex items-center justify-center text-primary mr-6 shadow-sm">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Email</h3>
                  <a href="satishgupta6796@gmail.com" className="text-xl font-medium text-slate-800 dark:text-white hover:text-primary transition-colors">satishgupta6796@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass bg-slate-100 dark:bg-white/10 flex items-center justify-center text-secondary mr-6 shadow-sm">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Location</h3>
                  <p className="text-xl font-medium text-slate-800 dark:text-white">Rohini, Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-dark bg-white dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 dark:text-white"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-800 dark:text-white"
                  placeholder="I'd like to talk about a project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-custom text-white font-bold text-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message <FiSend className="ml-2" />
              </button>

              <a
                href="https://wa.me/918860987442?text=Hello,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-500 text-white font-semibold hover:scale-105 transition duration-300"
              >
                <FaWhatsapp size={22} />
                Chat on WhatsApp
              </a>
            </form>
          </motion.div>



        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
