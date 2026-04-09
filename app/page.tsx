import Hero from "@/component/Hero";
import Welcome from "@/component/welcome";
import ServicesAndStats from "@/component/servicesStats";
import Testimonials from "@/component/Testimonial"; 
import Faqs from "@/component/Faq"; 

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
      
    </main>
  );
}