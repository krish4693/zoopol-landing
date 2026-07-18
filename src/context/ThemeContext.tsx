import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (value: boolean) => void;
  isThemeSwitching: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = 'zoopol-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkModeState] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
      // Check system preference if no saved theme
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [isThemeSwitching, setIsThemeSwitching] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem(THEME_KEY, 'dark');
      } catch (e) {
        console.error('Failed to save theme preference', e);
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem(THEME_KEY, 'light');
      } catch (e) {
        console.error('Failed to save theme preference', e);
      }
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setIsThemeSwitching(true);
    setTimeout(() => {
      setDarkModeState((prev) => !prev);
      setIsThemeSwitching(false);
    }, 300);
  };

  const setDarkMode = (val: boolean) => {
    setDarkModeState(val);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, setDarkMode, isThemeSwitching }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
