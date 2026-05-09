import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ExternalLink, Youtube } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "SmartScale Auto-Scaling System",
    category: "Others",
    categories: ["Others"],
    image: "/smartscale1.png", // Tell me the exact image name you put in the public folder!
    description: "An AI-driven serverless machine learning pipeline featuring a dual-AI approach (MLP and LSTM) for accurate traffic forecasting and optimal RAM sizing. Integrated Boto3 for AWS Lambda concurrency management.",
    link: "https://github.com",
    demoLink: "https://youtu.be/ImJ2CNZL0gA?si=HY9AC3RJqwRFM1I6", // Paste your YouTube link here
    tags: ["Python", "AWS Lambda", "ECS", "Docker", "Streamlit"]
  },
  {
    id: 2,
    title: "EV Charger Finder — SwiftUI App",
    category: "iOS",
    categories: ["iOS"],
    image: "/ev.jpeg",
    description: "A simple iOS app built with SwiftUI to locate nearby EV charging stations by entering latitude and longitude coordinates. Fetches real-time data using the openchargemap API.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["SwiftUI", "iOS", "URLSession", "REST API"]
  },
  {
    id: 3,
    title: "iOS Real-Time Weather App",
    category: "iOS",
    categories: ["iOS"],
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?fit=crop&w=800&q=80",
    description: "Native iOS app displaying real-time weather conditions via OpenWeather API integration, focusing on an intuitive location-based UI and accurate forecasting.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Swift", "iOS", "REST APIs"]
  },
  {
    id: 4,
    title: "Med Vault Medicine Spotter",
    category: "Android",
    categories: ["Android", "iOS"],
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?fit=crop&w=800&q=80",
    description: "A cross-platform Flutter application locating the nearest pharmacy with real-time stock updates. Incorporates a machine learning model for suggesting alternative medicines and provides digital prescriptions.",
    link: "https://github.com",
    demoLink: "https://youtu.be/k-8zC6pREok?si=2yadRZOjxxsRkNzJ",
    tags: ["Flutter", "Node.js", "MongoDB", "Python"]
  },
  {
    id: 5,
    title: "SmartPicks AI Recommendation",
    category: "Android",
    categories: ["Android"],
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?fit=crop&w=800&q=80",
    description: "Frontend interfaces and logics for cashier-facing and customer-facing POS screens, integrating AI product recommendations. Enhances the user flow on the Android POS system.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Java", "Android"]
  },
  {
    id: 6,
    title: "Android Flag Quiz App",
    category: "Android",
    categories: ["Android"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=800&q=80",
    description: "A flag quiz game built with Kotlin and Jetpack Compose featuring various interactive game modes to test users' knowledge of country flags globally.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Kotlin", "Jetpack Compose", "Android"]
  },
  {
    id: 7,
    title: "Merchant Web Payment Integration",
    category: "Web Apps",
    categories: ["Web Apps"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?fit=crop&w=800&q=80",
    description: "Full-stack integration of Braintree SDK into the Applova Merchant platform. Developed secure backend APIs with Spring Boot and MongoDB, handling token generation and sensitive card information.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Java", "Spring Boot", "JSP", "MongoDB", "Braintree"]
  },
  {
    id: 8,
    title: "BloodLink Web Application",
    category: "Web Apps",
    categories: ["Web Apps"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?fit=crop&w=800&q=80",
    description: "Implemented a web application for Idealize 2023 competition to determine the availability of blood for each blood group.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 9,
    title: "MUSICK Web Application",
    category: "Web Apps",
    categories: ["Web Apps"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?fit=crop&w=800&q=80",
    description: "Implemented a music album selling web application for music lovers to browse and find new song albums.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 10,
    title: "Online Shopping System (GUI)",
    category: "Others",
    categories: ["Others"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?fit=crop&w=800&q=80",
    description: "Developed an online shopping system using Java OOP principles, featuring a JavaFX GUI for users and a console interface for administration.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Java", "JavaFX", "OOP"]
  },
  {
    id: 11,
    title: "Infinity Trails UI-UX",
    category: "Others",
    categories: ["Others"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?fit=crop&w=800&q=80",
    description: "Engaged in a UI-UX design project for a flight booking system for the Tech-triathlon competition organized by Rootcode.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Figma", "UI/UX"]
  },
  {
    id: 12,
    title: "8th Sense UI-UX (Vision Pro)",
    category: "Others",
    categories: ["Others"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?fit=crop&w=800&q=80",
    description: "Designed an innovative user interface conceptualized for Apple Vision Pro for the Design IX 2023 competition.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Figma", "UI/UX", "Vision Pro"]
  },
  {
    id: 13,
    title: "Theatre Seating Management",
    category: "Others",
    categories: ["Others"],
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?fit=crop&w=800&q=80",
    description: "Implemented a Java-based Theatre Seating Management System utilizing object-oriented programming principles to streamline ticket booking.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Java", "OOP"]
  },
  {
    id: 14,
    title: "Academic Progression Prediction",
    category: "Others",
    categories: ["Others"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80",
    description: "Developed an academic progression outcomes prediction system using Python to forecast academic progression based on student details.",
    link: "https://github.com",
    demoLink: "https://youtube.com/watch?v=example",
    tags: ["Python", "Data Science"]
  }
];

// Helper to support legacy single category or array
const getCategories = (project) => project.categories || [project.category];

const categoriesList = ["All", "Android", "iOS", "Web Apps", "Others"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    if (activeTab === "All") return true;
    return getCategories(project).includes(activeTab);
  });

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Latest <span className="text-cyan-400">Projects</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categoriesList.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === category
                ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                : 'bg-surface border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/50'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden glass-card border border-transparent hover:border-cyan-400/50 transition-colors relative"
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${project.id === 1 || project.id === 2 || project.id === 4 ? 'object-contain' : 'object-cover'}`}
                  />
                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                    <p className="text-cyan-400 text-sm font-bold mb-2 flex items-center gap-2">
                      View Details <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-surface relative z-30">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && <span className="text-xs font-medium text-gray-400">+{project.tags.length - 3}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3D Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, y: 50, rotateX: 20 }}
                animate={{ scale: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.9, y: 50, rotateX: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-3xl bg-[#0B0F19] rounded-3xl overflow-hidden shadow-2xl border border-cyan-400/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-cyan-400 hover:text-black rounded-full text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-64 sm:h-80 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 sm:p-10 relative z-20 -mt-20">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Source
                      </a>
                    )}
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/10 text-red-500 border border-red-500/30 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg shadow-red-500/10 hover:shadow-red-500/30"
                      >
                        <Youtube className="w-5 h-5" />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
