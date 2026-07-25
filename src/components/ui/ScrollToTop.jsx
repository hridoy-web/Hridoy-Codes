'use client';

import { motion } from 'framer-motion';
import { HiTerminal } from 'react-icons/hi';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-primary/50 transition-all duration-300 shadow-md cursor-pointer font-mono text-xs overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <HiTerminal className="w-4 h-4 text-brand-secondary group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-semibold tracking-wider">cd ~$ top</span>
      <FiArrowUp className="w-3.5 h-3.5 text-brand-secondary group-hover:-translate-y-0.5 transition-transform duration-300" />
    </motion.button>
  );
}