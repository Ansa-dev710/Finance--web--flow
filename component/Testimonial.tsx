"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "/person_1.jpg", 
    feedback: "The level of precision in their financial reporting has transformed how we approach our quarterly audits. Highly recommended for any growing business.",
  },
  {
    name: "Sara jhon",
    role: "Marketing Manager",
    image: "/person_2.jpg",
    feedback: "Their accounting advisors helped us navigate complex tax compliance issues that we had been struggling with for years. Truly experts in their field.",
  },
  {
    name: "Sana jhon",
    role: "Marketing Manager",
    image: "/person_3.jpg",
    feedback: "From market analysis to general consultancy, the insights provided by this agency have been a key driver in our recent 20% year-over-year growth.",
  },
  // Infinite scroll ke liye hum data ko duplicate kar dete hain taake loop break na ho
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "/person_1.jpg", 
    feedback: "The level of precision in their financial reporting has transformed how we approach our quarterly audits.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 w-full overflow-hidden">
      
      {/* Background Header */}
      <div 
        className="absolute top-0 left-0 w-full h-[550px]" 
        style={{ backgroundColor: '#8fd0d2', zIndex: 0 }}
      >
        <div className="flex flex-col items-center pt-20">
          <span className="text-slate-800/60 font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Testimonies
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center px-4">
            Happy Clients & Feedbacks
          </h2>
        </div>
      </div>

      {/* Animated Cards Container */}
      <div className="relative mt-44" style={{ zIndex: 10 }}>
        <motion.div 
          className="flex gap-8 px-6"
          animate={{
            x: [0, -1200], // Cards ko left ki taraf move karega
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, // Speed control (jitna zyada duration, utni slow speed)
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-sm shadow-2xl shadow-black/5 relative group min-w-[350px] md:min-w-[400px]"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 w-12 h-12 bg-[#00bd56] rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>

              <p className="text-gray-500 leading-relaxed mb-10 text-lg italic">
                "{item.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#00bd56] transition-colors whitespace-nowrap">
                    {item.name}
                  </h4>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination (Static decoration to match UI) */}
      <div className="flex justify-center gap-2 mt-16 relative z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00bd56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
      </div>
    </section>
  );
};

export default Testimonials;