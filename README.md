# raunak-portfolio

The personal site of **Raunak Singh**, full-stack and AI engineer (SDE) at Fynd.
Live, editorial, and built to load fast and rank well.

→ [raunaksingh on GitHub](https://github.com/Raunaks068619) · [LinkedIn](https://www.linkedin.com/in/raunak-singh-608051218/)

## Stack

- **Next.js 16** (App Router, static prerender) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with an OKLCH design system
- **Geist** + **Geist Mono** + **Fraunces** via `next/font`
- Deployed on **Vercel**

## What is in here

| Section | What it covers |
| --- | --- |
| Hero | Who I am, the receipts, the links |
| Work at Fynd | Avionics interceptor, zen-cli, the recommendations engine, Smart Suggestions |
| Things I shipped | Bookmarx and Vordi, with the real problems I hit and how I fixed them |
| Writing | The LinkedIn series on reverse-engineering AI agent internals |
| How I build | The multi-agent workflow behind the work, and the full toolkit |

## Design system

The visual decisions live in [`DESIGN.md`](./DESIGN.md); the audience and tone
brief lives in [`PRODUCT.md`](./PRODUCT.md). Colors are OKLCH, the register is
editorial, and there is exactly one deliberate dark interlude.

## SEO

- Per-page metadata, Open Graph, and a dynamic OG image (`app/opengraph-image.tsx`)
- `Person` + `WebSite` JSON-LD structured data
- `app/robots.ts` and `app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml`
- Set `NEXT_PUBLIC_SITE_URL` once a custom domain is attached so canonical URLs resolve to it

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Designed and built with Claude Code.
