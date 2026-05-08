import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: "Languages",
    skills: ["Java", "Kotlin", "Python", "Swift", "Dart", "JavaScript", "HTML", "CSS", "SQL"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Angular", "Node.js", "React", "Flutter", "JSP", "PyTorch", "Boto3"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS ECS", "AWS S3", "GCP", "GitHub Actions", "Nginx", "Streamlit"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Databases & APIs",
    skills: ["MongoDB", "SQL", "REST APIs", "WebSockets"],
    color: "from-green-500 to-emerald-400"
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tech Stack & Skills</h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-400/50 transition-colors"
            >
              {/* Background gradient blob */}
              <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 bg-surface/80 border border-white/10 rounded-xl text-sm font-medium text-gray-300 shadow-lg hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
