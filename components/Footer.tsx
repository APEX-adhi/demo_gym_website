import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold font-display tracking-tighter text-rose-600">FORGE</span>
              <span className="text-2xl font-bold font-display tracking-tighter text-white">PERFORMANCE</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Forge Performance Lab is a premium, results-driven fitness studio located in the heart of urban India. We prioritize evidence-based training and professional accountability to deliver life-changing physical transformations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-rose-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-rose-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Personal Coaching</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Muscle Hypertrophy</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Sustainable Fat Loss</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Executive Wellness</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Nutrition Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Forge Performance Lab<br />Floor 4, Skyline Plaza<br />BKC, Mumbai 400051</li>
              <li className="text-white font-bold">+91 98765 43210</li>
              <li>info@forgeperformance.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2024 Forge Performance Lab. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
