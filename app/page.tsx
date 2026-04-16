import Hero from "@/component/Hero";
import Welcome from "@/component/welcome";
import ServicesAndStats from "@/component/servicesStats";
import Testimonials from "@/component/Testimonial"; 
import Faqs from "@/component/Faq"; 
import BlogSection from "@/component/Blog"; 
import Newsletter from "@/component/NewsSectionLetter"; 
import PricingServices from "@/component/PricingServisec"; 

export default function HomePage() {
  return (
    <main className="bg-white">

      <section id="home">
        <Hero />
      </section>
      
  
      <section id="about">
        <Welcome />
      </section>

      
      <ServicesAndStats />

      
      <section id="testimonials">
        <Testimonials />
      </section>

  
      <section id="faqs">
        <Faqs />
      </section>

    
      <section id="blog">
        <BlogSection />
      </section>
      
    
      <Newsletter />

      
      <section id="services">
        <PricingServices />
      </section>
      
    </main>
  );
}