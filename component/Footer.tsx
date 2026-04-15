"use client";
import React from "react";

const Footer = () => {
  
  const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.17-2 2.85c.95.11 1.95-.2 1.95-.2-.9.85-2 1.6-2 1.6-.5 5.5-3.5 10.5-11 10.5-4.5 0-7.5-3-7.5-3 3.5 0 5-2 5-2-3 0-4.5-2.5-4.5-2.5.5.1 1.5 0 1.5 0-3.5-1-4-4.5-4-4.5.5.1 1.5.1 1.5.1-3.5-2.5-2-6.5-2-6.5 3 4 8 5.5 8 5.5.5-2.5 2-4.5 4.5-4.5 1.5 0 2.5.5 3.5 1.5.5-1 1.5-1.5 1.5-1.5z"></path></svg>
  );

  const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );

  const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  );

  return (
    <footer className="bg-[#222222] text-white pt-20 pb-10 font-inter">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 1. About Us Section */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider">About Us</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing expert financial solutions and strategic accounting services in Bahria Town, Lahore. We help your business grow with precision.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00c04b] transition-colors cursor-pointer text-white">
              <TwitterIcon />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00c04b] transition-colors cursor-pointer text-white">
              <FacebookIcon />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00c04b] transition-colors cursor-pointer text-white">
              <InstagramIcon />
            </div>
          </div>
        </div>

        {/* 2. Services Section */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider">Services</h4>
          <ul className="text-gray-400 space-y-4 text-sm">
            <li className="hover:text-[#00c04b] cursor-pointer transition-colors">Market Analysis</li>
            <li className="hover:text-[#00c04b] cursor-pointer transition-colors">Accounting Advisor</li>
            <li className="hover:text-[#00c04b] cursor-pointer transition-colors">General Consultancy</li>
            <li className="hover:text-[#00c04b] cursor-pointer transition-colors">Structured Assessment</li>
          </ul>
        </div>

        {/* 3. Discover Section */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider">Discover</h4>
          <ul className="text-gray-400 space-y-4 text-sm">
            <li><a href="#about" className="hover:text-[#00c04b] transition-colors">About us</a></li>
            <li><a href="#contact" className="hover:text-[#00c04b] transition-colors">Contact us</a></li>
            <li className="hover:text-[#00c04b] cursor-pointer transition-colors">Terms & Conditions</li>
            <li className="hover:text-[#00c04b] cursor-pointer transition-colors">Policies</li>
          </ul>
        </div>

        {/* 4. Consultation Form Section */}
        <div className="lg:col-span-5 bg-[#2d2d2d] p-8 rounded-sm shadow-xl">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Free Consultation</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-[#3d3d3d] border-none p-4 text-white text-sm focus:ring-1 focus:ring-[#00c04b] outline-none rounded-sm" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-[#3d3d3d] border-none p-4 text-white text-sm focus:ring-1 focus:ring-[#00c04b] outline-none rounded-sm" 
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-[#3d3d3d] border-none p-4 text-white text-sm focus:ring-1 focus:ring-[#00c04b] outline-none rounded-sm" 
            />
            <textarea 
              placeholder="Message" 
              rows={3} 
              className="w-full bg-[#3d3d3d] border-none p-4 text-white text-sm focus:ring-1 focus:ring-[#00c04b] outline-none rounded-sm"
            ></textarea>
            <button className="w-full bg-[#00c04b] py-4 font-bold text-white uppercase tracking-widest text-xs hover:bg-[#00a841] transition-all duration-300 rounded-sm shadow-lg">
              Send A Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 mt-16 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with ❤️ by <span className="text-[#00c04b] font-medium">Ansa Asghar</span></p>
      </div>
    </footer>
  );
};

export default Footer;