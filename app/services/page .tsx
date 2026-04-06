import Features from "@/component/Feature";

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="bg-slate-50 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-slate-900">Our Professional Services</h1>
          <p className="text-slate-600 mt-4 max-w-2xl">
            We provide top-tier accounting and financial consulting to help your business grow and stay compliant.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <Features />
      </div>
    </main>
  );
}