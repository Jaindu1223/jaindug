import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-24 px-6 relative z-10 flex justify-center">
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left shadow-[0_0_20px_rgba(34,211,238,0.8)]"
      />
    </div>
  );
};

export default SectionDivider;
