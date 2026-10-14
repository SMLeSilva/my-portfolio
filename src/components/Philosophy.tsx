import { Code2, GitFork, ShieldCheck, HeartHandshake, BarChart2 } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

export function Philosophy() {
  const headerRef = useScrollReveal({ delay: 0 });
  const pillarsRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.08, staggerMs: 90 });

  const pillars = [
    {
      num: '01',
      title: 'Arquitetura Limpa & Tipagem Ponta a Ponta',
      icon: Code2,
      description: 
        'Separação rigorosa entre regras de negócio e infraestrutura. Modelagem orientada a domínio (Clean Architecture), Use Cases isolados, e tipagem ponta a ponta com TypeScript, Eden Treaty, Drizzle e Prisma ORM sobre PostgreSQL.',
      tag: 'Backend & Resiliência',
    },
    {
      num: '02',
      title: 'Liderança Servidora & Coordenação de Squads',
      icon: GitFork,
      description: 
        'Gestão de 16 membros em 6 projetos simultâneos na Atria Junior. Foco em autonomia, code reviews construtivos, reversão de projetos travados e alinhamento técnico claro entre gerentes, clientes e desenvolvedores.',
      tag: 'Gestão & Produtividade',
    },
    {
      num: '03',
      title: 'CI/CD Automatizado & Infra com Docker',
      icon: ShieldCheck,
      description: 
        'Eliminação do trabalho manual e de surpresas em produção. Pipelines de CI/CD via GitHub Actions com testes automatizados como requisito de aprovação e deploy via SSH com Docker Compose + Traefik e SSL.',
      tag: 'DevOps & Qualidade',
    },
    {
      num: '04',
      title: 'Mentalidade AI-First & Engenharia Inclusiva',
      icon: HeartHandshake,
      description: 
        'Adoção pragmática de IA (Claude Opus 4.6, Gemini 3.1 Pro e Framework GSD) como acelerador de produtividade, somada a projetos com propósito real como a auditoria WCAG para acessibilidade de PcD.',
      tag: 'Inovação & Propósito',
    },
    {
      num: '05',
      title: 'Data Engineering & Análise Quantitativa',
      icon: BarChart2,
      description:
        'Pipeline Python sobre a API SGS do Banco Central (séries Selic, comprometimento de renda e NPL 90+) com correlações defasadas de 6 meses. Segmentação de risco de crédito em SQL in-memory (DuckDB) e briefing executivo via IA Generativa com schema JSON explícito e fallback resiliente.',
      tag: 'Dados & Risco Financeiro',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-theme-surface transition-colors duration-300 relative border-b border-theme-border"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal-section flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-theme-accent font-semibold">
              // 02. Filosofia de Engenharia
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-theme-text tracking-tight">
              Como penso, lidero e projeto software.
            </h2>
          </div>
          <p className="text-theme-muted text-sm sm:text-base max-w-md">
            Princípios técnicos consolidados na coordenação técnica da Atria Junior, projetos publicados e na graduação em Sistemas de Informação pela UNICAMP.
          </p>
        </div>

        {/* 4 Pillars Grid - Editorial Cards like Max Böck */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group p-8 rounded-2xl bg-theme-card border border-theme-border hover:border-theme-accent/60 transition-all duration-300 hover-card-glow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm text-theme-accent font-bold px-2.5 py-1 rounded-md bg-theme-accent/10 border border-theme-accent/20">
                      {item.num}
                    </span>
                    <span className="text-xs font-mono text-theme-muted uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text mb-4 group-hover:text-theme-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-theme-border/60 flex items-center justify-between text-xs text-theme-muted">
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-theme-accent" />
                    <span>Princípio ativo</span>
                  </span>
                  <span className="font-mono text-theme-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    executado na prática →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
