import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function SiteFooter() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <Container className="d-flex flex-wrap justify-content-between gap-2">
        <span>&copy; {new Date().getFullYear()} ecosylviculture.how</span>
        <nav className="site-footer-links">
          <NavLink to="/impressum">{t('footer.impressum')}</NavLink>
          <NavLink to="/privacy">{t('footer.privacy')}</NavLink>
        </nav>
      </Container>
    </footer>
  )
}
