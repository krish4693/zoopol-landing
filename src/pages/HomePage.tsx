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
                  className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full max-w-[280px] sm:max-w-none mx-auto md:mx-0"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.5 }}
                >
                  <button className="w-full sm:w-auto rounded-full px-8 py-4 bg-[#00E5FF] hover:bg-white hover:text-black text-black font-bold text-base shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Post a Job Now
                  </button>
                  <button className="w-full sm:w-auto rounded-full px-8 py-4 bg-[#0A0F1C] border border-white/10 hover:border-white/30 text-white font-bold text-base transition-all hover:bg-white/5">
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
              <div className="relative w-full min-h-[500px] lg:min-h-[700px] hidden md:flex items-end justify-center overflow-visible">
                <motion.div 
                  className="relative w-full"
                  style={{ maxWidth: '700px', height: '110%', marginBottom: '-80px' }}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                >
                  {/* The massive phone SVG rising from the bottom */}
                  <img 
                    src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="100 -20 800 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="phoneBgBackLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%230A152E"/>
      <stop offset="100%" stop-color="%23050505"/>
    </linearGradient>
    <linearGradient id="phoneBgBackRight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23121F3D"/>
      <stop offset="100%" stop-color="%23050505"/>
    </linearGradient>
    <linearGradient id="phoneBgFront" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23070C1A"/>
      <stop offset="100%" stop-color="%2302040A"/>
    </linearGradient>
    <linearGradient id="cyanRoute" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="%233B82F6"/>
      <stop offset="100%" stop-color="%2300E5FF"/>
    </linearGradient>
    <filter id="phoneShadow" x="-20%" y="-10%" width="140%" height="130%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="%23000" flood-opacity="0.7"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow">
      <feGaussianBlur stdDeviation="6" result="g"/>
      <feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Back Left Phone -->
  <g transform="translate(160, 180) rotate(-12) scale(0.88)" filter="url(%23phoneShadow)">
    <rect x="0" y="0" width="420" height="900" rx="55" fill="url(%23phoneBgBackLeft)" stroke="%231A2B56" stroke-width="10"/>
    <rect x="15" y="15" width="390" height="870" rx="42" fill="%2300E5FF" opacity="0.06"/>
    <rect x="35" y="70" width="350" height="220" rx="20" fill="%2300E5FF" opacity="0.15"/>
    <rect x="35" y="320" width="300" height="18" rx="9" fill="%23FFFFFF" opacity="0.15"/>
    <rect x="35" y="355" width="200" height="14" rx="7" fill="%23FFFFFF" opacity="0.08"/>
    <rect x="35" y="400" width="350" height="120" rx="20" fill="%233B82F6" opacity="0.08"/>
    <rect x="35" y="550" width="250" height="14" rx="7" fill="%23FFFFFF" opacity="0.1"/>
  </g>

  <!-- Back Right Phone -->
  <g transform="translate(430, 220) rotate(12) scale(0.88)" filter="url(%23phoneShadow)">
    <rect x="0" y="0" width="420" height="900" rx="55" fill="url(%23phoneBgBackRight)" stroke="%231A2B56" stroke-width="10"/>
    <rect x="15" y="15" width="390" height="870" rx="42" fill="%233B82F6" opacity="0.06"/>
    <rect x="35" y="500" width="350" height="180" rx="20" fill="%233B82F6" opacity="0.15"/>
    <rect x="35" y="710" width="350" height="45" rx="12" fill="%23FFFFFF" opacity="0.08"/>
    <rect x="35" y="70" width="350" height="18" rx="9" fill="%23FFFFFF" opacity="0.1"/>
    <rect x="35" y="110" width="200" height="14" rx="7" fill="%23FFFFFF" opacity="0.06"/>
  </g>

  <!-- Front Center Phone (Large) -->
  <g transform="translate(210, 50) scale(1.35)" filter="url(%23phoneShadow)">
    <rect x="0" y="0" width="430" height="920" rx="55" fill="url(%23phoneBgFront)" stroke="%231A233A" stroke-width="14"/>
    <rect x="10" y="10" width="410" height="900" rx="46" fill="%230A0F1C"/>
    <!-- Notch -->
    <path d="M 130 10 L 300 10 C 300 26 288 38 265 38 L 165 38 C 142 38 130 26 130 10 Z" fill="%231A233A"/>

    <!-- Status bar -->
    <text x="35" y="78" fill="%239CA3AF" font-family="sans-serif" font-size="13" font-weight="700" letter-spacing="2.5">YOUR LOCATION</text>
    <text x="35" y="110" fill="%23FFFFFF" font-family="sans-serif" font-size="26" font-weight="bold">New York, NY</text>
    <circle cx="370" cy="90" r="22" fill="%233B82F6" opacity="0.25"/>
    <circle cx="370" cy="90" r="17" fill="%2300E5FF"/>
    <circle cx="370" cy="90" r="8" fill="%23FFFFFF"/>

    <!-- Map area -->
    <rect x="25" y="140" width="380" height="500" rx="28" fill="%23030610" stroke="%231A2B56" stroke-width="2"/>
    <!-- Grid -->
    <g opacity="0.12" stroke="%2300E5FF" stroke-width="1.5" stroke-dasharray="6 10">
      <line x1="90" y1="140" x2="90" y2="640"/>
      <line x1="160" y1="140" x2="160" y2="640"/>
      <line x1="230" y1="140" x2="230" y2="640"/>
      <line x1="310" y1="140" x2="310" y2="640"/>
      <line x1="25" y1="220" x2="405" y2="220"/>
      <line x1="25" y1="320" x2="405" y2="320"/>
      <line x1="25" y1="420" x2="405" y2="420"/>
      <line x1="25" y1="540" x2="405" y2="540"/>
    </g>

    <!-- Route path -->
    <path d="M 80 550 C 120 460 200 500 250 380 C 280 310 320 280 340 240" fill="none" stroke="url(%23cyanRoute)" stroke-width="7" stroke-linecap="round" filter="url(%23glow)"/>
    <path d="M 80 550 C 120 460 200 500 250 380 C 280 310 320 280 340 240" fill="none" stroke="%23FFFFFF" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Start pin -->
    <circle cx="80" cy="550" r="14" fill="%233B82F6" opacity="0.5" filter="url(%23softGlow)"/>
    <circle cx="80" cy="550" r="8" fill="%233B82F6"/>
    <circle cx="80" cy="550" r="4" fill="%23FFFFFF"/>

    <!-- End pin (location marker) -->
    <circle cx="340" cy="240" r="35" fill="%2300E5FF" opacity="0.2" filter="url(%23glow)"/>
    <path d="M340 210 C355 210 367 222 367 237 C367 260 340 285 340 285 C340 285 313 260 313 237 C313 222 325 210 340 210 Z" fill="%2300E5FF" filter="url(%23softGlow)"/>
    <circle cx="340" cy="234" r="10" fill="%23FFFFFF"/>

    <!-- Worker card inside phone -->
    <rect x="25" y="670" width="380" height="170" rx="28" fill="%230A1128" stroke="%2300E5FF" stroke-width="2" opacity="0.95"/>
    <circle cx="80" cy="755" r="35" fill="%233B82F6"/>
    <text x="80" y="762" fill="%23FFFFFF" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">M</text>
    <text x="140" y="735" fill="%23FFFFFF" font-family="sans-serif" font-size="24" font-weight="bold">Michael T.</text>
    <text x="140" y="763" fill="%2300E5FF" font-family="sans-serif" font-size="16" font-weight="bold">★ 4.9  •  Electrician</text>
    <text x="140" y="790" fill="%239CA3AF" font-family="sans-serif" font-size="14">Arriving in 3 mins</text>
    <!-- Accept button -->
    <rect x="300" y="770" width="90" height="36" rx="18" fill="%2300E5FF"/>
    <text x="345" y="793" fill="%23050505" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Accept</text>
  </g>
</svg>`}
                    alt="Zoopol App Three Phone Mockup"
                    className="w-full h-auto"
                    style={{ minHeight: '600px' }}
                  />

                  {/* Floating Card 1 — Top Left: Quick Booking */}
                  <motion.div 
                    className="absolute bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                    style={{ top: '40px', left: '-30px' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/30">
                      <Zap className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Quick Booking</p>
                      <p className="text-xs text-gray-400">In seconds</p>
                    </div>
                  </motion.div>

                  {/* Floating Card 2 — Top Right: Live Tracking */}
                  <motion.div 
                    className="absolute bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                    style={{ top: '100px', right: '-20px' }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0, type: "spring" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Live Tracking</p>
                      <p className="text-xs text-gray-400">Real-time updates</p>
                    </div>
                  </motion.div>

                  {/* Floating Card 3 — Middle Left: Verified Pros */}
                  <motion.div 
                    className="absolute bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                    style={{ top: '280px', left: '-40px' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, type: "spring" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/30">
                      <Shield className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Verified Pros</p>
                      <p className="text-xs text-gray-400">Background checked</p>
                    </div>
                  </motion.div>

                  {/* Floating Card 4 — Middle Right: Payment Secured */}
                  <motion.div 
                    className="absolute bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                    style={{ top: '380px', right: '-30px' }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-5 h-5 text-black" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Payment Secured</p>
                      <p className="text-xs text-[#00E5FF]">100% Protected</p>
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
