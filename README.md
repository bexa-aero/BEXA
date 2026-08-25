# BExA — Buckeye Experimental Aeronautics Website

Official website for Buckeye Experimental Aeronautics (BExA), a student-led
aerospace engineering program building high-speed, remotely piloted aircraft
and autonomous systems.

**Live at [flybexa.com](https://flybexa.com)**

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Phosphor Icons + Lucide React
- pnpm (package manager — do not use npm)
- Deployed on Vercel

## Development

```bash
pnpm install     # install dependencies
pnpm dev         # dev server at http://localhost:5173
pnpm build       # production build to dist/
pnpm preview     # serve the production build locally
```

## Editing Content

Most site copy lives in `src/lib/constants.ts` — sub-teams, projects,
sponsorship tiers, leadership, contact email, social links, and SEO
titles/descriptions. Edit there rather than in individual components.

- Contact email: `CONTACT_EMAIL` in `src/lib/constants.ts`
- Social links: `SOCIAL_LINKS` in `src/lib/constants.ts`
- Sponsorship tiers: `SPONSOR_TIERS` in `src/lib/constants.ts`
- Images/logos: `src/assets/`

## Deployment

Every push to `main` auto-deploys via Vercel. `vercel.json` handles the
single-page-app routing rewrites.

If the domain ever changes, update `SITE_URL` in `src/lib/constants.ts` plus
the matching URLs in `public/sitemap.xml`, `public/robots.txt`, and
`index.html`. Those four are the only places the origin is hard-coded.
