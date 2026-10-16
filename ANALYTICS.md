# Traffic tracking (Cloudflare Web Analytics)

## One-time setup (Omer does this himself)
1. Create a free Cloudflare account. In the dashboard open Web Analytics > Add a site.
2. Enter the hostname `omerhabib62.github.io`. Choose the manual JS snippet (the site is not proxied by Cloudflare).
3. Copy the snippet. Paste only the `token` value (inside `data-cf-beacon`) into `CLOUDFLARE_ANALYTICS_TOKEN` in `src/app/layout.tsx`.
4. Deploy, open the site once, wait a few minutes, check the dashboard shows a visit.

Until the token is pasted, no script is added. Paste it before you deploy, because the footer already says the site counts visits.

## What Cloudflare can and cannot do (from Cloudflare's docs)
- Works without proxying: yes. Manual setup embeds the snippet; data goes to `cloudflareinsights.com`.
- Cookies: Cloudflare says it uses no cookies or local storage for analytics. A banner is generally not needed, but that is a legal judgment, not a guarantee.
- Dimensions you get: country, host, path, referer (host only in the dashboard), device, browser, OS.
- **UTM tags are NOT shown.** Cloudflare says it does not log query strings, so `?utm_source=...` is dropped. Only the referring site is shown.
- Data detail is kept for 7 days, then reduced to about 10% for long-term storage. Numbers are sampled at query time, so treat small counts loosely.
- Not verified: whether Cloudflare accepts a `github.io` hostname when you add the site. The dashboard will tell you.

## Reading where visitors come from
- Referer shows e.g. `linkedin.com`, `fiverr.com`, `github.com`. That is the source.
- Many apps and email clients send no referer. Those visits show as direct, so "direct" is not only people typing the address.
- Fiverr gigs vs profile cannot be told apart by referer alone. If you need that, say so and we add small tagged pages such as `/from/fiverr-gig1`; the Path then shows which link was used.

## Links to paste
UTM tags do nothing in Cloudflare, but they are harmless. Plain links work just as well:

| Paste it in | Link |
|---|---|
| Fiverr profile / gigs | https://omerhabib62.github.io/ |
| LinkedIn "Contact info" website | https://omerhabib62.github.io/ |
| CVs (PDF header link) | https://omerhabib62.github.io/ |
| GitHub profile website field | https://omerhabib62.github.io/ |
| Upwork profile | https://omerhabib62.github.io/ |

A link straight to a PDF (`/resume.pdf`) is not counted, because a PDF cannot run the script. Always link to the site.

## What to watch
- Visits per week and the top referers.
- Top pages (this is a one-page site, so mostly `/`).
- Ignore tiny numbers. Judge after a month or about 50 visits.
- Your own visits count too.
