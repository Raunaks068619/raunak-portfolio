import type { Post } from "@/lib/content";

/**
 * Post thumbnails. design-taste links a GitHub project, so it gets a real
 * preview image. The LinkedIn write-ups get a small on-brand motif tied to
 * what the post is about: a JSONL ledger, an agent graph, stacked browsers.
 */
function Ledger() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden>
      <line x1="22" y1="22" x2="22" y2="80" stroke="var(--color-night-2)" strokeWidth="1.5" />
      {[26, 42, 58, 74].map((y, i) => (
        <g key={y}>
          <rect x="18" y={y - 4} width="8" height="8" rx="2" fill="var(--color-purple-bright)" opacity={0.9 - i * 0.12} />
          <rect x="32" y={y - 3} width={64 - i * 9} height="6" rx="3" fill="var(--color-night-faint)" opacity="0.5" />
          <rect x={100 - i * 8} y={y - 3} width={28 + i * 4} height="6" rx="3" fill="var(--color-night-faint)" opacity="0.28" />
        </g>
      ))}
    </svg>
  );
}

function Graph() {
  const nodes = [
    [40, 30],
    [112, 26],
    [82, 54],
    [124, 70],
    [34, 72],
  ] as const;
  const edges = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [0, 4],
  ] as const;
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="var(--color-night-faint)" strokeWidth="1.2" opacity="0.45" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 7 : 5} fill={i === 2 ? "var(--color-purple-bright)" : "var(--color-night-fg)"} opacity={i === 2 ? 1 : 0.85} />
      ))}
    </svg>
  );
}

function Browser() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden>
      {[
        [40, 30, 0.4],
        [30, 22, 0.7],
        [20, 14, 1],
      ].map(([x, y, o], i) => (
        <g key={i} opacity={o}>
          <rect x={x} y={y} width="100" height="60" rx="7" fill="var(--color-night-2)" stroke="var(--color-night-faint)" strokeOpacity="0.5" />
          <rect x={x} y={y} width="100" height="13" rx="7" fill="var(--color-night-2)" />
          {[8, 16, 24].map((dx) => (
            <circle key={dx} cx={x + dx} cy={y + 7} r="2" fill={i === 2 ? "var(--color-purple-bright)" : "var(--color-night-faint)"} />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PostThumb({
  thumb,
  alt,
  className = "",
}: {
  thumb: Post["thumb"];
  alt: string;
  className?: string;
}) {
  if (thumb.kind === "image" && thumb.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={thumb.src} alt={alt} loading="lazy" decoding="async" className={`object-cover ${className}`} />
    );
  }
  return (
    <div className={`flex items-center justify-center bg-night p-3 ${className}`}>
      {thumb.kind === "ledger" && <Ledger />}
      {thumb.kind === "graph" && <Graph />}
      {thumb.kind === "browser" && <Browser />}
    </div>
  );
}
