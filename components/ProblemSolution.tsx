
import React from 'react';

const ProblemSolution: React.FC = () => {
  const points = [
    { p: "Inconsistency", s: "Weekly accountability & scheduling." },
    { p: "Plateaus", s: "Data-driven, periodized programming." },
    { p: "Injury Risk", s: "Form-first elite coaching." }
  ];

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Generic Gyms <span className="text-rose-600">Fail.</span></h2>
          <p className="text-gray-400 text-sm">We replace guesswork with precision results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((item, idx) => (
            <div key={idx} className="border-l-2 border-rose-600 pl-4 py-2">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase line-through mb-1">{item.p}</h4>
              <p className="text-sm font-medium">{item.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
