# ecosylviculture.how

Static site about close-to-nature silviculture — continuous cover forestry,
site-adapted mixtures and natural regeneration.

Built with Vite, React, React Router, React-Bootstrap and i18next, in English,
German, Spanish and French. Same stack and structure as the `helge` portfolio
site; the colour scheme is white-based rather than dark.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the built site
```

## Structure

```
public/           CNAME, background (forest.svg) and mark (leaf.svg), downloads/
src/components/   navbar, footer, language switcher
src/data/         contact.js (address, VAT id), downloads.js (download list)
src/i18n/         i18next setup and the en/de/es/fr catalogues
src/pages/        Home, Contact, Download, Impressum, Privacy
```

All visible strings live in `src/i18n/locales/*.json`. The four catalogues share
one key set — add a key to all four or `en` will be used as fallback. A new
language also needs an import and an entry in `supportedLanguages` and
`resources` in `src/i18n/index.js`, plus its own `language.<code>` label in
every catalogue.

## Downloads

The download page offers the msgraph builds — Windows, Linux, the two macOS
builds (arm64 and x86_64, both unsigned, hence the Gatekeeper note carried by
`unsigned: true`) and the QGIS plugin. The files are not stored here: `src/data/downloads.js` links to release
assets of `kept-simple/mstella-plugin` through
`/releases/latest/download/<asset>`, a GitHub redirect that always resolves to
the newest release, so no link needs editing when a version ships.

### Pinning a version

`/download` takes an optional `version` parameter: `/download?version=v0.5.2`
rewrites every link on the page to that release (`/releases/download/<tag>/…`
for the files, `/releases/tag/<tag>` for the plugin page). Without the
parameter the `latest` redirects are used.

The value is taken as the release tag as written, and only checked against the
shape of a version (`v0.5.2`, `0.5.2`, `v0.6.0-rc.1`). Nothing asks GitHub
which tags exist, so a tag that was never published gives a 404 on GitHub
rather than an error on the page. A value that is not a version tag is refused
and the page falls back to the latest release with a note — the parameter ends
up inside the release URL, so a segment such as `..` must not pass through.

### Caveats

- The redirect only works for assets whose name carries no version number
  (`mstella.exe`, `mstella-linux-x86_64`). The QGIS plugin is published as
  `mstella_<version>.zip`, so its entry sets `page: true` and links to the
  release page instead. Publish the ZIP under a fixed name as well and it can
  use a direct link too.
- `kept-simple/mstella-plugin` is a private repository. Release assets of a
  private repository need an authenticated request, so these links only work
  for visitors once the repository is public.

To add a build: add an entry to `src/data/downloads.js` (`id`, `url`, `format`,
`size`, optionally `page`) and `download.items.<id>.title` and `.text` to
`en.json`, `de.json`, `es.json` and `fr.json`. The `size` values are rounded by
hand and drift as the binaries grow.

## Legal pages

`Impressum` and `Privacy` render the German text first — that version is the
authoritative one — followed by the visitor's language when it differs. The text
is taken unchanged from the `helge` site, so the controller details in
`src/data/contact.js` and the statements about hosting and LinkedIn apply here
too and should be re-checked before going live.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to GitHub Pages. `public/CNAME` points the site at the custom domain
`ecosylviculture.how`, which is why `vite.config.js` uses `base: '/'`. The
workflow copies `index.html` to `404.html` so client-side routes survive a
direct hit or a page reload.
