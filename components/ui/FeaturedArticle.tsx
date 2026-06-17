import { featuredArticle as a } from "@/lib/content";
import { ArrowUpRight, LinkedinIcon } from "@/components/ui/icons";

export default function FeaturedArticle() {
  return (
    <a
      href={a.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-line bg-paper-2/40 transition-colors hover:border-ink/20"
    >
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={a.cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 sm:p-9 lg:p-10">
          <div className="mono flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] text-ink-faint">
            <span className="inline-flex items-center gap-1.5 text-[#0a66c2]">
              <LinkedinIcon width={13} height={13} />
              {a.kicker}
            </span>
            <span aria-hidden className="text-line">/</span>
            <span>{a.date}</span>
            <span className="rounded-full border border-ember/40 px-2 py-0.5 text-ember">Newest</span>
          </div>

          <h3 className="text-[1.5rem] font-semibold leading-[1.18] tracking-[-0.015em] text-ink transition-colors group-hover:text-purple-deep sm:text-[1.9rem]">
            {a.title}
          </h3>

          <p className="max-w-[54ch] text-[0.98rem] leading-[1.62] text-ink-soft">{a.excerpt}</p>

          <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <li
                  key={t}
                  className="mono rounded-full border border-line px-2.5 py-0.5 text-[11px] text-ink-faint"
                >
                  {t}
                </li>
              ))}
            </ul>
            <span className="mono inline-flex items-center gap-1.5 text-[13px] text-ink">
              <span className="ulink">Read the article</span>
              <ArrowUpRight
                width={14}
                height={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
