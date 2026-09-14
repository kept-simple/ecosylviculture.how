import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { downloads } from '../data/downloads.js'

export default function Download() {
  const { t } = useTranslation()

  return (
    <Container className="py-5">
      <section className="text-panel">
        <p className="text-panel-eyebrow">{t('download.eyebrow')}</p>
        <h1 className="text-panel-title">
          {t('download.title')}
          <span className="text-panel-subtitle">{t('download.subtitle')}</span>
        </h1>

        <p>{t('download.intro')}</p>

        <div className="download-list mt-4">
          {downloads.map((item) => (
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
                href={`${import.meta.env.BASE_URL}${item.file}`}
                download
              >
                {t('download.button')}
              </Button>
            </article>
          ))}
        </div>

        <p className="text-panel-note mt-4 mb-0">{t('download.note')}</p>
      </section>
    </Container>
  )
}
