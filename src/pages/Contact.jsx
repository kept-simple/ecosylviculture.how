import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { owner } from '../data/contact.js'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Container className="py-5">
      <section className="text-panel">
        <p className="text-panel-eyebrow">{t('contact.eyebrow')}</p>
        <h1 className="text-panel-title">
          {t('contact.title')}
          <span className="text-panel-subtitle">{t('contact.subtitle')}</span>
        </h1>

        <p>{t('contact.intro')}</p>

        <Row className="mt-4 g-4">
          <Col md={6}>
            <h2 className="h5">{t('contact.directHeading')}</h2>
            <p className="mb-0">
              {t('common.emailLabel')}: <a href={`mailto:${owner.email}`}>{owner.email}</a>
            </p>
          </Col>
          <Col md={6}>
            <h2 className="h5">{t('contact.addressHeading')}</h2>
            <p className="mb-0">
              {owner.name}
              <br />
              {owner.street}
              <br />
              {owner.city}
              <br />
              {t(owner.countryKey)}
            </p>
          </Col>
        </Row>

        <p className="text-panel-note mt-4 mb-0">{t('contact.note')}</p>
      </section>
    </Container>
  )
}
