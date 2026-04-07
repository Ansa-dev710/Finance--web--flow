"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Calculator, FileText, Briefcase, TrendingUp } from "lucide-react";


const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const services = [
  { title: "Accounting", Icon: Calculator },
  { title: "Tax, Compliance & Payroll", Icon: FileText },
  { title: "Financial Services", Icon: Briefcase },
  { title: "Growth & Funding Access", Icon: TrendingUp },
];

const counters = [
  { value: "50", label: "Years of Experienced" },
  { value: "8500", label: "Cases Completed" },
  { value: "20", label: "Awards Won" },
  { value: "50", label: "Expert Consultant" },
];

const ServicesStats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >

              <div className="absolute -top-8 -left-6 text-gray-100/70 group-hover:text-green-50 transition-colors duration-500">
                <item.Icon size={90} strokeWidth={0.5} />
              </div>
              
              <div className="relative z-10 pt-4">
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center border-t border-gray-100 pt-20">
          {counters.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-6xl font-black text-green-500 mb-3 flex justify-center tracking-tighter">
                <AnimatedNumber value={stat.value} />
              </div>
              <p className="text-slate-900 font-bold uppercase tracking-[0.15em] text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesStats;