import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

export type CardData = {
  name: string;
  tagline: string;
  cardSummary: string;
  tags: string[];
  mesh: string;
  coverLight?: boolean;
  iconBg?: "white";
  mark?: string;
  status?: { label: string; live: boolean };
  role?: string;
  href: string;
  external?: boolean;
};

/**
 * A featured-project card: an app icon on an abstract mesh cover, then a
 * short summary and tags. Links into a case study, or out to a repo.
 */
export default function ProjectCard({ card }: { card: CardData }) {
  const light = card.coverLight;
  const inner = (
    <>
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-line"
        style={{ background: card.mesh }}
      >
        {card.status?.live && (
          <span
            className={`mono absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] backdrop-blur-sm ${
              light ? "bg-black/[0.06] text-black/65" : "bg-black/25 text-white/90"
            }`}
          >
            <span className="h-[6px] w-[6px] rounded-full bg-ember" />
            {card.status.label}
          </span>
        )}
        {card.role && (
          <span
            className={`mono absolute right-4 top-4 text-[11px] uppercase tracking-[0.14em] ${
              light ? "text-black/40" : "text-white/55"
            }`}
          >
            {card.role}
          </span>
        )}
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          {card.mark &&
            (card.iconBg === "white" ? (
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-lg ring-1 ring-black/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.mark} alt="" width={40} height={40} className="h-10 w-10" />
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={card.mark} alt="" width={64} height={64} className="h-16 w-16 rounded-2xl shadow-lg ring-1 ring-white/15" />
            ))}
          <span
            className={`text-[2.3rem] font-semibold leading-none tracking-[-0.03em] drop-shadow-sm sm:text-[2.8rem] ${
              light ? "text-[oklch(0.24_0.05_290)]" : "text-white"
            }`}
          >
            {card.name}
          </span>
        </div>
        <span
          aria-hidden
          className="absolute inset-0 transition-colors duration-300 group-hover:bg-white/[0.05]"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1.2rem] font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-purple-deep">
            {card.tagline}
          </h3>
          <ArrowUpRight
            className="mt-1 shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-deep"
            width={18}
            height={18}
          />
        </div>
        <p className="mt-1.5 max-w-[46ch] text-[0.95rem] leading-[1.55] text-ink-soft">
          {card.cardSummary}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {card.tags.map((t) => (
            <li
              key={t}
              className="mono rounded-full border border-line px-2.5 py-0.5 text-[11px] text-ink-faint"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  if (card.external) {
    return (
      <a href={card.href} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${card.name}, opens in a new tab`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={card.href} className="group block" aria-label={`${card.name} case study`}>
      {inner}
    </Link>
  );
}
