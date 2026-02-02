import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-rose-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none uppercase tracking-tighter">PRECISION TRAINING. <br /><span className="text-[#0A0A0A]">REAL EVOLUTION.</span></h2>
          <p className="text-lg md:text-2xl text-white font-medium mb-12 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Generic routines produce generic results. Secure one of our limited weekly performance consultations to map out your specific transformation path.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#enquiry"
              className="bg-[#0A0A0A] text-white px-12 py-5 text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Reserve My Consultation
            </a>
          </div>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white/80">
            Only 4 evaluation slots remaining for this week.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
