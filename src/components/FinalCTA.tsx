import { motion } from 'motion/react';
import { Button } from './ui/button';
import appStoreButtons from 'figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png';

export function FinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 lg:py-64 overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          alt="Office background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradients for blending into the dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[#0A0F1C]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 via-transparent to-[#00E5FF]/10" />
      </div>

      {/* Glowing Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#00E5FF] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Ready to get <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">to work?</span>
          </h2>
          
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg md:text-xl md:leading-relaxed font-medium">
            Join thousands of businesses and verified professionals already using Zoopol to connect, collaborate, and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Hire a Pro Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-bold text-lg border border-[#00E5FF]/20 transition-all hover:bg-[#00E5FF]/20">
              Become a Worker
            </button>
          </div>

          <div className="mt-16 flex justify-center items-center">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={appStoreButtons} alt="Download on App Store and Google Play" className="h-12 md:h-14" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}