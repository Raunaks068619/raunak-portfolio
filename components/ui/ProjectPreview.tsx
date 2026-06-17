import { ArrowUpRight } from "@/components/ui/icons";

/**
 * A live, embedded preview of a project's landing page, framed like a
 * browser window. The iframe renders the real site; a transparent overlay
 * link opens it in a new tab and keeps page scroll from being trapped.
 */
export default function ProjectPreview({
  src,
  label,
  name,
}: {
  src: string;
  label: string;
  name: string;
}) {
  return (
    <div className="mt-9 overflow-hidden rounded-xl border border-line bg-paper-2 shadow-sm">
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-line px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="mono flex-1 truncate rounded-md bg-paper px-3 py-1 text-center text-[11.5px] text-ink-faint">
          {label}
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name} in a new tab`}
          className="text-ink-faint transition-colors hover:text-purple-deep"
        >
          <ArrowUpRight width={15} height={15} />
        </a>
      </div>

      {/* live site */}
      <div className="relative aspect-[16/10] w-full bg-paper">
        <iframe
          src={src}
          title={`${name} live preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name} live`}
          className="group absolute inset-0 flex items-end justify-end p-3"
        >
          <span className="mono pointer-events-none inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] text-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Open live
            <ArrowUpRight width={11} height={11} />
          </span>
        </a>
      </div>
    </div>
  );
}
