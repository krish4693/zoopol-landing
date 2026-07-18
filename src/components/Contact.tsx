import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-10 backdrop-blur-sm transition-colors duration-300">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-bold tracking-tight mb-3">Contact Us — Zoopol</h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">We’re here to help with any questions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-slate-800/50 transition-all hover:border-indigo-500/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-gray-900 dark:text-white text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Reach us anytime and we’ll get back to you soon.</p>
              <a href="mailto:zoopol.india@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors font-semibold">
                zoopol.india@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-slate-800/50 transition-all hover:border-indigo-500/50 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-gray-900 dark:text-white text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Call us during business hours.</p>
              <a href="tel:7510339308" className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors font-semibold">
                +91 75609 69629
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 bg-white dark:bg-slate-800/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-gray-900 dark:text-white text-xl font-semibold">Registered Address</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed pl-1">
              <strong className="text-gray-900 dark:text-white font-bold text-lg block mb-1">OCEAN POINT PRIVATE LIMITED</strong>
              157-Kunneledath<br />
              Avoly, Muvattupuzha<br />
              Ernakulam, Kerala – 686670<br />
              India
            </p>
          </div>

          <div className="mt-10 text-center border-t border-gray-200 dark:border-gray-800 pt-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none font-medium text-sm md:text-base"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}