import { EDUCATION } from '@/constants/education';
import { USER_DATA } from '@/constants/user';
import { 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Award, 
  ExternalLink, 
  Languages, 
  ShieldCheck, 
  BookOpen 
} from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

export function Education() {
  const cert = USER_DATA.englishCert;
  const headerRef = useScrollReveal({ delay: 0 });
  const cardsRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.08, staggerMs: 100 });

  return (
    <section 
      id="education" 
      className="py-20 md:py-28 bg-theme-bg transition-colors duration-300 relative border-b border-theme-border"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal-section max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-border bg-theme-surface text-xs font-mono text-theme-accent">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>// 05. Formação & Certificações</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-theme-text tracking-tight">
            Educação & Certificados.
          </h2>
          <p className="text-theme-muted text-base">
            Fundamentos sólidos em ciência da computação pela UNICAMP e proficiência internacional em língua inglesa.
          </p>
        </div>

        {/* Education & Certification Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Academic Degrees (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-theme-muted font-bold mb-2">
              <BookOpen className="w-4 h-4 text-theme-accent" />
              <span>Formação Acadêmica</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EDUCATION.map((edu, index) => {
                const isOngoing = edu.status === 'Em andamento';

                return (
                  <div
                    key={index}
                    className="group p-6 sm:p-7 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-accent/60 transition-all duration-300 hover-card-glow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                          {edu.period}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                            isOngoing
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                              : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          }`}
                        >
                          {isOngoing ? (
                            <>
                              <Clock className="w-3 h-3" />
                              <span>Em andamento</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Concluído</span>
                            </>
                          )}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-theme-text mb-1 group-hover:text-theme-accent transition-colors">
                        {edu.institution}
                      </h3>

                      <p className="font-mono text-xs sm:text-sm text-theme-accent mb-3 font-semibold">
                        {edu.degree}
                      </p>

                      <p className="text-theme-muted text-xs sm:text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-theme-border/60 flex items-center justify-between text-xs text-theme-muted">
                      <span className="flex items-center gap-1.5 font-mono">
                        <Award className="w-3.5 h-3.5 text-theme-accent" />
                        <span>{isOngoing ? 'Graduação Superior' : 'Ensino Técnico'}</span>
                      </span>
                      <span className="font-mono text-theme-text font-bold text-xs">
                        {index === 0 ? 'FT · UNICAMP' : 'ETEC'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official English Certification Card (1 column) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-theme-muted font-bold mb-2">
              <Languages className="w-4 h-4 text-theme-accent" />
              <span>Certificação Oficial</span>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-accent/60 transition-all duration-300 hover-card-glow flex flex-col justify-between relative overflow-hidden h-full">
              {/* Subtle badge glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>EF SET Certificado</span>
                  </div>
                  <span className="font-mono text-xs text-theme-muted">{cert.awarded}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-theme-text tracking-tight">
                      {cert.level.split(' ')[0]}
                    </span>
                    <span className="font-mono text-sm text-cyan-400 font-semibold">
                      Upper Intermediate
                    </span>
                  </div>
                  <p className="font-mono text-xs text-theme-muted">
                    Pontuação Global: <strong className="text-theme-text">{cert.score}</strong>
                  </p>
                </div>

                {/* Score Breakdown Bars */}
                <div className="space-y-3 pt-2 pb-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-theme-text font-medium">Reading</span>
                      <span className="text-cyan-400 font-bold">{cert.reading}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-theme-bg overflow-hidden border border-theme-border/50">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-theme-text font-medium">Listening</span>
                      <span className="text-theme-muted">{cert.listening}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-theme-bg overflow-hidden border border-theme-border/50">
                      <div className="h-full bg-cyan-500/80 rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-theme-text font-medium">Speaking</span>
                      <span className="text-theme-muted">{cert.speaking}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-theme-bg overflow-hidden border border-theme-border/50">
                      <div className="h-full bg-emerald-500/80 rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Certificate Link */}
              <div className="pt-4 mt-4 border-t border-theme-border/60">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-theme-bg hover:bg-theme-accent hover:text-white border border-theme-border hover:border-theme-accent text-theme-text text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group"
                >
                  <span>Verificar Certificado Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}