# DESIGN.md — Raunak Singh, portfolio

## Theme

Light, warm "engineering dossier." One deliberate dark interlude (the "How I
build" section) for rhythm and to physically separate the meta-layer (how the
work gets made) from the work itself. Dark is a deliberate punctuation, never the
default.

Scene that forces this: an eng manager on a laptop, mid-afternoon, has already
closed 50 dark-purple-glow dev portfolios today and is numb to them. Confident
light editorial cuts through that numbness.

## Color (OKLCH, color strategy: Committed)

Purple is the inherited identity (his `#7C5CFC`), refined and carried
deliberately across the surface, not throttled to a 10% accent.

- `--paper`      oklch(0.985 0.006 300)  warm near-white, faint lilac
- `--paper-2`    oklch(0.965 0.009 300)  panel tint
- `--ink`        oklch(0.215 0.028 290)  primary text, a deep purple-ink (never #000)
- `--ink-soft`   oklch(0.44 0.022 290)   body
- `--ink-faint`  oklch(0.57 0.016 290)   captions, mono labels
- `--line`       oklch(0.90 0.012 300)   hairlines
- `--purple`     oklch(0.585 0.205 287)  primary accent
- `--purple-deep`oklch(0.46 0.18 288)    purple text on light
- `--purple-bright` oklch(0.70 0.20 290) accent on dark
- `--ember`      oklch(0.71 0.16 52)     warm secondary, used surgically (status dot, one highlight)
- Dark interlude: `--night` oklch(0.19 0.03 288), fg oklch(0.93 0.012 290)

## Typography

- **Geist** (sans, variable): all structural type, body, headlines.
- **Geist Mono**: technical labels, metrics, section numbers, code, stack chips.
- **Fraunces** (serif, italic only): surgical emphasis words inside sans
  headlines. Adds warmth and craft signal without going "foodie serif."

Hierarchy via scale + weight (>=1.25 ratio between steps). Body capped 66ch.

## Layout

Editorial and asymmetric. A persistent left meta-rail (mono section number +
label) against a right narrative column on larger screens. Generous, varied
spacing for rhythm. Hairline rules instead of boxes. Cards used only for the
project headers and the writing index, never nested.

## Motion

Scroll-reveal via IntersectionObserver, transform + opacity only, ease-out-quint.
Status-dot pulse. Hover micro-interactions. Honors `prefers-reduced-motion`.
No animation of layout properties.

## Bans honored

No side-stripe borders, no gradient text, no glassmorphism-by-default, no
hero-metric template, no identical card grids, no em dashes, no modals.
