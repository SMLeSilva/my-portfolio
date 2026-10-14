import { useTheme } from '@/context/ThemeContext';
import { THEMES, type ThemeId } from '@/types/theme';
import { X, Check, Palette, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemePickerModal() {
  const { theme, setTheme, isPickerOpen, setIsPickerOpen } = useTheme();

  return (
    <AnimatePresence>
      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPickerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-theme-surface border border-theme-border rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-theme-border bg-theme-bg/50">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-theme-accent" />
                <h3 className="font-display font-bold text-lg text-theme-text">
                  Selecione o Tema
                </h3>
              </div>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="p-1.5 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-bg transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Themes List */}
            <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
              {(Object.keys(THEMES) as ThemeId[]).map((key) => {
                const item = THEMES[key];
                const isActive = theme === key;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key);
                    }}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all text-left group ${
                      isActive
                        ? 'border-theme-accent bg-theme-accent/10 shadow-sm'
                        : 'border-theme-border bg-theme-card hover:border-theme-borderSubtle hover:bg-theme-subtle'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center">
                        {isActive ? (
                          <Check className="w-4 h-4 text-theme-accent" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-theme-border group-hover:bg-theme-muted" />
                        )}
                      </div>
                      <span className="font-medium text-sm text-theme-text group-hover:text-theme-accent transition-colors">
                        {item.name}
                      </span>
                    </div>

                    {/* Max Böck Color Palette Strip */}
                    <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/20 border border-white/5">
                      <span
                        className="w-4 h-4 rounded-full shadow-inner"
                        style={{ backgroundColor: item.palette.bg }}
                        title="Fundo"
                      />
                      <span
                        className="w-4 h-4 rounded-full shadow-inner"
                        style={{ backgroundColor: item.palette.surface }}
                        title="Superfície"
                      />
                      <span
                        className="w-4 h-4 rounded-full shadow-inner"
                        style={{ backgroundColor: item.palette.accent }}
                        title="Destaque"
                      />
                      <span
                        className="w-4 h-4 rounded-full shadow-inner"
                        style={{ backgroundColor: item.palette.accentSecondary }}
                        title="Secundário"
                      />
                      <span
                        className="w-4 h-4 rounded-full shadow-inner"
                        style={{ backgroundColor: item.palette.text }}
                        title="Texto"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-theme-bg/60 border-t border-theme-border flex items-center justify-between text-xs text-theme-muted">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
                Inspirado nos temas de Mario Kart & Minimalismo escuro
              </span>
              <kbd className="px-2 py-0.5 rounded bg-theme-subtle border border-theme-border font-mono text-[11px] text-theme-text">
                Pressione [T]
              </kbd>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
