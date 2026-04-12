import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "motion/react";
import { BentoGrid } from "../components/BentoGrid";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import Header from "../components/Header";
import { Marquee } from "../components/Marquee";
import { Star, Zap, Check, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import appStoreButtons from "figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png";

const GRID_PATTERN = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v40H0V0zm1 0h1v40H1V0z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`;



const heroTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const heroInitial = reduceMotion ? false : { opacity: 0, y: 12 };
  const heroAnimate = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <>
      <Helmet>
        <title>Zoopol — Hire in Minutes. Work in Minutes.</title>
        <meta
          name="description"
          content="Zoopol connects employers and workers for household tasks, one-day jobs, and quick help — fast, simple, and fully transparent."
        />
      </Helmet>
      <section
        id="home"
        className="w-full min-h-screen bg-gray-50 relative overflow-hidden"
        style={{ backgroundImage: GRID_PATTERN, backgroundSize: "40px 40px", WebkitMaskImage: "linear-gradient(to bottom, white 60%, transparent 100%)" }}
      >
        <div className="w-full min-h-screen flex flex-col pt-0 pb-16 relative overflow-hidden">
            {/* Header */}
            <Header />

            {/* Two-column hero content */}
            <div className="flex-1 flex flex-col md:grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
              {/* Left column - text content */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full mt-4 md:mt-0">
                <motion.div
                  className="inline-flex rounded-full p-[1px] bg-gradient-to-r from-[#00E5FF]/40 via-[#00E5FF] to-[#00E5FF]/40 mb-8"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                    <Zap className="w-3 h-3 text-brand-indigo" />
                    <span>On-Demand Workforce Platform</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-8"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.2 }}
                >
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-slate-900 leading-[1.1] font-bold tracking-tight">
                    Hire trusted help <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-blue-500">
                      in minutes.
                    </span>
                    <br />
                    Work on your terms.
                  </h1>
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.35 }}
                >
                  Zoopol connects employers and verified workers for tasks,
                  one-day jobs, and quick help — fast, simple, and fully
                  transparent.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full max-w-[280px] sm:max-w-none mx-auto md:mx-0"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.5 }}
                >
                  <button className="w-full sm:w-auto rounded-full px-8 py-4 bg-brand-indigo hover:bg-indigo-700 text-white font-semibold text-base shadow-lg transition-all hover:scale-105 hover:shadow-indigo-500/30">
                    Post a Job Now
                  </button>
                  <button className="w-full sm:w-auto rounded-full px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-slate-800 font-semibold text-base shadow-sm transition-all hover:bg-gray-50">
                    Become a Worker
                  </button>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  className="flex items-center gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 w-full justify-center md:justify-start"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.6 }}
                >
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  </div>
                  <div className="text-sm">
                    <p className="text-slate-900 font-bold">10k+ Workers</p>
                    <p className="text-slate-500">Ready to collaborate</p>
                  </div>
                </motion.div>
              </div>

              {/* Right column - Imagery */}
              <div className="relative w-full min-h-[500px] lg:min-h-[700px] hidden md:flex items-end justify-center overflow-visible">
                <motion.div 
                  className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200"
                  style={{ maxWidth: '700px', height: '540px', marginBottom: '80px', marginTop: '60px' }}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                >
                  <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop" alt="Workers collaborating" className="w-full h-full object-cover" />
                  
                  {/* Overlay to ensure floating cards pop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 via-transparent to-transparent pointer-events-none" />

                  {/* Left Floating Box */}
                  <motion.div 
                    className="absolute bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                    style={{ top: '40px', left: '-30px' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-brand-indigo" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">Quick Booking</p>
                      <p className="text-xs text-slate-500">In seconds</p>
                    </div>
                  </motion.div>

                  {/* Right Floating Box */}
                  <motion.div 
                    className="absolute bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                    style={{ top: '100px', right: '-20px' }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0, type: "spring" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">Live Tracking</p>
                      <p className="text-xs text-slate-500">Real-time updates</p>
                    </div>
                  </motion.div>

                  {/* Bottom Left Floating Box */}
                  <motion.div 
                    className="absolute bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex gap-3 z-20"
                    style={{ top: '280px', left: '-40px' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, type: "spring" }}
                  >
                    <img src="https://i.pravatar.cc/100?img=68" alt="Provider" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-slate-900 font-bold text-sm">Sarah Jenkins</p>
                      <p className="text-xs text-amber-500 font-semibold mb-1">★ 4.9 (120 reviews)</p>
                      <span className="inline-block px-2 py-0.5 bg-gray-100 text-slate-600 rounded-md text-[10px] font-medium">House Cleaning</span>
                    </div>
                  </motion.div>

                  {/* Bottom Right Floating Box */}
                  <motion.div 
                    className="absolute bg-white border border-gray-100 py-3 px-4 rounded-full shadow-xl flex items-center gap-3 z-20"
                    style={{ top: '380px', right: '-30px' }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-slate flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <p className="text-slate-900 font-bold text-sm">Verified Professional</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
      </section>

      {/* Marquee Social Proof Section */}
      <Marquee />

      <BentoGrid />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </>
  );
}
