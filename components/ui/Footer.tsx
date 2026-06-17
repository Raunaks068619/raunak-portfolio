export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12 pt-10 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-[6px] bg-purple text-[11px] font-semibold text-paper">
            RS
          </span>
          <span className="mono text-[12px] text-ink-faint">
            © 2026 Raunak Singh · Mumbai
          </span>
        </div>
        <p className="mono text-[12px] text-ink-faint">
          Designed and built with Next.js and Claude Code
        </p>
      </div>
    </footer>
  );
}
