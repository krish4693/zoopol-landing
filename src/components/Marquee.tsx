import { motion } from "motion/react";

const LOGOS = [
  "Acme Corp",
  "GlobalTech",
  "Nexus Labs",
  "Stark Industries",
  "Wayne Ent",
  "Cyberdyne",
  "Umbrella Corp",
  "Massive Dynamic",
];

export function Marquee() {
  return (
    <section className="w-full bg-[#050505] py-12 md:py-16 border-y border-white/5 overflow-hidden relative">
      {/* Left/Right fading gradients for smooth entrance/exit */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
          Trusted by top companies worldwide
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 px-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Duplicate list for seamless scrolling */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="text-2xl md:text-3xl font-black text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
