"use client";
import React from 'react';
const NewsletterBanner = () => {
  return (
    <section className="bg-[#98D2D2] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Heading */}
        <h2 className="text-[#1A202C] text-2xl md:text-3xl font-medium tracking-tight">
          Sign Up for Your Free 1st Accounting Consultation
        </h2>

        {/* Right Side: Form */}
        <form className="flex w-full md:w-auto items-stretch shadow-sm">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-3 w-full md:w-80 outline-none border-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-[#22C55E] hover:bg-[#16a34a] text-white px-8 py-3 font-semibold transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterBanner;