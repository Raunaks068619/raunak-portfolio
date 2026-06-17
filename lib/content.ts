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
  photo: "/media/raunak.jpg",
  years: "3+ years",
  // The line that has to land in the first second.
  statement: {
    lead: "I build AI-native systems,",
    emphasis: "and reverse-engineer",
    tail: "the ones I don't.",
  },
  blurb:
    "Full-stack engineer at Fynd, where I own a clickstream interceptor that recovered 36,000+ events, the developer tooling that bootstraps 24 microservices, and the recommendations engine behind every storefront. After hours I ship products and take apart how AI coding agents actually store context.",
  links: {
    github: "https://github.com/Raunaks068619",
    linkedin: "https://www.linkedin.com/in/raunak-singh-608051218/",
    x: "https://x.com/Raunak04535524",
    email: "mailto:raunaksingh@gofynd.com",
    resume: "/core-strengths.pdf",
  },
} as const;

export const metrics: { value: string; label: string }[] = [
  { value: "36k+", label: "clickstream events recovered" },
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
    title: "Avionics, Events Interceptor",
    role: "Sole owner",
    summary:
      "The clickstream interceptor for storeOS, Fynd, and Nginx events. Ingest, schema evolution, error triage, and dead-letter recovery, all in one pair of hands.",
    points: [
      "Wrote the reflow path that recovered 36,000+ schema-invalid events that were otherwise lost.",
      "Built crash-safe reprocessing on idempotent per-table mutexes backed by BigQuery state.",
      "Shipping a reflow API to schedule on-demand recovery on Cloud Run and Cloud Scheduler.",
    ],
  },
  {
    no: "02",
    title: "zen-cli, monorepo developer tooling",
    role: "Built and maintained",
    summary:
      "The single command that turns a fresh laptop into a running copy of a 24-service monorepo, and the one that ships it.",
    points: [
      "One command bootstraps the whole stack: installs and wires up everything needed to run locally.",
      "One command drives Jenkins deploys across environments (Playwright + Chrome CDP).",
      "Exposed it as an MCP/Skill control plane, so AI agents self-bootstrap service context, plans, and startup.",
    ],
  },
  {
    no: "03",
    title: "Product Recommendation Extension",
    role: "Owner",
    summary:
      "The ML-powered engine (Vertex AI, Redis, Postgres, Mongo) powering every storefront recommendation surface across 1000+ sales channels, with currency and locale-aware caching.",
    points: [
      "Scaled to 9+ recommendation types (similar, trending, frequently-bought-together, cross-sell, personalised, local-first recently-viewed) with request-time RankBoost and brand-diversity controls.",
      "Replaced third-party catalog ingestion with an internal GCS workflow, cutting roughly ₹3L per month and a hard external dependency.",
      "Added a gpt-4o-mini category-intelligence layer, plus 670+ lines of TDD across boost, rank, and recency.",
    ],
  },
  {
    no: "04",
    title: "Smart Suggestions, Zenith-driven insights",
    role: "Architected",
    summary:
      "Per-company actions mined from the Zenith warehouse and handed back to merchants as concrete next steps, with OpenAI on Cloud Run behind a deterministic rule-based fallback and full audit tracking.",
    points: [
      "Maps analytics signals to actionable promotions, collections, and product-description updates via conditional API orchestration.",
      "Cut analytical API latency from 30 to 60 seconds down to milliseconds with a BigQuery to Postgres hybrid, plus an NLP-to-SQL reporting engine with scheduled email delivery.",
      "Festival-aware ad-push recommendations that schedule themselves for the right moment.",
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
  /** OKLCH hue + chroma pair used to tint the card cover. */
  coverTint: { from: string; to: string };
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
    coverTint: { from: "0.62 0.2 287", to: "0.42 0.17 290" },
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
    coverTint: { from: "0.42 0.13 285", to: "0.22 0.06 288" },
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
    coverTint: { from: "0.6 0.16 30", to: "0.4 0.13 25" },
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
  coverTint: { from: "0.5 0.09 200", to: "0.28 0.06 215" },
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
