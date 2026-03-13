import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "motion/react";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import Header from "../components/Header";
import { Star, Zap, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import appStoreButtons from "figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png";

const GRID_PATTERN = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v40H0V0zm1 0h1v40H1V0z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const WORKER_CARDS = [
  {
    gradient: "from-purple-400 to-purple-500",
    rating: "4.9/5",
    tag: "Cleaning",
    image: "https://images.unsplash.com/photo-1630325459372-36f3f86281cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMjI0MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Cleaner",
    name: "Sarah M.",
    role: "Professional Cleaner",
    rotate: "-rotate-3",
    pos: { top: "50%", left: "50%" },
    zIndex: "z-30",
    shadow: "shadow-2xl",
  },
  {
    gradient: "from-pink-400 to-pink-500",
    rating: "5.0/5",
    tag: "Gardening",
    image: "https://images.unsplash.com/photo-1571732087973-f896c82489f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW5lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzIyNDExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Gardener",
    name: "Amy L.",
    role: "Expert Gardener",
    rotate: "rotate-2",
    pos: { top: "40%", left: "58%" },
    zIndex: "z-20",
    shadow: "shadow-xl",
  },
  {
    gradient: "from-blue-400 to-blue-500",
    rating: "4.8/5",
    tag: "Handyman",
    image: "https://images.unsplash.com/photo-1716669373501-92a57f9b3d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMHBvcnRyYWl0JTIwd29ya2VyfGVufDF8fHx8MTc2MzIyNDExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Handyman",
    name: "Ben D.",
    role: "Senior Handyman",
    rotate: "-rotate-2",
    pos: { top: "60%", left: "40%" },
    zIndex: "z-10",
    shadow: "shadow-lg",
  },
  {
    gradient: "from-emerald-400 to-emerald-500",
    rating: "4.9/5",
    tag: "Painting",
    image: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVyJTIwd29ya2VyfGVufDF8fHx8MTc2MzIyNDExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Painter",
    name: "Rob B.",
    role: "Professional Painter",
    rotate: "rotate-3",
    pos: { top: "48%", left: "64%" },
    zIndex: "z-0",
    shadow: "shadow-md",
  },
];

const FEATURE_ITEMS = ["Cleaning", "Gardening", "Handyman", "Painting"];

function WorkerCard({
  gradient,
  rating,
  tag,
  image,
  alt,
  name,
  role,
  rotate,
  pos,
  zIndex,
  shadow,
  isMobile,
}: (typeof WORKER_CARDS)[0] & { isMobile: boolean }) {
  return (
    <div
      className={`group ${isMobile ? "w-full" : "absolute -translate-x-1/2 -translate-y-1/2"} ${rotate} ${zIndex} ${shadow} transition-transform duration-300 hover:scale-105`}
      style={
        isMobile
          ? undefined
          : {
              width: "clamp(140px, 18vw, 220px)",
              top: pos.top,
              left: pos.left,
            }
      }
    >
      <div
        className={`bg-gradient-to-br ${gradient} rounded-3xl p-4 lg:p-6 border-4 border-[#0A0F1C]/50 ${shadow}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-white/90 font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex gap-1 mb-3 flex-wrap">
          <span className="text-xs bg-black/40 backdrop-blur-md rounded-full px-2 py-1 text-white/90 border border-white/10">{tag}</span>
        </div>
        <ImageWithFallback
          src={image}
          alt={alt}
          className="w-full h-32 lg:h-40 object-cover rounded-2xl mb-2"
        />
        <div className="bg-black/60 backdrop-blur-md rounded-xl p-2 lg:p-3 border border-white/10">
          <h3 className="text-white text-sm lg:text-base font-semibold">{name}</h3>
          <p className="text-xs text-[#00E5FF]">{role}</p>
        </div>
      </div>
    </div>
  );
}

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
        <div className="w-full min-h-[85vh] flex flex-col p-8 lg:p-12 relative overflow-hidden">
            {/* SVG decorations - behind right column */}
            <motion.svg
              className="absolute top-1/2 right-0 w-1/2 h-full pointer-events-none"
              style={{ transform: "translateY(-30%)" }}
              initial={{ opacity: 0.2, y: 0 }}
              animate={
                reduceMotion
                  ? { opacity: 0.2, y: 0 }
                  : {
                      opacity: [0.2, 0.28, 0.2],
                      y: [0, -8, 0],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    }
              }
            >
              <path
                d="M 100 400 Q 300 350, 500 400"
                stroke="#00E5FF"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 200 300 Q 400 250, 600 300"
                stroke="#00E5FF"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 300 500 Q 500 450, 700 500"
                stroke="#00E5FF"
                strokeWidth="2"
                fill="none"
              />
            </motion.svg>
            <motion.div
              className="absolute top-1/3 right-1/4 hidden lg:block opacity-30"
              animate={reduceMotion ? {} : { y: [0, -6, 0] }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" } }
              }
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <line
                  x1="10"
                  y1="30"
                  x2="50"
                  y2="30"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="30"
                  y1="10"
                  x2="30"
                  y2="50"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/3 hidden lg:block opacity-30"
              animate={reduceMotion ? {} : { y: [0, -6, 0] }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } }
              }
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <line
                  x1="5"
                  y1="20"
                  x2="35"
                  y2="20"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="5"
                  x2="20"
                  y2="35"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Header */}
            <Header />

            {/* Two-column hero content */}
            <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center relative z-10 py-6 lg:py-8">
              {/* Left column - text content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl lg:max-w-none">
                <motion.div
                  className="inline-flex rounded-full p-[1px] bg-gradient-to-r from-[#00E5FF]/40 via-[#00E5FF] to-[#00E5FF]/40 mb-6 md:mb-8"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#050505] text-[#E0F2FE] text-xs md:text-sm">
                    <span className="hidden sm:inline">
                      +10 thousands of workers ready to collaborate
                    </span>
                    <span className="sm:hidden">+10k workers ready</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-4 md:mb-6"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.2 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-tight font-extrabold tracking-tight">
                    HIRE IN MINUTES.
                    <br />
                    <motion.span
                      className="text-[#00E5FF] inline-block"
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.1 }}
                    >
                      WORK
                    </motion.span>{" "}
                    IN MINUTES.
                  </h1>
                </motion.div>

                <motion.p
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mb-8 md:mb-10 px-4 lg:px-0"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.35 }}
                >
                  Zoopol connects employers and workers for household tasks,
                  one-day jobs, and quick help — fast, simple, and fully
                  transparent.
                </motion.p>

                {/* Feature row with bullets */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 md:mb-10">
                  {FEATURE_ITEMS.map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2 text-white/90 text-sm"
                      initial={heroInitial}
                      animate={{ opacity: 1, y: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { ...heroTransition, delay: 0.45 + i * 0.05 }
                      }
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto"
                  initial={heroInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.6 }}
                >
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src={appStoreButtons}
                      alt="Download on App Store and Google Play"
                      className="h-12 md:h-14"
                    />
                  </a>
                </motion.div>

                {/* Callout bubbles - optional feature highlights */}
                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                  <motion.div
                    className="flex items-center gap-2 bg-[#0A0F1C]/80 border border-white/5 rounded-full px-4 py-2 backdrop-blur-md shadow-lg"
                    initial={heroInitial}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.7 }}
                  >
                    <Zap className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span className="text-white text-xs md:text-sm font-medium">
                      Quick booking
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-[#0A0F1C]/80 border border-white/5 rounded-full px-4 py-2 backdrop-blur-md shadow-lg"
                    initial={heroInitial}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { ...heroTransition, delay: 0.8 }}
                  >
                    <Check className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span className="text-white text-xs md:text-sm font-medium">
                      Transparent pricing
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Right column – empty (worker cards commented out) */}
              <div className="relative w-full min-h-[400px] lg:min-h-[500px] hidden lg:block" />
            </div>
          </div>
      </section>

      <HowItWorks />
      <Features />
      <FAQ />
      <FinalCTA />
    </>
  );
}
