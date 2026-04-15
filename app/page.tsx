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
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Welcome/About Section */}
      <section id="about">
        <Welcome />
      </section>

      {/* Stats Section */}
      <ServicesAndStats />

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section id="faqs">
        <Faqs />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <BlogSection />
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />

      
      <section id="services">
        <PricingServices />
      </section>
      
    </main>
  );
}