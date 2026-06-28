import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from './lib/analytics.ts'

const el = document.getElementById('root')!

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered pages ship real HTML in #root → hydrate it; otherwise mount fresh.
if (el.hasChildNodes()) {
  hydrateRoot(el, tree)
} else {
  createRoot(el).render(tree)
}

initAnalytics()
