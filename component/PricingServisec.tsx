import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  { name: "PERSONAL", price: "49", features: ["Brand Strategy", "Online Marketing", "Branding Services", "Creative Marketing", "Sales Management"] },
  { name: "BUSINESS", price: "79", features: ["Brand Strategy", "Online Marketing", "Branding Services", "Creative Marketing", "Sales Management"] },
  { name: "ULTIMATE", price: "109", features: ["Brand Strategy", "Online Marketing", "Branding Services", "Creative Marketing", "Sales Management"] },
  { name: "PREMIUM", price: "149", features: ["Brand Strategy", "Online Marketing", "Branding Services", "Creative Marketing", "Sales Management"] },
];

const PricingServices = () => {
  return (
    <section id="services" className="py-20 bg-[#f8faff]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#5cb85c] font-bold tracking-widest uppercase text-sm">Price & Plans</span>
          <h2 className="text-4xl font-extrabold text-[#1a2b48] mt-2">Affordable Packages</h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-50 flex flex-col"
            >
              {/* Plan Name */}
              <h3 className="text-[#5cb85c] font-bold tracking-widest mb-8">{plan.name}</h3>

              {/* Price */}
              <div className="flex justify-center items-start mb-10 text-[#1a2b48]">
                <span className="text-2xl font-medium mt-2">$</span>
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-1 mt-8">/mos</span>
              </div>

              {/* Features List */}
              <ul className="space-y-5 text-left inline-block mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check size={18} className="text-[#87d5fb] mr-3 font-bold" />
                    <span className="text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <button className="w-full py-4 px-6 bg-[#5cb85c] text-white font-bold rounded-md hover:bg-[#4cae4c] hover:shadow-md transition-all duration-300 uppercase tracking-wider text-sm">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingServices;