"use client";
import React, { useState } from 'react';
import Link from 'next/link';

import { Mail, Phone, Search, Globe, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constant';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const SocialIcon = ({ path }: { path: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      width="16" 
      height="16" 
      fill="currentColor" 
      className="hover:text-(--color-primary) transition-colors cursor-pointer"
    >
      <path d={path} />
    </svg>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm font-inter">
      {/* 1. TOP DARK BAR */}
      <div className="bg-[#3c306d] text-white py-2 px-4 md:px-10">
        <div className="max-w-480 mx-auto flex justify-between items-center text-[13px]">
          <div className="flex gap-x-6 items-center">
            <span className="flex items-center gap-x-2">
              <Phone size={14} /> 03018950901
            </span>
            <span className="hidden sm:flex items-center gap-x-2">
              <Mail size={14} /> ansaasgar710@gmail.com
            </span>
          </div>

          <div className="flex gap-x-5 items-center">
          
            <SocialIcon path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        
            <SocialIcon path="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        
            <SocialIcon path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 12c0-4.42 3.58-8 8-8h4c4.42 0 8 3.58 8 8v4c0 4.42-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8v-4z" />
            <Globe size={16} className="hover:text-(--color-primary) cursor-pointer" />
          </div>
        </div>
      </div>

    
      <div className="border-b border-slate-100 py-5 px-4 md:px-10">
        <div className="flex justify-between items-center max-w-480 mx-auto">
      
          <Link href="/" className="text-2xl font-black text-slate-900 tracking-tight">
            Accounting<span className="text-(--color-primary)">.</span>
          </Link>

    
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "relative text-[14px] font-bold uppercase tracking-widest transition-colors py-2",
                  link.name === "Home" 
                    ? "text-(--color-primary) after:content-[''] after:absolute after:-bottom-[22px] after:left-0 after:w-full after:h-[3px] after:bg-(--color-primary)" 
                    : "text-slate-900 hover:text-(--color-primary)"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

      
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-[#f4f4f4] text-slate-800 py-2 px-4 pr-10 rounded-md w-65 focus:outline-none focus:ring-1 focus:ring-(--color-primary)" 
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
            
            <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col space-y-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-(--color-primary)"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;