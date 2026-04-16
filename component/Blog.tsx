"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";


const blogData = [
  {
    id: 1,
    image: "/blog-1.jpg", 
    date: "APRIL 05, 2026",
    author: "Sara",
    comments: 5,
    title: "10 Smart Strategies to Scale Your Small Business This Year",
    description: "Discover proven methods to increase your market reach and optimize operations for sustainable long-term growth.",
    href: "/blog/scale-your-business",
  },
  {
    id: 2,
    image: "/blog-2.jpg",
    date: "MARCH 28, 2026",
    author: "Shahzaib",
    comments: 12,
    title: "Understanding Risk Management in Modern Investment Portfolios",
    description: "Learn how to protect your assets while maximizing returns in an ever-changing global financial market.",
    href: "/blog/risk-management",
  },
  {
    id: 3,
    image: "/blog-3.jpg",
    date: "MARCH 15, 2026",
    author: "ANSA ASGHAR",
    comments: 8,
    title: "Why Digital Transformation is Essential for Financial Success",
    description: "A deep dive into how modern fintech tools are reshaping the way businesses handle cash flow and accounting.",
    href: "/blog/digital-transformation",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
      
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00bd56] font-bold uppercase tracking-[0.2em] text-xs mb-3 block"
          >
            NEWS & BLOG
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Latest news from our blog
          </motion.h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
          
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm shadow-sm bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              
              <div className="flex items-center space-x-4 text-[11px] font-bold text-gray-400 tracking-widest mb-4">
                <span className="uppercase">{post.date}</span>
                <span className="uppercase">{post.author}</span>
                <span className="flex items-center">
                  <MessageSquare size={13} className="mr-1.5 text-[#00bd56]" />
                  {post.comments}
                </span>
              </div>

          
              <Link href={post.href}>
                <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-[#00bd56] transition-colors duration-300 mb-3">
                  {post.title}
                </h3>
              </Link>

          
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">
                {post.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;