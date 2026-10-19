# Security policy

## Security-first public service

HarborMap NY serves communities that may be at elevated privacy risk. Do not send or publish sensitive information in an issue, pull request, source file, screenshot or debugging log.

**Never disclose:** immigration status, identity documents, home addresses, health details, hidden shelter locations, private access points, credentials, API keys or GitHub tokens.

## Privately report a vulnerability

Use **[Report a vulnerability (private GitHub Security Advisory)](https://github.com/senih25/harbormap-ny/security/advisories/new)**. Private vulnerability reporting is enabled for this repository.

Please include a minimal reproduction and impact description. Do not send weaponized proof-of-concepts, secrets, sensitive personal data or exploits targeting actual providers. Do not publicly disclose an unfixed vulnerability; maintainers will review in good faith as capacity permits. No guaranteed response time or bug bounty exists.

Ordinary public bugs belong in the [issue tracker](https://github.com/senih25/harbormap-ny/issues) using the templates, **without personal information**.

## Supported versions

| Channel | Status |
| --- | --- |
| Live GitHub Pages from `main` | Supported public prototype |
| Unmerged branches, forks or third-party mirrors | Not supported by maintainers |

## Security boundaries

- GitHub public visibility grants **read access**, not permission to modify the main branch.
- Protected `main` rules require pull requests and successful project checks; a maintainer decides publication.
- No secrets are needed to run or use the project. Actions operate with the minimum required permissions.
- Built-in secret scanning, push protection and private vulnerability reporting are enabled.
- No precise visitor geolocation is stored. The app requests browser location only following a “Near me” click; third-party tiles may receive network metadata.
- The local development server is a **127.0.0.1-only test server**; never expose it as an Internet-facing service.

These controls reduce risk but **do not prevent cloning, forking, viewing public code or all possible attacks**. Verification and scope of protection should be rechecked after any repository permission changes.
