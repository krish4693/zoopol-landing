import { motion } from "motion/react";
import { 
  Wrench, 
  Zap, 
  Sparkles, 
  Truck, 
  Camera, 
  Hammer, 
  ChefHat, 
  GraduationCap,
  Briefcase,
  Paintbrush,
  Scissors,
  Music,
  Video,
  Monitor
} from "lucide-react";

// Expanded category list for variety
const CATEGORIES = [
  { name: "Electricians", icon: Zap },
  { name: "Plumbers", icon: Wrench },
  { name: "Cleaners", icon: Sparkles },
  { name: "Delivery", icon: Truck },
  { name: "Photographers", icon: Camera },
  { name: "Event Staff", icon: Briefcase },
  { name: "Handymen", icon: Hammer },
  { name: "Cooks", icon: ChefHat },
  { name: "Tutors", icon: GraduationCap },
  { name: "Painters", icon: Paintbrush },
  { name: "Barbers", icon: Scissors },
  { name: "DJs", icon: Music },
  { name: "Videographers", icon: Video },
  { name: "IT Support", icon: Monitor },
];

export function Marquee() {
  // Create 3 distinct rows. We'll duplicate them many times to ensure seamless infinite scroll
  // Shuffling slightly to add variety per row, but keeping the array deterministic for React hydration
  const row1 = [...CATEGORIES];
  const row2 = [...CATEGORIES].reverse();
  const row3 = [...CATEGORIES.slice(5), ...CATEGORIES.slice(0, 5)];

  // We repeat each row 6 times. Moving by "-50%" will exactly shift it by 3 full arrays, 
  // keeping the start and end looking exactly the same for a seamless infinite loop.
  const row1Repeated = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const row2Repeated = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];
  const row3Repeated = [...row3, ...row3, ...row3, ...row3, ...row3, ...row3];

  return (
    <section className="w-full bg-gray-50 py-20 md:py-32 lg:py-48 border-y border-gray-200 relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      
      {/* Heavy fading gradients for smooth entrance/exit of scrolling items */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

      {/* Massive Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 text-center relative z-20">
        <motion.p 
          className="text-brand-indigo text-sm md:text-base font-bold tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          An Entire Workforce At Your Fingertips
        </motion.p>
        <motion.h2 
          className="text-4xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-[1.05] md:leading-[0.95]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          FIND TOP-RATED
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-indigo-400 to-blue-500">
            PROS FOR ANY JOB
          </span>
        </motion.h2>
      </div>

      {/* Marquee Container with a slight tilt for a dynamic, premium feel */}
      <div className="relative w-full flex flex-col gap-6 md:gap-8 opacity-80 md:opacity-100 rotate-[-2deg] scale-105 md:scale-110">
        
        {/* Row 1 - Left to Right */}
        <div className="w-full flex">
          <motion.div
            className="flex flex-nowrap gap-4 md:gap-6 px-4 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 120, repeat: Infinity }}
          >
            {row1Repeated.map((category, i) => {
              const Icon = category.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 md:py-5 rounded-full bg-white border border-gray-200 text-slate-700 hover:bg-gray-50 hover:border-brand-indigo/30 transition-all cursor-pointer shadow-sm whitespace-nowrap"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-indigo" />
                  <span className="text-base md:text-xl font-bold tracking-wide">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="w-full flex justify-end">
          <motion.div
            className="flex flex-nowrap gap-4 md:gap-6 px-4 items-center w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 100, repeat: Infinity }}
          >
            {row2Repeated.map((category, i) => {
              const Icon = category.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 md:py-5 rounded-full bg-white border border-gray-200 text-slate-700 hover:bg-gray-50 hover:border-brand-indigo/30 transition-all cursor-pointer shadow-sm whitespace-nowrap"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  <span className="text-base md:text-xl font-bold tracking-wide">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Row 3 - Left to Right (Faster) */}
        <div className="w-full flex">
          <motion.div
            className="flex flex-nowrap gap-4 md:gap-6 px-4 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 80, repeat: Infinity }}
          >
            {row3Repeated.map((category, i) => {
              const Icon = category.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 md:py-5 rounded-full bg-white border border-gray-200 text-slate-700 hover:bg-gray-50 hover:border-brand-indigo/30 transition-all cursor-pointer shadow-sm whitespace-nowrap"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-indigo" />
                  <span className="text-base md:text-xl font-bold tracking-wide">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
