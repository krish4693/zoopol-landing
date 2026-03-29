import { Users } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/5 rounded-3xl border border-white/10 shadow-sm p-6 md:p-10 backdrop-blur-sm">
          <div className="mb-6 md:mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Users className="w-6 h-6 text-[#156BFC]" aria-hidden="true" />
              <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">About Us — Zoopol</h1>
            </div>
          </div>

          <div className="text-white/70 text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              Welcome to Zoopol, a product of Ocean Point Private Limited.
            </p>
            <p className="mb-6">
              Zoopol is a modern platform designed to simplify the way people connect with jobs and hiring opportunities. Built and operated by Ocean Point Private Limited, Zoopol focuses on creating a seamless, efficient, and trustworthy ecosystem for both employers and job seekers.
            </p>

            <h3 className="text-white text-2xl font-bold mt-10 mb-6">About Ocean Point Private Limited</h3>
            <p className="mb-6">
              Ocean Point Private Limited is a registered technology company committed to building innovative digital solutions that solve real-world problems. As the parent company of Zoopol, Ocean Point drives the vision, development, and continuous improvement of the platform.
            </p>

            <h3 className="text-white text-2xl font-bold mt-10 mb-6">What We Do</h3>
            <p className="mb-4">Through Zoopol, Ocean Point Private Limited provides:</p>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4 mb-6">
              <li className="pl-2">Smart job discovery tailored to user preferences</li>
              <li className="pl-2">Efficient hiring tools for employers</li>
              <li className="pl-2">A clean and intuitive user experience</li>
              <li className="pl-2">Direct communication between employers and job seekers</li>
              <li className="pl-2">Transparent systems with ratings and reviews</li>
            </ul>

            <h3 className="text-white text-2xl font-bold mt-10 mb-6">Our Mission</h3>
            <p className="mb-6">
              At Ocean Point Private Limited, our mission is to empower individuals and businesses through innovative technology solutions that make hiring and job searching simple, efficient, and accessible.
            </p>

            <h3 className="text-white text-2xl font-bold mt-10 mb-6">Our Vision</h3>
            <p className="mb-6">
              To establish Ocean Point Private Limited as a trusted technology company and make Zoopol a leading platform for connecting people with meaningful opportunities.
            </p>

            <h3 className="text-white text-2xl font-bold mt-10 mb-6">Why Choose Zoopol</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4 mb-10">
              <li className="pl-2">Developed and managed by Ocean Point Private Limited</li>
              <li className="pl-2">Reliable and secure platform</li>
              <li className="pl-2">Designed for real-world hiring needs</li>
              <li className="pl-2">Continuous innovation and improvement</li>
            </ul>

            <div className="pt-12 border-t border-white/10 mt-12 text-white/70">
              <h3 className="text-white text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-2"><strong className="text-white">Ocean Point Private Limited</strong></p>
              <p className="mb-2">Email: <a href="mailto:zoopol.india@gmail.com" className="text-[#156BFC] hover:underline">zoopol.india@gmail.com</a></p>
              <p className="mb-2">Website: <a href="https://www.zoopol.com/" target="_blank" rel="noopener noreferrer" className="text-[#156BFC] hover:underline">https://www.zoopol.com/</a></p>
              <p className="mb-2">Phone: <a href="tel:7510339308" className="text-[#156BFC] hover:underline">7510339308</a></p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#156BFC] hover:underline cursor-pointer bg-transparent border-none font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
