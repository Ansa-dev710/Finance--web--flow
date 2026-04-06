"use client";
import React from 'react';
import { PieChart, ShieldCheck, Briefcase, TrendingUp } from 'lucide-react';

const featureData = [
  {
    title: "Market Analysis",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: <TrendingUp size={32} />,
  },
  {
    title: "Accounting Advisor",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: <PieChart size={32} />,
  },
  {
    title: "General Business",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Financial Control",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: <ShieldCheck size={32} />,
  }
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featureData.map((item, index) => (
        <div 
          key={index}
          className="p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
          <p className="text-slate-500 leading-relaxed text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;