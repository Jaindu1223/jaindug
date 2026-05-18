import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  "LinkedIn Learning Certificate of JavaScript Essential Training",
  "LinkedIn Learning Certificate of Figma for UX Design by Eric Nordquist",
  "Participant - API Development and Postman Hands-on Learning workshop at Fidenz Academy",
  "GIT101 - GitHub workshop organized by Mozilla Club of IIT",
  "Participant - AI-Driven Sri Lanka bootcamp series"
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group"
            >
              {/* Gradient reveal background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/50 group-hover:via-cyan-400/20 group-hover:to-blue-500/50 transition-all duration-500" />
              
              <div className="relative h-full bg-[#0B0F19] p-6 rounded-2xl flex items-start gap-5 border border-white/5 group-hover:border-transparent transition-colors z-10">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300 shrink-0">
                  <Award className="w-6 h-6 text-cyan-400 group-hover:text-[#0B0F19] transition-colors" />
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  {cert}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
