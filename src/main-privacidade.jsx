import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar />
    <Header />
    <PrivacyPolicy />
    <Footer />
  </StrictMode>,
)
