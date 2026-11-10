# AamirDev developer website

Static site for the AamirDev Android game developer identity. It hosts the
public privacy policy and support pages used for Google Play listings and for
Google AdMob verification.

## Live URLs

| Page | URL |
| --- | --- |
| Home | https://aamirali65.github.io/ |
| About | https://aamirali65.github.io/about.html |
| Games | https://aamirali65.github.io/games/ |
| Skybound Adventures | https://aamirali65.github.io/games/skybound-adventures.html |
| Privacy policy | https://aamirali65.github.io/privacy/ |
| Skybound Adventures privacy policy | https://aamirali65.github.io/privacy/skybound-adventures.html |
| Support | https://aamirali65.github.io/support/ |
| Skybound Adventures support | https://aamirali65.github.io/support/skybound-adventures.html |
| Terms of service | https://aamirali65.github.io/terms/ |
| Contact | https://aamirali65.github.io/contact.html |
| app-ads.txt | https://aamirali65.github.io/app-ads.txt |

## Structure

```
index.html                     Home
about.html                     About the developer
contact.html                   Contact details
style.css                      Single stylesheet, neutral dark theme
script.js                      Empty by design, no animation or cursor effects
favicon.svg                    Monogram favicon
app-ads.txt                    AdMob authorized sellers file
games/index.html               Games list
games/skybound-adventures.html Game detail page
privacy/index.html             General privacy policy
privacy/skybound-adventures.html App-specific privacy policy
support/index.html             General support
support/skybound-adventures.html App-specific support
terms/index.html               Terms of service
```

No build step and no dependencies. Open the HTML files directly to preview.

## Design rules used

- Neutral dark palette with solid colours only.
- Rectangular buttons with a small radius. No pill shapes.
- No emoji icons, no illustrations, no stock or generated photography.
- No cursor effects and no scroll animations.
- No invented ratings, reviews, download counts or support counters.
- No marketing claims that cannot be verified.

## Google Play Console

Paste these into the Play Console listing:

- Privacy policy field: `https://aamirali65.github.io/privacy/skybound-adventures.html`
- Developer website field: `https://aamirali65.github.io/`
- App support contact: `https://aamirali65.github.io/contact.html`

## AdMob

`app-ads.txt` currently holds only comments, so nothing invalid is published.
To activate it:

1. Sign in to AdMob and open Apps, then the app, then App settings.
2. Copy the publisher ID, which starts with `ca-app-pub-`.
3. Add this line to `app-ads.txt`, replacing the placeholder number:
   `google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0`
   replacing `0000000000000000` with your own 16-digit publisher number.

In AdMob, set the app-ads.txt verification source to the developer website
`aamirali65.github.io`. Verification can take up to 24 hours after the file is
live.

## Custom domain

The site currently runs on the free `aamirali65.github.io` address. To attach a
custom domain:

1. Add the domain in the repository under Settings, then Pages, then Custom domain.
2. Create the DNS records GitHub shows for that domain.
3. Enable Enforce HTTPS once the certificate is issued.

Do not commit a `CNAME` file until the domain is actually owned and its DNS is
configured, otherwise GitHub Pages will stop serving the site.

## Deployment

The repository is `aamirali65/aamirali65.github.io`, served from the `master`
branch root by GitHub Pages.
