
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import ProblemSolution from './components/ProblemSolution';
import Programs from './components/Programs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] selection:bg-rose-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <ProblemSolution />
        <Programs />
        <Process />
        <Testimonials />
        <FinalCTA />
        <EnquirySection />
      </main>
      <Footer />
      {/* Optional AI Assistant to help visitors pick a program */}
      <AIAssistant />
    </div>
  );
};

export default App;
