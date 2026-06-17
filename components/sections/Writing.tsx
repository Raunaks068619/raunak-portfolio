import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { posts } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import PostRow from "@/components/ui/PostRow";

export default function Writing() {
  return (
    <Section id="writing" no="03" label="Writing" className="py-24 sm:py-32">
      <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-[50ch] text-[1.4rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[1.7rem]">
          I take apart how AI agents{" "}
          <span className="serif text-purple-deep">actually work</span> on disk, and
          write up what I find.
        </p>
        <Link
          href="/blogs"
          className="mono group inline-flex shrink-0 items-center gap-1.5 text-[13px] text-ink-soft transition-colors hover:text-ink"
        >
          <span className="ulink">All writing</span>
          <ArrowUpRight
            width={14}
            height={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="reveal mt-10">
        {posts.slice(0, 2).map((post, i) => (
          <PostRow key={i} post={post} />
        ))}
      </div>
    </Section>
  );
}
