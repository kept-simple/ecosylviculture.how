import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import SiteFooter from './components/SiteFooter.jsx'
import SiteNavbar from './components/SiteNavbar.jsx'
import Contact from './pages/Contact.jsx'
import Download from './pages/Download.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import Impressum from './pages/Impressum.jsx'
import Privacy from './pages/Privacy.jsx'

export default function App() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
  }, [t])

  return (
    <div className="site">
      <div className="site-background" aria-hidden="true" />
      <SiteNavbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/download" element={<Download />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
