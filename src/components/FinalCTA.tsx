import { motion } from 'motion/react';
import appStoreButtons from 'figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png';

export function FinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 lg:py-56 overflow-hidden flex items-center justify-center bg-brand-indigo">
      {/* Background Image Layer — heavily dimmed */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          alt="Office background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo via-transparent to-brand-indigo" />

      {/* Subtle white glow instead of cyan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none bg-white opacity-5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
            Ready to get <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-white opacity-90">to work?</span>
          </h2>
          
          <p className="mb-14 max-w-2xl mx-auto text-lg md:text-xl font-medium text-white/80 leading-relaxed">
            Join thousands of businesses and verified professionals already using Zoopol to connect, collaborate, and grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary — White Button */}
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-10 py-4 rounded-full bg-white text-brand-indigo font-bold text-lg shadow-xl shadow-brand-indigo/50 transition-all hover:bg-gray-50 border border-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire a Pro Now
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </motion.a>

            {/* Secondary — Transparent Glass */}
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-10 py-4 rounded-full bg-white/10 backdrop-blur-xl text-white font-bold text-lg border-2 border-white/30 shadow-lg transition-all"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Become a Worker
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </motion.a>
          </div>

          {/* App Store Badges */}
          <div className="mt-14 flex justify-center items-center">
            <a href="#" style={{ transition: 'opacity 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
              <img src={appStoreButtons} alt="Download on App Store and Google Play" className="h-12 md:h-14" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}