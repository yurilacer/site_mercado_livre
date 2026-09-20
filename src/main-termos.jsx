import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Terms from './pages/Terms'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar />
    <Header />
    <Terms />
    <Footer />
  </StrictMode>,
)
