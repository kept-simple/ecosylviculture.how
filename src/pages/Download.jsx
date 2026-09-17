import { useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'

import { buildDownloads, isVersionTag } from '../data/downloads.js'

// Long enough for a real tag, short enough that a junk parameter cannot stretch
// the note across the page.
const maxShownLength = 40

export default function Download() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()

  // `/download?version=v0.5.2` pins every link to that release; without the
  // parameter — or with one that is not a version tag — the latest release wins.
  const requested = searchParams.get('version')
  const pinned = isVersionTag(requested) ? requested : null
  const rejected = requested && !pinned ? requested.slice(0, maxShownLength) : null
  const items = useMemo(() => buildDownloads(pinned), [pinned])

  return (
    <Container className="py-5">
      <section className="text-panel">
        <p className="text-panel-eyebrow">{t('download.eyebrow')}</p>
        <h1 className="text-panel-title">
          {t('download.title')}
          <span className="text-panel-subtitle">{t('download.subtitle')}</span>
        </h1>

        <p>{t('download.intro')}</p>

        {pinned && (
          <p className="text-panel-note">
            {t('download.pinned', { version: pinned })}{' '}
            <Link to="/download">{t('download.pinnedLatest')}</Link>
          </p>
        )}

        {rejected && (
          <p className="text-panel-note">
            {t('download.versionInvalid', { value: rejected })}
          </p>
        )}

        <div className="download-list mt-4">
          {items.map((item) => (
            <article key={item.id} className="download-item">
              <div className="download-item-body">
                <h3>{t(`download.items.${item.id}.title`)}</h3>
                <p>{t(`download.items.${item.id}.text`)}</p>
                <span className="download-meta">
                  {item.format}
                  {item.size ? ` · ${item.size}` : ''}
                </span>
              </div>
              <Button
                variant="success"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {t(item.page ? 'download.buttonRelease' : 'download.button')}
              </Button>
            </article>
          ))}
        </div>

        <p className="text-panel-note mt-4 mb-0">
          {t(pinned ? 'download.notePinned' : 'download.note')}
        </p>
      </section>
    </Container>
  )
}
