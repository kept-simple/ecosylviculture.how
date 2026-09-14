// Placeholder download list. Each entry pairs a file in public/downloads/ with
// a title and description in the catalogues (`download.items.<id>.*`).
// To publish a real file: drop it into public/downloads/, point `file` at it,
// fill in `size`, and add the matching strings to en/de/es.json.
export const downloads = [
  {
    id: 'fieldGuide',
    file: 'downloads/field-guide.pdf',
    format: 'PDF',
    size: null,
  },
  {
    id: 'speciesTable',
    file: 'downloads/site-species-table.xlsx',
    format: 'XLSX',
    size: null,
  },
  {
    id: 'markingProtocol',
    file: 'downloads/marking-protocol.pdf',
    format: 'PDF',
    size: null,
  },
]
