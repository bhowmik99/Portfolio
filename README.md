# Utsho Bhowmik — Research Portfolio

Static HTML/CSS/JavaScript research portfolio prepared for GitHub Pages.

## Deploy on the existing GitHub Pages repository

1. Back up the current `Portfolio` repository or create a branch.
2. Replace the existing site files with the contents of this folder.
3. Commit and push to the `main` branch.
4. In GitHub: **Settings → Pages** and keep the deployment source set to the branch/folder you already use (normally `main` / root).
5. After GitHub Pages finishes deploying, hard-refresh `https://bhowmik99.github.io/Portfolio/`.

The site has no build step and no external framework. `index.html` is the entry point.

## Structure

- `index.html` — home / research / publications / projects / about / contact
- `research/chromium.html` — detailed chromium transport case study
- `research/river-ml.html` — ongoing river water-quality + ML research
- `projects/` — computational and academic engineering project pages
- `drafts/rupsha.html` — **not linked from the public site**; attribution requires clarification before publishing
- `assets/images/` — research and project figures
- `assets/docs/Utsho_Bhowmik_CV.pdf` — public CV
- `style.css` — full responsive design system
- `script.js` — mobile navigation, current year, image lightbox

## Public-data choices

The raw ongoing-research literature workbook is intentionally **not included** in the deployable site. The public page uses aggregate counts and a small representative preview instead. Recommendation letters, testimonials, phone/WhatsApp details, GRE and IELTS status from the old portfolio are also intentionally excluded.

## Local preview

Opening `index.html` directly in a browser is sufficient for most review. For a local web-server preview, from this folder run, for example:

```bash
python -m http.server 8000
```

and open `http://localhost:8000/`.

## Before final publication

Read `REVIEW_NOTES.md`. The main outstanding content issue is the exact role in the Rupsha River sediment study.
