// GA4 analytics + conversion event tracking (Blue Book Phase 1).
// ⬇️ To activate: paste your GA4 Measurement ID (e.g. 'G-XXXXXXXXXX'). Empty = disabled (no scripts load).
export const GA4_MEASUREMENT_ID = 'G-RVL8N0EBRR'

type GtagArgs = unknown[]
declare global {
  interface Window {
    dataLayer: GtagArgs[]
    gtag?: (...args: GtagArgs) => void
  }
}

export function track(event: string, params: Record<string, unknown> = {}): void {
  if (!GA4_MEASUREMENT_ID || typeof window.gtag !== 'function') return
  window.gtag('event', event, params)
}

/** Initialise GA4 + delegated conversion tracking. Called once on app start. */
export function initAnalytics(): void {
  if (!GA4_MEASUREMENT_ID || typeof window === 'undefined') return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: GtagArgs) => {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true })

  // WhatsApp_click + phone_click (event delegation across the whole app)
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest?.('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (href.includes('wa.me') || href.includes('api.whatsapp')) {
        track('WhatsApp_click', { page_path: window.location.pathname })
      } else if (href.startsWith('tel:')) {
        track('phone_click', { page_path: window.location.pathname })
      } else if (href.startsWith('mailto:')) {
        track('email_click', { page_path: window.location.pathname })
      }
    },
    { capture: true },
  )

  // scroll_75 — fires once when the visitor passes 75% of the page
  let firedScroll = false
  window.addEventListener(
    'scroll',
    () => {
      if (firedScroll) return
      const doc = document.documentElement
      const reached = (window.scrollY + window.innerHeight) / doc.scrollHeight
      if (reached >= 0.75) {
        firedScroll = true
        track('scroll_75', { page_path: window.location.pathname })
      }
    },
    { passive: true },
  )

  // time_3min — engaged session signal
  window.setTimeout(() => track('time_3min', { page_path: window.location.pathname }), 180000)
}
