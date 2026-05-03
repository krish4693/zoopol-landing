import { Fragment, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Clipboard,
  UserCheck,
  MessageCircle,
  Search,
  DollarSign,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
  type LucideIcon,
} from 'lucide-react';

type TabType = 'posters' | 'workers';

interface Step {
  icon: LucideIcon;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: [string, string];
}

const posterSteps: Step[] = [
  {
    icon: Clipboard,
    title: 'Post a Job',
    shortLabel: 'Post',
    description:
      'Describe the task, set your budget and location — your job goes live instantly.',
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Employer posting a job on a laptop',
    highlights: ['Live in under a minute', 'Set budget & service area'],
  },
  {
    icon: UserCheck,
    title: 'Review Applicants',
    shortLabel: 'Review',
    description:
      'Compare worker profiles, ratings, and quotes to pick the right match.',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Team reviewing candidate profiles together',
    highlights: ['See ratings & past work', 'Compare quotes side by side'],
  },
  {
    icon: MessageCircle,
    title: 'Chat & Hire',
    shortLabel: 'Hire',
    description:
      'Message workers to finalize details and confirm the hire.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Professional handshake after agreeing to hire',
    highlights: ['In-app messaging', 'Secure handoff before work starts'],
  },
];

const workerSteps: Step[] = [
  {
    icon: Search,
    title: 'Browse Jobs',
    shortLabel: 'Browse',
    description:
      'Find nearby jobs that match your skills, time, and availability.',
    image:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Person browsing jobs on a smartphone outdoors',
    highlights: ['Map & list views', 'Filter by pay & distance'],
  },
  {
    icon: DollarSign,
    title: 'Apply with Your Rate',
    shortLabel: 'Apply',
    description: 'Send your expected pay along with a short message.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Desk with calculator and financial planning',
    highlights: ['Name your price', 'Stand out with a quick pitch'],
  },
  {
    icon: CheckCircle2,
    title: 'Complete & Get Paid',
    shortLabel: 'Get paid',
    description:
      'Finish the job, confirm completion, and receive payment securely.',
    image:
      'https://images.unsplash.com/photo-1580828326081-4fe4feece8b0?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Worker smiling while using phone after a completed job',
    highlights: ['Completion confirmation', 'Protected payouts'],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function StepConnector({ filled }: { filled: boolean }) {
  return (
    <div
      className="how-it-works-connector hidden sm:block rounded-full mx-2 bg-white/10 overflow-hidden"
      aria-hidden
    >
      <div
        className="h-full rounded-full bg-[#00E5FF] transition-[width] duration-300 ease-out"
        style={{ width: filled ? '100%' : '0%' }}
      />
    </div>
  );
}

export function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabType>('posters');
  const [activeStep, setActiveStep] = useState(0);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setActiveStep(0);
  };

  const steps = activeTab === 'posters' ? posterSteps : workerSteps;
  const current = steps[activeStep];
  const Icon = current.icon;
  const last = steps.length - 1;

  const goPrev = () => setActiveStep((i) => Math.max(0, i - 1));
  const goNext = () => setActiveStep((i) => Math.min(last, i + 1));

  const viewTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: easeOut };

  const panelEnter = reduceMotion ? false : { opacity: 0, x: -12 };
  const panelExit = reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 };

  const imgEnter = reduceMotion ? false : { opacity: 0, scale: 1.02 };
  const imgExit = reduceMotion ? { opacity: 1 } : { opacity: 0 };

  const stepperEnter = reduceMotion ? false : { opacity: 0, y: 6 };
  const stepperExit = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 };

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 90% 60% at 70% 20%, rgba(0,229,255,0.08), transparent 50%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(59,130,246,0.06), transparent 45%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={viewTransition}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0F1C] border border-white/10 text-[#00E5FF] text-xs font-semibold uppercase tracking-wider mb-5"
          >
            How it works
          </motion.div>
          <motion.h2
            id="how-it-works-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut, delay: 0.04 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tighter mb-4"
          >
            From signup to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">
              done — in 3 steps
            </span>
          </motion.h2>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut, delay: 0.08 }}
            className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto"
          >
            Simple steps to get hired or hire someone instantly.
          </motion.p>
        </div>

        <div
          role="tablist"
          aria-label="Who this guide is for"
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 md:mb-16 max-w-lg sm:max-w-none mx-auto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'posters'}
            id="how-tab-posters"
            aria-controls="how-it-works-flow"
            onClick={() => handleTabChange('posters')}
            className={`how-it-works-touch-target rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base font-bold border-2 transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
              activeTab === 'posters'
                ? 'text-black bg-[#00E5FF] border-[#00E5FF] shadow-[0_0_24px_rgba(0,229,255,0.35)]'
                : 'text-gray-400 border-white/10 bg-[#0A0F1C] hover:text-white hover:border-white/25 hover:bg-white/10'
            }`}
          >
            <span className="hidden sm:inline">For Job Posters</span>
            <span className="sm:hidden">Job Posters</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'workers'}
            id="how-tab-workers"
            aria-controls="how-it-works-flow"
            onClick={() => handleTabChange('workers')}
            className={`how-it-works-touch-target rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base font-bold border-2 transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
              activeTab === 'workers'
                ? 'text-black bg-[#00E5FF] border-[#00E5FF] shadow-[0_0_24px_rgba(0,229,255,0.35)]'
                : 'text-gray-400 border-white/10 bg-[#0A0F1C] hover:text-white hover:border-white/25 hover:bg-white/10'
            }`}
          >
            <span className="hidden sm:inline">For Workers</span>
            <span className="sm:hidden">Workers</span>
          </button>
        </div>

        <div id="how-it-works-flow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={stepperEnter}
              animate={{ opacity: 1, y: 0 }}
              exit={stepperExit}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: easeOut }}
              className="flex flex-row items-center justify-center w-full max-w-3xl mx-auto mb-10 md:mb-16 px-1"
              role="tablist"
              aria-label="Process steps"
            >
              {steps.map((step, index) => (
                <Fragment key={step.title}>
                  {index > 0 && <StepConnector filled={activeStep >= index} />}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeStep === index}
                    aria-controls="how-it-works-panel"
                    id={`how-step-${activeTab}-${index}`}
                    onClick={() => setActiveStep(index)}
                    className={`flex how-it-works-touch-target-square flex-col items-center justify-center gap-2 shrink-0 rounded-xl px-2 py-1 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
                      activeStep !== index ? 'opacity-90 hover:opacity-100' : ''
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full text-sm font-black border-2 transition-shadow duration-200 ${
                        activeStep === index
                          ? 'bg-[#00E5FF] text-black border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.45)]'
                          : activeStep > index
                            ? 'bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]/40'
                            : 'bg-[#0A0F1C] text-gray-500 border-white/15'
                      }`}
                    >
                      {activeStep > index ? (
                        <Check className="w-5 h-5" strokeWidth={3} aria-hidden />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide text-center leading-tight ${
                        activeStep === index ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {step.shortLabel}
                    </span>
                  </button>
                </Fragment>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeStep}`}
                  id="how-it-works-panel"
                  role="tabpanel"
                  aria-labelledby={`how-step-${activeTab}-${activeStep}`}
                  initial={panelEnter}
                  animate={{ opacity: 1, x: 0 }}
                  exit={panelExit}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: easeOut }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[#00E5FF] text-xs font-semibold mb-4">
                    Step {activeStep + 1} of {steps.length}
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#00E5FF]" aria-hidden />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight pt-0.5">
                      {current.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    {current.description}
                  </p>
                  <ul className="space-y-3 mb-8 max-w-xl">
                    {current.highlights.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#00E5FF]/15 flex items-center justify-center border border-[#00E5FF]/20">
                          <Check className="w-4 h-4 text-[#00E5FF]" strokeWidth={2.5} aria-hidden />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={goPrev}
                      disabled={activeStep === 0}
                      className="how-it-works-touch-target inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 border border-white/15 text-white text-sm font-bold transition-colors duration-200 hover:bg-white/10 hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <ChevronLeft className="w-4 h-4 shrink-0" aria-hidden />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={activeStep === last}
                      className="how-it-works-touch-target inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#00E5FF] text-black text-sm font-bold transition-colors duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] shadow-[0_0_20px_rgba(0,229,255,0.25)] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Next step
                      <ChevronRight className="w-4 h-4 shrink-0" aria-hidden />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="order-1 lg:order-2 min-w-0">
              <div className="how-it-works-visual">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 via-transparent to-blue-600/15 pointer-events-none z-10" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeTab}-${activeStep}-img`}
                    src={current.image}
                    alt={current.imageAlt}
                    decoding="async"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={imgEnter}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={imgExit}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                  <p className="text-white font-bold text-lg sm:text-xl drop-shadow-md">
                    {current.title}
                  </p>
                  <p className="text-gray-300 text-sm mt-2 how-it-works-line-clamp-2 leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </div>

              <div
                className="flex justify-center gap-1 sm:gap-2 mt-6"
                role="group"
                aria-label="Step indicators"
              >
                {steps.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    aria-label={`Go to step ${i + 1}: ${s.title}`}
                    aria-current={activeStep === i ? 'step' : undefined}
                    className="how-it-works-dot-hit rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-opacity duration-200 hover:opacity-90"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-200 ease-out ${
                        activeStep === i ? 'w-8 bg-[#00E5FF]' : 'w-2 bg-white/25 hover:bg-white/40'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
