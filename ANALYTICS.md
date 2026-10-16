# Traffic tracking (GoatCounter)

## One-time setup (Omer does this himself)
1. Go to goatcounter.com and sign up (free). Pick a site code, e.g. `omerhabib62`.
2. Paste only that code into `GOATCOUNTER_CODE` in `src/app/layout.tsx`.
3. Deploy. Open the site once, then check the GoatCounter dashboard shows 1 visit.

Until the code is pasted, no script is added to the site.

## Links to paste (all point to the site, so they get counted)
Add `?utm_source=...` to the site address. GoatCounter shows `utm_source` in its Referrers list.

| Paste it in | Link |
|---|---|
| Fiverr profile "website" / description | https://omerhabib62.github.io/?utm_source=fiverr-profile |
| Fiverr gig 1 (description or FAQ) | https://omerhabib62.github.io/?utm_source=fiverr-gig1 |
| Fiverr gig 2 | https://omerhabib62.github.io/?utm_source=fiverr-gig2 |
| LinkedIn "Contact info" website | https://omerhabib62.github.io/?utm_source=linkedin |
| Backend CV (PDF header link) | https://omerhabib62.github.io/?utm_source=cv-backend |
| AI CV (PDF header link) | https://omerhabib62.github.io/?utm_source=cv-ai |
| Analytics CV (PDF header link) | https://omerhabib62.github.io/?utm_source=cv-analytics |
| GitHub profile README / website field | https://omerhabib62.github.io/?utm_source=github |
| Upwork profile | https://omerhabib62.github.io/?utm_source=upwork |

Notes:
- A link straight to a PDF (`/resume.pdf`) is NOT counted, because a PDF cannot run the script. Always link to the site.
- Links already on the site (footer, dock) do not need tags.

## What to watch
- Visits per week, and which source brings them (Referrers).
- Top pages. This is a one-page site, so expect mostly `/`.
- Ignore tiny numbers: 3 visits vs 5 means nothing. Judge after a month or ~50 visits.
- Your own visits count too. In GoatCounter, Settings > "Ignore IPs" lets you skip yours.
