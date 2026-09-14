import Container from 'react-bootstrap/Container'
import { Trans, useTranslation } from 'react-i18next'

const PILLARS = ['continuousCover', 'mixedStands', 'naturalRegeneration']

export default function Home() {
  const { t } = useTranslation()

  return (
    <Container className="py-5">
      <section className="text-panel">
        <div className="text-panel-header">
          <div>
            <p className="text-panel-eyebrow">{t('home.eyebrow')}</p>
            <h1 className="text-panel-title">
              ecosylviculture.how
              <span className="text-panel-subtitle">{t('home.role')}</span>
            </h1>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}leaf.svg`}
            alt=""
            className="text-panel-mark"
          />
        </div>

        <p>{t('home.intro')}</p>
        <p>
          <Trans i18nKey="home.principle" />
        </p>

        <dl className="pillar-list my-4">
          {PILLARS.map((pillar) => (
            <div key={pillar} className="pillar">
              <dt>{t(`home.pillars.${pillar}.term`)}</dt>
              <dd>{t(`home.pillars.${pillar}.text`)}</dd>
            </div>
          ))}
        </dl>

        <p className="mb-0">{t('home.closing')}</p>
      </section>
    </Container>
  )
}
