import type { Metadata } from "next";
import { posts, writingIntro } from "@/lib/content";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import PostRow from "@/components/ui/PostRow";
import { LinkedinIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Raunak Singh's writing — a series on reverse-engineering how AI coding agents (Claude, Codex, Antigravity) store context, and on building design-taste.",
  alternates: { canonical: "/blogs" },
};

export default function Blogs() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pb-8 pt-10 lg:px-10">
        <header className="max-w-[62ch]">
          <h1 className="text-[clamp(2.2rem,6vw,3.4rem)] font-semibold tracking-[-0.02em] text-ink">
            Writing
          </h1>
          <p className="mt-4 text-[1.075rem] leading-[1.7] text-ink-soft">{writingIntro}</p>
        </header>

        <div className="mt-12">
          {posts.map((post, i) => (
            <PostRow key={i} post={post} />
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/raunak-singh-608051218/"
          target="_blank"
          rel="noopener noreferrer"
          className="mono mt-8 inline-flex items-center gap-2 border-t border-line pt-6 text-[13px] text-ink-soft transition-colors hover:text-ink"
        >
          <LinkedinIcon className="opacity-70" width={15} height={15} />
          <span className="ulink">More on LinkedIn</span>
        </a>
      </main>
      <Footer />
    </>
  );
}
