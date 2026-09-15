import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { gallery } from '../data/gallery.js'

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <Container className="py-5">
      <section className="text-panel text-panel-wide">
        <p className="text-panel-eyebrow">{t('gallery.eyebrow')}</p>
        <h1 className="text-panel-title">
          {t('gallery.title')}
          <span className="text-panel-subtitle">{t('gallery.subtitle')}</span>
        </h1>

        <p>{t('gallery.intro')}</p>

        <div className="gallery-grid mt-4">
          {gallery.map((item) => (
            <figure key={item.id} className="gallery-item">
              {/* Opens the full-resolution file; no lightbox library needed. */}
              <a
                href={`${import.meta.env.BASE_URL}${item.file}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.file}`}
                  alt={t(`gallery.items.${item.id}.alt`)}
                  loading="lazy"
                  className={`gallery-image gallery-image-${item.fit}`}
                />
              </a>
              <figcaption>{t(`gallery.items.${item.id}.caption`)}</figcaption>
            </figure>
          ))}
        </div>

        <p className="text-panel-note mt-4 mb-0">{t('gallery.note')}</p>
      </section>
    </Container>
  )
}
