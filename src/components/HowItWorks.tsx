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

const posterSteps: Step[] & { image: string }[] = [
  {
    icon: <Clipboard className="w-6 h-6 text-brand-indigo" />,
    title: 'Post a Job',
    description: 'Describe the task, set your budget and location — your job goes live instantly.',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop' // Post job - laptop
  },
  {
    icon: <UserCheck className="w-6 h-6 text-brand-indigo" />,
    title: 'Review Applicants',
    description: 'Compare worker profiles, ratings, and quotes to pick the right match.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop' // Reviewing on tablet
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-brand-indigo" />,
    title: 'Chat & Hire',
    description: 'Message workers to finalize details and confirm the hire.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop' // Handshake
  }
];

const workerSteps: Step[] & { image: string }[] = [
  {
    icon: <Search className="w-6 h-6 text-brand-indigo" />,
    title: 'Browse Jobs',
    description: 'Find nearby jobs that match your skills, time, and availability.',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop' // Browsing on phone
  },
  {
    icon: <DollarSign className="w-6 h-6 text-brand-indigo" />,
    title: 'Apply with Your Rate',
    description: 'Send your expected pay along with a short message.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop' // Calculator / finance
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand-indigo" />,
    title: 'Complete & Get Paid',
    description: 'Finish the job, confirm completion, and receive payment securely.',
    image: 'https://images.unsplash.com/photo-1580828326081-4fe4feece8b0?q=80&w=2000&auto=format&fit=crop' // Happy worker checking phone / paid
  }
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabType>('posters');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setActiveImageIndex(0);
  };

  const currentSteps = activeTab === 'posters' ? posterSteps : workerSteps;

  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <h2 
              className="text-slate-900 mb-4 md:mb-6 font-extrabold" 
              style={{ letterSpacing: '-0.01em' }}
            >
              How Zoopol Works
            </h2>
            <p 
              className="text-slate-600 max-w-2xl mx-auto px-4 text-sm md:text-base font-medium"
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
                  className={`
                    flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-400 relative border-2 text-sm sm:text-base font-bold
                    ${activeTab === 'posters' 
                      ? 'text-white bg-brand-indigo border-brand-indigo shadow-md' 
                      : 'text-slate-500 hover:text-slate-900 border-gray-200 hover:border-gray-300 bg-white'
                    }
                  `}
                >
                  <span className="hidden sm:inline">For Job Posters</span>
                  <span className="sm:hidden">Job Posters</span>
                </button>

                <button
                  onClick={() => handleTabClick('workers')}
                  className={`
                    flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-400 relative border-2 text-sm sm:text-base font-bold
                    ${activeTab === 'workers' 
                      ? 'text-white bg-brand-indigo border-brand-indigo shadow-md' 
                      : 'text-slate-500 hover:text-slate-900 border-gray-200 hover:border-gray-300 bg-white'
                    }
                  `}
                >
                  <span className="hidden sm:inline">For Workers</span>
                  <span className="sm:hidden">Workers</span>
                </button>
              </div>

              {/* No Progress Bar needed in sticky layout */}
            </div>
          </div>          {/* Content Area with Sticky Scroll */}
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
              
              {/* Left Column: Scrolling Text */}
              <div className="w-full lg:w-1/2 static lg:relative">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    {currentSteps.map((step, index) => (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        whileInView="visible"
                        viewport={{ margin: "-40% 0px -40% 0px" }}
                        onViewportEnter={() => setActiveImageIndex(index)}
                        className={`min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center transition-all duration-500 border-l-2 pl-8 lg:pl-12 ml-4 ${
                          activeImageIndex === index 
                            ? "border-brand-indigo opacity-100" 
                            : "border-gray-200 opacity-40"
                        }`}
                      >
                        <div className="flex-shrink-0 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-sm">
                              {step.icon}
                            </div>
                        </div>
                        <div>
                          <h3 className="text-slate-900 mb-4 font-bold text-3xl lg:text-4xl">
                            {step.title}
                          </h3>
                          <p 
                            className="text-slate-600 max-w-md"
                            style={{ lineHeight: '160%', fontSize: '1.25rem' }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    {/* Add spacer at the bottom so the last item can scroll past center */}
                    <div className="h-[20vh] hidden lg:block" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Sticky Image Container */}
              <div className="w-full lg:w-1/2 sticky top-56 lg:h-[75vh] min-h-[400px] flex items-center justify-center order-first lg:order-last mb-12 lg:mb-0">
                  <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activeTab}-${activeImageIndex}`}
                        src={currentSteps[activeImageIndex].image}
                        alt="Step illustration"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80" />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}