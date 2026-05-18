import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="w-full py-102 relative z-10 flex justify-center items-center">
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        {/* Animated glowing streak running across the line */}
        <motion.div 
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
