export interface SkillItem {
  name: string;
  iconClass?: string;
  badge?: string;
}

export interface SkillGroup {
  name: string;
  items: SkillItem[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  groups: SkillGroup[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Linguagens & Runtimes",
    icon: "Code",
    groups: [
      {
        name: "Linguagens Principais",
        items: [
          { name: "TypeScript", iconClass: "devicon-typescript-plain" },
          { name: "JavaScript", iconClass: "devicon-javascript-plain" },
          { name: "Java (11/17)", iconClass: "devicon-java-plain" },
          { name: "SQL", iconClass: "devicon-azuresqldatabase-plain" },
          { name: "Python", iconClass: "devicon-python-plain" },
          { name: "Dart", iconClass: "devicon-dart-plain" },
          { name: "PHP", iconClass: "devicon-php-plain" },
          { name: "C / C++", iconClass: "devicon-cplusplus-plain" },
          { name: "Golang (estudo)", iconClass: "devicon-go-original-wordmark", badge: "Estudo" },
          { name: "HTML5 / CSS3", iconClass: "devicon-html5-plain" },
        ]
      },
      {
        name: "Runtimes Modernos",
        items: [
          { name: "Node.js", iconClass: "devicon-nodejs-plain" },
          { name: "Bun", iconClass: "devicon-bun-plain", badge: "Modern" },
        ]
      }
    ]
  },
  {
    category: "Frameworks Web & Mobile",
    icon: "Layout",
    groups: [
      {
        name: "Backend & APIs",
        items: [
          { name: "ElysiaJS", iconClass: "devicon-bun-plain" },
          { name: "Express", iconClass: "devicon-express-original" },
          { name: "Slim 4 (PHP)", iconClass: "devicon-php-plain" },
          { name: "FastAPI", iconClass: "devicon-fastapi-plain" },
          { name: "NestJS (estudo)", iconClass: "devicon-nestjs-original", badge: "Estudo" },
        ]
      },
      {
        name: "Frontend & Mobile",
        items: [
          { name: "React 19", iconClass: "devicon-react-original" },
          { name: "Next.js", iconClass: "devicon-nextjs-original-wordmark" },
          { name: "Flutter", iconClass: "devicon-flutter-plain" },
          { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" },
          { name: "Vite", iconClass: "devicon-vitejs-plain" },
        ]
      }
    ]
  },
  {
    category: "Bancos de Dados & ORMs",
    icon: "Database",
    groups: [
      {
        name: "Bancos Relacionais & NoSQL",
        items: [
          { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
          { name: "MySQL", iconClass: "devicon-mysql-plain" },
          { name: "DuckDB (In-Memory SQL)", iconClass: "devicon-azuresqldatabase-plain", badge: "Analytics" },
          { name: "Isar DB (Mobile Offline)", iconClass: "devicon-sqlite-plain" },
          { name: "MongoDB (introdutório)", iconClass: "devicon-mongodb-plain" },
        ]
      },
      {
        name: "ORMs & Tipagem E2E",
        items: [
          { name: "Prisma ORM", iconClass: "devicon-prisma-original" },
          { name: "Drizzle ORM", iconClass: "devicon-azuresqldatabase-plain" },
          { name: "Eden Treaty (E2E)", iconClass: "devicon-typescript-plain" },
        ]
      }
    ]
  },
  {
    category: "DevOps, Infra & Cloud",
    icon: "Wrench",
    groups: [
      {
        name: "Conteinerização & Deploy",
        items: [
          { name: "Docker & Compose", iconClass: "devicon-docker-plain" },
          { name: "CI/CD (GitHub Actions)", iconClass: "devicon-githubactions-plain" },
          { name: "SSH & Servidores Linux", iconClass: "devicon-linux-plain" },
          { name: "Traefik (Reverse Proxy)", iconClass: "devicon-networkx-plain" },
          { name: "AWS (EC2, S3)", iconClass: "devicon-amazonwebservices-plain-wordmark" },
        ]
      },
      {
        name: "Ferramentas & Contratos",
        items: [
          { name: "Swagger / OpenAPI", iconClass: "devicon-swagger-plain" },
          { name: "Orval (Client Gen)", iconClass: "devicon-typescript-plain" },
          { name: "Git / GitHub", iconClass: "devicon-git-plain" },
          { name: "Figma", iconClass: "devicon-figma-plain" },
          { name: "Firebase (FCM/Analytics)", iconClass: "devicon-firebase-plain" },
        ]
      }
    ]
  },
  {
    category: "IA & Metodologias",
    icon: "Brain",
    groups: [
      {
        name: "Arquitetura & Qualidade",
        items: [
          { name: "Clean Architecture", iconClass: "devicon-azuresqldatabase-plain" },
          { name: "RBAC (Permissões)", iconClass: "devicon-shield-plain" },
          { name: "Testes Unitários & E2E", iconClass: "devicon-playwright-plain" },
          { name: "Scrum & Kanban", iconClass: "devicon-trello-plain" },
          { name: "Entrega Contínua", iconClass: "devicon-git-plain" },
        ]
      },
      {
        name: "Mentalidade AI-First",
        items: [
          { name: "Claude Opus 4.6", iconClass: "devicon-python-plain" },
          { name: "Gemini 3.1 Pro", iconClass: "devicon-google-plain" },
          { name: "Framework GSD", iconClass: "devicon-vscode-plain" },
          { name: "GenAI Estruturado (JSON schema)", iconClass: "devicon-python-plain", badge: "Produtivo" },
        ]
      },
      {
        name: "Data Analytics & Séries Temporais",
        items: [
          { name: "pandas / NumPy", iconClass: "devicon-python-plain" },
          { name: "Matplotlib / Seaborn", iconClass: "devicon-python-plain" },
          { name: "API SGS Banco Central (BCB)", iconClass: "devicon-azuresqldatabase-plain", badge: "Financeiro" },
          { name: "Correlação Defasada (Lag Analysis)", iconClass: "devicon-python-plain" },
          { name: "Análise de Risco de Crédito (NPL 90+)", iconClass: "devicon-azuresqldatabase-plain" },
        ]
      }
    ]
  },
  {
    category: "Idiomas & Liderança",
    icon: "User",
    groups: [
      {
        name: "Idiomas Certificados",
        items: [
          { name: "Inglês B2 (EF SET 58/100 · Reading C1)", iconClass: "devicon-globe-plain", badge: "B2 Cert" },
          { name: "Português (Nativo)", iconClass: "devicon-globe-plain" },
        ]
      },
      {
        name: "Competências de Liderança",
        items: [
          { name: "Autonomia & Protagonismo", iconClass: "devicon-vscode-plain" },
          { name: "Visão de Dono (Ownership)", iconClass: "devicon-trello-plain" },
          { name: "Liderança Servidora (16 membros)", iconClass: "devicon-confluence-plain" },
          { name: "Negociação com Stakeholders", iconClass: "devicon-slack-plain" },
          { name: "Comunicação Assíncrona Eficaz", iconClass: "devicon-confluence-plain" },
          { name: "Aprendizado Rápido (Fast Learner)", iconClass: "devicon-aarch64-plain" },
        ]
      }
    ]
  }
];