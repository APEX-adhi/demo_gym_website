import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rahul M.",
      stat: "10kg Recomposition",
      role: "IT Consultant, Bengaluru",
      text: "Managing back-to-back meetings and a sedentary lifestyle left me sluggish. Forge's 45-minute efficiency blocks helped me drop 10kg and fixed my posture without me having to live in the gym."
    },
    {
      name: "Ananya S.",
      stat: "Functional Power",
      role: "Media Professional, Delhi",
      text: "I was tired of generic 'cardio-only' plans. The coaches here taught me proper compound lifting. I've gained visible muscle definition and feel stronger than ever navigating my busy commute."
    },
    {
      name: "Vikram S.",
      stat: "40kg Bench PR",
      role: "Business Owner, Mumbai",
      text: "I've tried every high-end gym in South Bombay. Forge is the only place where data-driven programming is real. My bench press went from 60kg to 100kg while I managed a 60-hour work week."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 uppercase tracking-tight"
          >
            Success <span className="text-rose-600">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xs uppercase tracking-widest font-semibold"
          >
            Real results from India's driven urban professionals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-[#0A0A0A] p-8 border border-white/10 relative flex flex-col justify-between hover:border-rose-600/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-3 bg-rose-600/10 text-rose-500 text-[10px] font-bold uppercase tracking-widest">
                {r.stat}
              </div>
              <div>
                <div className="flex text-rose-600 mb-4 space-x-0.5">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"{r.text}"</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">{r.name}</h4>
                <p className="text-rose-600 text-[10px] font-bold uppercase tracking-tighter">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
