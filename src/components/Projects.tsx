import { useState, useEffect } from 'react';
import { PROJECTS, type ProjectItem } from '@/constants/projects';
import { ProjectModal } from '@/components/ProjectModal';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';
import { 
  Github, 
  ExternalLink, 
  Maximize2, 
  Heart, 
  FolderGit2, 
  ArrowUpRight,
  Smartphone,
  Layers,
  FileCode,
  Terminal
} from 'lucide-react';

export function Projects() {
  const headerRef = useScrollReveal({ delay: 0 });
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.06, staggerMs: 100 });

  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    project: ProjectItem | null;
  }>({
    isOpen: false,
    project: null,
  });

  // Interactive like counter with localStorage persistence (Max Böck signature)
  const [likes, setLikes] = useState<Record<number, { count: number; userLiked: boolean }>>({
    0: { count: 98, userLiked: false },
    1: { count: 87, userLiked: false },
    2: { count: 64, userLiked: false },
    3: { count: 72, userLiked: false },
    4: { count: 53, userLiked: false },
    5: { count: 41, userLiked: false },
  });

  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem('portfolio-project-likes');
      if (savedLikes) {
        setLikes(JSON.parse(savedLikes));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLike = (index: number) => {
    setLikes((prev) => {
      const current = prev[index] || { count: 50, userLiked: false };
      const updated = {
        ...prev,
        [index]: {
          count: current.userLiked ? current.count - 1 : current.count + 1,
          userLiked: !current.userLiked,
        },
      };
      localStorage.setItem('portfolio-project-likes', JSON.stringify(updated));
      return updated;
    });
  };

  const openCodeModal = (project: ProjectItem) => {
    setActiveModal({
      isOpen: true,
      project,
    });
  };

  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 bg-theme-bg relative transition-colors duration-300 border-b border-theme-border"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal-section flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-border bg-theme-surface text-xs font-mono text-theme-accent">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>// 03. Portfólio & Engenharia</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-theme-text tracking-tight">
              Projetos de Destaque.
            </h2>
            <p className="text-theme-muted text-base max-w-xl">
              Arquitetura de software demonstrada em código real: APIs distribuídas, apps mobile em produção e automações robustas.
            </p>
          </div>

          <a
            href="https://github.com/SMLeSilva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-theme-accent hover:underline group"
          >
            <span>Ver todos no GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Projects Grid - Ian Dunkerley + Max Böck Fusion */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => {
            const projectLikes = likes[index] || { count: 50, userLiked: false };
            const snippetLines = project.codeSnippet.code.split('\n').slice(0, 7);

            return (
              <div
                key={project.title}
                className="group flex flex-col rounded-3xl bg-theme-surface border border-theme-border overflow-hidden hover:border-theme-accent/70 transition-all duration-300 hover-card-glow"
              >
                {/* Code Terminal Frame instead of static images */}
                <div 
                  className="relative bg-black/75 border-b border-theme-border cursor-pointer select-none overflow-hidden"
                  onClick={() => openCodeModal(project)}
                  title="Clique para inspecionar o código completo"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 pl-2">
                        <FileCode className="w-3.5 h-3.5 text-theme-accent" />
                        <span className="truncate max-w-[200px]">{project.codeSnippet.fileName}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-zinc-400">
                        {project.codeSnippet.language}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openCodeModal(project);
                        }}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        title="Inspecionar código completo"
                        aria-label="Inspecionar código"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Code Body with line numbers and bottom fade-out */}
                  <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-zinc-300 relative overflow-hidden">
                    <pre className="grid grid-cols-[auto_1fr] gap-x-3 text-[11px] sm:text-xs">
                      {/* Line numbers */}
                      <span className="select-none text-right text-zinc-600 font-mono pr-2 border-r border-zinc-800">
                        {snippetLines.map((_, i) => (
                          <span key={i} className="block leading-relaxed">
                            {i + 1}
                          </span>
                        ))}
                      </span>
                      {/* Code lines */}
                      <code className="text-zinc-300 font-mono overflow-hidden">
                        {snippetLines.map((line, i) => (
                          <span key={i} className="block leading-relaxed truncate">
                            {line}
                          </span>
                        ))}
                      </code>
                    </pre>

                    {/* Gradient fade-out overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Category Pill and Metrics */}
                  <div className="px-4 py-2 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-theme-accent font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3 h-3" />
                      <span>{project.category}</span>
                    </span>
                    {project.metrics && (
                      <span className="text-emerald-400 font-medium">
                        ● {project.metrics}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header: Title + Max Böck Interactive Heart Like Button */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text group-hover:text-theme-accent transition-colors">
                        {project.title}
                      </h3>

                      {/* Interactive Like Button - Max Böck signature */}
                      <button
                        onClick={() => handleLike(index)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono transition-all shrink-0 ${
                          projectLikes.userLiked
                            ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                            : 'bg-theme-bg border-theme-border text-theme-muted hover:border-theme-accent/40'
                        }`}
                        title="Curtir este projeto"
                        aria-label={`Curtir projeto ${project.title}`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-transform ${
                            projectLikes.userLiked ? 'fill-rose-500 text-rose-500 scale-110' : ''
                          }`}
                        />
                        <span>{projectLikes.count}</span>
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-theme-muted text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architecture Highlight Box */}
                    {project.architectureHighlight && (
                      <div className="p-3.5 rounded-xl bg-theme-bg border border-theme-border/70 mb-5 text-xs text-theme-muted font-sans space-y-1">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-theme-accent font-semibold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Destaque de Arquitetura:</span>
                        </div>
                        <p className="leading-relaxed">
                          {project.architectureHighlight}
                        </p>
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-theme-bg border border-theme-border text-theme-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar (Ian Dunkerley inspired icon action buttons) */}
                  <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-theme-border bg-theme-bg hover:border-theme-accent text-xs font-mono text-theme-text transition-colors"
                          aria-label={`Código fonte de ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Repositório</span>
                        </a>
                      )}

                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-theme-accent text-white hover:opacity-95 text-xs font-mono transition-all shadow-sm"
                          aria-label={`Acessar projeto online ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Acessar Projeto</span>
                        </a>
                      )}

                      {project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-theme-border bg-theme-bg hover:border-theme-accent text-xs font-mono text-theme-text transition-colors"
                          aria-label={`Ver na App Store`}
                        >
                          <Smartphone className="w-3.5 h-3.5 text-theme-accent" />
                          <span>App Store</span>
                        </a>
                      )}

                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-theme-border bg-theme-bg hover:border-theme-accent text-xs font-mono text-theme-text transition-colors"
                          aria-label={`Ver na Google Play`}
                        >
                          <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Google Play</span>
                        </a>
                      )}

                      {project.links.kaggle && (
                        <a
                          href={project.links.kaggle}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#20BEFF]/10 border border-[#20BEFF]/30 hover:bg-[#20BEFF]/20 text-xs font-mono text-[#20BEFF] transition-colors"
                          aria-label={`Ver notebook no Kaggle — ${project.title}`}
                        >
                          <span className="font-bold text-[11px]">K</span>
                          <span>Kaggle</span>
                        </a>
                      )}

                      {project.links.note && !project.links.github && !project.links.appStore && !project.links.kaggle && (
                        <span className="text-xs font-mono text-theme-muted italic">
                          {project.links.note}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => openCodeModal(project)}
                      className="text-xs font-mono text-theme-muted hover:text-theme-accent transition-colors flex items-center gap-1"
                    >
                      <span>Inspecionar código</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Code Inspector Lightbox Modal */}
      <ProjectModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal({ isOpen: false, project: null })}
        title={activeModal.project?.title || ''}
        category={activeModal.project?.category || ''}
        codeSnippet={activeModal.project?.codeSnippet || null}
      />
    </section>
  );
}