import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Certificates from './components/Certificates';
import Competitions from './components/Competitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-white font-sans selection:bg-cyan-400/30 selection:text-white">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 bg-smart-pattern opacity-50 pointer-events-none" />
      
      {/* Interactive Background */}
      <CursorTrail />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Projects />
          <TechStack />
          <Certificates />
          <Competitions />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
