import Link from "next/link";
import { projects } from "@/lib/content";
import ProjectCard, { type CardData } from "@/components/ui/ProjectCard";
import { ArrowUpRight } from "@/components/ui/icons";

export const featuredCards: CardData[] = projects.map((p) => ({
  name: p.name,
  tagline: p.tagline,
  cardSummary: p.cardSummary,
  tags: p.tags,
  mesh: p.mesh,
  coverLight: p.coverLight,
  iconBg: p.iconBg,
  mark: p.mark,
  status: p.status,
  role: p.role,
  href: `/projects/${p.slug}`,
}));

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[clamp(1.9rem,4.5vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
              Selected work
            </h2>
            <p className="mt-3 max-w-[58ch] text-[1.05rem] leading-[1.6] text-ink-soft">
              Things I built after hours. Each one opens a full case study: the
              problem, the system design, and the calls I got wrong then fixed.
            </p>
          </div>
          <Link
            href="/projects"
            className="mono group inline-flex shrink-0 items-center gap-1.5 text-[13px] text-ink-soft transition-colors hover:text-ink"
          >
            <span className="ulink">All projects</span>
            <ArrowUpRight
              width={14}
              height={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="reveal mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {featuredCards.map((c) => (
            <ProjectCard key={c.name} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
