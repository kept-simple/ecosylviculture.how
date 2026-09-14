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

## Adding a download

1. Put the file in `public/downloads/`.
2. Add an entry to `src/data/downloads.js` (`id`, `file`, `format`, `size`).
3. Add `download.items.<id>.title` and `.text` to `en.json`, `de.json`,
   `es.json` and `fr.json`.

The three entries shipped today are placeholders: the files do not exist yet, so
their buttons 404 until real ones are added.

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
