export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get In Touch</h1>
            <p className="text-slate-600 mb-8">
              Have questions about our financial services? Contact our experts today.
            </p>
            <div className="space-y-4">
              <p><strong>Email:</strong> ansaasgar710@gmail.com</p>
              <p><strong>Phone:</strong> 03018950901</p>
              <p><strong>Address:</strong> Bharia town lahore</p>
            </div>
          </div>

          {/* Simple Form Placeholder */}
          <div className="bg-white p-8 shadow-lg rounded-xl border border-slate-100">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
              <textarea placeholder="Message" rows={4} className="w-full p-3 border rounded-lg focus:outline-blue-500"></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}