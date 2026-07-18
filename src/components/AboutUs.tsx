import { Users } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about-us" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-10 backdrop-blur-sm transition-colors duration-300">
          <div className="mb-8 md:mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">About Us — Zoopol</h1>
            </div>
          </div>

          <div className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              Welcome to Zoopol, a product of Ocean Point Private Limited.
            </p>
            <p className="mb-6">
              Zoopol is a modern platform designed to simplify the way people connect with jobs and hiring opportunities. Built and operated by Ocean Point Private Limited, Zoopol focuses on creating a seamless, efficient, and trustworthy ecosystem for both employers and job seekers.
            </p>

            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mt-10 mb-4">About Ocean Point Private Limited</h3>
            <p className="mb-6">
              Ocean Point Private Limited is a registered technology company committed to building innovative digital solutions that solve real-world problems. As the parent company of Zoopol, Ocean Point drives the vision, development, and continuous improvement of the platform.
            </p>

            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mt-10 mb-4">What We Do</h3>
            <p className="mb-4">Through Zoopol, Ocean Point Private Limited provides:</p>
            <ul className="list-disc marker:text-indigo-600 dark:marker:text-indigo-400 pl-6 space-y-3 mb-6 text-gray-600 dark:text-gray-300">
              <li className="pl-2">Smart job discovery tailored to user preferences</li>
              <li className="pl-2">Efficient hiring tools for employers</li>
              <li className="pl-2">A clean and intuitive user experience</li>
              <li className="pl-2">Direct communication between employers and job seekers</li>
              <li className="pl-2">Transparent systems with ratings and reviews</li>
            </ul>

            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mt-10 mb-4">Our Mission</h3>
            <p className="mb-6">
              At Ocean Point Private Limited, our mission is to empower individuals and businesses through innovative technology solutions that make hiring and job searching simple, efficient, and accessible.
            </p>

            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mt-10 mb-4">Our Vision</h3>
            <p className="mb-6">
              To establish Ocean Point Private Limited as a trusted technology company and make Zoopol a leading platform for connecting people with meaningful opportunities.
            </p>

            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mt-10 mb-4">Why Choose Zoopol</h3>
            <ul className="list-disc marker:text-indigo-600 dark:marker:text-indigo-400 pl-6 space-y-3 mb-8 text-gray-600 dark:text-gray-300">
              <li className="pl-2">Developed and managed by Ocean Point Private Limited</li>
              <li className="pl-2">Reliable and secure platform</li>
              <li className="pl-2">Designed for real-world hiring needs</li>
              <li className="pl-2">Continuous innovation and improvement</li>
            </ul>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 mt-10 text-gray-600 dark:text-gray-300">
              <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-3">Contact Information</h3>
              <p className="mb-2"><strong className="text-gray-900 dark:text-white">Ocean Point Private Limited</strong></p>
              <p className="mb-2">Email: <a href="mailto:zoopol.india@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">zoopol.india@gmail.com</a></p>
              <p className="mb-2">Website: <a href="https://www.zoopol.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">https://www.zoopol.com/</a></p>
              <p className="mb-2">Phone: <a href="tel:7510339308" className="text-indigo-600 dark:text-indigo-400 hover:underline">7510339308</a></p>
            </div>
          </div>

          <div className="mt-8 text-center pt-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
