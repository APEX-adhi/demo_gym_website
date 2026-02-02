
import React, { useState } from 'react';

const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', goal: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you. A performance coach will contact you within 24 hours.');
  };

  return (
    <section id="enquiry" className="py-20 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 uppercase">Begin Your <span className="text-rose-600">Recomposition</span></h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We don't sell gym access; we deliver results. Secure your 30-minute fitness assessment and body-composition mapping today.
            </p>
            <div className="hidden lg:block space-y-4">
              <p className="text-xl font-bold">+91 98765 43210</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">BKC, Mumbai • Professional Grade Facility</p>
            </div>
          </div>
          <div className="bg-zinc-900 p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required placeholder="Full Name" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-white focus:border-rose-600 outline-none transition-colors" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" required placeholder="Phone Number" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-white focus:border-rose-600 outline-none transition-colors" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input type="email" required placeholder="Email Address" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-white focus:border-rose-600 outline-none transition-colors" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <select className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-white focus:border-rose-600 outline-none appearance-none" onChange={(e) => setFormData({...formData, goal: e.target.value})}>
                <option value="">Select Primary Objective</option>
                <option value="fat-loss">Accelerated Fat Loss</option>
                <option value="muscle">Hypertrophy & Aesthetics</option>
                <option value="strength">Elite Strength Capacity</option>
              </select>
              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-xs font-bold uppercase tracking-widest transition-all">Secure My Slot</button>
              <p className="text-[9px] text-gray-600 text-center uppercase tracking-widest leading-tight">
                Privacy protected. No promotional spam. Priority response for professionals.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
