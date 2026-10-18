# HarborMap NY — Find help. Find your way.

Independent, free, privacy-conscious community service navigator for **New York City**, with a documented statewide expansion pathway. This is NOT a New York City / New York State / MTA government product, legal advisor, healthcare provider or emergency service.

**Live application:** https://senih25.github.io/harbormap-ny/

## Public-benefit features

- Search, ZIP and borough filters; accessible list plus map; public facility provenance.
- 7 languages in the service-finder interface: EN, ES, AR (RTL), FR, Haitian Creole, Chinese (Simplified), Turkish. Community translation review is recommended.
- Consent-first browser geolocation. Coordinates are held only in memory; distance calculation is on-device.
- User-clicked directions, official-source links, phone links, and optional share.
- Verified source metadata; referral-only for MOIA, 211, MTA, pharmacies and social services without openly reusable provider data.
- No account, advertisements, behavioral analytics, cookie banners or tracking.

## Imported data (snapshot checked 2026-10-19)

| Source | Records | Update shown by publisher |
| --- | ---: | --- |
| NYC Office of Technology and Innovation public computer centers | 468 | 2026-03-26 |
| Queens Public Library branches | 66 | 2026-07-08 |
| NYS Department of Health hospital-classified NYC records | 67 | 2026-09-01 |

Records are not a promise of current hours, eligibility, services or a unique count of physical sites. Queens branch coordinates are rounded; some computer centers require membership or have other access conditions. See [about.html](./about.html) and [source register](./data/source-register.json).

## Local development

- Requires Node.js >=18; no runtime npm dependencies and no build system.
- `node tests/validate.cjs` verifies schema fields, IDs and geographic bounds.
- `node server.js` serves on **127.0.0.1:4173**, not an external interface.
- Open http://127.0.0.1:4173/ ; Ctrl+C stops the local server.

GitHub Pages can publish the repository root from `main`. `.nojekyll` keeps static assets as-is. Paths are relative to support the project subdirectory URL.

## SEO, GEO and search discovery

- Canonical and Open Graph URLs point to the project's GitHub Pages URL.
- JSON-LD WebApplication declares NYC scope and independence.
- `sitemap.xml` lists the canonical home and about pages.
- `llms.txt` summarizes evidence, scope and original provenance; it does **not** ensure AI visibility.
- `robots.txt` under a project Pages subdirectory is NOT the origin's /robots.txt. No change has been made to another GitHub Pages repository.
- Google Search Console ownership requires independent verification; publishing a sitemap does not automatically verify or index pages. A URL-prefix property and a Google-provided verification file/tag may be needed.

## Privacy and safety

No precise location, identity, documents or search history is saved. The app requests browser location **only** on a user click, holds it temporarily in memory and does not use external analytics. OpenStreetMap tiles (and clicked directions/external links) are third-party network requests; those services may observe IP information or map viewport. Follow OSM tile policy; do not bulk cache or prefetch OSM tiles. No live route computation, transit ETAs, medical, legal or eligibility determinations.

## Public deployment checklist

Confirm public-source provenance, clean user data and absence of secrets; verify local tests and mobile/desktop UI; enable GitHub Pages; confirm live HTTP 200, map/list, translation, canonical, sitemap; verify and submit the sitemap through Google Search Console where authorized. This project should not be described as fully audited for WCAG, translation quality or all agency license conditions.

## Attribution

© OpenStreetMap contributors (ODbL), NYC Open Data / NYC OTI, Queens Public Library, NYS Department of Health. Additional publisher terms may apply; check the source register and agency terms.

MIT software license (excluding separately licensed third-party data and branding) may be chosen before broader code reuse. **No blanket license is granted for the public datasets.**
