import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Library, BookOpen, Award } from 'lucide-react';

const education = [
  {
    id: 1,
    school: "Richmond College, Galle",
    degree: "Primary & Secondary Education (G.C.E A/L Physical Science)",
    date: "2008 - 2022",
    icon: Library
  },
  {
    id: 2,
    school: "Gateway College, Colombo",
    degree: "Edexcel UK Computer Course",
    date: "2015 - 2018",
    icon: BookOpen
  },
  {
    id: 3,
    school: "University of Westminster, UK",
    degree: "BEng (Hons) Software Engineering",
    date: "2022 - 2026",
    icon: GraduationCap
  }
];

const AcademicJourney = () => {
  return (
    <section id="education" className="py-32 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase mb-4 block">Education</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Academic Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation in technology, marketing, and leadership
          </p>
        </motion.div>

        {/* Desktop Layout: Horizontal Alternating Timeline */}
        <div className="hidden md:flex relative w-full items-center justify-between h-[350px] mt-24">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -translate-y-1/2" />

          {education.map((edu, idx) => {
            const isTop = idx % 2 === 0;
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex-1 h-full"
              >
                {/* Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] border-4 border-[#0B0F19] z-20" />

                {/* Connector Line to Card */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-cyan-400/30 h-12 ${isTop ? 'bottom-1/2' : 'top-1/2'}`} />

                {/* Card */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[280px] bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-3 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:border-cyan-400/60 z-10 ${isTop ? 'bottom-[calc(50%+3rem)]' : 'top-[calc(50%+3rem)]'}`}>
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.school}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.degree}</p>
                  <div className="flex items-center gap-2 text-cyan-400/80 text-sm font-medium">
                    <span>🗓</span> {edu.date}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout: Vertical Timeline */}
        <div className="md:hidden relative flex flex-col space-y-12 py-8 ml-4">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 pr-4"
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 -translate-x-[5px] w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] border-4 border-[#0B0F19] z-10" />

                {/* Card */}
                <div className="w-full bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-400/50">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
                  <p className="text-gray-400 text-sm mb-4">{edu.degree}</p>
                  <div className="flex items-center gap-2 text-cyan-400/80 text-sm font-medium">
                    <span>🗓</span> {edu.date}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AcademicJourney;
