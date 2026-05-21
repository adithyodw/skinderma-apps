# SKINDERMA Aesthetic Clinic

Bilingual (English / Bahasa Indonesia) physician-led aesthetic clinic app for
**SKINDERMA Aesthetic Clinic**, Batam — acne, melasma, laser, HIFU, and skin
rejuvenation. Built with **Vite + React 18**.

> Live target: `https://skinderma.vercel.app/`

---

## Tech stack

- **Vite 6** build tooling (fast dev server, minified production bundle)
- **React 18** (ES modules, automatic JSX runtime)
- No CSS framework — design tokens in `src/styles.css`, component-scoped inline styles
- Branded **SVG illustrations** for treatment / article / clinic imagery (`src/visuals.jsx`)
- Full SEO head (meta, Open Graph, Twitter, canonical, JSON-LD `MedicalClinic`) in `index.html`

## Project structure

```
.
├── index.html              # Vite entry + all SEO meta + JSON-LD structured data
├── vite.config.js
├── vercel.json             # Vercel build config, SPA rewrite, security headers
├── public/
│   ├── favicon.svg, logo.svg, og-image.svg
│   ├── robots.txt, sitemap.xml, site.webmanifest
│   ├── assets/yeyen.jpg    # real founder portrait (only real photo in the app)
│   └── images/README.md    # how to drop in real clinic photography later
└── src/
    ├── main.jsx            # entry — mounts <App/>
    ├── App.jsx             # device frame, tab routing, language toggle
    ├── data.js             # all bilingual content (treatments, articles, reviews, …)
    ├── shared.jsx          # icons + UI primitives (Photo, Pill, SectionHead, …)
    ├── visuals.jsx         # SVG illustration engine
    ├── ios-frame.jsx       # iOS device frame wrapper
    └── screens/            # Home, Treatments, About, Journal, Contact
```

> `legacy/` (git-ignored) holds the original browser-only prototype for reference.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally (http://localhost:4173)
```

---

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "feat: production Vite build of SKINDERMA clinic app"
git branch -M main
git remote add origin https://github.com/adithyodw/skinderma-apps.git
git push -u origin main
```

### 2. Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel            # first run links the project (accept Vite defaults)
vercel --prod     # production deploy
```

**Option B — Vercel dashboard**

1. <https://vercel.com/new> → Import the `skinderma-apps` GitHub repo.
2. Framework preset: **Vite** (auto-detected). Build: `npm run build`. Output: `dist`.
3. Deploy. Add the `skinderma.vercel.app` domain (or a custom domain) under
   *Settings → Domains*.

### 3. After first deploy
- Confirm the production URL matches the `canonical` / `og:image` URLs in `index.html`.
  If you use a different domain, update those URLs and `public/sitemap.xml` + `public/robots.txt`.
- Submit `https://<domain>/sitemap.xml` in Google Search Console.

---

## Notes & honest limitations

- **Imagery** is intentionally branded SVG + the one real founder portrait. No fake or
  AI-generated before/after results are used. See `public/images/README.md` to swap in
  real, licensed clinic photography.
- This is presented as an **app preview inside a phone frame**. It is a single-page
  client-rendered React app: `index.html` ships a crawlable `<h1>` + summary fallback and
  full structured data, but for top-tier organic ranking a dedicated multi-page marketing
  site (server-rendered) would outperform an app demo.
- WhatsApp booking opens `https://wa.me`-style deep links pre-filled for the clinic number
  `+62 812-6188-4912`.

## License

Proprietary — © 2026 SKINDERMA Aesthetic Clinic. All rights reserved.
