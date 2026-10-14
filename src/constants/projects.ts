export interface CodeSnippet {
  fileName: string;
  language: string;
  code: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  architectureHighlight: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    appStore?: string;
    playStore?: string;
    kaggle?: string;
    note?: string;
  };
  metrics?: string;
  codeSnippet: CodeSnippet;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "SkyCare — Logística Médica Aérea",
    category: "Arquitetura Distribuída & Backend",
    description: "Plataforma de alta criticidade para logística médica aérea. Segurança JWT (Zero Trust Frontend), integração Mercado Pago e geração de PDFs com Puppeteer. Migração da stack legada (PHP/Slim 4) para Bun + ElysiaJS com tipagem ponta a ponta via Eden Treaty, Drizzle ORM e PostgreSQL.",
    architectureHighlight: "CI/CD automatizado via GitHub Actions com testes e deploy contínuo via SSH com Docker + Traefik e SSL automático.",
    tags: ["Bun", "ElysiaJS", "React 19", "Drizzle ORM", "PostgreSQL", "Docker", "Traefik", "GitHub Actions", "TypeScript"],
    links: {
      demo: "https://skycare.com.br",
      note: "Código Privado / Sob consulta"
    },
    metrics: "Zero Trust + CI/CD Automatizado",
    codeSnippet: {
      fileName: "src/routes/flight-dispatch.ts",
      language: "TypeScript",
      code: `import { Elysia, t } from 'elysia';
import { db } from '@/db';
import { flights } from '@/db/schema';
import { verifyJWT } from '@/middlewares/auth';

export const flightRoutes = new Elysia({ prefix: '/api/v1/flights' })
  .use(verifyJWT)
  .post('/dispatch', async ({ body, user }) => {
    // Validação Zero Trust de missão de transporte médico
    const mission = await db.insert(flights).values({
      patientPriority: body.priority,
      destinationHospital: body.destinationHospital,
      coordinatorId: user.id,
      status: 'AIRBORNE'
    }).returning();

    return { success: true, missionId: mission[0].id };
  }, {
    body: t.Object({
      priority: t.String(),
      destinationHospital: t.String()
    })
  });`
    }
  },
  {
    title: "FutTest — Gestão Esportiva & Mobile",
    category: "Mobile & Clean Architecture",
    description: "Plataforma completa publicada na App Store e Google Play com 8 papéis de usuário (RBAC). Backend em Node.js/TypeScript seguindo Clean Architecture (Domínio, Casos de Uso, Infra) com Prisma ORM e PostgreSQL em Docker Compose. App Mobile em Flutter/Dart feature-first com Isar DB para dados offline e pagamentos dinâmicos via PIX.",
    architectureHighlight: "Pipeline de vídeo para avaliação de atletas (Chewie), push notifications via Firebase e processamento pesado de JSON em Isolates (compute()) a 60 FPS.",
    tags: ["Flutter", "Dart", "Node.js", "Clean Architecture", "Prisma", "PostgreSQL", "Firebase", "Docker"],
    links: {
      appStore: "https://apps.apple.com/br/app/futtest/id6755794060",
      playStore: "https://play.google.com/store/apps/details?id=com.futtest.futtestapp",
      note: "Publicado na App Store & Google Play"
    },
    metrics: "600+ Commits · 30+ PRs · 60 FPS",
    codeSnippet: {
      fileName: "src/modules/athletes/evaluate-athlete.use-case.ts",
      language: "TypeScript",
      code: `export class EvaluateAthleteUseCase {
  constructor(
    private athleteRepo: IAthleteRepository,
    private notificationService: IFirebaseNotificationService
  ) {}

  async execute(input: EvaluateAthleteDTO): Promise<EvaluationResult> {
    const athlete = await this.athleteRepo.findById(input.athleteId);
    if (!athlete) throw new AthleteNotFoundError();

    const evaluation = athlete.addScore(input.metrics);
    await this.athleteRepo.save(athlete);

    // Notificação push em background para responsáveis e clube
    await this.notificationService.sendPush(athlete.guardianFCM, {
      title: 'Novo Relatório de Desempenho ⚽',
      body: \`Avaliação física atualizada: \${input.metrics.overallScore} pts\`
    });

    return { evaluationId: evaluation.id, status: 'PUBLISHED' };
  }
}`
    }
  },
  {
    title: "TOBI — NASA Space Apps Challenge 2025",
    category: "Hackathon Mundial 48h · Clima & IA",
    description: "Desenvolvido sob alta pressão no desafio 'Will It Rain on My Parade?'. Responsável por 100% do Frontend Multiplataforma (Web & Mobile) em Flutter/Dart. Seleção geográfica hierárquica (CountriesNow + Open-Meteo) e integração com API em Flask consumindo a NASA POWER API.",
    architectureHighlight: "Séries temporais diárias (2013-2024 para T2M, WS2M e PRECTOTCORR) com previsão estatística de extremos climáticos e relatórios em linguagem natural.",
    tags: ["Flutter", "Dart", "Python/Flask", "NASA POWER API", "Open-Meteo", "Estatística"],
    links: {
      demo: "https://smlesilva.github.io/TOBI/",
      github: "https://github.com/SMLeSilva/TOBI"
    },
    metrics: "NASA Hackathon 48h · Web & APK",
    codeSnippet: {
      fileName: "lib/features/climate/services/nasa_power_service.dart",
      language: "Dart",
      code: `class NasaPowerAnalyticsService {
  final Dio _client;
  NasaPowerAnalyticsService(this._client);

  Future<ExtremeWeatherRisk> computeRiskMetrics({
    required double latitude,
    required double longitude,
  }) async {
    // Executa análise estatística pesada em Isolate isolado para manter 60 FPS
    return await compute(_analyzeTimeSeries, {
      'lat': latitude,
      'lon': longitude,
      'parameters': ['T2M', 'WS2M', 'PRECTOTCORR'],
      'period': '2013-2024',
    });
  }
}`
    }
  },
  {
    title: "Acessibilidade Digital PcD",
    category: "Web Scraping & Auditoria WCAG",
    description: "Solução full-stack para auditoria automatizada de acessibilidade web baseada nas diretrizes internacionais WCAG. Motor de análise heurística com FastAPI, Playwright e BeautifulSoup4, gerando relatórios técnicos estruturados e dashboard interativo.",
    architectureHighlight: "Scraping assíncrono com Playwright para renderização profunda de SPAs e identificação automatizada de barreiras de acessibilidade visual e motora.",
    tags: ["FastAPI", "Python", "Playwright", "React", "TypeScript", "WCAG", "Tailwind"],
    links: {
      github: "https://github.com/SMLeSilva/acessibilidade-digital-pcd",
      demo: "https://acessibilidade-digital-pcd.vercel.app"
    },
    metrics: "WCAG 2.1 Compliance Heurístico",
    codeSnippet: {
      fileName: "app/analyzers/wcag_engine.py",
      language: "Python",
      code: `from playwright.async_api import async_playwright
from bs4 import BeautifulSoup

async def audit_accessibility(target_url: str) -> AccessibilityReport:
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(target_url, wait_until="networkidle")
        
        html_content = await page.content()
        soup = BeautifulSoup(html_content, "html.parser")
        
        # Heurística de contraste e elementos interativos sem aria-label
        missing_alts = soup.find_all("img", alt=False)
        contrast_issues = await check_contrast_ratios(page)
        return compile_action_plan(missing_alts, contrast_issues)`
    }
  },
  {
    title: "Atria Team Management",
    category: "Full Stack Interno & Governança",
    description: "Plataforma Full Stack para gerenciamento interno de membros, alocação de squads e projetos da Atria Junior. Centralização de dados, automatização de processos operacionais e acompanhamento de entregas em tempo real.",
    architectureHighlight: "Modelagem relacional de alta integridade com Prisma ORM sobre PostgreSQL e interface administrativa moderna em Next.js com Server Components.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    links: {
      github: "https://github.com/SMLeSilva/atria-management",
      demo: "https://atria-management.vercel.app/"
    },
    metrics: "Governança de 16+ Membros & Projetos",
    codeSnippet: {
      fileName: "app/actions/squad-allocation.ts",
      language: "TypeScript",
      code: `'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function allocateMemberToSquad(formData: FormData) {
  const memberId = formData.get('memberId') as string;
  const squadId = formData.get('squadId') as string;

  await prisma.squadMember.upsert({
    where: { memberId_squadId: { memberId, squadId } },
    update: { role: 'DEVELOPER', allocatedAt: new Date() },
    create: { memberId, squadId, role: 'DEVELOPER' }
  });

  revalidatePath('/dashboard/squads');
  return { success: true, message: 'Membro alocado com sucesso.' };
}`
    }
  },
  {
    title: "Data Engine — Risco de Crédito (BCB + DuckDB + GenAI)",
    category: "Data Engineering & Análise Financeira",
    description: "Pipeline Python que consome a API SGS do Banco Central para analisar Selic, comprometimento de renda e inadimplência por modalidade com correlações defasadas de 6 meses. Análise NPL 90+ por segmento via SQL (DuckDB) sobre carteira sintética de 5.000 clientes, com benchmark a indicadores públicos de crédito consignado de uma instituição financeira de referência nacional.",
    architectureHighlight: "Módulo de IA Generativa estruturado com dataclasses Python (schema JSON explícito, separação entre geração e renderização) para briefing executivo automatizado e régua de cobrança com score de urgência; fallback local sem quebra de pipeline.",
    tags: ["Python", "pandas", "NumPy", "DuckDB", "SQL", "Matplotlib", "API BCB SGS", "GenAI", "Análise de Risco"],
    links: {
      kaggle: "https://www.kaggle.com/code/smlesilva/data-engine-macro-benchmarking",
      note: "Notebook público no Kaggle"
    },
    metrics: "5.000 clientes · API BCB · LLM Estruturado",
    codeSnippet: {
      fileName: "analysis/credit_risk_engine.py",
      language: "Python",
      code: `# ── 1. INGESTÃO RESILIENTE — API SGS do Banco Central ──────────────────────
def get_bcb_series(codigo: int, inicio: str, fim: str, col: str) -> pd.DataFrame:
    """Busca séries oficiais no SGS/BCB com retry e backoff."""
    url = f"https://api.bcb.gov.br/dados/serie/bcdata.sgs.{codigo}/dados"
    for tentativa in range(1, 4):
        resp = requests.get(url, params={"formato": "json",
                                          "dataInicial": inicio,
                                          "dataFinal": fim}, timeout=30)
        resp.raise_for_status()
        df = pd.DataFrame(resp.json())
        df["data"] = pd.to_datetime(df["data"], format="%d/%m/%Y")
        df[col]    = df["valor"].astype(float)
        return df[["data", col]]

# Selic Meta · Comprometimento de Renda · NPL 90+ (PF, Pessoal, Consignado)
SERIES = {432: "selic_meta", 29265: "comprometimento_renda",
          21082: "inad_total_pf", 21114: "inad_credito_pessoal",
          21118: "inad_consignado_inss"}

# ── 2. ANÁLISE DE CORRELAÇÃO DEFASADA ─────────────────────────────────────
def lagged_correlation(df: pd.DataFrame, lag: int = 6) -> tuple[float, float]:
    """Selic de 6m atrás tem correlação mais forte com NPL do que a Selic atual."""
    df["selic_lag"] = df["selic_meta"].shift(lag)
    direct  = df["selic_meta"].corr(df["inad_total_pf"])
    delayed = df["selic_lag"].corr(df["inad_total_pf"])
    return direct, delayed   # ex: +0.28 vs +0.61

# ── 3. SEGMENTAÇÃO NPL 90+ EM SQL — DuckDB IN-MEMORY ─────────────────────
con = duckdb.connect(":memory:")
con.register("tb_carteira", df_carteira)   # 5.000 clientes sintéticos

npl_segmentos = con.execute("""
    SELECT faixa_etaria, perfil_uso_credito,
           COUNT(*)                                           AS clientes,
           ROUND(AVG(flag_npl_90) * 100, 2)                  AS taxa_npl_pct,
           ROUND(AVG(renda_mensal), 2)                        AS renda_media
    FROM   tb_carteira
    GROUP  BY 1, 2
    HAVING COUNT(*) >= 50
    ORDER  BY taxa_npl_pct DESC;
""").df()

# ── 4. BRIEFING EXECUTIVO — GenAI ESTRUTURADO (JSON schema + fallback) ───
@dataclass
class BriefingExecutivo:
    npl_atual_pct:    float
    benchmark_pct:    float
    delta_pct:        float
    status_mercado:   str
    recomendacoes:    list[Recomendacao]

def gerar_briefing(kpis: dict) -> BriefingExecutivo:
    """Chama LLM com schema JSON explícito; cai para regra local se falhar."""
    if api_key and (estruturado := _via_llm(kpis)) is not None:
        return estruturado
    return _regra_local(kpis)   # fallback — nunca quebra o pipeline`
    }
  }
];
