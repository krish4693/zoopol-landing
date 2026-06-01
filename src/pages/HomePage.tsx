import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, CheckCircle2, Clock, Shield, Zap, Users, Star, Sparkles, Plus, MessageCircle } from 'lucide-react';
import { IPhoneMockup } from '../components/IPhoneMockup';
import { Logo } from '../components/Logo';

import lightHome from "../imports/WhatsApp_Image_2026-05-01_at_10.09.10.jpeg";
import lightCategories from "../imports/WhatsApp_Image_2026-05-03_at_10.25.46_(1).jpeg";
import lightMyJobs from "../imports/WhatsApp_Image_2026-05-03_at_10.25.46.jpeg";
import darkHome from "../imports/WhatsApp_Image_2026-05-03_at_10.25.47_(1).jpeg";
import darkMyJobs from "../imports/WhatsApp_Image_2026-05-03_at_10.25.47_(2).jpeg";
import darkCategories from "../imports/WhatsApp_Image_2026-05-03_at_10.25.47_(3).jpeg";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleThemeToggle = () => {
    setIsThemeSwitching(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setIsThemeSwitching(false);
    }, 300);
  };

  const categories = [
    { name: 'Assembly', icon: '🔧', popular: true },
    { name: 'Catering', icon: '🍽️', popular: true },
    { name: 'Cleaning', icon: '🧹', popular: true },
    { name: 'Computer Fix', icon: '💻', popular: false },
    { name: 'Delivery', icon: '📦', popular: true },
    { name: 'Hauling', icon: '🚚', popular: false },
    { name: 'Electrician', icon: '⚡', popular: true },
    { name: 'Plumber', icon: '🪠', popular: true },
    { name: 'Painting', icon: '🎨', popular: true },

    { name: 'Repair', icon: '🔨', popular: true },
    { name: 'Yard Work', icon: '🌿', popular: false },
  ];

  const benefits = [
    { icon: Clock, title: 'Hire in Minutes', description: 'Post a job and get instant responses from skilled workers nearby' },
    { icon: Shield, title: 'Fully Transparent', description: 'See worker profiles, ratings, and pricing upfront before hiring' },
    { icon: Zap, title: 'Work Instantly', description: 'Workers can find jobs, accept, and start earning in minutes' },
    { icon: Users, title: 'Trusted Community', description: 'Verified workers and secure payment system for peace of mind' },
  ];

  const howItWorks = [
    { step: '1', title: 'Post Your Task', description: 'Describe the job, set your budget, and choose your preferred time' },
    { step: '2', title: 'Get Matched', description: 'Receive instant notifications from skilled workers ready to help' },
    { step: '3', title: 'Track Progress', description: 'Monitor job status in real-time with built-in messaging and timer' },
    { step: '4', title: 'Rate & Pay', description: 'Complete the job, rate the worker, and pay securely through the app' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simulate a server response
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };


  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-[#0f172a]' : 'bg-white'} relative overflow-x-hidden`}>
      {/* Theme Switch Animation Overlay */}
      <AnimatePresence>
        {isThemeSwitching && (
          <motion.div
            initial={{ scale: 0, borderRadius: '100%' }}
            animate={{ scale: 3, borderRadius: '0%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`fixed inset-0 z-[100] pointer-events-none ${darkMode ? 'bg-white' : 'bg-[#0f172a]'}`}
            style={{ transformOrigin: 'center' }}
          />
        )}
      </AnimatePresence>

      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-brand-primary/30' : 'bg-brand-primary/50'}`}

            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-[#1e293b]/95' : 'bg-white/95'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Logo darkMode={darkMode} />

            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Features</a>
              <a href="#how-it-works" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>How It Works</a>
              <a href="#categories" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Categories</a>
              <a href="#contact" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>

              {/* Stylish Theme Toggle */}
              <motion.button
                onClick={handleThemeToggle}
                className={`relative w-16 h-8 rounded-full p-1 transition-colors ${darkMode ? 'bg-indigo-900' : 'bg-indigo-200'}`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                  animate={{ x: darkMode ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <AnimatePresence mode="wait">
                    {darkMode ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Moon className="w-4 h-4 text-indigo-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun className="w-4 h-4 text-amber-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Sparkles on toggle */}
                <AnimatePresence>
                  {isThemeSwitching && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2"
                          initial={{ scale: 0, x: 0, y: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            x: Math.cos((i * Math.PI) / 3) * 40,
                            y: Math.sin((i * Math.PI) / 3) * 40,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Sparkles className={`w-3 h-3 ${darkMode ? 'text-yellow-400' : 'text-indigo-500'}`} />
                        </motion.div>
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <motion.button
                onClick={handleThemeToggle}
                className={`relative w-14 h-7 rounded-full p-0.5 transition-colors ${darkMode ? 'bg-indigo-900' : 'bg-indigo-200'}`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                  animate={{ x: darkMode ? 26 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <AnimatePresence mode="wait">
                    {darkMode ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                      >
                        <Moon className="w-3 h-3 text-indigo-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                      >
                        <Sun className="w-3 h-3 text-amber-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={darkMode ? 'text-white' : 'text-gray-900'}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className={`block py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Features</a>
              <a href="#how-it-works" className={`block py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>How It Works</a>
              <a href="#categories" className={`block py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Categories</a>
              <a href="#contact" className={`block py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Contact</a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className={`pt-24 pb-20 px-4 relative overflow-hidden ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-700'} mb-6`}
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <Star className="w-4 h-4 fill-current" />
                  Trusted by thousands of users
                </span>
              </motion.div> */}

              <h1 className={`text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-[1.1] px-2 w-full`}>
                The Right People<br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  for the Right Job.
                </span>
              </h1>








              <p className={`text-sm sm:text-lg lg:text-xl mb-8 max-w-[260px] xs:max-w-sm sm:max-w-lg px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Zoopol connects employers and workers for household tasks, one-day jobs, and quick help — fast, simple, and fully transparent.
              </p>





              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-[280px] xs:max-w-xs sm:max-w-none">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-900 transition-colors w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs">Download on the</div>
                    <div className="text-base sm:text-lg">App Store</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-900 transition-colors w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left whitespace-nowrap">
                    <div className="text-[10px] sm:text-xs">Get it on</div>
                    <div className="text-base sm:text-lg">Google Play</div>
                  </div>
                </motion.button>
              </div>





              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Secure payments</span>
                </div>
              </div>
            </motion.div>

            {/* iPhone Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-8 lg:mt-0 flex justify-center items-center h-[350px] xs:h-[400px] sm:h-[600px] w-full overflow-hidden lg:overflow-visible"
            >
              <div className="relative flex justify-center items-center scale-[0.5] xs:scale-[0.7] sm:scale-100 origin-center min-w-[500px]">

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [-10, -8, -10]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 -mr-20 sm:-mr-32"
                >
                  <IPhoneMockup
                    screenshot={darkMode ? darkHome : lightHome}
                    alt="Zoopol Home Screen"
                    delay={0}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [10, 8, 10]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="relative z-10"
                >
                  <IPhoneMockup
                    screenshot={darkMode ? darkCategories : lightCategories}
                    alt="Zoopol Categories Screen"
                    delay={0.2}
                  />
                </motion.div>

                {/* Mobile Glow */}
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className={`py-24 px-4 relative overflow-hidden ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Zoopol?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full" />
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We've built the fastest, most reliable way to get household tasks done with complete transparency.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 150
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`relative p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} transition-all shadow-lg hover:shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                />

                <motion.div
                  className={`relative z-10 w-14 h-14 rounded-xl ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100'} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon className={`w-7 h-7 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </motion.div>

                <h3 className={`relative z-10 text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-indigo-600 transition-colors`}>
                  {benefit.title}
                </h3>
                <p className={`relative z-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>

                <motion.div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className={`w-4 h-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={`py-24 px-4 relative overflow-hidden ${darkMode ? 'bg-gradient-to-b from-[#0f172a] to-[#1e293b]' : 'bg-gradient-to-b from-white to-indigo-50/50'}`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full" />
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Our streamlined process gets you matched with the right help in seconds.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 150
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-lg hover:shadow-2xl h-full relative overflow-hidden group`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                  />

                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(99, 102, 241, 0)',
                        '0 0 0 15px rgba(99, 102, 241, 0.1)',
                        '0 0 0 0 rgba(99, 102, 241, 0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                  >
                    {step.step}
                  </motion.div>

                  <h3 className={`relative z-10 text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-indigo-600 transition-colors`}>
                    {step.title}
                  </h3>
                  <p className={`relative z-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {step.description}
                  </p>

                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className={`w-5 h-5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  </motion.div>
                </motion.div>

                {index < howItWorks.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="hidden lg:block absolute top-1/2 -right-4 z-20"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-600 rounded-full"></div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className={`py-20 px-4 ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-indigo-900/10' : 'bg-indigo-100/50'} blur-3xl`}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-900/10' : 'bg-purple-100/50'} blur-3xl`}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className={`inline-block px-6 py-3 rounded-full ${darkMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'} mb-6`}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                No Restrictions - Unlimited Possibilities
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Popular Categories
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              Choose from our popular categories
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`text-lg ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} flex items-center justify-center gap-2`}
            >
              <Plus className="w-5 h-5" />
              Or create your own custom category!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-6 mb-12">


            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-5 sm:p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-indigo-200'} text-center cursor-pointer transition-all shadow-lg hover:shadow-2xl group`}

              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                {category.popular && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 + 0.3, type: 'spring' }}
                    className="absolute -top-3 -right-3 z-10"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(251, 146, 60, 0.7)',
                          '0 0 0 10px rgba(251, 146, 60, 0)',
                          '0 0 0 0 rgba(251, 146, 60, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-xl"
                    >
                      ⭐ Hot
                    </motion.div>
                  </motion.div>

                )}

                <motion.div
                  className="text-3xl sm:text-4xl mb-2 sm:mb-3 relative z-10"
                  whileHover={{ rotateY: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {category.icon}
                </motion.div>

                <p className={`text-sm sm:text-base font-semibold relative z-10 ${darkMode ? 'text-gray-200' : 'text-gray-800'} group-hover:text-indigo-600 transition-all whitespace-normal leading-tight px-1`}>
                  {category.name}
                </p>


                <motion.div
                  className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${darkMode ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)'}, transparent 70%)`
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-xl md:rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(135deg, ${darkMode ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)'} 0%, ${darkMode ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'} 100%)`,
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-6 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900 border-2 border-indigo-700' : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300'} cursor-pointer group`}
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className={`w-12 h-12 rounded-full ${darkMode ? 'bg-indigo-800' : 'bg-white'} flex items-center justify-center shadow-lg`}
              >
                <Plus className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`} />
              </motion.div>
              <div className="text-left">
                <h3 className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-indigo-600 transition-colors`}>
                  Don't see your category?
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Create a custom job posting for any task!
                </p>
              </div>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <svg className={`w-6 h-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshots with iPhone Mockups */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-[#0f172a]' : 'bg-indigo-50'} relative overflow-hidden`}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-300/30'} blur-3xl`}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className={`w-12 h-12 mx-auto ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            </motion.div>
            <h2 className={`text-4xl md:text-5xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Easy to Use, Beautiful Design
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage everything from your pocket
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { img: darkMode ? darkHome : lightHome, title: 'Find Jobs Instantly', desc: 'Browse nearby jobs and connect with workers' },
              { img: darkMode ? darkMyJobs : lightMyJobs, title: 'Track Your Work', desc: 'Monitor progress in real-time with live updates' },
              { img: darkMode ? darkCategories : lightCategories, title: 'Choose Categories', desc: 'Pick from popular options or create custom jobs' },
            ].map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 }}
                className="text-center"
              >
                <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <IPhoneMockup screenshot={screen.img} alt={screen.title} delay={index * 0.2} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="mt-6"
                >
                  <h3 className={`text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{screen.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{screen.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-b from-[#1e293b] to-[#0f172a]' : 'bg-gradient-to-b from-white to-indigo-50'}`}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Have Questions?
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We'd love to hear from you
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            onSubmit={handleSubmit}
            className={`relative p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-2xl overflow-hidden`}
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-200/30'} blur-3xl`}
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full ${darkMode ? 'bg-purple-900/20' : 'bg-purple-200/30'} blur-3xl`}
            />

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Message Sent Successfully!
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-sm`}>
                  Thanks for reaching out. We've received your message and will get back to you as soon as possible.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <div className="space-y-6 relative z-10">
                <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center gap-2`}>
                    <Users className="w-4 h-4" />
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center gap-2`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center gap-2`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none`}
                    placeholder="Tell us how we can help..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '50%' }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                </motion.button>
              </div>
            )}

          </motion.form>
        </div>
      </section>




      {/* WhatsApp Chat Button */}
      <motion.a
        href="https://wa.me/917510339308"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(34, 197, 94, 0.7)',
              '0 0 0 20px rgba(34, 197, 94, 0)',
              '0 0 0 0 rgba(34, 197, 94, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">

            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .01 5.437.005 12.045c0 2.112.551 4.172 1.597 6.011L0 24l6.135-1.61a11.75 11.75 0 005.91 1.594h.005c6.604 0 12.039-5.437 12.045-12.045a11.815 11.815 0 00-3.586-8.502"/>
          </svg>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
        </motion.div>
      </motion.a>
    </div>
  );
}



