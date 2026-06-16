import { profile, metrics } from "@/lib/content";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRight } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section id="main" className="relative overflow-hidden pt-16 sm:pt-24">
      {/* faint identity wash, not glassmorphism: a single soft radial behind the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.585 0.205 287 / 0.12), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <p className="reveal mono flex items-center gap-2.5 text-[12.5px] text-ink-faint">
          <span className="livedot inline-block h-[7px] w-[7px] rounded-full bg-ember" />
          SDE at Fynd · Zenith Intelligence Platform · Mumbai
        </p>

        <h1 className="reveal mt-6 text-[clamp(2.9rem,9vw,6.3rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-ink">
          Raunak Singh
        </h1>

        <p
          data-delay="1"
          className="reveal mt-6 max-w-[20ch] text-[clamp(1.5rem,3.7vw,2.4rem)] font-medium leading-[1.18] tracking-[-0.01em] text-ink sm:max-w-[24ch]"
        >
          Full-stack and AI engineer. I build AI-native systems,{" "}
          <span className="serif pr-[0.08em] text-purple-deep">and reverse-engineer</span>{" "}
          the ones I don&apos;t.
        </p>

        <p
          data-delay="2"
          className="reveal mt-7 max-w-[62ch] text-[1.0625rem] leading-[1.65] text-ink-soft"
        >
          {profile.blurb}
        </p>

        <div data-delay="2" className="reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[14px] text-ink transition-colors hover:text-purple-deep"
          >
            <GithubIcon className="opacity-70" />
            <span className="ulink">GitHub</span>
            <ArrowUpRight className="opacity-40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width={13} height={13} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[14px] text-ink transition-colors hover:text-purple-deep"
          >
            <LinkedinIcon className="opacity-70" />
            <span className="ulink">LinkedIn</span>
            <ArrowUpRight className="opacity-40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width={13} height={13} />
          </a>
          <a
            href={profile.links.email}
            className="group inline-flex items-center gap-2 text-[14px] text-ink transition-colors hover:text-purple-deep"
          >
            <MailIcon className="opacity-70" />
            <span className="ulink">Email</span>
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mono inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            One-pager, PDF
          </a>
        </div>

        {/* the receipts: editorial data row, hairline-separated, no stat cards */}
        <dl className="reveal mt-14 grid grid-cols-2 border-t border-line sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={[
                "py-5 pr-5",
                i % 2 === 0 ? "border-r border-line" : "",
                i < 2 ? "border-b border-line sm:border-b-0" : "",
                "sm:border-r sm:border-line",
                i === metrics.length - 1 ? "sm:border-r-0" : "",
                i === 0 ? "sm:pl-0" : "sm:pl-6",
              ].join(" ")}
            >
              <dt className="text-[1.75rem] font-semibold tracking-[-0.02em] text-ink">
                {m.value}
              </dt>
              <dd className="mono mt-1.5 text-[11.5px] leading-[1.45] text-ink-faint">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
