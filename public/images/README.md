# Real photography drop-in

This app currently renders **branded SVG illustrations** for every treatment, article,
and clinic-interior visual (see `src/visuals.jsx`). The only real photo used is the
founder portrait at `public/assets/yeyen.jpg`.

When you have real, properly-licensed clinic photography, drop the files here and wire
them in. Recommended files and sizes:

| Purpose            | Suggested file                 | Min size   | Where it plugs in |
|--------------------|--------------------------------|------------|-------------------|
| Doctor portrait    | `assets/yeyen.jpg` (already present) | 800×800   | `TEAM[0].img` in `src/data.js` |
| Associate doctors  | `images/team/<name>.jpg`       | 800×800    | add `img: "/images/team/<name>.jpg"` to a `TEAM` entry |
| Treatment photos   | `images/treatments/<id>.jpg`   | 1200×800   | see "Swapping a visual for a photo" below |
| Clinic interior    | `images/clinic/<scene>.jpg`    | 1200×800   | `ClinicVisual` usage in `src/screens/About.jsx` |
| Article hero       | `images/journal/<topic>.jpg`   | 1200×630   | `ArticleVisual` usage in `src/screens/Journal.jsx` |
| Social OG image    | `og-image.jpg` (replaces `og-image.svg`) | 1200×630 | update the `og:image` URLs in `index.html` |

## Swapping a treatment SVG visual for a real photo

`<TreatmentVisual tr={tr} ... />` draws an SVG. To use a photo instead, replace it with
the `<Photo>` primitive (already lazy-loaded with a graceful gradient fallback):

```jsx
import { Photo } from '../shared.jsx';

<Photo
  src={`/images/treatments/${tr.id}.jpg`}
  alt={`${tr.name.en} at SKINDERMA Aesthetic Clinic in Batam`}
  accent={tr.accent}   // gradient shown until the photo loads / if it 404s
  height={170}
/>
```

## Image checklist
- Real, licensed photography only. Do **not** use fake or AI-generated before/after results.
- Export web-optimised JPG or WebP, sized close to the rendered dimensions.
- Always provide descriptive `alt` text (good for accessibility and SEO).
