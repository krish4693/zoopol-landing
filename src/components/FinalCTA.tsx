import { motion } from 'motion/react';
import { Button } from './ui/button';
import appStoreButtons from 'figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png';

export function FinalCTA() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-6 md:p-8 lg:p-16 relative overflow-hidden">
          {/* Decorative lines */}
          <svg className="absolute top-1/2 left-0 w-full h-full pointer-events-none opacity-30" style={{ transform: 'translateY(-50%)' }}>
            <path d="M 100 200 Q 300 150, 500 200" stroke="#156BFC" strokeWidth="3" fill="none" opacity="0.3"/>
            <path d="M 200 100 Q 400 50, 600 100" stroke="#156BFC" strokeWidth="3" fill="none" opacity="0.3"/>
          </svg>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl"
            >
              Simple jobs. Trusted workers. Fast payments.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg px-4"
              style={{ fontSize: '16px' }}
            >
              Your work and your workforce — managed in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={appStoreButtons} alt="Download on App Store and Google Play" className="h-12 md:h-14" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}