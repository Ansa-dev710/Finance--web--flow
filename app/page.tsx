import Hero from "@/component/Hero";
import Welcome from "@/component/welcome";
import Features from "@/component/Feature";
import ServicesAndStats from "@/component/servicesStats";

export default function HomePage() {
  return (
    <main className="bg-white">

      <Hero />
      
      <Welcome />

      {/* Services and Stats Section (Jo screenshot aapne share kiya tha) */}
      <ServicesAndStats />

      <div className="max-w-7xl mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <p className="text-[#00bd56] font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Services
          </p>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Our Core Services
          </h2>
        </div>
        <Features />
      </div>
      
    </main>
  );
}