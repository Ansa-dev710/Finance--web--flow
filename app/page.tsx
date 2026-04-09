import Hero from "@/component/Hero";
import Welcome from "@/component/welcome";
import ServicesAndStats from "@/component/servicesStats";
import Testimonials from "@/component/Testimonial"; 
import Faqs from "@/component/Faq"; 
import BlogSection from "@/component/Blog"; 

export default function HomePage() {
  return (
    <main className="bg-white">

      <Hero />
      
      <Welcome />

      {/* 1. Services and Stats Section (Watermark icons + Counter) */}
      <ServicesAndStats />

      {/* 2. Testimonials Section (Teal background with auto-scroll cards) */}
      <Testimonials />

      {/* 3. FAQ Section (Overlapping images + Accordion) */}
      <Faqs />

      {/* 4. Blog Section (Latest news cards) */}
      <BlogSection />
      
    </main>
  );
}