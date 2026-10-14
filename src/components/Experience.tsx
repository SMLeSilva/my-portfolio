import { EXPERIENCES } from '@/constants/experience';
import { Briefcase, Calendar } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

export function Experience() {
  const headerRef = useScrollReveal({ delay: 0 });
  const timelineRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.08, staggerMs: 110 });

  return (
    <section 
      id="experience" 
      className="py-24 md:py-32 bg-theme-surface transition-colors duration-300 relative border-b border-theme-border"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal-section max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-theme-accent font-semibold">
            // 04. Trajetória & Liderança
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-theme-text tracking-tight">
            Experiência Profissional.
          </h2>
          <p className="text-theme-muted text-base">
            Coordenação técnica de squads, orquestração de entregas e engenharia de software aplicada a problemas reais.
          </p>
        </div>

        {/* Timeline Items - Editorial Cards */}
        <div ref={timelineRef} className="space-y-8 relative">
          {/* Subtle timeline track line */}
          <div className="absolute left-6 md:left-8 top-6 bottom-6 w-px bg-theme-border hidden sm:block" />

          {EXPERIENCES.map((exp, index) => {
            const isCurrent = exp.period.includes('Presente') || exp.period.includes('Atual');

            return (
              <div 
                key={index}
                className="relative pl-0 sm:pl-16 group"
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex absolute left-6 md:left-8 -translate-x-1/2 top-7 w-8 h-8 rounded-full bg-theme-bg border border-theme-border items-center justify-center text-theme-accent group-hover:border-theme-accent group-hover:scale-110 transition-all z-10 shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme-border hover:border-theme-accent/60 transition-all duration-300 hover-card-glow">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-medium">
                            Atual
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-sm text-theme-accent font-semibold">
                        {exp.company}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-theme-border bg-theme-bg font-mono text-xs text-theme-muted self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3.5 text-theme-muted text-sm sm:text-base">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Dynamic Metrics Chips from Resume */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-theme-border/60 flex flex-wrap gap-2.5">
                      {exp.metrics.map((m, mIndex) => (
                        <div
                          key={mIndex}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-theme-bg border border-theme-border text-xs font-mono text-theme-text"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                          <span>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}