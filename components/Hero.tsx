import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Athlete training" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-3 py-1 border border-rose-600 text-rose-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
          >
            Elite Performance
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold leading-[0.9] mb-6"
          >
            RESULTS ARE <br/>NON-NEGOTIABLE.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-400 mb-8 leading-snug max-w-xl"
          >
            Elite coaching for driven professionals. Science-backed transformations, not just memberships.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#enquiry" className="bg-rose-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-center hover:bg-rose-700 transition-colors">
              Start My Assessment
            </a>
            <a href="#programs" className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-center hover:bg-white hover:text-black transition-all">
              View Performance Plans
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
