import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { THEMES, type ThemeId } from '@/types/theme';

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  cycleTheme: () => void;
  isPickerOpen: boolean;
  setIsPickerOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEYS = Object.keys(THEMES) as ThemeId[];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as ThemeId;
      if (saved && THEMES[saved]) return saved;
    }
    return 'dunkerley';
  });

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const applyTheme = useCallback((newTheme: ThemeId) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor && THEMES[newTheme]) {
      metaThemeColor.setAttribute('content', THEMES[newTheme].metaColor);
    }
  }, []);

  const setTheme = useCallback((newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const currentIndex = THEME_KEYS.indexOf(prev);
      const nextIndex = (currentIndex + 1) % THEME_KEYS.length;
      const nextTheme = THEME_KEYS[nextIndex];
      localStorage.setItem('portfolio-theme', nextTheme);
      applyTheme(nextTheme);
      return nextTheme;
    });
  }, [applyTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Keyboard shortcut: Press 'T' or 't' to cycle theme (when not in an input/textarea)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 't' || e.key === 'T') {
        cycleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cycleTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        cycleTheme,
        isPickerOpen,
        setIsPickerOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
