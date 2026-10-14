import { useEffect, useState } from 'react';
import { X, Copy, Check, Terminal, FileCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { type CodeSnippet } from '@/constants/projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  codeSnippet: CodeSnippet | null;
}

export function ProjectModal({ isOpen, onClose, title, category, codeSnippet }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const copyToClipboard = () => {
    if (!codeSnippet) return;
    navigator.clipboard.writeText(codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!codeSnippet) return null;

  const lines = codeSnippet.code.split('\n');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-theme-surface border border-theme-border rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Modal Window Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-theme-border bg-theme-bg/90">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-theme-text font-medium pl-2">
                  <FileCode className="w-4 h-4 text-theme-accent" />
                  <span>{codeSnippet.fileName}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                    {codeSnippet.language}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-theme-border bg-theme-bg text-theme-muted hover:text-theme-text text-xs font-mono transition-colors"
                  title="Copiar código para a área de transferência"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-bg transition-colors"
                  aria-label="Fechar visualização"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Project Context Subheader */}
            <div className="px-6 py-2.5 bg-black/20 border-b border-theme-border/50 flex items-center justify-between text-xs font-mono text-theme-muted">
              <span>{title} · <strong className="text-theme-accent">{category}</strong></span>
              <span className="hidden sm:inline">Pressione ESC para fechar</span>
            </div>

            {/* Code Body */}
            <div className="p-6 bg-black/60 font-mono text-xs sm:text-sm text-theme-text overflow-x-auto max-h-[60vh] leading-relaxed">
              <pre className="grid grid-cols-[auto_1fr] gap-x-4">
                {/* Line numbers */}
                <span className="select-none text-right text-theme-muted/40 font-mono pr-2 border-r border-theme-border/40">
                  {lines.map((_, i) => (
                    <span key={i} className="block leading-relaxed">
                      {i + 1}
                    </span>
                  ))}
                </span>
                {/* Code lines */}
                <code className="text-theme-text/90 font-mono">
                  {lines.map((line, i) => (
                    <span key={i} className="block leading-relaxed">
                      {line || ' '}
                    </span>
                  ))}
                </code>
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-theme-border bg-theme-bg/60 flex items-center justify-between text-xs text-theme-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-theme-accent" />
                Código de produção / arquitetural
              </span>
              <span>{lines.length} linhas</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
