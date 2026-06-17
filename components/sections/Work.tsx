import { fyndWork, currentRole, earlierRoles } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="reveal text-[clamp(1.9rem,4.5vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
          Experience
        </h2>
        <p className="reveal mt-3 max-w-[64ch] text-[1.05rem] leading-[1.6] text-ink-soft">
          Four-plus years across commerce, lending, and AI. At Fynd I own three
          product areas end to end: the intelligence platform, the recommendations
          engine, and a B2B lending product.
        </p>

      {/* current role */}
      <a
        href={currentRole.link}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal group mt-12 flex items-center gap-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentRole.logo}
          alt={`${currentRole.company} logo`}
          width={56}
          height={56}
          className="h-12 w-12 shrink-0 rounded-2xl border border-line bg-[oklch(0.17_0.02_290)] object-contain p-2.5 sm:h-14 sm:w-14"
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
            <h3 className="text-[1.25rem] font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-purple-deep sm:text-[1.45rem]">
              {currentRole.company}
            </h3>
            <span className="text-[13px] text-ink-faint">{currentRole.legal}</span>
          </div>
          <p className="mono mt-1 text-[11.5px] uppercase tracking-[0.12em] text-ink-faint">
            {currentRole.role} · {currentRole.date}
          </p>
        </div>
      </a>

      <div className="mt-10">
        {fyndWork.map((item) => (
          <article
            key={item.no}
            className="reveal grid gap-x-8 gap-y-3 border-t border-line py-8 sm:grid-cols-[auto_1fr]"
          >
            <div className="mono pt-1 text-[12px] text-purple-deep sm:w-10">{item.no}</div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[1.3rem] font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <span className="mono text-[11.5px] uppercase tracking-[0.12em] text-ink-faint">
                  {item.role}
                </span>
              </div>
              <p className="mt-3 max-w-[64ch] text-[1rem] leading-[1.6] text-ink-soft">
                {item.summary}
              </p>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((pt, i) => (
                  <li
                    key={i}
                    className="relative max-w-[66ch] pl-5 text-[0.95rem] leading-[1.55] text-ink-soft"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.62em] h-[5px] w-[5px] rounded-full bg-purple"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* earlier roles, same editorial treatment as Fynd */}
      <div className="mt-14">
        <p className="reveal mono text-[11.5px] uppercase tracking-[0.18em] text-ink-faint">
          Earlier
        </p>
        <div className="mt-2">
          {earlierRoles.map((r) => (
            <a
              key={r.company}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group grid items-start gap-x-8 gap-y-3 border-t border-line py-8 sm:grid-cols-[auto_1fr]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.logo}
                alt={`${r.company} logo`}
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 rounded-2xl border border-line object-contain sm:h-14 sm:w-14"
                loading="lazy"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="inline-flex items-center gap-1.5 text-[1.3rem] font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-purple-deep">
                    {r.company}
                    <ArrowUpRight
                      width={13}
                      height={13}
                      className="text-ink-faint opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </h3>
                  <span className="mono text-[11.5px] uppercase tracking-[0.12em] text-ink-faint">
                    {r.role}
                  </span>
                </div>
                <p className="mono mt-1 text-[11.5px] tracking-[0.04em] text-ink-faint">{r.date}</p>
                <p className="mt-3 max-w-[64ch] text-[0.95rem] leading-[1.6] text-ink-soft">
                  {r.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
