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
    feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "/person_2.jpg",
    feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "/person_3.jpg",
    feedback: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24">
      {/* Background Header (Teal Color) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[#96d2d3] -z-10 flex flex-col items-center pt-16">
        <span className="text-black/60 font-bold uppercase tracking-[0.3em] text-xs mb-4">
          Testimonies
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center px-4">
          Happy Clients & Feedbacks
        </h2>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6 mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-sm shadow-xl relative group"
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
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-gray-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#00bd56] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots (Visual Only) */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-[#00bd56]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;