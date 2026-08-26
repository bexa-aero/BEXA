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

## Ownership

This repository belongs to the `bexa-aero` organization so it outlives any
individual member. Three accounts run the site:

| Service | What it does |
|---------|--------------|
| Porkbun | Registers the flybexa.com domain |
| GitHub  | Holds this code |
| Vercel  | Builds and serves the site |

Access questions go to bexa.aero@gmail.com. When officers change over, hand
off all three, not just this repo.

## Deployment

Every push to `main` auto-deploys via Vercel. `vercel.json` handles the
single-page-app routing rewrites.

`www.flybexa.com` is a 308 redirect to the apex domain, which is canonical.

**Keep this repository public.** Vercel's free Hobby plan does not support
private repositories owned by an organization. If it is switched to private,
deploys stop firing while the Vercel dashboard still reports "Connected" —
a silent failure that is hard to diagnose.

If the domain ever changes, update `SITE_URL` in `src/lib/constants.ts` plus
the matching URLs in `public/sitemap.xml`, `public/robots.txt`, and
`index.html`. Those four are the only places the origin is hard-coded.
