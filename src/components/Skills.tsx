import { useState } from 'react';
import { SKILLS } from '@/constants/skills';
import { 
  Code2,
  Layout, 
  Database, 
  Wrench, 
  Brain,
  UserCheck, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

const categoryIcons: Record<string, React.ElementType> = {
  'Linguagens & Runtimes': Code2,
  'Frameworks Web & Mobile': Layout,
  'Bancos de Dados & ORMs': Database,
  'DevOps, Infra & Cloud': Wrench,
  'IA & Metodologias': Brain,
  'Idiomas & Liderança': UserCheck,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const headerRef = useScrollReveal({ delay: 0 });
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.06, staggerMs: 75 });

  const categories = ['all', ...SKILLS.map((c) => c.category)];

  const displayedSkills = activeTab === 'all' 
    ? SKILLS 
    : SKILLS.filter((s) => s.category === activeTab);

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 bg-theme-surface transition-colors duration-300 relative border-b border-theme-border"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal-section flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-border bg-theme-bg text-xs font-mono text-theme-accent">
              <Cpu className="w-3.5 h-3.5" />
              <span>// 06. Stack Tecnológica</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-theme-text tracking-tight">
              Arsenal & Competências.
            </h2>
            <p className="text-theme-muted text-base">
              Linguagens, frameworks, bancos relacionais, conteinerização e metodologias aplicadas no dia a dia.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === cat
                    ? 'bg-theme-accent text-white font-bold shadow-sm'
                    : 'bg-theme-bg border border-theme-border text-theme-muted hover:text-theme-text hover:border-theme-borderSubtle'
                }`}
              >
                {cat === 'all' ? 'Todas as Áreas' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((category) => {
            const Icon = categoryIcons[category.category] || Cpu;

            return (
              <div
                key={category.category}
                className="p-6 sm:p-7 rounded-2xl bg-theme-card border border-theme-border hover:border-theme-accent/60 transition-all duration-300 hover-card-glow flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-theme-border/60">
                    <div className="p-2.5 rounded-xl bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-theme-text">
                      {category.category}
                    </h3>
                  </div>

                  {/* Subgroups */}
                  <div className="space-y-5">
                    {category.groups.map((group, gIndex) => (
                      <div key={gIndex}>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-theme-muted font-bold block mb-2.5">
                          {group.name}
                        </span>

                        <div className="flex flex-wrap gap-2">
                          {group.items.map((skill, sIndex) => (
                            <div
                              key={sIndex}
                              className="group/item flex items-center gap-2 px-3 py-1.5 rounded-xl bg-theme-bg border border-theme-border hover:border-theme-accent hover:bg-theme-surface transition-all text-xs font-mono text-theme-text"
                            >
                              {skill.iconClass && (
                                <i className={`${skill.iconClass} text-sm text-theme-muted group-hover/item:text-theme-accent transition-colors`} />
                              )}
                              <span className="font-medium">{skill.name}</span>
                              {skill.badge && (
                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                                  {skill.badge}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-theme-border/40 text-[11px] font-mono text-theme-muted flex items-center justify-between">
                  <span>Prática em projetos reais</span>
                  <Sparkles className="w-3 h-3 text-theme-accent" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}