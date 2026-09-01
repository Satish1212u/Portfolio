import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const PROJECT_TYPES = [
  'Website Development',
  'AI Automation',
  'AI Chatbots',
  'UI/UX Design',
  'Freelance / Development Work',
  'Website Maintenance & Support',
  'Collaboration',
  'Other',
];

// Single source of truth for validation rules
const validateField = (field, value) => {
  switch (field) {
    case 'name': {
      const trimmed = (value || '').trim();
      if (!trimmed) return 'Please enter your name.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
      return '';
    }
    case 'email': {
      const trimmed = (value || '').trim();
      if (!trimmed) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Please enter a valid email address.';
      return '';
    }
    case 'projectType': {
      if (!value) return 'Please select a project type.';
      return '';
    }
    case 'phone': {
      const trimmed = (value || '').trim();
      if (!trimmed) return ''; // Optional: empty is valid
      const phoneDigits = trimmed.replace(/\D/g, '');
      const validPhonePattern = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{6,16}$/.test(trimmed);
      if (!validPhonePattern || phoneDigits.length < 7 || phoneDigits.length > 16) {
        return 'Please enter a valid phone number (e.g., +91 98765 43210).';
      }
      return '';
    }
    case 'message': {
      const trimmed = (value || '').trim();
      if (!trimmed) return 'Please enter your message.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters long.';
      return '';
    }
    default:
      return '';
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    phone: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    projectType: false,
    phone: false,
    message: false,
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | loading | success | error

  // Compute field validation state (Default, Valid / Green, Invalid / Red)
  const getFieldState = (field) => {
    const val = formData[field] || '';
    const err = validateField(field, val);
    const isTouched = touched[field];

    if (field === 'phone') {
      const hasContent = val.trim().length > 0;
      if (!hasContent) {
        // Optional field: empty stays normal default (not red, not green)
        return { isValid: false, isInvalid: false, error: '' };
      }
      if (err) {
        return { isValid: false, isInvalid: true, error: err };
      }
      return { isValid: true, isInvalid: false, error: '' };
    }

    // Required fields: name, email, projectType, message
    const isCompleted = val.trim() !== '' && err === '';
    if (isCompleted) {
      return { isValid: true, isInvalid: false, error: '' };
    }

    if (isTouched && err) {
      return { isValid: false, isInvalid: true, error: err };
    }

    return { isValid: false, isInvalid: false, error: '' };
  };

  const getInputClass = (field, isTextarea = false) => {
    const { isValid, isInvalid } = getFieldState(field);
    const baseClass = `w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border outline-none transition-all text-slate-800 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed ${
      isTextarea ? 'resize-none' : ''
    }`;

    if (isInvalid) {
      return `${baseClass} border-rose-500 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20`;
    }

    if (isValid) {
      return `${baseClass} border-emerald-500 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20`;
    }

    return `${baseClass} border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20`;
  };

  const getSelectClass = (field) => {
    const { isValid, isInvalid } = getFieldState(field);
    const hasValue = Boolean(formData[field]);
    const textColor = hasValue ? 'text-slate-800 dark:text-white' : 'text-slate-400 dark:text-slate-500';
    const baseClass = `w-full px-4 py-3 pr-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 border appearance-none outline-none transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${textColor}`;

    if (isInvalid) {
      return `${baseClass} border-rose-500 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20`;
    }

    if (isValid) {
      return `${baseClass} border-emerald-500 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20`;
    }

    return `${baseClass} border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20`;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched to trigger any missing error states
    setTouched({
      name: true,
      email: true,
      projectType: true,
      phone: true,
      message: true,
    });

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const projectTypeErr = validateField('projectType', formData.projectType);
    const phoneErr = validateField('phone', formData.phone);
    const messageErr = validateField('message', formData.message);

    if (nameErr || emailErr || projectTypeErr || phoneErr || messageErr) {
      return;
    }

    setStatus({ state: 'loading', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if configuration exists
    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        'EmailJS environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are missing.'
      );
      setStatus({
        state: 'error',
        message: 'Email service is currently unconfigured. Please contact directly on WhatsApp or email.',
      });
      return;
    }

    const templateParams = {
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      email: formData.email.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      project_type: formData.projectType,
      phone: formData.phone.trim() || 'Not provided',
      message: formData.message.trim(),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        state: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form and touched states on successful submission
      setFormData({
        name: '',
        email: '',
        projectType: '',
        phone: '',
        message: '',
      });
      setTouched({
        name: false,
        email: false,
        projectType: false,
        phone: false,
        message: false,
      });
    } catch (err) {
      console.error('EmailJS Submission Error:', err);
      setStatus({
        state: 'error',
        message: 'Failed to send message. Please try again or reach out directly on WhatsApp.',
      });
    }
  };

  const nameState = getFieldState('name');
  const emailState = getFieldState('email');
  const projectTypeState = getFieldState('projectType');
  const phoneState = getFieldState('phone');
  const messageState = getFieldState('message');

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
                <div className="w-12 h-12 rounded-full glass bg-slate-100 dark:bg-white/10 flex items-center justify-center text-primary mr-6 shadow-sm shrink-0">
                  <FiMail size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Email</h3>
                  <a href="mailto:satishgupta6796@gmail.com" className="text-xl font-medium text-slate-800 dark:text-white hover:text-primary transition-colors break-words">
                    satishgupta6796@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass bg-slate-100 dark:bg-white/10 flex items-center justify-center text-tertiary mr-6 shadow-sm shrink-0">
                  <FiPhone size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Phone</h3>
                  <a href="tel:+918860987442" className="text-xl font-medium text-slate-800 dark:text-white hover:text-primary transition-colors break-words">
                    +91 8860987442
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass bg-slate-100 dark:bg-white/10 flex items-center justify-center text-secondary mr-6 shadow-sm shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div className="min-w-0">
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
            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {status.state === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 text-sm"
                  role="alert"
                >
                  <FiCheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">{status.message}</p>
                  </div>
                </motion.div>
              )}

              {status.state === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-start gap-3 text-sm"
                  role="alert"
                >
                  <FiAlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">{status.message}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Your Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  disabled={status.state === 'loading'}
                  aria-invalid={nameState.isInvalid}
                  aria-describedby={nameState.isInvalid ? 'name-error' : undefined}
                  className={getInputClass('name')}
                  placeholder="Your Name"
                />
                {nameState.isInvalid && (
                  <p id="name-error" className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 ml-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {nameState.error}
                  </p>
                )}
              </div>

              {/* Your Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  disabled={status.state === 'loading'}
                  aria-invalid={emailState.isInvalid}
                  aria-describedby={emailState.isInvalid ? 'email-error' : undefined}
                  className={getInputClass('email')}
                  placeholder="Your Email"
                />
                {emailState.isInvalid && (
                  <p id="email-error" className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 ml-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {emailState.error}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Type <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                    onBlur={() => handleBlur('projectType')}
                    disabled={status.state === 'loading'}
                    aria-invalid={projectTypeState.isInvalid}
                    aria-describedby={projectTypeState.isInvalid ? 'projectType-error' : undefined}
                    className={getSelectClass('projectType')}
                  >
                    <option value="" disabled className="bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                      Select Project Type
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 dark:text-slate-500">
                    <FiChevronDown className="w-5 h-5" />
                  </div>
                </div>
                {projectTypeState.isInvalid && (
                  <p id="projectType-error" className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 ml-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {projectTypeState.error}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Phone / WhatsApp Number <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  disabled={status.state === 'loading'}
                  aria-invalid={phoneState.isInvalid}
                  aria-describedby={phoneState.isInvalid ? 'phone-error' : undefined}
                  className={getInputClass('phone')}
                  placeholder="+91 XXXXX XXXXX"
                />
                {phoneState.isInvalid && (
                  <p id="phone-error" className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 ml-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {phoneState.error}
                  </p>
                )}
              </div>

              {/* Your Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  disabled={status.state === 'loading'}
                  aria-invalid={messageState.isInvalid}
                  aria-describedby={messageState.isInvalid ? 'message-error' : undefined}
                  className={getInputClass('message', true)}
                  placeholder="I'd like to talk about a project..."
                />
                {messageState.isInvalid && (
                  <p id="message-error" className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 ml-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {messageState.error}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="w-full py-4 rounded-xl bg-gradient-custom text-white font-bold text-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none cursor-pointer"
              >
                {status.state === 'loading' ? (
                  <>
                    <FiLoader className="mr-2 animate-spin w-5 h-5" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <FiSend className="ml-2" />
                  </>
                )}
              </button>

              {/* WhatsApp Button */}
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

