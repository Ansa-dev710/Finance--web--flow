"use client";
import React from "react";
import Image from "next/image";
import { BarChart3, UserCheck, Users } from "lucide-react"; 

const features = [
  {
    title: "Market Analysis",
    desc: "Gain a competitive edge with our deep-dive market insights and trend forecasting to guide your financial decisions.",
    Icon: BarChart3,
  },
  {
    title: "Accounting Advisor",
    desc: "Navigate complex financial landscapes with expert guidance on tax compliance, auditing, and fiscal management.",
    Icon: UserCheck,
  },
  {
    title: "General Consultancy",
    desc: "Strategic business solutions designed to optimize your workflow and maximize sustainable long-term growth.",
    Icon: Users,
  },
];
const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image */}
        <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
          <Image
            src="/about-image.jpg" 
            alt="Welcome to Accounting"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <span className="text-green-600 font-bold uppercase tracking-widest text-xs">
            Welcome to Accounting
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-10 leading-tight">
            We Are the Best Accounting Agency
          </h2>

          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-6">
            
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <item.Icon size={28} />
                </div>
                
            
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Welcome;