import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Trainee Software Engineer",
    company: "Applova Inc. (hSenid Mobile Solutions)",
    location: "Full-time",
    date: "Jul 2024 - Jun 2025",
    current: false,
    points: [
      "Worked within the Integration Team of Applova to develop and enhance full-stack features for Applova's digital ordering suite, including Android POS system, Merchant and Admin Web portals, and Kitchen Display Systems serving the U.S. food and beverage industry.",
      "Contributed to the complete software development life cycle within an Agile environment, using tools such as Jira, Git, Docker, and CI/CD pipelines.",
      "AI Recommendation Feature on POS: Implemented new UIs and logical handling for the AI recommendation feature across both the Android app and customer-facing screens.",
      "Merchant Web Payment Integration: Researched and integrated the Braintree SDK into the Merchant Web platform with full frontend and backend implementation to securely process transactions and manage token generation.",
      "Backend & API Integration: Developed scalable RESTful APIs using Spring Boot and Java to handle complex database transactions with MongoDB.",
      "UI & System Enhancements: Delivered impactful frontend improvements including a new portrait mode UI for customer profiles and a revamped POS printer configuration flow.",
      "System Automation: Designed and implemented automated email notification triggers for Merchant Web operations."
    ],
    tags: ["Java", "Spring Boot", "Android", "MongoDB", "React", "Docker", "CI/CD", "Agile"]
  },
  {
    id: 2,
    role: "Freelance Software Developer",
    company: "Self-Employed",
    location: "Remote",
    date: "2022 - 2024",
    current: false,
    points: [
      "Developed custom mobile and web applications tailored to client requirements, focusing on responsive design and seamless user experiences.",
      "Managed end-to-end development lifecycles from requirement gathering to deployment."
    ],
    tags: ["React", "React Native", "Flutter", "Web Development", "Mobile Development"]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] border-4 border-[#0B0F19] z-10" />

                {/* Content Card */}
                <div className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:border-cyan-400/60 group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">

                    {/* Header Info */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-gray-300 font-medium mb-1">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>

                    {/* Date Tag */}
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
                        {exp.date}
                      </span>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Points */}
                  {exp.points.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1.5 text-xs">◆</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-400/10 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
