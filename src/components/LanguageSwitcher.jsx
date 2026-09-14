import NavDropdown from 'react-bootstrap/NavDropdown'
import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '../i18n/index.js'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const active = i18n.resolvedLanguage

  return (
    <NavDropdown
      align="end"
      id="language-switcher"
      title={t(`language.${active}`)}
      aria-label={t('language.label')}
    >
      {supportedLanguages.map((lng) => (
        <NavDropdown.Item
          key={lng}
          active={lng === active}
          lang={lng}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {t(`language.${lng}`)}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  )
}
