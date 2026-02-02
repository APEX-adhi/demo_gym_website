import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Assessment", desc: "Movement & biometrics analysis." },
    { num: "02", title: "Strategy", desc: "Customized training programming." },
    { num: "03", title: "Execution", desc: "High-intensity expert coaching." }
  ];

  return (
    <section id="process" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 uppercase"
        >
          Our <span className="text-rose-600">Method</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-zinc-900 p-8 border border-white/5 relative hover:border-rose-600/30 transition-colors"
            >
              <span className="text-5xl font-black text-rose-600/10 absolute top-4 right-4">{s.num}</span>
              <h3 className="font-bold text-lg mb-2 relative z-10">{s.title}</h3>
              <p className="text-gray-400 text-sm relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
