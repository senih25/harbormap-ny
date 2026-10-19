<div align="center">

<img src="assets/mark.svg" alt="HarborMap NY project mark" width="88" height="88">

# HarborMap NY
### Find help. Find your way.

**A privacy-conscious, multilingual public-service navigator for New York City.**

[Explore the live map](https://senih25.github.io/harbormap-ny/) · [Data, limitations & privacy](https://senih25.github.io/harbormap-ny/about.html) · [Suggest an improvement](https://github.com/senih25/harbormap-ny/issues)

![CI](https://github.com/senih25/harbormap-ny/actions/workflows/ci.yml/badge.svg)
![Public-interest project](https://img.shields.io/badge/purpose-public%20benefit-197e75)
![NYC launch](https://img.shields.io/badge/coverage-NYC%20only-102d3a)

</div>

---

## Why this exists

Finding a nearby hospital, a public computer, a library, or a trusted place to ask for help should not require navigating dozens of websites. **HarborMap NY** brings verified *publicly listed* facilities together in one accessible map and text directory, designed for newcomers, immigrants, refugees, asylum seekers **and any other New York resident**.

Our principles are simple: **no immigration-status questions, no account, no advertising, no behavioral tracking, and clear links back to original sources.** Everyone deserves a practical starting point.

This is a **non-governmental, nonpartisan, independent community project**. It is not endorsed by New York City, New York State, MTA, any library system, or a provider. It is not a hotline or a source of legal, medical or eligibility advice.

## What you can do

| Explore | Inclusive by design | Privacy and provenance |
| --- | --- | --- |
| Search names, addresses and ZIP codes | English, Español, العربية (RTL), Français, Kreyòl Ayisyen, 简体中文, Türkçe | Original agencies linked from facility records |
| Filter by borough and service category | Responsive mobile/desktop layout and text-list fallback | Browser location **only after** choosing “Near me” |
| View public facilities on an attributed OpenStreetMap map | Keyboard-focus states and reduced-motion support | No account, stored location or analytics |
| Open directions, telephone and provider links deliberately | Emergency and crisis-support numbers clearly separated | Source limitations and snapshot dates disclosed |

**What is not claimed:** real-time opening hours, complete pharmacy listings, live MTA arrivals, accessible access at every location, verified language availability everywhere, or eligibility for a program. Directories such as 211 NY, NYC311, MOIA and MTA are **outbound referrals**, not copied proprietary data.

## NYC launch: 601 source records

Public-data snapshot verified **2026-10-19**. These are validated entries, **not** a count of uniquely operating providers.

| Category / publishing agency | Mapped records | Date displayed by source | Geographic caveat |
| --- | ---: | --- | --- |
| Public computer centers / NYC Office of Technology and Innovation | **468** | 2026-03-26 | Five NYC boroughs; restrictions may apply |
| Queens Library Branches / Queens Public Library | **66** | 2026-07-08 | **Queens only**; some map coordinates are approximate |
| Hospital-classified facilities / NYS Department of Health | **67** | 2026-09-01 | NYC counties only, `HOSP` classification |

Records were filtered for populated names, public addresses and in-bounds coordinates. Updates are **not automatic**. Administrative “Currently open” data does not establish current walk-in hours. Always confirm details with the source agency.

**Source-of-truth documentation:** [Machine-readable source register](data/source-register.json) · [Public-facing methodology, FAQ and privacy](about.html) · [NYC Open Data](https://www.nyc.gov/opendata) · [OPEN-NY terms](https://data.ny.gov/dataset/OPEN-NY-Terms-Of-Use/77gx-ii52).

## Quick start (local)

This is a static HTML/CSS/JS application with **no production npm dependencies** and no required account or API key.

```bash
git clone https://github.com/senih25/harbormap-ny.git
cd harbormap-ny
npm test
npm start
```

Open `http://127.0.0.1:4173/`. The local Node server binds **only to 127.0.0.1**. Stop it with Ctrl+C. GitHub Pages serves the static files; it **does not run** `server.js`.

Tests cover field completeness, unique display IDs, NYC coordinate bounds, URL metadata, seven translation dictionaries, sitemap and structured data, attribution/source mapping, PWA icon sizes and absence of tracking script references. GitHub Actions runs the same checks on `main` and proposed changes. This does **not** constitute a comprehensive accessibility, security, translations or legal audit.

## Safety, maintenance and contributor access

- **Protected publication path:** `main` is protected by repository rules. Changes are proposed by pull request, checked by CI and merged only by an authorized maintainer. Ordinary readers have no write permission. Pull requests are suggestions, **not** published changes.
- **Security:** GitHub secret scanning, push protection and private vulnerability reporting; `GITHUB_TOKEN` is read-only in CI. See [SECURITY.md](SECURITY.md).
- **Issues:** factual bugs, source corrections and accessibility feedback are welcome through [guided issue templates](.github/ISSUE_TEMPLATE). **Never publish** home addresses, immigration status, identity documents, medical records, refuge locations, keys or other sensitive details.
- **Change control:** no automated acceptance of public submissions, no auto-merge and no public deployment by outside contributors. See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
- **Data care:** official, publicly published public-facing facilities only. Refreshes need a source-specific license, provenance and freshness review.

**Public repository does not mean unrestricted reuse.** No blanket software or data license has been granted. GitHub viewing and forking permissions are subject to its Terms of Service; third-party datasets keep their own terms. Contact the maintainer through GitHub before redistributing, relicensing or repurposing project-specific materials.

## Search, accessibility and scope

GitHub Pages: [https://senih25.github.io/harbormap-ny/](https://senih25.github.io/harbormap-ny/). The site includes canonical metadata, schema.org `WebApplication`, Open Graph, `sitemap.xml`, and explanatory `llms.txt`. Those are discovery aids, **not** promises of Google indexing, rankings or AI citations.

Current map coverage is **NYC, not all of New York State**. A statewide version will require a separately verified data inventory, rights review, coverage testing and funding/maintenance plan. We are aiming for WCAG 2.2 AA, not claiming certification.

## Project stewardship

Maintained by **[Senih Bayankulu](https://www.linkedin.com/in/senih25/)** for social benefit, service accessibility and responsible civic technology.

For emergencies in the US call **911**. For emotional crisis support call/text **988**. For non-emergency NYC referrals use **311**; for NY statewide resource referrals use **211** (service availability varies). This repository does not dispatch assistance or determine eligibility.

**HarborMap NY · Find help. Find your way.**
