import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clipboard, UserCheck, MessageCircle, Search, DollarSign, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type TabType = 'posters' | 'workers';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const posterSteps: Step[] = [
  {
    icon: <Clipboard className="w-6 h-6 text-[#156BFC]" />,
    title: 'Post a Job',
    description: 'Describe the task, set your budget and location — your job goes live instantly.'
  },
  {
    icon: <UserCheck className="w-6 h-6 text-[#156BFC]" />,
    title: 'Review Applicants',
    description: 'Compare worker profiles, ratings, and quotes to pick the right match.'
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#156BFC]" />,
    title: 'Chat & Hire',
    description: 'Message workers to finalize details and confirm the hire.'
  }
];

const workerSteps: Step[] = [
  {
    icon: <Search className="w-6 h-6 text-[#156BFC]" />,
    title: 'Browse Jobs',
    description: 'Find nearby jobs that match your skills, time, and availability.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#156BFC]" />,
    title: 'Apply with Your Rate',
    description: 'Send your expected pay along with a short message.'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#156BFC]" />,
    title: 'Complete & Get Paid',
    description: 'Finish the job, confirm completion, and receive payment securely.'
  }
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabType>('posters');
  const [autoSwitch, setAutoSwitch] = useState(true);
  const [progress, setProgress] = useState(0);

  // Progress bar and auto-switch
  useEffect(() => {
    if (!autoSwitch) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const duration = 5000; // 5 seconds

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
    }, 16); // ~60fps

    const switchTimeout = setTimeout(() => {
      setActiveTab(prev => prev === 'posters' ? 'workers' : 'posters');
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(switchTimeout);
    };
  }, [autoSwitch, activeTab]);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setAutoSwitch(false); // Stop auto-switching when user clicks
    setProgress(0);
  };

  const currentSteps = activeTab === 'posters' ? posterSteps : workerSteps;

  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <h2 
              className="text-gray-900 mb-4 md:mb-6" 
              style={{ letterSpacing: '-0.01em' }}
            >
              How Zoopol Works
            </h2>
            <p 
              className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base"
              style={{ lineHeight: '150%', fontSize: '16px' }}
            >
              Simple steps to get hired or hire someone instantly.
            </p>
          </div>

          {/* Tab Bar */}
          <div className="flex justify-center mb-16 relative z-10">
            <div className="inline-flex gap-4 relative flex-col w-full sm:w-auto px-4 sm:px-0">
              {/* Tab Buttons */}
              <div className="flex gap-2 sm:gap-4">
                <button
                  onClick={() => handleTabClick('posters')}
                  className={`\n                    flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-400 relative border-2 text-sm sm:text-base\n                    ${activeTab === 'posters' 
                      ? 'text-white bg-[#156BFC] border-[#156BFC]' 
                      : 'text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 bg-white'
                    }
                  `}
                >
                  <span className="hidden sm:inline">For Job Posters</span>
                  <span className="sm:hidden">Job Posters</span>
                </button>

                <button
                  onClick={() => handleTabClick('workers')}
                  className={`\n                    flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-400 relative border-2 text-sm sm:text-base\n                    ${activeTab === 'workers' 
                      ? 'text-white bg-[#156BFC] border-[#156BFC]' 
                      : 'text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 bg-white'
                    }
                  `}
                >
                  <span className="hidden sm:inline">For Workers</span>
                  <span className="sm:hidden">Workers</span>
                </button>
              </div>

              {/* Progress Bar */}
              {autoSwitch && (
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#156BFC] rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Content Area with Illustration */}
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Steps Column */}
              <div className="order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.35,
                      ease: 'easeOut'
                    }}
                    className="space-y-10"
                  >
                    {currentSteps.map((step, index) => (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: 'easeOut'
                        }}
                        className="flex gap-5 items-start group"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-[#156BFC]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#156BFC]/30">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p 
                            className="text-gray-600 max-w-xl"
                            style={{ lineHeight: '150%', fontSize: '18px' }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Illustration Column */}
              <div className="order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut'
                    }}
                    className="relative"
                  >
                    {activeTab === 'posters' ? (
                      <div className="relative rounded-3xl p-8 lg:p-12 bg-gray-50 border-2 border-gray-200">
                        {/* Job Poster Illustration */}
                        <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Person */}
                          <circle cx="200" cy="120" r="35" stroke="#156BFC" strokeWidth="3" />
                          <path d="M 200 155 L 200 250" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 190 L 160 220" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 190 L 240 220" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 250 L 170 310" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 250 L 230 310" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          
                          {/* Laptop */}
                          <rect x="110" y="200" width="100" height="60" rx="4" stroke="#156BFC" strokeWidth="3" fill="none" />
                          <rect x="105" y="260" width="110" height="8" rx="2" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.2)" />
                          
                          {/* Document/Job Post Icon */}
                          <rect x="250" y="140" width="80" height="100" rx="6" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.1)" />
                          <line x1="265" y1="165" x2="315" y2="165" stroke="#156BFC" strokeWidth="2" strokeLinecap="round" />
                          <line x1="265" y1="185" x2="315" y2="185" stroke="#156BFC" strokeWidth="2" strokeLinecap="round" />
                          <line x1="265" y1="205" x2="300" y2="205" stroke="#156BFC" strokeWidth="2" strokeLinecap="round" />
                          
                          {/* Checkmark */}
                          <circle cx="310" cy="100" r="20" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.2)" />
                          <path d="M 300 100 L 305 108 L 320 92" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          
                          {/* Money/Budget Icon */}
                          <circle cx="85" cy="140" r="25" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.1)" />
                          <text x="85" y="150" textAnchor="middle" fill="#156BFC" fontSize="24" fontWeight="bold">$</text>
                          
                          {/* Decorative dots */}
                          <circle cx="60" cy="320" r="4" fill="#156BFC" opacity="0.6" />
                          <circle cx="340" cy="320" r="4" fill="#156BFC" opacity="0.6" />
                          <circle cx="340" cy="70" r="4" fill="#156BFC" opacity="0.6" />
                        </svg>
                      </div>
                    ) : (
                      <div className="relative rounded-3xl p-8 lg:p-12 bg-gray-50 border-2 border-gray-200">
                        {/* Worker Illustration */}
                        <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Person */}
                          <circle cx="200" cy="120" r="35" stroke="#156BFC" strokeWidth="3" />
                          <path d="M 200 155 L 200 250" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 190 L 155 230" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 190 L 245 180" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 250 L 170 320" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 200 250 L 230 320" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          
                          {/* Hard Hat */}
                          <path d="M 170 110 Q 200 95 230 110" stroke="#156BFC" strokeWidth="3" fill="none" />
                          <rect x="165" y="108" width="70" height="8" rx="2" fill="rgba(21, 107, 252, 0.3)" stroke="#156BFC" strokeWidth="2" />
                          
                          {/* Tool/Wrench */}
                          <rect x="240" y="155" width="60" height="12" rx="6" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.2)" transform="rotate(45 270 161)" />
                          <rect x="285" y="145" width="25" height="25" rx="3" stroke="#156BFC" strokeWidth="3" fill="none" />
                          
                          {/* Toolbox */}
                          <rect x="100" y="230" width="70" height="50" rx="4" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.1)" />
                          <rect x="120" y="220" width="30" height="10" rx="2" stroke="#156BFC" strokeWidth="3" fill="none" />
                          <line x1="135" y1="245" x2="135" y2="265" stroke="#156BFC" strokeWidth="2" />
                          <line x1="125" y1="255" x2="145" y2="255" stroke="#156BFC" strokeWidth="2" />
                          
                          {/* Star ratings/quality */}
                          <g transform="translate(260, 240)">
                            <path d="M 15 5 L 18 12 L 26 12 L 20 17 L 22 25 L 15 20 L 8 25 L 10 17 L 4 12 L 12 12 Z" stroke="#156BFC" strokeWidth="2" fill="rgba(21, 107, 252, 0.2)" />
                          </g>
                          
                          {/* Gear/Settings */}
                          <circle cx="310" cy="120" r="22" stroke="#156BFC" strokeWidth="3" fill="none" />
                          <circle cx="310" cy="120" r="12" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.2)" />
                          <line x1="310" y1="96" x2="310" y2="88" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <line x1="310" y1="152" x2="310" y2="144" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <line x1="286" y1="120" x2="294" y2="120" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          <line x1="334" y1="120" x2="326" y2="120" stroke="#156BFC" strokeWidth="3" strokeLinecap="round" />
                          
                          {/* Dollar sign - payment */}
                          <circle cx="90" cy="140" r="25" stroke="#156BFC" strokeWidth="3" fill="rgba(21, 107, 252, 0.1)" />
                          <text x="90" y="150" textAnchor="middle" fill="#156BFC" fontSize="24" fontWeight="bold">$</text>
                          
                          {/* Decorative dots */}
                          <circle cx="60" cy="320" r="4" fill="#156BFC" opacity="0.6" />
                          <circle cx="340" cy="320" r="4" fill="#156BFC" opacity="0.6" />
                          <circle cx="70" cy="80" r="4" fill="#156BFC" opacity="0.6" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}