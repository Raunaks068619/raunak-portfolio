import type { ReactNode } from "react";

export function Section({
  id,
  no,
  label,
  children,
  className = "",
}: {
  id: string;
  no: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[170px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="reveal flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-2">
              <span className="mono text-[12px] text-purple-deep">{no}</span>
              <span className="mono text-[12px] uppercase tracking-[0.18em] text-ink-faint">
                {label}
              </span>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
