import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star } from 'lucide-react';

const competitions = [
  {
    place: "1st Place",
    name: "COFAS International Computer Olympiad 2016",
    org: "Organized by CMS, Held in India",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    place: "",
    name: "Design IX23 (UI-UX Competition) & CodeSprint 8",
    org: "Organized by IEEE branch of IIT",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    place: "",
    name: "Mora UXplore 2.0, UI-UX Competition",
    org: "Organized by University of Moratuwa",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    place: "",
    name: "Idealize, Mobile App and Web Development Competition",
    org: "Organized by AIESEC in University of Moratuwa",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    place: "",
    name: "Aquathon 2023",
    org: "",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    place: "",
    name: "Designathon Challenge",
    org: "Organized by ROOTCODE",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    place: "",
    name: "hackX 2023",
    org: "Organized by University of Kelaniya",
    icon: Star,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  }
];

const Competitions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="competitions" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Competitions</h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {competitions.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative p-[1px] rounded-2xl overflow-hidden group cursor-default"
              >
                {/* Gradient border reveal on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/50 group-hover:via-cyan-400/20 group-hover:to-blue-500/50 transition-all duration-500" />
                
                <div className="relative h-full bg-[#0B0F19] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/5 group-hover:border-transparent transition-colors z-10">
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={`p-4 rounded-full ${comp.bg} flex items-center justify-center shrink-0 group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]`}>
                      <Icon className={`w-8 h-8 ${comp.color} group-hover:text-[#0B0F19] transition-colors`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {comp.name}
                      </h3>
                      {comp.org && (
                        <p className="text-sm text-gray-400">
                          {comp.org}
                        </p>
                      )}
                    </div>
                  </div>

                  {comp.place && (
                    <div className="relative z-10 ml-auto sm:ml-0 self-start sm:self-center shrink-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold border border-white/10 ${comp.place === '1st Place' ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' : 'bg-surface text-gray-300'}`}>
                        {comp.place}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;
