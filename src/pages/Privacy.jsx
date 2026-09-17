import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { host, hostEuEntity, linkedin, owner } from '../data/contact.js'

const LAST_UPDATED = new Date(2026, 8, 14)

function Address({ t, entity }) {
  return (
    <p>
      {entity.name}
      <br />
      {entity.street}
      <br />
      {entity.city}
      <br />
      {t(entity.countryKey)}
    </p>
  )
}

function List({ t, i18nKey }) {
  return (
    <ul>
      {t(i18nKey, { returnObjects: true }).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// Rendered twice: once pinned to German (always, because that version is the
// authoritative one) and once in the visitor's language when that differs.
function LegalBody({ t, lang }) {
  const lastUpdated = new Intl.DateTimeFormat(lang, {
    month: 'long',
    year: 'numeric',
  }).format(LAST_UPDATED)

  return (
    <section lang={lang}>
      <h2 className="h4">{t('privacy.heading')}</h2>
      {lang !== 'de' && <p className="text-panel-note">{t('privacy.note')}</p>}

      <h3 className="h5 mt-4">{t('privacy.s1.heading')}</h3>
      <p>{t('privacy.s1.p1')}</p>
      <p className="mb-0">{t('privacy.s1.p2')}</p>

      <h3 className="h5 mt-4">{t('privacy.s2.heading')}</h3>
      <p>{t('privacy.s2.p1')}</p>
      <Address t={t} entity={owner} />
      <p className="mb-0">
        {t('common.emailLabel')}: <a href={`mailto:${owner.email}`}>{owner.email}</a>
      </p>

      <h3 className="h5 mt-4">{t('privacy.s3.heading')}</h3>
      <p>{t('privacy.s3.p1')}</p>
      <Address t={t} entity={host} />
      <p>{t('privacy.s3.euEntityIntro')}</p>
      <Address t={t} entity={hostEuEntity} />
      <p>{t('privacy.s3.p2')}</p>
      <List t={t} i18nKey="privacy.s3.items" />
      <p>{t('privacy.s3.p3')}</p>
      <p>{t('privacy.s3.p4')}</p>
      <p>{t('privacy.s3.p5')}</p>
      <p>{t('privacy.s3.p6')}</p>
      <p className="mb-0">{t('privacy.s3.p7')}</p>

      <h3 className="h5 mt-4">{t('privacy.s4.heading')}</h3>
      <p>{t('privacy.s4.p1')}</p>
      <p>{t('privacy.s4.p2')}</p>
      <List t={t} i18nKey="privacy.s4.items" />
      <p>{t('privacy.s4.p3')}</p>
      <p>{t('privacy.s4.p4')}</p>
      <p>{t('privacy.s4.p5')}</p>
      <p>{t('privacy.s4.p6')}</p>
      <p className="mb-0">{t('privacy.s4.p7')}</p>

      <h3 className="h5 mt-4">{t('privacy.s5.heading')}</h3>
      <p>{t('privacy.s5.p1')}</p>
      <p>{t('privacy.s5.p2')}</p>
      <p>{t('privacy.s5.p3')}</p>
      <p>{t('privacy.s5.p4')}</p>
      <Address t={t} entity={linkedin} />
      <p className="mb-0">{t('privacy.s5.p5')}</p>

      <h3 className="h5 mt-4">{t('privacy.s6.heading')}</h3>
      <p>{t('privacy.s6.p1')}</p>
      <p>{t('privacy.s6.p2')}</p>
      <p className="mb-0">{t('privacy.s6.p3')}</p>

      <h3 className="h5 mt-4">{t('privacy.s7.heading')}</h3>
      <p>{t('privacy.s7.p1')}</p>
      <p className="mb-0">{t('privacy.s7.p2')}</p>

      <h3 className="h5 mt-4">{t('privacy.s8.heading')}</h3>
      <p>{t('privacy.s8.p1')}</p>
      <ul>
        {t('privacy.s8.rights', { returnObjects: true }).map((right) => (
          <li key={right.term}>
            <strong>{right.term}</strong> {right.ref}
          </li>
        ))}
      </ul>
      <p>{t('privacy.s8.p2')}</p>
      <p className="mb-0">{t('privacy.s8.p3')}</p>

      <h3 className="h5 mt-4">{t('privacy.s9.heading')}</h3>
      <p>{t('privacy.s9.p1')}</p>
      <p className="mb-0">{t('privacy.s9.p2')}</p>

      <h3 className="h5 mt-4">{t('privacy.s10.heading')}</h3>
      <p>{t('privacy.s10.p1')}</p>
      <p className="mb-0">{t('privacy.s10.p2')}</p>

      <h3 className="h5 mt-4">{t('privacy.s11.heading')}</h3>
      <p>{t('privacy.s11.p1')}</p>
      <p className="text-panel-note mb-0">
        <strong>{t('privacy.lastUpdated', { date: lastUpdated })}</strong>
      </p>
    </section>
  )
}

export default function Privacy() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage
  const tDe = (key, options) => t(key, { ...options, lng: 'de' })

  return (
    <Container className="py-5">
      <section className="text-panel">
        <h1 className="text-panel-title">
          {t('privacy.pageTitle')}
          <span className="text-panel-subtitle">{t('privacy.pageSubtitle')}</span>
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
