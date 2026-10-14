import { useEffect, useState } from 'react';
import { USER_DATA } from '@/constants/user';
import { 
  ArrowDown, 
  Download, 
  MapPin, 
  Terminal, 
  Layers, 
  Users, 
  GitPullRequest,
  Sparkles
} from 'lucide-react';

export function Hero() {
  const introText = 
    `Estudante de Sistemas de Informação na UNICAMP com experiência prática em desenvolvimento full stack — Java, TypeScript, Bun, Python, SQL e Go — e liderança técnica na Atria Junior. Atuação comprovada na recuperação de projetos críticos, arquiteturas distribuídas, Clean Architecture, pipelines de CI/CD automatizados e na coordenação de 16 desenvolvedores em 6 projetos simultâneos.`;

  const words = introText.split(' ');
  const [visibleCount, setVisibleCount] = useState(0);

  // Ian Dunkerley word-by-word reveal effect
  useEffect(() => {
    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < words.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 24);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section 
      id="home" 
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-theme-bg tech-grid-pattern overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient blur */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-30"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Top Badges / Availability Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme-border bg-theme-surface/80 text-xs font-mono text-theme-text shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Disponível para novos projetos & propostas</span>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-theme-border bg-theme-surface/50 text-xs font-mono text-theme-muted">
            <MapPin className="w-3.5 h-3.5 text-theme-accent" />
            <span>{USER_DATA.location} · Brasil</span>
          </div>
        </div>

        {/* Editorial Title - Max Böck style */}
        <div className="max-w-4xl space-y-4 mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-theme-accent font-semibold">
            // Olá, eu sou Samuel Rodrigues
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-theme-text leading-[1.08]">
            Construo sistemas robustos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accentSecondary">APIs escaláveis</span> & arquiteturas limpas.
          </h1>
        </div>

        {/* Ian Dunkerley Word Reveal Bio + Interactive Tech Matrix Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Bio paragraph with staggered reveal */}
          <div className="lg:col-span-7 space-y-6">
            <div className="word-reveal-container text-base sm:text-lg md:text-xl text-theme-muted font-normal leading-relaxed">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`word mr-[0.28em] ${i < visibleCount ? 'visible' : ''}`}
                >
                  {word}
                </span>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-theme-accent text-white font-medium text-sm hover:opacity-95 transition-all shadow-md active:scale-95 group"
              >
                <span>Ver Projetos Selecionados</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                download="Samuel_Rodrigues_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-theme-border bg-theme-surface/70 hover:border-theme-accent hover:bg-theme-surface text-theme-text font-medium text-sm transition-all"
              >
                <Download className="w-4 h-4 text-theme-accent" />
                <span>Baixar Currículo [PDF]</span>
              </a>
            </div>
          </div>

          {/* Interactive Architectural Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="bg-theme-surface/90 border border-theme-border rounded-2xl shadow-xl overflow-hidden backdrop-blur-md">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-theme-border bg-black/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-theme-muted">
                  <Terminal className="w-3.5 h-3.5 text-theme-accent" />
                  <span>runtime.config.ts</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  ● live
                </span>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs text-theme-text space-y-2.5 bg-theme-bg/60">
                <div className="text-theme-muted">
                  <span className="text-theme-accent">const</span> profile = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-theme-muted">role:</span> <span className="text-emerald-400">"Engenheiro de Software & Coord TI"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-theme-muted">education:</span> <span className="text-amber-400">"UNICAMP · Sistemas de Informação"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-theme-muted">coreStack:</span> [
                  <span className="text-sky-400">"Java"</span>, 
                  <span className="text-sky-400">"TypeScript"</span>, 
                  <span className="text-sky-400">"Bun"</span>, 
                  <span className="text-sky-400">"PostgreSQL"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-theme-muted">leadership:</span> <span className="text-purple-400">"16 membros em 6 projetos"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-theme-muted">methodology:</span> <span className="text-emerald-400">"Clean Arch · CI/CD · AI-First"</span>
                </div>
                <div className="text-theme-muted">{'}'};</div>
              </div>

              {/* Key Quick Stats Footer */}
              <div className="grid grid-cols-2 border-t border-theme-border text-center divide-x divide-theme-border bg-theme-surface/50 text-xs">
                <div className="p-3">
                  <span className="block font-bold text-sm text-theme-text">16 Membros</span>
                  <span className="text-[11px] text-theme-muted">6 projetos simultâneos</span>
                </div>
                <div className="p-3">
                  <span className="block font-bold text-sm text-theme-text">600+ Commits</span>
                  <span className="text-[11px] text-theme-muted">30+ PRs em Produção</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quantifiable Highlights Strip - Editorial touch */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-theme-border/60">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-theme-card border border-theme-border/50">
            <div className="p-2.5 rounded-lg bg-theme-accent/10 text-theme-accent">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-theme-text">16 Desenvolvedores</div>
              <div className="text-xs text-theme-muted">6 projetos na Atria Jr</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-theme-card border border-theme-border/50">
            <div className="p-2.5 rounded-lg bg-theme-accent/10 text-theme-accent">
              <GitPullRequest className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-theme-text">600+ Commits</div>
              <div className="text-xs text-theme-muted">App Store & Google Play</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-theme-card border border-theme-border/50">
            <div className="p-2.5 rounded-lg bg-theme-accent/10 text-theme-accent">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-theme-text">Zero Trust & CI/CD</div>
              <div className="text-xs text-theme-muted">Bun + Docker + Traefik</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-theme-card border border-theme-border/50">
            <div className="p-2.5 rounded-lg bg-theme-accent/10 text-theme-accent">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-theme-text">UNICAMP</div>
              <div className="text-xs text-theme-muted">Sistemas de Informação</div>
            </div>
          </div>
        </div>

      </div>

      {/* Ian Dunkerley Organic SVG Curve Transition */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg 
          className="svg-curve" 
          viewBox="0 0 1440 79" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z" />
        </svg>
      </div>
    </section>
  );
}