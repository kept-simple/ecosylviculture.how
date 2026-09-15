import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function SiteNavbar() {
  const { t } = useTranslation()

  return (
    <Navbar expand="sm" variant="light" className="site-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-semibold d-flex align-items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}leaf.svg`} alt="" className="site-navbar-mark" />
          ecosylviculture.how
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-nav" />
        <Navbar.Collapse id="site-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              {t('nav.home')}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              {t('nav.gallery')}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              {t('nav.contact')}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/download">
              {t('nav.download')}
            </Nav.Link>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
