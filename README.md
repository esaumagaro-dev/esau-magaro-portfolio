# Esau Magaro — Portfolio

A lightweight static portfolio for Esau Nehemia Magaro. It is written in plain HTML, CSS and JavaScript, with no framework or runtime dependencies. The page content is present in the HTML source for search engines and works without a backend.

## Run locally

Requirements: Node.js 20+ and npm 10.9.2 (or compatible npm 10).

```bash
npm install
npm run build
npm run preview
```

Open `http://localhost:3000`. Edit the page content in `index.html`, its appearance in `src/styles.css`, and the small mobile-navigation behavior in `src/main.js`. `npm run build` creates the deployable site in `dist/`.

## Deploy on Netlify

**Option A — connect a GitHub repository**

1. Create a repository in your GitHub account and push the contents of this folder.
2. In Netlify, choose **Add new site → Import an existing project** and connect that repository.
3. Use the settings in `netlify.toml`: build command `npm run build`, publish directory `dist`, Node version 22.
4. After Netlify assigns your URL, add that real URL as the canonical URL and `og:url` in `index.html` before sharing the site. No domain has been guessed or hard-coded in this project.

**Option B — manual deploy**

Run `npm run build`, then upload the contents of `dist/` using Netlify's manual deploy flow.

## Files

- `index.html` — complete public-facing content and social/SEO metadata.
- `src/styles.css` — responsive layout, color system, focus states and reduced-motion behavior.
- `src/main.js` — accessible mobile navigation and current-year label.
- `public/` — favicon, web manifest, robots policy and route declaration.
- `scripts/` — dependency-free build and preview servers.
- `netlify.toml` — Netlify's build and static-publish settings.
- `dist/` — built site, ready for manual deploy.

## Content and privacy

The page uses the professional email and GitHub profile from the supplied CV. It does not publish the date of birth, personal phone number, or referee details. The original PDF is deliberately not included because it contains personal and third-party contact details. If you want a CV download, first create a separate public copy with those details removed.

The repository cards link to `securemoney`, `neardrop` and `roadpoathole`. I left out `crmd` because its README names another student as the project student/author; add it after confirming your contribution. Five further project summaries are marked as CV-listed work and do not imply matching GitHub repositories.

The contact link opens the visitor's email app. Supabase is not needed unless you later want a feature such as stored contact submissions or a private admin area. The page is English-first, matching the CV; the CV lists Kiswahili and English as fluent.
