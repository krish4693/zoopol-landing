import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Rocket, BadgeCheck, Lock, Search, CircleDollarSign, CreditCard, type LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: 'Fast Job Posting',
    description: 'Create a job in under a minute with clear details and budget.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Workers',
    description: 'Choose from profiles with skill tags and ratings you can trust.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'All payments are protected and transparent throughout the process.',
  },
  {
    icon: Search,
    title: 'Find Jobs Instantly',
    description: 'Browse jobs matched to your skills and availability.',
  },
  {
    icon: CircleDollarSign,
    title: 'Set Your Own Rates',
    description: 'Full flexibility to price your services and negotiate terms.',
  },
  {
    icon: CreditCard,
    title: 'Guaranteed Payments',
    description: 'Get paid immediately after completing your work.',
  },
];

function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  return isTouch;
}

/**
 * FeatureCard: two layers for hover (desktop) or tap (touch) to reveal.
 * - Touch devices: tap toggles this card's content; multiple cards can stay revealed.
 * - Desktop: hover/focus reveals; leave/blur hides.
 */
function FeatureCard({ feature, isTouchDevice }: { feature: Feature; isTouchDevice: boolean }) {
  const Icon = feature.icon;
  const [revealed, setRevealed] = useState(false);
  const handleTap = () => {
    if (isTouchDevice) setRevealed((prev) => !prev);
  };
  return (
    <div className="min-h-[280px] md:min-h-[300px]">
      <div
        className={`group relative min-h-[280px] md:min-h-[300px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#156BFC] focus-visible:ring-offset-2 ${revealed ? 'revealed' : ''}`}
        tabIndex={0}
        role="button"
        aria-expanded={revealed}
        onClick={handleTap}
        onKeyDown={(e) => {
          if (isTouchDevice && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setRevealed((prev) => !prev);
          }
        }}
        onMouseEnter={() => !isTouchDevice && setRevealed(true)}
        onMouseLeave={() => !isTouchDevice && setRevealed(false)}
        onFocus={() => !isTouchDevice && setRevealed(true)}
        onBlur={() => !isTouchDevice && setRevealed(false)}
      >
        {/* Big Icon Layer: desktop default; fades out + scale when revealed. */}
        <div
          className="feature-card-big-icon absolute inset-0 flex items-center justify-center bg-white opacity-0 transition-opacity duration-300 ease-in-out md:opacity-100 md:group-[.revealed]:opacity-0"
          aria-hidden="true"
        >
          <div className="feature-card-big-icon-inner transition-transform duration-300 ease-in-out md:group-[.revealed]:scale-95">
            <Icon className="w-16 h-16 md:w-20 md:h-20 text-[#156BFC]" />
          </div>
        </div>
        {/* Content Layer: always visible on mobile; on desktop visible when revealed. */}
        <div
          className="feature-card-content relative flex min-h-[280px] md:min-h-[300px] flex-col items-center justify-center p-6 md:p-8 opacity-100 transition-opacity duration-300 ease-in-out md:opacity-0 md:group-[.revealed]:opacity-100"
        >
          <div className="mb-4 md:mb-6 flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#156BFC]/10 flex items-center justify-center">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#156BFC]" />
            </div>
          </div>
          <h3 className="text-gray-900 mb-2 md:mb-3 text-center font-semibold">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-center text-base">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const isTouchDevice = useTouchDevice();
  return (
    <section
      id="features"
      className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${isTouchDevice ? 'features-touch' : ''}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-900 mb-4"
          >
            Why Choose Zoopol
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto px-4 text-lg"
          >
            Built for Job Posters and Workers to connect effortlessly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} isTouchDevice={isTouchDevice} />
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="bg-[#156BFC]/25 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-gray-900 mb-4">
                We Help Your Work Get Done
              </h3>
              <p className="text-gray-600 text-lg">
                From short tasks to day-long jobs, thousands of businesses and households trust Zoopol to hire dependable workers instantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
