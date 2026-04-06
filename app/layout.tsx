import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

// Finance specific premium font combination
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Accounting - Professional Financial Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-inter antialiased text-slate-900">
        <Navbar />
        {/* Added extra padding on top because our Navbar is sticky and has two bars */}
        <main className="pt-[140px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}