import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold font-display tracking-tighter text-rose-600">FORGE</span>
            <span className="text-2xl font-bold font-display tracking-tighter text-white">PERFORMANCE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#programs" className="hover:text-rose-500 transition-colors uppercase tracking-widest text-[11px] font-bold">Programs</a>
            <a href="#process" className="hover:text-rose-500 transition-colors uppercase tracking-widest text-[11px] font-bold">Our Method</a>
            <a href="#testimonials" className="hover:text-rose-500 transition-colors uppercase tracking-widest text-[11px] font-bold">Success Stories</a>
            <a
              href="#enquiry"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-none font-bold uppercase tracking-widest text-[11px] transition-all"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="text-white p-2"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              <a href="#programs" onClick={() => setIsOpen(false)} className="hover:text-rose-500 transition-colors uppercase tracking-widest text-sm font-bold">Programs</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="hover:text-rose-500 transition-colors uppercase tracking-widest text-sm font-bold">Our Method</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-rose-500 transition-colors uppercase tracking-widest text-sm font-bold">Success Stories</a>
              <a
                href="#enquiry"
                onClick={() => setIsOpen(false)}
                className="bg-rose-600 w-full text-center hover:bg-rose-700 text-white px-6 py-3 mt-4 font-bold uppercase tracking-widest text-sm transition-all"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
