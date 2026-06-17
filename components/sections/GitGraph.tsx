import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Contrib = { total: Record<string, number>; contributions: Day[] };

// Level colors, tuned to read on both light and dark themes.
const LEVELS = [
  "var(--color-line)",
  "oklch(0.72 0.1 290 / 0.5)",
  "oklch(0.67 0.15 290 / 0.72)",
  "oklch(0.62 0.19 290 / 0.9)",
  "oklch(0.58 0.21 290)",
];

async function fetchContrib(): Promise<Contrib | null> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Raunaks068619?y=last",
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as Contrib;
  } catch {
    return null;
  }
}

export default async function GitGraph() {
  const data = await fetchContrib();
  if (!data?.contributions?.length) return null;

  const days = data.contributions;
  const total = data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0);

  // Pad the front so each column is a Sun–Sat week, then chunk by 7.
  const lead = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const cells: (Day | null)[] = [...Array(lead).fill(null), ...days];
  const columns: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) columns.push(cells.slice(i, i + 7));

  return (
    <section id="github" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink-faint">
              On GitHub
            </p>
            <p className="mt-2 text-[1.3rem] font-medium tracking-[-0.01em] text-ink sm:text-[1.6rem]">
              <span className="font-semibold text-purple-deep">{total.toLocaleString()}</span>{" "}
              contributions in the last year.
            </p>
          </div>
          <Link
            href="/projects"
            className="mono group inline-flex items-center gap-1.5 text-[13px] text-ink-soft transition-colors hover:text-ink"
          >
            <span className="ulink">See the projects</span>
            <ArrowUpRight width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="reveal mt-7 overflow-x-auto pb-2">
          <div className="flex gap-[3px]" style={{ minWidth: "max-content" }}>
            {columns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[3px]">
                {col.map((d, ri) => (
                  <span
                    key={ri}
                    title={d ? `${d.count} on ${d.date}` : undefined}
                    className="h-[11px] w-[11px] rounded-[2px]"
                    style={{ background: d ? LEVELS[d.level] : "transparent" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mono mt-3 flex items-center gap-1.5 text-[11px] text-ink-faint">
          <span className="mr-1">Less</span>
          {LEVELS.map((c, i) => (
            <span key={i} className="h-[11px] w-[11px] rounded-[2px]" style={{ background: c }} />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </section>
  );
}
