import { motion } from 'motion/react';

interface IPhoneMockupProps {
  screenshot: string;
  alt: string;
  delay?: number;
}

export function IPhoneMockup({ screenshot, alt, delay = 0 }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative perspective-1000"
    >
      {/* iPhone Frame */}
      <div className="relative w-[280px] mx-auto">
        {/* Outer frame */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

          {/* Screen */}
          <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
            <img src={screenshot} alt={alt} className="w-full h-auto" />
          </div>

          {/* Side buttons */}
          <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute -left-1 top-48 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-700 rounded-r-lg"></div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-xl -z-10"></div>
      </div>
    </motion.div>
  );
}
