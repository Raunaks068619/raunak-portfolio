import Link from "next/link";
import { profile, projects, currentRole, earlierRoles } from "@/lib/content";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRight } from "@/components/ui/icons";

const companies = [
  { logo: currentRole.logo, name: currentRole.company, dark: true },
  ...earlierRoles.map((r) => ({ logo: r.logo, name: r.company, dark: false })),
];

export default function Hero() {
  return (
    <section id="main" className="relative overflow-hidden pt-12 sm:pt-16">
      {/* faint identity wash behind the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.585 0.205 287 / 0.12), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <p className="reveal text-[clamp(1.05rem,2.4vw,1.4rem)] font-medium text-ink-soft">
          Hi there, I&apos;m
        </p>

        {/* photo + intro */}
        <div className="mt-6 grid items-start gap-x-12 gap-y-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt="Raunak Singh"
            width={300}
            height={360}
            className="reveal aspect-[5/6] w-full max-w-[300px] rounded-2xl border border-line object-cover shadow-md ring-1 ring-purple/15"
          />

          <div className="reveal" data-delay="1">
            <p className="max-w-[60ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
              {profile.blurb}
            </p>

            {/* recent work, as a dock of app icons */}
            <div className="mt-8">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                Recent work
              </p>
              <div className="mt-4 flex gap-6">
                {projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col items-center gap-2"
                  >
                    {p.iconBg === "white" ? (
                      <span className="grid h-14 w-14 place-items-center rounded-[14px] bg-white shadow-md ring-1 ring-black/[0.06] transition-transform duration-200 group-hover:-translate-y-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.mark} alt={`${p.name} icon`} width={36} height={36} className="h-9 w-9" />
                      </span>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.mark}
                        alt={`${p.name} icon`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-[14px] shadow-md ring-1 ring-white/10 transition-transform duration-200 group-hover:-translate-y-1"
                      />
                    )}
                    <span className="mono text-[11px] text-ink-faint transition-colors group-hover:text-ink">
                      {p.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* links */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[14px] text-ink transition-colors hover:text-purple-deep">
                <GithubIcon className="opacity-70" />
                <span className="ulink">GitHub</span>
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[14px] text-ink transition-colors hover:text-purple-deep">
                <LinkedinIcon className="opacity-70" />
                <span className="ulink">LinkedIn</span>
              </a>
              <a href={profile.links.email} className="group inline-flex items-center gap-2 text-[14px] text-ink transition-colors hover:text-purple-deep">
                <MailIcon className="opacity-70" />
                <span className="ulink">Email</span>
              </a>
              <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="mono inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:border-ink hover:text-ink">
                Résumé, PDF
              </a>
            </div>
          </div>
        </div>

        {/* the name, big */}
        <h1 className="reveal mt-10 text-[clamp(3rem,13.5vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.04em] text-ink">
          Raunak Singh
        </h1>
        <p className="reveal mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(1.35rem,3.4vw,2.2rem)] font-medium tracking-[-0.01em] text-ink">
          Full-stack &amp; AI Engineer
          <span className="mono text-[12.5px] font-normal uppercase tracking-[0.14em] text-ink-faint">
            SDE at Fynd · Mumbai
          </span>
        </p>

        {/* shipped at */}
        <div className="reveal mt-14 border-t border-line pt-7">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Shipped at
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {companies.map((c) => (
              <span key={c.name} className="flex items-center gap-2.5 opacity-75 transition-opacity hover:opacity-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={36}
                  height={36}
                  className={`h-9 w-9 rounded-lg object-contain ${c.dark ? "bg-[oklch(0.17_0.02_290)] p-1.5" : ""}`}
                />
                <span className="text-[14px] font-medium text-ink-soft">{c.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
