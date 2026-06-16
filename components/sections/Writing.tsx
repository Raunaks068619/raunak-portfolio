import { Section } from "@/components/ui/Section";
import { posts, writingIntro } from "@/lib/content";
import { ArrowUpRight, LinkedinIcon } from "@/components/ui/icons";

export default function Writing() {
  return (
    <Section id="writing" no="03" label="Writing" className="py-24 sm:py-32">
      <p className="reveal max-w-[58ch] text-[1.4rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[1.7rem]">
        I take apart how AI agents{" "}
        <span className="serif text-purple-deep">actually work</span> on disk, and
        write up what I find.
      </p>
      <p className="reveal mt-5 max-w-[64ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
        {writingIntro}
      </p>

      <div className="reveal mt-12">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[1fr_auto] items-start gap-x-6 border-t border-line py-7 transition-colors"
          >
            <div>
              <div className="mono flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-ink-faint">
                <span>{post.kicker}</span>
                <span aria-hidden className="text-line">/</span>
                <span className="rounded-full border border-line px-2 py-0.5 text-purple-deep">
                  {post.tag}
                </span>
              </div>
              <h3 className="mt-2.5 text-[1.3rem] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-purple-deep sm:text-[1.5rem]">
                {post.title}
              </h3>
              <p className="mt-2.5 max-w-[68ch] text-[0.98rem] leading-[1.6] text-ink-soft">
                {post.blurb}
              </p>
            </div>
            <ArrowUpRight
              className="mt-1 shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-deep"
              width={18}
              height={18}
            />
          </a>
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/raunak-singh-608051218/"
        target="_blank"
        rel="noopener noreferrer"
        className="reveal mono mt-8 inline-flex items-center gap-2 border-t border-line pt-6 text-[13px] text-ink-soft transition-colors hover:text-ink"
      >
        <LinkedinIcon className="opacity-70" width={15} height={15} />
        <span className="ulink">More on LinkedIn</span>
      </a>
    </Section>
  );
}
