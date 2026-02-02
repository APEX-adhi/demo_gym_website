import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';

const TrustSignals: React.FC = () => {
  const signals = [
    {
      title: "Elite Coaching",
      desc: "Internationally certified experts (ACE/NASM/ACSM).",
      Icon: Award
    },
    {
      title: "Proven Results",
      desc: "500+ successful professional transformations.",
      Icon: TrendingUp
    },
    {
      title: "Focused Culture",
      desc: "Zero-judgment training for serious adults.",
      Icon: Users
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-zinc-900/50 py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {signals.map((signal, idx) => (
            <motion.div variants={itemVariants} key={idx} className="flex items-center space-x-4 md:flex-col md:space-x-0 md:text-center">
              <div className="p-3 bg-zinc-800 flex-shrink-0">
                <signal.Icon className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase md:mt-4">{signal.title}</h3>
                <p className="text-gray-400 text-xs">{signal.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
