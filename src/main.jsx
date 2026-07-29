import './lib/url-parse-polyfill'   // pdf.js'ten önce yüklenmeli
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Reload page if a lazy-loaded chunk is missing after a new Vercel deployment
window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
