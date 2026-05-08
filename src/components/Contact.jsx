import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-green-500/20 border border-green-500/50 rounded-xl overflow-hidden transition-all hover:bg-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="mailto:YOUR_EMAIL"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-primary/20 border border-primary/50 rounded-xl overflow-hidden transition-all hover:bg-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Mail className="w-5 h-5 text-blue-400" />
              <span>Send an Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
