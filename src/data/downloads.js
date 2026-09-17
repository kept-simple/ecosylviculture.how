// The msgraph builds, published as release assets of kept-simple/mstella-plugin.
//
// Which release the buttons point at is decided by the `version` query
// parameter of the download page (`/download?version=v0.5.2`). Without it the
// links use GitHub's `latest` redirects, which always resolve to the newest
// release and therefore need no editing when a version ships. The parameter is
// taken as the release tag verbatim — nothing here asks GitHub which tags
// exist, so a tag that was never published simply yields a 404 on GitHub.
//
// GitHub spells the two cases differently, hence the two shapes below:
//   latest   /releases/latest/download/<asset>   /releases/latest
//   pinned   /releases/download/<tag>/<asset>    /releases/tag/<tag>
//
// `page: true` marks an entry that points at the release page instead of a
// file: the QGIS plugin is published as `mstella_<version>.zip`, and a name
// that carries the version cannot be addressed through the latest redirect.
// Titles and descriptions live in the catalogues under `download.items.<id>.*`.
const releases = 'https://github.com/kept-simple/mstella-release/releases'

// Accepted: `v0.5.2`, `0.5.2`, `v1.2`, `1`, with an optional pre-release suffix
// (`v0.6.0-rc.1`). Everything else is refused rather than sanitised, because
// the value is pasted straight into the release URL and a segment such as `..`
// would send visitors somewhere else entirely.
const versionTag = /^v?\d+(\.\d+){0,2}(-[0-9A-Za-z.]+)?$/

export function isVersionTag(value) {
  return typeof value === 'string' && versionTag.test(value)
}

// `tag` null (or anything that is not a version tag) means: the latest release.
export function buildDownloads(tag) {
  const pinned = isVersionTag(tag) ? tag : null
  const asset = (name) =>
    pinned
      ? `${releases}/download/${pinned}/${name}`
      : `${releases}/latest/download/${name}`
  const releasePage = pinned ? `${releases}/tag/${pinned}` : `${releases}/latest`

  return [
    {
      id: 'windows',
      url: asset('mstella.exe'),
      format: 'Windows · EXE',
      size: '≈ 99 MB',
    },
    {
      id: 'linux',
      url: asset('mstella-linux-x86_64'),
      format: 'Linux · x86_64',
      size: '≈ 138 MB',
    },
    {
      id: 'qgisPlugin',
      url: asset('mstella-QGIS-plugin.zip'),
      format: 'QGIS · ZIP',
      size: '≈ 23 KB'
    },
  ]
}
