export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  metrics?: { label: string; value: string }[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Atria Junior — Empresa Júnior de Tecnologia (UNICAMP)",
    role: "Coordenador de TI",
    period: "Jan 2026 — Presente",
    description: [
      "Assumiu voluntariamente a coordenação para reverter um projeto travado há mais de 1 ano que ameaçava a saúde financeira da empresa; refatorou sozinho a arquitetura com foco em pragmatismo, destravando a equipe.",
      "Coordenação e capacitação técnica de 16 membros na execução simultânea de 6 projetos de software, acompanhando ciclos semanais, promovendo revisões de código (code reviews) e garantindo 100% dos prazos.",
      "Padronização da arquitetura tecnológica e das convenções de código (Next.js, TypeScript, Node.js, PostgreSQL), orientando testes, módulos de pagamento e relatórios automatizados.",
      "Diagnóstico e resolução de crise de SEO e performance em site de cliente, migrando a aplicação para Next.js (SSR/SSG) e restabelecendo a indexação e captação de leads orgânicos.",
      "Destravou projeto paralisado por falta de insumos entregando MVP funcional em Next.js com dados provisórios; reengajou o cliente e a equipe, mentorando gerentes internos e realocando recursos.",
      "Elaboração de propostas técnicas e arquiteturais para captação de clientes, modelando automações de WhatsApp, e-commerces e arquiteturas distribuídas com APIs de IA."
    ],
    metrics: [
      { label: "Membros Liderados", value: "16 membros" },
      { label: "Projetos Simultâneos", value: "6 projetos" },
      { label: "Padrão Tecnológico", value: "Next.js + Node + Postgres" }
    ]
  },
  {
    company: "Atria Junior — Empresa Júnior de Tecnologia (UNICAMP)",
    role: "Gerente de Projetos",
    period: "Jun 2025 — Dez 2025",
    description: [
      "Liderança de equipe multidisciplinar de 5 desenvolvedores sob Scrum e Kanban no projeto FutTest (Mobile Flutter + Backend Node.js/TypeScript).",
      "Orquestração do ciclo de vida de desenvolvimento com mais de 600 commits e 30+ Pull Requests aprovados, assegurando 100% de cumprimento dos prazos e metas.",
      "Garantia da entrega de módulos de alta criticidade: autenticação multi-perfil (8 papéis de usuário com RBAC), recuperação de senhas por e-mail, painel administrativo de indicadores e análise de atletas.",
      "Gestão de comunicação direta com stakeholders e priorização técnica de backlog, mitigando riscos e eliminando impedimentos operacionais."
    ],
    metrics: [
      { label: "Commits Orquestrados", value: "600+ commits" },
      { label: "PRs Aprovados", value: "30+ Pull Requests" },
      { label: "Cumprimento de Prazos", value: "100% no prazo" }
    ]
  },
  {
    company: "Atria Junior — Empresa Júnior de Tecnologia (UNICAMP)",
    role: "Assessor de Projetos em TI & Comercial",
    period: "Jun 2024 — Mai 2025",
    description: [
      "Avaliação de 3 abordagens técnicas de arquitetura (código customizado, CSS e tema padrão) para e-commerce (WBuy), eliminando retrabalho ao mapear restrições da plataforma sem suporte oficial.",
      "Prototipagem de interfaces no Figma (3+ telas), padronizando header, footer e estrutura de layout com referências da cliente.",
      "Ponto de contato técnico direto com a cliente, traduzindo restrições de engenharia em linguagem acessível e validando entregáveis.",
      "Prospecção ativa B2B de empresas via LinkedIn Sales Navigator, conduzindo abordagens consultivas e gerenciando pipeline de leads qualificados."
    ],
    metrics: [
      { label: "Análise Arquitetural", value: "3 abordagens avaliadas" },
      { label: "Prototipagem", value: "Figma + UI Specs" },
      { label: "Negociação", value: "Prospecção B2B Ativa" }
    ]
  },
  {
    company: "Centro Acadêmico de Informática (CDI) — UNICAMP",
    role: "Membro de RH & Assessor de Processos",
    period: "Abr 2024 — Dez 2025",
    description: [
      "Automatização do processo de emissão de certificados com AutoCrat, eliminando esforço manual recorrente e otimizando o fluxo operacional para atividades estratégicas.",
      "Análise de dados de engajamento da comunidade acadêmica e organização de eventos de integração, elevando a participação e fortalecendo o clima organizacional."
    ],
    metrics: [
      { label: "Automação Operacional", value: "Fluxo AutoCrat 100% Auto" },
      { label: "Comunidade Acadêmica", value: "Eventos & Integração" }
    ]
  }
];