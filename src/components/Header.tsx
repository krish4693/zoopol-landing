import { Link } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { darkMode, toggleTheme, isThemeSwitching } = useTheme();

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${darkMode ? 'bg-[#1e293b]/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Logo darkMode={darkMode} className="h-8 w-auto" />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 text-gray-200 hover:text-white border border-slate-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Back to Home</span>
            </Link>

            {/* Stylish Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full p-0.5 transition-colors ${darkMode ? 'bg-indigo-900' : 'bg-indigo-200'}`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Theme"
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
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-3.5 h-3.5 text-indigo-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

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
                          x: Math.cos((i * Math.PI) / 3) * 30,
                          y: Math.sin((i * Math.PI) / 3) * 30,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Sparkles className={`w-2.5 h-2.5 ${darkMode ? 'text-yellow-400' : 'text-indigo-500'}`} />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
