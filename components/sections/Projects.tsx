import { Section } from "@/components/ui/Section";
import { projects, sideProject } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";

export default function Projects() {
  return (
    <Section id="projects" no="02" label="Things I shipped" className="py-24 sm:py-32">
      <p className="reveal max-w-[52ch] text-[1.4rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[1.7rem]">
        Two products I built after hours, and the{" "}
        <span className="serif pr-[0.06em] text-purple-deep">real problems</span>{" "}
        I hit shipping them.
      </p>

      <div className="mt-16 space-y-24">
        {projects.map((p, idx) => (
          <article key={p.slug} className="reveal">
            {/* header */}
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="mono text-[12px] text-ink-faint">P-0{idx + 1}</span>
                  <span
                    className={`mono inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] ${
                      p.status.live
                        ? "border-ember/40 text-ember"
                        : "border-line text-ink-faint"
                    }`}
                  >
                    <span
                      className={`h-[6px] w-[6px] rounded-full ${
                        p.status.live ? "bg-ember" : "bg-purple"
                      }`}
                    />
                    {p.status.label}
                  </span>
                </div>
                <h3 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.5rem]">
                  {p.name}
                </h3>
                <p className="serif mt-1 text-[1.25rem] text-purple-deep">{p.tagline}</p>
              </div>

              <div className="flex flex-col items-start gap-2 sm:items-end">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-purple-deep"
                >
                  <span className="ulink">{p.hrefLabel}</span>
                  <ArrowUpRight className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width={14} height={14} />
                </a>
                {p.secondary && (
                  <a
                    href={p.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-[12px] text-ink-faint transition-colors hover:text-ink"
                  >
                    {p.secondary.label}
                  </a>
                )}
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
      <div className="reveal mt-20 border-t border-line pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-3">
            <span className="mono text-[12px] text-ink-faint">P-03</span>
            <h3 className="text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
              {sideProject.name}
            </h3>
            <span className="serif text-[1.05rem] text-purple-deep">
              {sideProject.tagline}
            </span>
          </div>
          <a
            href={sideProject.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[13px] text-ink transition-colors hover:text-purple-deep"
          >
            <span className="ulink mono text-[12.5px]">{sideProject.hrefLabel}</span>
            <ArrowUpRight className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width={13} height={13} />
          </a>
        </div>
        <p className="mt-3 max-w-[66ch] text-[1rem] leading-[1.6] text-ink-soft">
          {sideProject.what}
        </p>
      </div>
    </Section>
  );
}
