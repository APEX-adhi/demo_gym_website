import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Weight Loss Program",
      desc: "Structured training and nutrition guidance for fat loss and energy.",
      img: "https://images.unsplash.com/photo-1549476464-37392f71752a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Muscle Building",
      desc: "Progressive strength training focused on lean muscle growth.",
      img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Personal Training",
      desc: "One-on-one coaching with certified trainers.",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Beginner Training",
      desc: "Safe, supportive training for people new to the gym.",
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Group Workouts",
      desc: "High-energy sessions that keep you consistent.",
      img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Strength & Conditioning",
      desc: "Elite athletic conditioning for peak physical performance.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="programs" className="py-20 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
          >
            Programs Designed for <span className="text-rose-600">Real Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm uppercase tracking-widest font-semibold max-w-xl leading-relaxed"
          >
            Eliminate guesswork. Our specialized programs are engineered for high-performing individuals.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {programs.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[#0A0A0A] border border-white/10 group hover:border-rose-600 transition-all duration-300"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-lg uppercase mb-2 text-white group-hover:text-rose-500 transition-colors">{p.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed min-h-[40px]">{p.desc}</p>
                <a
                  href="#enquiry"
                  className="inline-flex items-center text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] border-b-2 border-rose-600/0 hover:border-rose-600 transition-all"
                >
                  Explore This Path
                  <ArrowRight className="h-3 w-3 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
