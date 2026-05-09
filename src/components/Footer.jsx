import React from 'react';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © 2026 Jaindu Gajanayake. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://github.com/Jaindu1223" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/jaindugajanayake" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/jaizz___?igsh=OHduNHN6djA0bGFt&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/share/1EwjYhcE11/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
