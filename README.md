# Sir Munaf Majeed Portfolio (Testing)

[![Deploy to GitHub Pages](https://github.com/tAlHa-Error404/sir-munaf-testing-portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/tAlHa-Error404/sir-munaf-testing-portfolio/actions/workflows/deploy-pages.yml)

Live Site: https://tAlHa-Error404.github.io/sir-munaf-testing-portfolio/

A static, responsive portfolio for Muhammad Munaf Majeed. Built with HTML, CSS (Bootstrap 5), and vanilla JavaScript. This README provides a formal, structured overview of the project, development workflow, and deployment options.

## Overview
- Purpose: Present executive profile, achievements, journey, vision, and media links.
- Tech stack: Bootstrap 5, vanilla JS, semantic HTML.
- Entry point: `html/index.html`.

## Repository Structure
```
├── html/                 # Public pages (entry: html/index.html)
├── css/                  # Stylesheets (site styles, gallery, thumbnails)
├── js/                   # Scripts (navigation, gallery, thumbnails, path resolver)
├── images/               # Static images and thumbnails
└── docs/                 # Project documentation
```

## Getting Started
- Open `html/index.html` directly in a browser, or serve locally:
  - `python -m http.server 8000` → `http://localhost:8000/html/index.html`.
- Requirements: Modern browser; no build step.

## Features
- Responsive layout and accessible navigation.
- Interactive media (YouTube hero and cards; gallery).
- Smooth in-page navigation with scroll behavior.
- Robust path normalization for hosted and local environments (`js/path-resolver.js`).

## Configuration
- Colors & theme: edit CSS variables in `css/styles.css`.
- Navigation labels/links: `html/index.html`, `html/pasha.html`.
- Content images: stored under `images/` and referenced from HTML/JS.
- News & gallery items: `js/gallery-new.js` and templates in `js/gallery-item-templates.js`.

## Path Resolution
- `js/path-resolver.js` uses `document.baseURI` to resolve relative URLs.
- Do not use `file:///` links; prefer relative paths or external `https://` URLs.
- Works when hosted under a subdirectory (e.g., `/Claude-profile/`).

## Deployment
### GitHub Pages (Root)
- Option: move `html/index.html` to repository root as `index.html`.
- Update asset paths accordingly.
- Enable Pages: Settings → Pages → Deploy from `main` → `/root`.

### GitHub Pages (Preserve `html/`)
- Place a copy of `index.html` under `/docs` and set Pages to `/docs`, or
- Use GitHub Actions to publish `/html` to `gh-pages` without altering structure.

## Accessibility & SEO
- Descriptive `alt` text for images; ensure color contrast meets guidelines.
- Add meta description and Open Graph tags to `html/index.html`.

## Maintenance
- Update content in `html/` and `js/` as needed.
- Optimize images to balance quality and performance.
- Verify external links after updates.

## Contact
- For training, engagement, and business inquiries: `munaf@s4scorp.com`.

