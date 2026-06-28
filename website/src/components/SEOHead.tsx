import { useEffect } from 'react'
import type { SEOMeta } from '../lib/seo'
import { BASE_URL, buildCanonical, defaultOGImage } from '../lib/seo'

interface SEOHeadProps {
  meta?: SEOMeta
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
  schemas?: Record<string, unknown>[]
  jsonLd?: Record<string, unknown>[]
}

export default function SEOHead(props: SEOHeadProps) {
  const meta: SEOMeta = props.meta || {
    title: props.title || '',
    description: props.description || '',
    keywords: props.keywords,
    canonical: props.canonical,
    ogImage: props.ogImage,
    ogType: props.ogType,
    noindex: props.noindex,
  }

  const schemas = props.schemas || props.jsonLd || []

  const canonical = meta.canonical || buildCanonical(window.location.pathname)
  const ogImage = meta.ogImage || defaultOGImage
  const ogType = meta.ogType || 'website'

  useEffect(() => {
    document.title = meta.title

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        const attr = selector.includes('property=') ? 'property' : 'name'
        const val = selector.match(/"([^"]+)"/)?.[1] || ''
        el.setAttribute(attr, val)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', meta.description)
    if (meta.keywords) setMeta('meta[name="keywords"]', meta.keywords)

    const robots = meta.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'
    setMeta('meta[name="robots"]', robots)

    // Canonical
    let canEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canEl) {
      canEl = document.createElement('link')
      canEl.rel = 'canonical'
      document.head.appendChild(canEl)
    }
    canEl.href = canonical

    // Open Graph
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:type"]', ogType)
    setMeta('meta[property="og:url"]', canonical)
    setMeta('meta[property="og:image"]', ogImage)
    setMeta('meta[property="og:site_name"]', 'Dubai Pet Relocation')
    setMeta('meta[property="og:locale"]', 'en_AE')

    // Twitter Cards
    setMeta('meta[name="twitter:card"]', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
    setMeta('meta[name="twitter:image"]', ogImage)

    // JSON-LD schemas
    if (schemas && schemas.length > 0) {
      // Remove existing schema scripts
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
      schemas.forEach(schema => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)
      })
    }

    return () => {
      // Cleanup schemas on unmount
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
    }
  }, [meta, schemas, canonical, ogImage, ogType])

  return null
}
