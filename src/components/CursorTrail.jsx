import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Primary glowing orb following the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(59,130,246,0.05) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: mousePosition.x - 192, // center the 384px (w-96) orb
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 250,
          mass: 0.5
        }}
      />
      
      {/* Secondary smaller, faster orb for a dynamic core effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: mousePosition.x - 64, // center the 128px (w-32) orb
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.2
        }}
      />
    </>
  );
};

export default CursorTrail;
