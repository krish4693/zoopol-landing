import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold tracking-tight mb-2">Contact Us — Zoopol</h2>
            <p className="text-gray-600 text-sm md:text-base">We’re here to help with any questions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-[#156BFC]" />
                <h3 className="text-gray-900 text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-600 text-base mb-3">Reach us anytime and we’ll get back soon.</p>
              <a href="mailto:zoopol@gmail.com" className="text-[#156BFC] hover:underline">zoopol@gmail.com</a>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-[#156BFC]" />
                <h3 className="text-gray-900 text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-600 text-base mb-3">Call us during business hours.</p>
              <a href="tel:+919497429989" className="text-[#156BFC] hover:underline">+91 9497429989</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="#home" className="text-[#156BFC] hover:underline">Back to top</a>
          </div>
        </div>
      </div>
    </section>
  );
}