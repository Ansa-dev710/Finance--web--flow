"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How To Fixed A Problem?",
    answer: [
      "Far far away, behind the word mountains",
      "Consonantia, there live the blind texts",
      "When she reached the first hills of the Italic Mountains",
      "Bookmarksgrove, the headline of Alphabet Village",
      "Separated they live in Bookmarksgrove right",
    ],
    type: "list"
  },
  {
    question: "How To Grow Your Investments Funds?",
    answer: [
      "Far far away, behind the word mountains",
      "Consonantia, there live the blind texts",
      "When she reached the first hills of the Italic Mountains",
      "Bookmarksgrove, the headline of Alphabet Village",
      "Separated they live in Bookmarksgrove right",
    ],
    type: "list"
  },
  {
    question: "What Are Those Requirements For Businesses?",
    answer: [
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    ],
    type: "paragraph"
  },
  {
    question: "How To Manage Your Business Loans?",
    answer: [
      "Providing clear documentation of your business cash flow.",
      "Maintaining a healthy credit score through timely payments.",
      "Consulting with our financial experts for structured repayment plans.",
    ],
    type: "list"
  }
];

const Faqs = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative h-[500px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative z-20 w-[85%] h-[400px] rounded-sm overflow-hidden shadow-2xl"
          >
            <Image 
              src="/faq-1.jpg" 
              alt="Financial Planning" 
              fill 
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 right-0 z-10 w-[70%] h-[350px] rounded-sm overflow-hidden shadow-2xl border-8 border-white"
          >
            <Image 
              src="/faq-2.jpg" 
              alt="Business Meeting" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Content & Accordion */}
        <div className="pt-4">
          <span className="text-[#00bd56] font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
            FAQS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-full flex items-center justify-between p-5 text-left font-bold transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#00bd56] text-white shadow-lg scale-[1.01]" 
                        : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{faq.question}</span>
                    {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white overflow-hidden"
                      >
                        <div className="p-6 text-gray-500 leading-relaxed text-[15px]">
                          {faq.type === "list" ? (
                            <ul className="space-y-3 list-decimal list-inside">
                              {faq.answer.map((line, i) => (
                                <li key={i} className="pl-2">{line}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{faq.answer[0]}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faqs;