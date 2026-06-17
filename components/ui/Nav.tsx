"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const sections = [
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "build", label: "How I build" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        lifted ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Raunak Singh, home">
          <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-purple text-[13px] font-semibold tracking-tight text-paper">
            RS
          </span>
          <span className="mono text-[13px] tracking-tight text-ink-soft">raunak singh</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`mono rounded-md px-3 py-1.5 text-[12.5px] transition-colors ${
                  active === s.id ? "text-ink" : "text-ink-faint hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="mailto:raunaksingh@gofynd.com"
            className="mono rounded-md border border-line px-3.5 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
