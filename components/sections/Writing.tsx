import Link from "next/link";
import { posts } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import LinkedInEmbed from "@/components/ui/LinkedInEmbed";

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="reveal text-[clamp(1.9rem,4.5vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
          Writing
        </h2>
        <p className="reveal mt-3 max-w-[60ch] text-[1.05rem] leading-[1.6] text-ink-soft">
          I take apart how AI agents actually work on disk, and write up what I
          find. A short series, posted on LinkedIn.
        </p>

        <div className="reveal mt-10 grid gap-6 lg:grid-cols-2">
          {posts.slice(0, 2).map((p) => (
            <LinkedInEmbed key={p.embedUrn} urn={p.embedUrn} title={p.title} />
          ))}
        </div>

        <div className="reveal mt-9 flex justify-center">
          <Link
            href="/blogs"
            className="mono group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[13px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            Show more
            <ArrowUpRight width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
