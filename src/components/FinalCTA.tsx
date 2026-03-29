import { motion } from 'motion/react';
import appStoreButtons from 'figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png';

export function FinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 lg:py-56 overflow-hidden flex items-center justify-center"
      style={{ background: '#050505' }}
    >
      {/* Background Image Layer — heavily dimmed */}
      <div className="absolute inset-0" style={{ opacity: 0.15 }}>
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          alt="Office background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050505, transparent 30%, transparent 70%, #050505)' }} />

      {/* Subtle cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none" 
        style={{ background: '#00E5FF', opacity: 0.04, filter: 'blur(120px)' }} 
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6" style={{ lineHeight: 1.1 }}>
            Ready to get <br className="hidden md:block"/>
            <span style={{ background: 'linear-gradient(to right, #00E5FF, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>to work?</span>
          </h2>
          
          <p className="mb-14 max-w-2xl mx-auto text-lg md:text-xl font-medium" style={{ color: '#9CA3AF', lineHeight: 1.7 }}>
            Join thousands of businesses and verified professionals already using Zoopol to connect, collaborate, and grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary — Vibrant Gradient */}
            <motion.a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                whiteSpace: 'nowrap' as const,
                padding: '16px 40px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #00E5FF 0%, #3B82F6 100%)',
                color: '#050505',
                fontWeight: 800,
                fontSize: '18px',
                boxShadow: '0 0 40px rgba(0, 229, 255, 0.5), 0 0 80px rgba(0, 229, 255, 0.15), 0 4px 20px rgba(0, 0, 0, 0.3)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(0, 229, 255, 0.7), 0 0 100px rgba(0, 229, 255, 0.25)' }}
              whileTap={{ scale: 0.97 }}
            >
              Hire a Pro Now
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </motion.a>

            {/* Secondary — Glass */}
            <motion.a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                whiteSpace: 'nowrap' as const,
                padding: '16px 40px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '18px',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.18)', borderColor: 'rgba(255, 255, 255, 0.5)' }}
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