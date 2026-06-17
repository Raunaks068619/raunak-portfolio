"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/components/ui/icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      {/* render nothing theme-specific until mounted, to avoid hydration mismatch */}
      <span className="sr-only">Toggle theme</span>
      {mounted ? (
        isDark ? <SunIcon width={15} height={15} /> : <MoonIcon width={15} height={15} />
      ) : (
        <MoonIcon width={15} height={15} className="opacity-0" />
      )}
    </button>
  );
}
