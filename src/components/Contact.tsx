import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/5 rounded-3xl border border-white/10 shadow-sm p-6 md:p-10 backdrop-blur-sm">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight mb-3">Contact Us — Zoopol</h1>
            <p className="text-white/50 text-sm md:text-base">We’re here to help with any questions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5 transition-colors hover:bg-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#156BFC]" />
                <h3 className="text-white text-xl font-semibold">Email</h3>
              </div>
              <p className="text-white/60 text-base mb-4">Reach us anytime and we’ll get back soon.</p>
              <a href="mailto:zoopol.india@gmail.com" className="text-[#156BFC] hover:underline transition-colors font-medium">zoopol.india@gmail.com</a>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-white/5 transition-colors hover:bg-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-[#156BFC]" />
                <h3 className="text-white text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-white/60 text-base mb-4">Call us during business hours.</p>
              <a href="tel:7510339308" className="text-[#156BFC] hover:underline transition-colors font-medium">7510339308</a>
            </div>
          </div>
          
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-white text-xl font-semibold">🏢 Registered Address</h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              <strong className="text-white">OCEAN POINT PRIVATE LIMITED</strong><br />
              157-Kunneledath<br />
              Avoly, Muvattupuzha<br />
              Ernakulam, Kerala – 686670<br />
              India
            </p>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#156BFC] hover:underline cursor-pointer bg-transparent border-none font-medium text-sm md:text-base"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}