import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { projects, sideProject } from "@/lib/content";
import ProjectCard, { type CardData } from "@/components/ui/ProjectCard";
import { ArrowUpRight } from "@/components/ui/icons";

export default function Projects() {
  const cards: CardData[] = [
    ...projects.map((p) => ({
      name: p.name,
      tagline: p.tagline,
      cardSummary: p.cardSummary,
      tags: p.tags,
      coverTint: p.coverTint,
      mark: p.mark,
      status: p.status,
      role: p.role,
      href: `/projects/${p.slug}`,
    })),
    {
      name: sideProject.name,
      tagline: sideProject.tagline,
      cardSummary: sideProject.cardSummary,
      tags: sideProject.tags,
      coverTint: sideProject.coverTint,
      role: "Open source",
      href: sideProject.href,
      external: true,
    },
  ];

  return (
    <Section id="projects" no="02" label="Selected work" className="py-24 sm:py-32">
      <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-[42ch] text-[1.4rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[1.7rem]">
          Things I built after hours. Each one opens the{" "}
          <span className="serif pr-[0.06em] text-purple-deep">full case study</span>:
          the problem, the system design, and the calls I got wrong then fixed.
        </p>
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
        {cards.map((c) => (
          <ProjectCard key={c.name} card={c} />
        ))}
      </div>
    </Section>
  );
}
