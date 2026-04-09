import Hero from "@/component/Hero";
import Welcome from "@/component/welcome";
import ServicesAndStats from "@/component/servicesStats";
import Testimonials from "@/component/Testimonial"; 
import Faqs from "@/component/Faq"; 
import BlogSection from "@/component/Blog"; 
import Newsletter from "@/component/NewsSectionLetter"; 

export default function HomePage() {
  return (
    <main className="bg-white">

      <Hero />
      
      <Welcome />

      <ServicesAndStats />

      <Testimonials />

      <Faqs />

      <BlogSection />

      
      <Newsletter />
      
    </main>
  );
}