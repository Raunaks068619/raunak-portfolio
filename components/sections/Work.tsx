import { Section } from "@/components/ui/Section";
import { fyndWork } from "@/lib/content";

export default function Work() {
  return (
    <Section id="work" no="01" label="Work at Fynd" className="py-24 sm:py-32">
      <p className="reveal max-w-[54ch] text-[1.4rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[1.7rem]">
        At Fynd I build on the{" "}
        <span className="serif text-purple-deep">Zenith Intelligence Platform</span>.
        Four systems I own or built end to end.
      </p>

      <div className="mt-12">
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
    </Section>
  );
}
