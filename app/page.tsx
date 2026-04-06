import Hero from "@/component/Hero";
import Features from "@/component/Feature";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <Features />
      </div>
      {/* Future sections yahan call honge */}
    </main>
  );
}