"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Content stays server-rendered and
 * visible by default; this only adds the entrance transition when motion
 * is allowed. Elements opt in with className="reveal".
 */
export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-shown", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "true");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
