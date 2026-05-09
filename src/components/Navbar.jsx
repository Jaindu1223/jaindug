import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="JG Logo" className="h-12 w-auto hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#experience" className="text-sm text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#education" className="text-sm text-gray-300 hover:text-white transition-colors">Education</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          <a 
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary/20 border border-primary/50 rounded-full hover:bg-primary/30 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
