import { aiWorkflow, stack } from "@/lib/content";

export default function Build() {
  return (
    <section id="build" className="scroll-mt-20 bg-night py-28 text-night-fg sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[170px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="reveal flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-2">
              <span className="mono text-[12px] text-purple-bright">04</span>
              <span className="mono text-[12px] uppercase tracking-[0.18em] text-night-faint">
                How I build
              </span>
            </div>
          </div>

          <div>
            <h2 className="reveal max-w-[20ch] text-[clamp(1.9rem,4.5vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              AI is not a feature I bolt on.{" "}
              <span className="serif font-normal text-purple-bright">It is how I work.</span>
            </h2>
            <p className="reveal mt-6 max-w-[64ch] text-[1.05rem] leading-[1.65] text-night-faint">
              {aiWorkflow.intro}
            </p>

            {/* readable ledger, the way Raunak likes his agents: legible, on disk */}
            <div className="reveal mt-10 overflow-hidden rounded-xl border border-night-2 bg-[oklch(0.21_0.03_288)]">
              <div className="flex items-center justify-between border-b border-night-2 px-4 py-2.5">
                <span className="mono text-[11.5px] text-night-faint">~/how-i-build.ledger</span>
                <span className="mono text-[11px] text-purple-bright">readable by design</span>
              </div>
              <dl className="divide-y divide-night-2">
                {aiWorkflow.ledger.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 px-4 py-3.5 sm:grid-cols-[9rem_1fr]"
                  >
                    <dt className="mono text-[12.5px] text-purple-bright">{row.k}</dt>
                    <dd className="text-[0.95rem] leading-[1.5] text-night-fg">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* the toolkit */}
            <div className="reveal mt-12">
              <p className="mono text-[11.5px] uppercase tracking-[0.18em] text-night-faint">
                The toolkit
              </p>
              <div className="mt-5 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {stack.map((group) => (
                  <div key={group.group}>
                    <p className="mono text-[12px] text-purple-bright">{group.group}</p>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {group.items.map((it) => (
                        <li
                          key={it}
                          className="mono rounded-md border border-night-2 px-2.5 py-1 text-[11.5px] text-night-fg"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
