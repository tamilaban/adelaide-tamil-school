# Adelaide Tamil School

Marketing website for **Adelaide Tamil School** — weekly Tamil language and
culture classes for all ages across South Australia (established 1988).

A standalone project. Content is modelled on
[brisbanetamilschool.org](https://brisbanetamilschool.org/) but localised to
Adelaide (Paradise campus, SA community-languages curriculum). The visual
language is borrowed from the **Skyrin** design system: navy `#15355E` primary,
amber `#CB8315` secondary, `Outfit` display type, frosted `glass-card` /
`glass-nav` panels, Framer Motion transitions. `Noto Sans Tamil` is layered in
for Tamil script.

## Stack

- React 19 + React Router 7
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion, lucide-react

## Commands

```bash
npm install
npm run dev              # dev server
npm run build            # production build -> dist/
npm run preview          # preview the build
node scripts/optimize-images.mjs   # one-off: downscale/recompress src/assets photos
```

## Structure

```
src/
  data/site.js        # single source of truth for ALL content
  components/          # Navbar, Footer, Hero, Stats, sections, primitives
  pages/              # Home, About, Programs, News, Resources, Achievements, Contact
  hooks/use3d.js       # parallax helper (from Skyrin)
  index.css           # design tokens + glass/gradient utilities
```

Edit `src/data/site.js` to change any text, dates, levels, people, events or
links — the pages read from it.

## Notes / TODO

- Photos in `src/assets` are placeholders carried over from the attendance
  project's asset library; swap for real Adelaide Tamil School photography.
- Committee / teacher names are role placeholders.
- `info@adelaidetamilschool.org` and the social links are placeholders.
- The **Enrol Now** button points at the real CLSSA SA enrolment portal
  (`schoolid=e12`) — confirm the school id.
- Magazine / download links are stubbed (`#`).
