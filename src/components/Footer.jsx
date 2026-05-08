import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © 2026 Jaindu Gajanayake. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://linkedin.com/in/YOUR_LINKEDIN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/YOUR_GITHUB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
