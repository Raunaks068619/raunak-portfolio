"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

type Item = { label: string; href: string; match?: string; section?: string };

const items: Item[] = [
  { label: "Projects", href: "/projects", match: "/projects" },
  { label: "Writing", href: "/blogs", match: "/blogs" },
  { label: "Experience", href: "/#work", section: "work" },
  { label: "How I build", href: "/#build", section: "build" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>("");
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io: IntersectionObserver | undefined;
    if (isHome) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      ["work", "build", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) io!.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [isHome]);

  const isActive = (item: Item) => {
    if (item.match) return pathname.startsWith(item.match);
    if (isHome && item.section) return active === item.section;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        lifted ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Raunak Singh, home">
          <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-purple text-[13px] font-semibold tracking-tight text-paper">
            RS
          </span>
          <span className="mono text-[13px] tracking-tight text-ink-soft">raunak singh</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`mono rounded-md px-3 py-1.5 text-[12.5px] transition-colors ${
                  isActive(item) ? "text-ink" : "text-ink-faint hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="mailto:raunaksingh@gofynd.com"
            className="mono hidden rounded-md border border-line px-3.5 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:border-ink hover:text-ink sm:inline-block"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
