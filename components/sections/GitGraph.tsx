import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Contrib = { total: Record<string, number>; contributions: Day[] };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CELL = 36; // px
const GAP = 6; // px

async function fetchYear(year: number): Promise<Contrib | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/Raunaks068619?y=${year}`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as Contrib;
  } catch {
    return null;
  }
}

export default async function GitGraph() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const todayISO = now.toISOString().slice(0, 10);

  const data = await fetchYear(year);
  if (!data?.contributions?.length) return null;

  // January 1st of this year through today.
  const days = data.contributions.filter((d) => d.date <= todayISO);
  if (!days.length) return null;
  const total = data.total?.[String(year)] ?? days.reduce((s, d) => s + d.count, 0);

  const lead = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const cells: (Day | null)[] = [...Array(lead).fill(null), ...days];
  const columns: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) columns.push(cells.slice(i, i + 7));

  let prevMonth = -1;
  const labels = columns.map((col) => {
    const d = col.find(Boolean) as Day | undefined;
    if (!d) return "";
    const m = new Date(d.date + "T00:00:00Z").getUTCMonth();
    if (m !== prevMonth) {
      prevMonth = m;
      return MONTHS[m];
    }
    return "";
  });

  return (
    <section id="github" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink-faint">On GitHub</p>
            <p className="mt-2 text-[1.3rem] font-medium tracking-[-0.01em] text-ink sm:text-[1.6rem]">
              <span className="font-semibold text-purple-deep">{total.toLocaleString()}</span>{" "}
              contributions in {year}.
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

        <div className="reveal mt-10 overflow-x-auto pb-2">
          <div className="mx-auto w-fit">
            {/* month labels, positioned over their columns */}
            <div className="relative mb-3 h-5">
              {labels.map((l, i) =>
                l ? (
                  <span
                    key={i}
                    className="mono absolute top-0 text-[13px] text-ink-faint"
                    style={{ left: i * (CELL + GAP) }}
                  >
                    {l}
                  </span>
                ) : null,
              )}
            </div>
            {/* grid */}
            <div className="flex" style={{ gap: GAP }}>
              {columns.map((col, ci) => (
                <div key={ci} className="flex flex-col" style={{ gap: GAP }}>
                  {Array.from({ length: 7 }).map((_, ri) => {
                    const d = col[ri];
                    return (
                      <span
                        key={ri}
                        title={d ? `${d.count} on ${d.date}` : undefined}
                        className={`rounded-[7px] ${d ? `gh-${d.level}` : ""}`}
                        style={{ width: CELL, height: CELL, background: d ? undefined : "transparent" }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            {/* legend, aligned under the grid */}
            <div className="mono mt-5 flex items-center gap-2 text-[12px] text-ink-faint">
              <span className="mr-1">Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <span key={l} className={`gh-${l} rounded-[5px]`} style={{ width: 18, height: 18 }} />
              ))}
              <span className="ml-1">More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
