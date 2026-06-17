import { Section } from "@/components/ui/Section";
import { projects, sideProject } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectPreview from "@/components/ui/ProjectPreview";

export default function Projects() {
  return (
    <Section id="projects" no="02" label="Things I shipped" className="py-24 sm:py-32">
      <p className="reveal max-w-[52ch] text-[1.4rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[1.7rem]">
        Three things I built after hours, and the{" "}
        <span className="serif pr-[0.06em] text-purple-deep">real problems</span>{" "}
        I hit shipping them.
      </p>

      <div className="mt-16 space-y-24">
        {projects.map((p, idx) => (
          <article key={p.slug} className="reveal">
            {/* header */}
            <div className="flex items-start gap-4 sm:gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.mark}
                alt={`${p.name} app icon`}
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 rounded-2xl border border-line shadow-sm sm:h-14 sm:w-14"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-[1.85rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.35rem]">
                    {p.name}
                  </h3>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-purple px-3.5 py-1.5 text-[12.5px] font-medium text-paper shadow-sm transition-transform hover:-translate-y-px"
                  >
                    {p.hrefLabel}
                    <ArrowUpRight
                      width={13}
                      height={13}
                      className="opacity-90 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  {p.secondary && (
                    <a
                      href={p.secondary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[12px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      {p.secondary.label}
                    </a>
                  )}
                </div>
                <p className="serif mt-1.5 text-[1.2rem] text-purple-deep sm:text-[1.3rem]">
                  {p.tagline}
                </p>
                <div className="mono mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] text-ink-faint">
                  <span>P-0{idx + 1}</span>
                  <span aria-hidden>·</span>
                  <span className={`inline-flex items-center gap-1.5 ${p.status.live ? "text-ember" : ""}`}>
                    <span className={`h-[6px] w-[6px] rounded-full ${p.status.live ? "bg-ember" : "bg-purple"}`} />
                    {p.status.label}
                  </span>
                  <span aria-hidden>·</span>
                  <span className="uppercase tracking-[0.1em]">{p.role}</span>
                </div>
              </div>
            </div>

            {/* what it is */}
            <p className="mt-6 max-w-[66ch] text-[1.05rem] leading-[1.65] text-ink-soft">
              {p.what}
            </p>

            {/* stack */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="mono rounded-md border border-line bg-paper-2 px-2.5 py-1 text-[11.5px] text-ink-soft"
                >
                  {s}
                </li>
              ))}
            </ul>

            {/* preview: a live iframe of the landing page, or product shots */}
            {p.preview ? (
              <ProjectPreview src={p.preview.src} label={p.preview.label} name={p.name} />
            ) : (
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {p.shots.map((s) => (
                  <figure
                    key={s.src}
                    className="overflow-hidden rounded-xl border border-line bg-paper-2"
                  >
                    <div className="flex items-center justify-center p-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-md"
                      />
                    </div>
                    <figcaption className="mono border-t border-line px-3.5 py-2.5 text-[11px] text-ink-faint">
                      {s.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {/* engineering log */}
            <div className="mt-12">
              <p className="mono text-[11.5px] uppercase tracking-[0.18em] text-ink-faint">
                {p.notesTitle}
              </p>
              <ol className="mt-2">
                {p.notes.map((n, i) => (
                  <li
                    key={i}
                    className="grid gap-x-10 gap-y-4 border-t border-line py-7 sm:grid-cols-2"
                  >
                    <div>
                      <p className="mono mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                        {String(i + 1).padStart(2, "0")} · the problem
                      </p>
                      <p className="max-w-[48ch] text-[0.95rem] leading-[1.6] text-ink">
                        {n.problem}
                      </p>
                    </div>
                    <div>
                      <p className="mono mb-2 text-[11px] uppercase tracking-[0.14em] text-purple-deep">
                        what I did
                      </p>
                      <p className="max-w-[48ch] text-[0.95rem] leading-[1.6] text-ink-soft">
                        {n.fix}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>

      {/* smaller third project */}
      <div className="reveal mt-20 grid gap-8 border-t border-line pt-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="mono text-[12px] text-ink-faint">P-04</span>
            <h3 className="text-[1.5rem] font-semibold tracking-[-0.01em] text-ink">
              {sideProject.name}
            </h3>
            <span className="serif text-[1.1rem] text-purple-deep">
              {sideProject.tagline}
            </span>
          </div>
          <p className="mt-4 max-w-[60ch] text-[1rem] leading-[1.6] text-ink-soft">
            {sideProject.what}
          </p>
          <a
            href={sideProject.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-1.5 text-[13px] text-ink transition-colors hover:text-purple-deep"
          >
            <span className="ulink mono text-[12.5px]">{sideProject.hrefLabel}</span>
            <ArrowUpRight className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width={13} height={13} />
          </a>
        </div>
        <a
          href={sideProject.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl border border-line bg-paper-2 shadow-sm transition-transform hover:-translate-y-0.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sideProject.image}
            alt="design-taste repository preview on GitHub"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </a>
      </div>
    </Section>
  );
}
