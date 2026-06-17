/**
 * Single source of truth for everything on the page.
 * Copy is hand-written, specific, and load-bearing. Numbers are real.
 */

export const profile = {
  name: "Raunak Singh",
  role: "Software Development Engineer",
  org: "Fynd · Zenith Intelligence Platform",
  location: "Mumbai, India",
  email: "raunaksingh@gofynd.com",
  photo: "/media/raunak-li.jpg",
  years: "3+ years",
  // The line that has to land in the first second.
  statement: {
    lead: "I build AI-native systems,",
    emphasis: "and reverse-engineer",
    tail: "the ones I don't.",
  },
  blurb:
    "Full-stack engineer at Fynd, where I cut analytical API latency from 30 to 60 seconds down to milliseconds, own the recommendations engine behind 1000+ sales channels, and built Zen CLI for our 24-service monorepo. After hours I ship products and take apart how AI coding agents actually store context.",
  links: {
    github: "https://github.com/Raunaks068619",
    linkedin: "https://www.linkedin.com/in/raunak-singh-608051218/",
    x: "https://x.com/Raunak04535524",
    email: "mailto:raunaksingh@gofynd.com",
    resume: "/core-strengths.pdf",
  },
} as const;

export const metrics: { value: string; label: string }[] = [
  { value: "60s → ms", label: "analytical API latency, cut" },
  { value: "₹3L/mo", label: "infra cost removed at Fynd" },
  { value: "1000+", label: "sales channels the rec engine serves" },
  { value: "142k", label: "words dictated by voice, into my own app" },
];

/* ---------------------------------------------------------------- Fynd work */

export type WorkItem = {
  no: string;
  title: string;
  role: string;
  summary: string;
  points: string[];
};

export const fyndWork: WorkItem[] = [
  {
    no: "01",
    title: "Zenith Intelligence AI",
    role: "Architected & built",
    summary:
      "The data-to-action layer of the platform: warehouse analytics turned into shipped features, faster reporting, and agent-ready developer tooling.",
    points: [
      "Architected a Smart Suggestions engine mapping analytics signals to actionable promotions and catalog updates via conditional API orchestration; integrated OpenAI on Cloud Run with deterministic rule-based fallback and full audit tracking.",
      "Reduced analytical API latency from 30 to 60 seconds down to milliseconds via a BigQuery to Postgres hybrid architecture; built an NLP-to-SQL reporting engine with scheduled email delivery and a calendar-style UX.",
      "Built Zen CLI, an automation CLI unifying local-runtime orchestration for 24+ microservices and one-command Jenkins deployments (Playwright + Chrome CDP); exposed it as an MCP/Skill agent control plane so AI agents self-bootstrap service context, plans, and startup.",
    ],
  },
  {
    no: "02",
    title: "Product Recommendation Extension",
    role: "Owner",
    summary:
      "The ML engine behind every storefront recommendation surface, serving 1000+ sales channels.",
    points: [
      "Designed an ML-powered recommendation system (Vertex AI, Redis, Postgres, MongoDB) delivering similar, trending, and bought-together results across 1000+ sales channels with currency and locale-aware caching.",
      "Replaced third-party catalog ingestion with an internal GCS-based workflow, eliminating an external dependency and reducing costs by roughly ₹3L per month.",
      "Scaled the engine to 9+ recommendation types (similar, trending with category, brand, and gender variants, frequently-bought-together, cross-sell, personalised, local-first recently-viewed) with request-time rank-boost and brand-diversity controls, plus an OpenAI gpt-4o-mini category-intelligence layer.",
    ],
  },
  {
    no: "03",
    title: "Settle, B2B lending platform",
    role: "DRI, full-stack",
    summary:
      "Drove the lender and merchant panels of a microservice-based fintech lending ecosystem, end to end.",
    points: [
      "Led full-stack delivery as DRI for lender and merchant panels within a microservice-based lending ecosystem, driving configuration, transaction, reporting, role-management, and payment workflows end to end.",
      "Strengthened core transaction and reconciliation services (Node/Express) by refining models, cron jobs, lender-aware state handling, and summary APIs, improving correctness and operational reliability.",
      "Enhanced auth, session, and RBAC flows across distributed services (stonewall, enclose) by fixing token handling, route ordering, and lender-user mappings, and aligning contracts via a generated SDK layer.",
      "Improved platform resilience through Kafka-based async workflows, Redis caching, Postgres persistence, and Swagger-driven contracts, stabilizing cross-service communication and notification and reporting infrastructure.",
    ],
  },
];

export const currentRole = {
  logo: "/media/fynd-logo.png",
  company: "Fynd",
  legal: "Shopsense Retail Technologies",
  role: "Software Development Engineer",
  date: "Aug 2022 – Present",
  link: "https://www.fynd.com",
};

export type EarlierRole = {
  logo: string;
  company: string;
  role: string;
  date: string;
  summary: string;
  link: string;
};

export const earlierRoles: EarlierRole[] = [
  {
    logo: "/media/breez-logo.svg",
    company: "Breez Mobility",
    role: "Frontend Developer, Web/App",
    date: "Dec 2021 – Mar 2022",
    summary:
      "Built multi-platform PWA interfaces in React, React Native, and Flutter, and wired up Firebase auth, sync, and real-time features for micro-mobility.",
    link: "https://www.breezmobility.com/",
  },
  {
    logo: "/media/spark-logo.svg",
    company: "Spark",
    role: "Freelance UI/UX Designer",
    date: "May 2021 – Nov 2021",
    summary:
      "Led UI/UX for a matrimonial startup, from research and wireframes to high-fidelity prototypes and a reusable component system, alongside the engineering team.",
    link: "https://www.linkedin.com/in/raunak-singh-608051218/",
  },
];

/* ----------------------------------------------------------------- Projects */

export type FieldNote = { problem: string; fix: string };

export type Shot = { src: string; alt: string; caption: string; dark?: boolean };

export type Project = {
  slug: string;
  name: string;
  role: string;
  mark: string;
  tagline: string;
  status: { label: string; live: boolean };
  /** Short, card-level descriptor for the landing and /projects grids. */
  cardSummary: string;
  /** Category chips shown on the card (e.g. "AI", "PWA", "macOS"). */
  tags: string[];
  /** CSS background for the card cover: a layered-radial mesh gradient. */
  mesh: string;
  /** True when the cover is light, so name/meta render in dark ink. */
  coverLight?: boolean;
  /** Set when the mark needs its own tile (e.g. a transparent glyph). */
  iconBg?: "white";
  href: string;
  hrefLabel: string;
  secondary?: { href: string; label: string };
  what: string;
  /** One paragraph on the architecture, for the case study. */
  systemDesign: string;
  stack: string[];
  /** When set, the project shows a live iframe preview instead of screenshots. */
  preview?: { src: string; label: string };
  shots: Shot[];
  notesTitle: string;
  notes: FieldNote[];
};

export const projects: Project[] = [
  {
    slug: "bookmarx",
    name: "Bookmarx",
    role: "Co-founder",
    mark: "/media/bookmarx-mark.png",
    tagline: "A passive brain for your X bookmarks.",
    status: { label: "Live", live: true },
    cardSummary:
      "An AI second brain that turns your X bookmarks into summaries, chat, and decks.",
    tags: ["AI", "RAG", "PWA"],
    mesh: "radial-gradient(115% 115% at 16% 12%, oklch(0.9 0.09 292), transparent 55%), radial-gradient(100% 100% at 88% 16%, oklch(0.86 0.11 305), transparent 52%), radial-gradient(120% 120% at 72% 108%, oklch(0.88 0.08 278), transparent 60%), oklch(0.965 0.022 290)",
    coverLight: true,
    iconBg: "white",
    href: "https://bookmarx.co",
    hrefLabel: "bookmarx.co",
    secondary: { href: "https://github.com/Raunaks068619", label: "GitHub" },
    what:
      "You save ideas on X and never come back to them. Bookmarx syncs your bookmarks, enriches each one with an AI summary and tags, and lets you chat with everything you saved, get scheduled digests, and turn a thread into a slide deck. A Next.js 16 PWA with offline support and push.",
    systemDesign:
      "One canonical row per tweet is shared across every user, with per-user metadata kept in a separate join, so enrichment is fetched and cached exactly once and deduplication is free. Search fuses pgvector and Postgres full-text via Reciprocal Rank Fusion, with embeddings computed once at write time so each query costs a single lookup. Auth resolves entirely at the edge from a signed JWT with zero database calls, and per-user, timezone-aware digests are pre-computed as UTC timestamps and fired by pg_cron, which sidesteps Vercel's single-schedule limit.",
    shots: [
      {
        src: "/media/bookmarx-chat.png",
        alt: "Bookmarx chat: asking Brainy for the key insight from a saved post",
        caption: "Chat with everything you saved",
      },
      {
        src: "/media/bookmarx-summaries.png",
        alt: "Bookmarx generating a summary of the last 10 bookmarks",
        caption: "Summaries and decks on demand",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Postgres + Drizzle",
      "pgvector",
      "OpenAI",
      "Gemini 2.5",
      "pg_cron",
      "DodoPayments",
    ],
    notesTitle: "Field notes from the build",
    notes: [
      {
        problem:
          "64% of native X articles came back with no cover image. The standard media expansion silently ignores an article's cover, and the article URL I was building was auth-gated.",
        fix:
          "Switched hero covers to X's free public syndication endpoint and inline media to FxEmbed, then gave each source strict ownership so they never overwrite each other. The right fix was a sibling endpoint, not a workaround.",
      },
      {
        problem:
          "A single 429 from X's bookmarks API failed a user's entire daily sync. At a 1 to 5% transient failure rate, 99%-per-call reliability quietly collapses to about 97% per user, per week.",
        fix:
          "A drop-in fetch with full-jitter exponential backoff that retries 429 and 5xx, honours Retry-After, and deliberately does not retry 401 so the token-refresh path still fires.",
      },
      {
        problem:
          "Adaptive AI summaries had a 70% retry rate. JSON mode is best-effort, so models kept emitting the wrong number of sections, and one truncated response could cascade through the whole enrichment pipeline.",
        fix:
          "Moved to OpenAI structured outputs with a per-length JSON schema that enforces section counts at decode time. The model literally cannot emit a non-compliant shape. 17 of 17 compliant, zero retries.",
      },
      {
        problem:
          "Web push 'worked' on iOS but never prompted. Three independent things were wrong, and each looked fine on its own.",
        fix:
          "Added the standalone-mode meta tag, gated support detection on actual PWA standalone mode, and moved the permission request to the first await in the handler so no React re-render breaks the user-gesture chain.",
      },
    ],
  },
  {
    slug: "vordi",
    name: "Vordi",
    role: "Founder",
    mark: "/media/vordi-mark.png",
    tagline: "Voice to text that remembers.",
    status: { label: "Live", live: true },
    cardSummary:
      "A free, open-source macOS dictation app that keeps a private memory of everything you said.",
    tags: ["macOS", "Swift", "Local-first AI"],
    mesh: "radial-gradient(115% 115% at 14% 14%, oklch(0.46 0.15 278), transparent 55%), radial-gradient(100% 100% at 92% 20%, oklch(0.52 0.16 248), transparent 52%), radial-gradient(125% 125% at 76% 108%, oklch(0.3 0.1 286), transparent 60%), oklch(0.21 0.06 285)",
    href: "https://vordi.site",
    hrefLabel: "vordi.site",
    secondary: {
      href: "https://github.com/Raunaks068619/Vordi",
      label: "GitHub",
    },
    what:
      "A free, open-source macOS voice-typing app, my answer to WisprFlow and Superwhisper. Hold fn, speak into any app, and a Dynamic Notch streams your speech through Groq, OpenAI, or a local Whisper, then cleans and rewrites it before injecting the text. Pure Swift and SwiftUI, no Electron. It also keeps a private, on-device memory of everything you said. I have dictated 142,000 words through it.",
    systemDesign:
      "Local-first by default. Speech is routed to the right engine per language: Groq for fast English, OpenAI for Hinglish and multilingual, or a fully local Whisper, followed by an LLM cleanup and rewrite pass. A private, on-device memory built on SQLite FTS5 plus local embeddings powers a small RAG layer, so you can ask questions over everything you have ever dictated and get answers with cited sources. It is pure Swift and SwiftUI, no Electron; cloud keys are yours to bring, and local LLMs through LM Studio or Ollama are a first-class fallback rather than an afterthought.",
    stack: [
      "Swift",
      "SwiftUI",
      "Whisper / Groq",
      "OpenAI",
      "CoreML",
      "SQLite FTS5",
      "Local LLMs",
    ],
    preview: { src: "https://vordi.site", label: "vordi.site" },
    shots: [],
    notesTitle: "Field notes from the build",
    notes: [
      {
        problem:
          "Whisper is fast but English-only and hallucinates ghost phrases like 'thank you for watching' into silent audio. One transcription model could not cover Hinglish, fast English, and clean output at once.",
        fix:
          "Route Groq for fast English, OpenAI for multilingual and Hinglish, and run a hallucination guard that strips known phantom text before any cleanup pass touches it.",
      },
      {
        problem:
          "Good cleanup needs context, but a dictation widget that steals keyboard focus or demands Accessibility permission up front is dead on arrival.",
        fix:
          "fn+key as the primary hotkey so it works without Accessibility, a Dynamic Island that morphs through listening and thinking states without taking focus, and every capture logged to an auditable run log.",
      },
      {
        problem:
          "Memory is useless if you can only find things by exact words. Keyword search misses what you meant.",
        fix:
          "Hybrid retrieval on-device: SQLite FTS5 for keywords plus local embeddings for meaning, fused into a small RAG layer that answers questions over your own transcripts and cites the source.",
      },
      {
        problem:
          "Cloud transcription means handing your voice to someone else. Local models mean slow.",
        fix:
          "You bring your own keys for the cloud engines, everything personal stays on-device by default, and local LLMs through LM Studio or Ollama are a first-class fallback, not an afterthought.",
      },
    ],
  },
  {
    slug: "challengers",
    name: "Challengers",
    role: "Built solo",
    mark: "/media/challengers-mark.png",
    tagline: "Push your limits. Bet on yourself.",
    status: { label: "Live", live: true },
    cardSummary:
      "A social habit tracker where you build streaks through friendly competition and photo proof.",
    tags: ["PWA", "Real-time", "Gamification"],
    mesh: "radial-gradient(115% 115% at 16% 12%, oklch(0.64 0.17 36), transparent 55%), radial-gradient(100% 100% at 90% 18%, oklch(0.58 0.18 16), transparent 52%), radial-gradient(125% 125% at 70% 108%, oklch(0.42 0.14 28), transparent 60%), oklch(0.4 0.13 28)",
    href: "https://challengers-theta.vercel.app",
    hrefLabel: "Live demo",
    secondary: { href: "https://github.com/Raunaks068619/challengers", label: "GitHub" },
    what:
      "A social habit tracker built on friendly competition. Join or create challenges, log every day with photo proof, climb consistency-based leaderboards, and chat with the group in real time. A Next.js 16 PWA with web push and AI-assisted check-in verification.",
    systemDesign:
      "Firestore is the single source of truth for app data, while Supabase Postgres exists only to host the pg_cron jobs that POST back to the Next.js API on a schedule, and Supabase Storage holds the photo proofs. Redis backs per-user rate limiting across every endpoint, returning 429 with Retry-After when limits are crossed. FCM tokens live as a capped array, max five with the oldest pruned, so notifications reach a user's latest devices without stale tokens piling up. Cron idempotency is enforced by checking the day against a points_history array rather than a separate runs table, keeping the data model simple and transaction-free.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Firebase",
      "Redis",
      "Supabase pg_cron",
      "RTK Query",
      "Web Push / FCM",
    ],
    preview: { src: "https://challengers-theta.vercel.app", label: "challengers-theta.vercel.app" },
    shots: [],
    notesTitle: "Field notes from the build",
    notes: [
      {
        problem:
          "The dashboard fired a separate participant-count query per challenge, an N+1 that scaled Firestore reads with the number of challenges on screen.",
        fix:
          "Batched the counts into Firestore 'in' queries so reads stay constant regardless of challenge count, and cached the dashboard for five minutes with RTK Query. O(N) reads became O(1), revisits became instant.",
      },
      {
        problem:
          "Missed-day penalties read the current points, then subtracted. Two cron runs firing at once could deduct the same day twice.",
        fix:
          "Switched the deduction to an atomic increment and computed live points from the document, with an idempotency check against the day's points_history as a backstop. Concurrency-safe by construction.",
      },
      {
        problem:
          "The app is serverless, but reminders need to fire every minute, and Vercel only runs sub-minute crons on paid plans.",
        fix:
          "Drove the schedule from Supabase pg_cron, which uses pg_net to POST the Next.js endpoints with a CRON_SECRET header. Reliable per-minute crons, zero extra infrastructure.",
      },
    ],
  },
  {
    slug: "scrappling",
    name: "Scrappling",
    role: "Built solo",
    mark: "/media/scrappling-mark.png",
    tagline: "Paste a URL, get clean data.",
    status: { label: "Live", live: true },
    cardSummary:
      "A stealth web scraper that returns clean JSON and Markdown, even past anti-bot walls.",
    tags: ["Scraping", "FastAPI", "Agents"],
    mesh: "radial-gradient(115% 115% at 16% 14%, oklch(0.56 0.16 145), transparent 55%), radial-gradient(100% 100% at 90% 20%, oklch(0.62 0.19 128), transparent 52%), radial-gradient(125% 125% at 72% 108%, oklch(0.3 0.09 150), transparent 60%), oklch(0.24 0.07 150)",
    iconBg: "white",
    href: "https://scrappling-ui.vercel.app",
    hrefLabel: "Live demo",
    secondary: { href: "https://github.com/Raunaks068619/scrappling-ui", label: "GitHub" },
    what:
      "Paste a URL and Scrappling renders it with a stealth fetcher, then hands back clean JSON and Markdown side by side. It is built on Scrapling behind a small FastAPI service, with agent-readable endpoints so AI tools can discover and call it on their own.",
    systemDesign:
      "A thin Next.js display client on Vercel proxies to a FastAPI scraper on Boltic, so no Python or headless browser ever runs in the lambda. The backend offers three fetcher tiers: plain HTTP for speed, a Camoufox stealth mode that clears Cloudflare and JS challenges, and a Playwright dynamic mode, and it reuses the launched browser context across requests so only the first cold start pays the boot cost. Every surface, UI and API alike, publishes llms.txt and agents.md so an agent can self-discover and call the scraper.",
    stack: ["Next.js 15", "FastAPI", "Scrapling", "Camoufox", "Playwright", "Boltic"],
    preview: { src: "https://scrappling-ui.vercel.app", label: "scrappling-ui.vercel.app" },
    shots: [],
    notesTitle: "Field notes from the build",
    notes: [
      {
        problem:
          "A scrape of a paywalled or login-walled page came back as a clean 200, but the content was just the wall: 'subscribe to read', cookie banners, login prompts. The scraper was treating access-control text as the page.",
        fix:
          "Added wall detection that flags auth, paywall, subscribe, and cookie-gate text, labels the result blocked or partial, and returns quality metadata, so a successful status with junk content no longer reads as a win.",
      },
      {
        problem:
          "The Jina Reader fallback and all the HTML cleanup lived in the frontend, duplicating logic the backend should own and bloating a client that was meant to just display results.",
        fix:
          "Moved the fallback and the content-cleaning pipeline into the FastAPI backend, keeping the frontend a thin display client and giving every caller, not just the UI, the cleaned output.",
      },
      {
        problem:
          "The first stealth or dynamic request booted Chromium from cold, a 10 to 20 second wait, and Vercel's lambda cannot run a headless browser at all.",
        fix:
          "Kept the scraping on a Boltic service sized for it (1 vCPU, 1.5 GB, 120s timeout) and reused the launched browser context across requests, so only the first request pays the boot cost while Vercel just proxies.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* A smaller third project, framed as open-source craft. */
export const sideProject = {
  name: "design-taste",
  tagline: "A taste-engine for Claude Code.",
  href: "https://github.com/Raunaks068619/design-taste",
  hrefLabel: "github.com/Raunaks068619/design-taste",
  image: "/media/design-taste-og.png",
  cardSummary:
    "My preferences on spacing, color, and type, encoded as craft principles an agent can follow.",
  tags: ["Open source", "AI tooling"],
  mesh: "radial-gradient(115% 115% at 16% 14%, oklch(0.56 0.1 192), transparent 55%), radial-gradient(100% 100% at 90% 20%, oklch(0.5 0.11 212), transparent 52%), radial-gradient(125% 125% at 72% 108%, oklch(0.33 0.07 214), transparent 60%), oklch(0.31 0.07 205)",
  what:
    "AI writes good code and mediocre design. design-taste is the system I built over a few months to fix that: my preferences on spacing, color, and type, encoded as craft principles an agent can actually follow. Open source.",
};

/* ------------------------------------------------------------------ Writing */

export type Post = {
  title: string;
  kicker: string;
  blurb: string;
  href: string;
  tag: string;
  platform: string;
  thumb: { kind: "ledger" | "graph" | "browser" | "image"; src?: string };
  /** LinkedIn embed URN, e.g. "urn:li:ugcPost:7459494258400575488". */
  embedUrn: string;
};

export const writingIntro =
  "I got curious about how AI coding agents actually work on disk, not the chat UI, the real internals. So I took apart how Claude, Codex, and Antigravity store context on my own machine and wrote up the rabbit hole. A short series.";

export const posts: Post[] = [
  {
    title: "How Claude stores context",
    kicker: "Part 1, Claude deep dive",
    blurb:
      "Sessions are JSONL conversation trees, messages link by parent UUID, tool outputs sit beside the conversation, and edits become versioned artifacts. It reads less like a chatbot and more like Git, event sourcing, and an IDE runtime combined.",
    href: "https://www.linkedin.com/posts/raunak-singh-608051218_how-claude-stores-context-ugcPost-7459494258400575488-Icip/",
    tag: "Architecture",
    platform: "LinkedIn",
    thumb: { kind: "ledger" },
    embedUrn: "urn:li:ugcPost:7459494258400575488",
  },
  {
    title: "Reverse engineering AI agent internals",
    kicker: "The rabbit hole, part 1",
    blurb:
      "Claude and Codex are elegant: JSONL ledgers, SQLite indexes, worktrees, shell snapshots. Antigravity is something else, closer to an autonomous browser OS. The pattern: agents are quietly becoming IDEs, browsers, memory systems, and operating environments.",
    href: "https://www.linkedin.com/posts/raunak-singh-608051218_reverse-engineering-ai-agent-internals-ugcPost-7458778510132891648-3cV5/",
    tag: "AI internals",
    platform: "LinkedIn",
    thumb: { kind: "graph" },
    embedUrn: "urn:li:ugcPost:7458778510132891648",
  },
  {
    title: "Antigravity stores environments, not conversations",
    kicker: "The series continues",
    blurb:
      "DOM snapshots, browser recordings, WebP playback artifacts, task brains, walkthrough memories. It does not just store what was said. It stores the whole environment it was said in.",
    href: "https://www.linkedin.com/posts/raunak-singh-608051218_antigravity-ugcPost-7461659365780025344-t3zk/",
    tag: "AI internals",
    platform: "LinkedIn",
    thumb: { kind: "browser" },
    embedUrn: "urn:li:ugcPost:7461659365780025344",
  },
  {
    title: "AI writes code. It is still figuring out design.",
    kicker: "On building design-taste",
    blurb:
      "A few months of encoding my own preferences on spacing, color, and type into something an agent can follow. Most design systems add iteration loops instead of removing them. This one tries to remove them.",
    href: "https://www.linkedin.com/posts/raunak-singh-608051218_design-aitools-sideprojects-share-7464260847507447809-81ri/",
    tag: "Design + AI",
    platform: "LinkedIn",
    thumb: { kind: "image", src: "/media/design-taste-og.png" },
    embedUrn: "urn:li:share:7464260847507447809",
  },
];

/* ----------------------------------------------------------- How I build (AI) */

export const aiWorkflow = {
  intro:
    "AI is not a feature I bolt on. It is how I work. I orchestrate several coding agents in parallel, keep them honest with tests and plans, and give them persistent memory so context survives between sessions.",
  ledger: [
    { k: "orchestrate", v: "Claude Code + Codex + Gemini, running in parallel" },
    { k: "memory", v: "custom skills + MemPalace for context that persists across sessions" },
    { k: "discipline", v: "plan-mode, spec-first, TDD before the agent writes a line" },
    { k: "ship", v: "Vertex AI, Whisper, GPT-4o wired into real products" },
    { k: "proof", v: "this site was designed and built with Claude Code" },
  ],
};

/* --------------------------------------------------------------------- Stack */

export const stack: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: ["Node.js", "TypeScript", "Python", "Express", "Java / Spring Boot", "REST + GraphQL"],
  },
  {
    group: "Data + cloud",
    items: ["BigQuery", "PostgreSQL", "Supabase", "Drizzle", "Redis", "GCP", "Cloud Run", "Kubernetes"],
  },
  {
    group: "AI / ML",
    items: ["Vertex AI", "OpenAI", "Gemini", "Whisper", "pgvector", "RAG", "multi-agent orchestration"],
  },
  {
    group: "Frontend + native",
    items: ["React 19", "Next.js 16", "Tailwind", "Swift / SwiftUI", "PWA", "Web Push"],
  },
];

/**
 * Canonical origin. Resolves, in order:
 *  1. NEXT_PUBLIC_SITE_URL (set this once a custom domain is attached)
 *  2. the Vercel production URL injected at build time
 *  3. a sane local default
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
