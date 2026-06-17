import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredCards } from "@/components/sections/Projects";
import { ArrowUpRight, GithubIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured case studies and every public repo by Raunak Singh — Bookmarx, Vordi, Challengers, Scrappling, and more.",
  alternates: { canonical: "/projects" },
};

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};

const LANG_COLOR: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Swift: "#F05138",
  Rust: "#dea584",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  Dart: "#00B4AB",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Java: "#b07219",
};

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/Raunaks068619/repos?per_page=100&sort=pushed&type=owner",
      { next: { revalidate: 86400 }, headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) return [];
    const data: Repo[] = await res.json();
    return data
      .filter((r) => !r.fork)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          (a.pushed_at < b.pushed_at ? 1 : -1),
      );
  } catch {
    return [];
  }
}

export default async function ProjectsIndex() {
  const repos = await getRepos();

  const featured = featuredCards;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pb-8 pt-10 lg:px-10">
        <header className="max-w-[60ch]">
          <h1 className="text-[clamp(2.2rem,6vw,3.4rem)] font-semibold tracking-[-0.02em] text-ink">
            Projects
          </h1>
          <p className="mt-4 text-[1.075rem] leading-[1.7] text-ink-soft">
            The featured few come with a full case study. Below them is
            everything else, pulled live from GitHub.
          </p>
        </header>

        {/* featured */}
        <section className="mt-14">
          <h2 className="mono text-[11.5px] uppercase tracking-[0.18em] text-ink-faint">
            Featured
          </h2>
          <div className="mt-7 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {featured.map((c) => (
              <ProjectCard key={c.name} card={c} />
            ))}
          </div>
        </section>

        {/* all repos */}
        <section className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="mono text-[11.5px] uppercase tracking-[0.18em] text-ink-faint">
              On GitHub{repos.length > 0 ? ` · ${repos.length}` : ""}
            </h2>
            <a
              href="https://github.com/Raunaks068619"
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex items-center gap-1.5 text-[12px] text-ink-faint transition-colors hover:text-ink"
            >
              <GithubIcon width={14} height={14} className="opacity-70" />
              Raunaks068619
            </a>
          </div>

          {repos.length === 0 ? (
            <p className="mt-6 text-[0.95rem] text-ink-soft">
              The live list is taking a break.{" "}
              <a
                href="https://github.com/Raunaks068619?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="ulink text-purple-deep"
              >
                Browse the repos on GitHub
              </a>
              .
            </p>
          ) : (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {repos.map((r) => (
                <li key={r.name}>
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-xl border border-line bg-paper-2/40 px-4 py-3.5 transition-colors hover:border-ink/25 hover:bg-paper-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="mono truncate text-[13.5px] text-ink transition-colors group-hover:text-purple-deep">
                        {r.name}
                      </span>
                      <ArrowUpRight
                        width={13}
                        height={13}
                        className="shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-deep"
                      />
                    </div>
                    {r.description && (
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.5] text-ink-soft">
                        {r.description}
                      </p>
                    )}
                    <div className="mono mt-3 flex items-center gap-4 text-[11px] text-ink-faint">
                      {r.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="h-[8px] w-[8px] rounded-full"
                            style={{ background: LANG_COLOR[r.language] ?? "oklch(0.6 0.02 290)" }}
                          />
                          {r.language}
                        </span>
                      )}
                      {r.stargazers_count > 0 && <span>★ {r.stargazers_count}</span>}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
