import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">ACCOUNTING<span className="text-blue-500"></span></h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>

    
        <div>
          <h4 className="font-bold mb-6 text-lg">Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-500">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

    
        <div>
          <h4 className="font-bold mb-6 text-lg">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>Financial Planning</li>
            <li>Investments Management</li>
            <li>Taxes & Compliance</li>
          </ul>
        </div>

    
        <div>
          <h4 className="font-bold mb-6 text-lg">Have a Question?</h4>
          <p className="text-slate-400 text-sm mb-4">Bharia Town Lahore</p>
          <p className="text-blue-500 font-bold">03018950901</p>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} All rights reserved | This template is made with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;