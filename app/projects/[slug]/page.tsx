import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, siteUrl } from "@/lib/content";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import ProjectPreview from "@/components/ui/ProjectPreview";
import { ArrowUpRight } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name}: ${p.tagline}`;
  return {
    title,
    description: p.cardSummary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      url: `${siteUrl}/projects/${p.slug}`,
      title: `${p.name} — case study`,
      description: p.cardSummary,
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pb-8 pt-8 lg:px-10">
        <Link
          href="/projects"
          className="mono group inline-flex items-center gap-1.5 text-[12.5px] text-ink-faint transition-colors hover:text-ink"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
          All projects
        </Link>

        {/* header */}
        <header className="mt-8 flex items-start gap-4 sm:gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.mark}
            alt={`${p.name} app icon`}
            width={60}
            height={60}
            className="h-14 w-14 shrink-0 rounded-2xl border border-line shadow-sm"
          />
          <div className="min-w-0">
            <h1 className="text-[2.2rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.8rem]">
              {p.name}
            </h1>
            <p className="serif mt-1 text-[1.3rem] text-purple-deep">{p.tagline}</p>
            <div className="mono mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] text-ink-faint">
              <span className={`inline-flex items-center gap-1.5 ${p.status.live ? "text-ember" : ""}`}>
                <span className={`h-[6px] w-[6px] rounded-full ${p.status.live ? "bg-ember" : "bg-purple"}`} />
                {p.status.label}
              </span>
              <span aria-hidden>·</span>
              <span className="uppercase tracking-[0.1em]">{p.role}</span>
            </div>
          </div>
        </header>

        {/* links */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-purple px-4 py-2 text-[13px] font-medium text-paper shadow-sm transition-transform hover:-translate-y-px"
          >
            {p.hrefLabel}
            <ArrowUpRight width={14} height={14} className="opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {p.secondary && (
            <a
              href={p.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[12.5px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              {p.secondary.label}
            </a>
          )}
        </div>

        {/* preview */}
        {p.preview ? (
          <ProjectPreview src={p.preview.src} label={p.preview.label} name={p.name} />
        ) : (
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {p.shots.map((s) => (
              <figure key={s.src} className="overflow-hidden rounded-xl border border-line bg-paper-2">
                <div className="flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt} loading="lazy" decoding="async" className="w-full rounded-md" />
                </div>
                <figcaption className="mono border-t border-line px-3.5 py-2.5 text-[11px] text-ink-faint">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* the problem / what it is */}
        <section className="mt-14">
          <h2 className="mono text-[11.5px] uppercase tracking-[0.18em] text-ink-faint">
            What it is
          </h2>
          <p className="mt-3 max-w-[68ch] text-[1.075rem] leading-[1.7] text-ink-soft">
            {p.what}
          </p>
        </section>

        {/* system design */}
        <section className="mt-12">
          <h2 className="mono text-[11.5px] uppercase tracking-[0.18em] text-purple-deep">
            System design
          </h2>
          <p className="mt-3 max-w-[68ch] text-[1.075rem] leading-[1.7] text-ink">
            {p.systemDesign}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="mono rounded-md border border-line bg-paper-2 px-2.5 py-1 text-[11.5px] text-ink-soft"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* decisions: wrong then right */}
        <section className="mt-14">
          <h2 className="text-[1.5rem] font-semibold tracking-[-0.01em] text-ink sm:text-[1.8rem]">
            What I got wrong,{" "}
            <span className="serif font-normal text-purple-deep">then fixed.</span>
          </h2>
          <ol className="mt-6">
            {p.notes.map((n, i) => (
              <li key={i} className="grid gap-x-10 gap-y-4 border-t border-line py-7 sm:grid-cols-2">
                <div>
                  <p className="mono mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                    {String(i + 1).padStart(2, "0")} · the problem
                  </p>
                  <p className="max-w-[48ch] text-[0.97rem] leading-[1.62] text-ink">{n.problem}</p>
                </div>
                <div>
                  <p className="mono mb-2 text-[11px] uppercase tracking-[0.14em] text-purple-deep">
                    what I did
                  </p>
                  <p className="max-w-[48ch] text-[0.97rem] leading-[1.62] text-ink-soft">{n.fix}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* closing */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-purple-deep"
          >
            <span className="ulink">See {p.name} live</span>
            <ArrowUpRight width={16} height={16} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/projects"
            className="mono text-[13px] text-ink-faint transition-colors hover:text-ink"
          >
            Back to all projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
