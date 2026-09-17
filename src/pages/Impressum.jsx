import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { owner } from '../data/contact.js'

// Rendered twice: once pinned to German (always, because that version is the
// authoritative one) and once in the visitor's language when that differs.
function LegalBody({ t, lang }) {
  return (
    <section lang={lang}>
      <h2 className="h4">{t('impressum.heading')}</h2>
      {lang !== 'de' && <p className="text-panel-note">{t('impressum.note')}</p>}

      <p className="mb-0">
        {owner.name}
        <br />
        {owner.street}
        <br />
        {owner.city}
        <br />
        {t(owner.countryKey)}
      </p>

      <h3 className="h5 mt-4">{t('impressum.contactHeading')}</h3>
      <p className="mb-0">
        {t('common.emailLabel')}: <a href={`mailto:${owner.email}`}>{owner.email}</a>
      </p>

      <h3 className="h5 mt-4">{t('impressum.disputeHeading')}</h3>
      <p className="mb-0">{t('impressum.disputeText')}</p>

      <h3 className="h5 mt-4">{t('impressum.contentLiabilityHeading')}</h3>
      <p className="mb-0">{t('impressum.contentLiabilityText')}</p>

      <h3 className="h5 mt-4">{t('impressum.linksLiabilityHeading')}</h3>
      <p className="mb-0">{t('impressum.linksLiabilityText')}</p>

      <h3 className="h5 mt-4">{t('impressum.copyrightHeading')}</h3>
      <p className="mb-0">{t('impressum.copyrightText')}</p>
    </section>
  )
}

export default function Impressum() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage
  const tDe = (key, options) => t(key, { ...options, lng: 'de' })

  return (
    <Container className="py-5">
      <section className="text-panel">
        <h1 className="text-panel-title">
          {t('impressum.pageTitle')}
          <span className="text-panel-subtitle">{t('impressum.pageSubtitle')}</span>
        </h1>

        <LegalBody t={tDe} lang="de" />

        {lang !== 'de' && (
          <>
            <hr className="my-5" />
            <LegalBody t={t} lang={lang} />
          </>
        )}
      </section>
    </Container>
  )
}
