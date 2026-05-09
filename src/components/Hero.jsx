import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const roles = [
  "Software Engineer",
  "Mobile Engineer",
  "Cloud Engineer",
  "Full-Stack Developer"
];

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  useEffect(() => {
    // Add safety check just in case
    if (!words || words.length === 0) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const typeTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(typeTimeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow inline-block min-w-[20px]">
      {words[index]?.substring(0, subIndex)}
      <span className={`text-cyan-400 ${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-cyan-400 font-medium mb-4 tracking-wide uppercase">Hello, It's Me</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              Jaindu Gajanayake
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold flex flex-wrap justify-center lg:justify-start items-center gap-3">
              <span>And I'm a</span>
              <Typewriter words={roles} />
            </div>

            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Results-driven Software Engineering undergraduate with 3+ years of technical background and 1 year of professional industry experience. Adept at thriving in Agile environments, leveraging strong problem-solving skills to deliver high-quality, user-centric applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-10"
          >
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="https://github.com/Jaindu1223" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jaindugajanayake" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/jaizz___?igsh=OHduNHN6djA0bGFt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1EwjYhcE11/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-extrabold text-black bg-cyan-400 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* Visual / Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <motion.div 
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full p-1.5 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 backdrop-blur-3xl shadow-[0_0_80px_rgba(34,211,238,0.2)]"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0F19] flex items-center justify-center relative group cursor-pointer border-4 border-[#0B0F19]">
              <img 
                src="/profile.png" 
                alt="Jaindu Gajanayake"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
