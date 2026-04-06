"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark Overlay */}
      </div>

      <div className="relative z-10 text-center px-4">
        <span className="text-[#5cb85c] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
          We Business Grow
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-white max-w-4xl mx-auto leading-tight mb-8">
          We Help You Businesses Innovate and Grow
        </h1>
        <button className="bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-[#5cb85c] hover:text-white transition-all uppercase tracking-widest text-xs">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;