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
        className="w-full min-h-screen bg-[#050505] relative overflow-hidden"
        style={{ backgroundImage: GRID_PATTERN, backgroundSize: "40px 40px" }}
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
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0F1C] text-[#E0F2FE] text-xs font-semibold uppercase tracking-wider">
                    <Zap className="w-3 h-3 text-[#00E5FF]" />
                    <span>On-Demand Workforce Platform</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-8"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.2 }}
                >
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] text-white uppercase leading-[0.95] font-black tracking-tighter">
                    HIRE IN<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">
                      MINUTES.
                    </span>
                    <br />
                    WORK.
                  </h1>
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-medium"
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
                  className="flex flex-wrap items-center gap-4 justify-center md:justify-start w-full"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.5 }}
                >
                  <button className="rounded-full px-8 py-4 bg-[#00E5FF] hover:bg-white hover:text-black text-black font-bold text-base shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Post a Job Now
                  </button>
                  <button className="rounded-full px-8 py-4 bg-[#0A0F1C] border border-white/10 hover:border-white/30 text-white font-bold text-base transition-all hover:bg-white/5">
                    Become a Worker
                  </button>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  className="flex items-center gap-4 mt-12 pt-8 border-t border-white/10 w-full justify-center md:justify-start"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.6 }}
                >
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" />
                    <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" />
                    <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-bold">10k+ Workers</p>
                    <p className="text-gray-400">Ready to collaborate</p>
                  </div>
                </motion.div>
              </div>

              {/* Right column - Imagery */}
              <div className="relative w-full min-h-[500px] lg:min-h-[700px] hidden md:flex items-center justify-center">
                <motion.div 
                  className="relative w-full max-w-lg aspect-[4/5]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  {/* Image Background Layer with rounded corners and overflow hidden */}
                  <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(0,229,255,0.1)] border border-white/10 group">
                    {/* Main Image - Dark Moody Cleaning/Working */}
                    <img 
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                      alt="Professional worker"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-[#00E5FF]/10 mix-blend-overlay" />
                  </div>
                  
                  {/* Floating Card 1 */}
                  <motion.div 
                     className="absolute top-12 -left-6 lg:-left-12 bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4 z-20"
                     initial={{ opacity: 0, x: -30 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.8, type: "spring" }}
                  >
                     <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/30">
                       <Shield className="w-5 h-5 text-[#00E5FF]" />
                     </div>
                     <div className="pr-2">
                       <p className="text-white font-bold text-sm">Verified Pros</p>
                       <p className="text-xs text-gray-400">Background checked</p>
                     </div>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div 
                     className="absolute bottom-24 -right-6 lg:-right-12 bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4 z-20"
                     initial={{ opacity: 0, x: 30 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1, type: "spring" }}
                  >
                     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                       <Check className="w-6 h-6 text-black" strokeWidth={3} />
                     </div>
                     <div className="pr-4">
                       <p className="text-white font-bold text-sm">Job Done</p>
                       <p className="text-xs text-[#00E5FF]">Payment Secured</p>
                     </div>
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
