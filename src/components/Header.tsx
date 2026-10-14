import { useState } from 'react';
import { USER_DATA } from '@/constants/user';
import { useTheme } from '@/context/ThemeContext';
import { Palette, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { setIsPickerOpen, theme } = useTheme();

  const navItems = [
    { num: '01', name: 'Início', href: '#home' },
    { num: '02', name: 'Sobre', href: '#about' },
    { num: '03', name: 'Projetos', href: '#projects' },
    { num: '04', name: 'Trajetória', href: '#experience' },
    { num: '05', name: 'Skills', href: '#skills' },
    { num: '06', name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      {/* Top Accent Stripe - Ian Dunkerley signature */}
      <div 
        className="fixed top-0 left-0 right-0 h-[5px] z-50 transition-colors duration-300"
        style={{ backgroundColor: 'var(--top-stripe)' }}
      />

      <header className="fixed top-[5px] left-0 right-0 z-40 bg-theme-bg/85 backdrop-blur-md border-b border-theme-border transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Minimalist Brand Signature */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Ir para o topo"
          >
            <span className="font-mono text-sm text-theme-accent font-bold tracking-tighter">//</span>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-lg md:text-xl tracking-tight text-theme-text group-hover:text-theme-accent transition-colors">
                Samuel Silva
              </span>
              <svg 
                className="w-4 h-4 text-theme-accent shrink-0" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-label="Verificado"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" title="Disponível para projetos" />
          </a>

          {/* Numbered Navigation - Max Böck style */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-theme-muted hover:text-theme-text transition-colors py-1 relative"
              >
                <span className="font-mono text-[11px] text-theme-accent opacity-75 group-hover:opacity-100 transition-opacity">
                  {item.num}
                </span>
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Selector & Quick Links */}
          <div className="flex items-center gap-2.5">
            {/* Theme Picker Button - Max Böck signature */}
            <button
              onClick={() => setIsPickerOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme-border bg-theme-surface/70 hover:border-theme-accent text-theme-text text-xs font-mono transition-all group shadow-sm"
              title="Mudar Tema [T]"
              aria-label="Abrir menu de temas"
            >
              <Palette className="w-3.5 h-3.5 text-theme-accent group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline capitalize">{theme}</span>
            </button>

            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-1.5 border-l border-theme-border pl-2.5 ml-1">
              <a
                href={USER_DATA.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-surface transition-colors"
                aria-label="GitHub de Samuel"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={USER_DATA.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-surface transition-colors"
                aria-label="LinkedIn de Samuel"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Direct CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-theme-accent text-white hover:opacity-95 transition-all shadow-sm active:scale-95"
            >
              <span>Vamos Conversar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-theme-muted hover:text-theme-text rounded-lg hover:bg-theme-surface transition-colors ml-1"
              aria-label="Abrir menu mobile"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-theme-border bg-theme-surface/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.num}
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-3 py-2 text-theme-text hover:text-theme-accent transition-colors font-medium text-lg border-b border-theme-border/50"
                    >
                      <span className="font-mono text-xs text-theme-accent">
                        {item.num}
                      </span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsPickerOpen(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-theme-border bg-theme-bg text-sm text-theme-text font-medium"
                  >
                    <Palette className="w-4 h-4 text-theme-accent" />
                    <span>Tema: {theme}</span>
                  </button>

                  <a
                    href="#contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="px-5 py-2 rounded-xl bg-theme-accent text-white text-sm font-bold shadow-sm"
                  >
                    Contato
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}