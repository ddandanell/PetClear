// SEO utilities for Dubai Pet Relocation website
// Replace BASE_URL with actual domain when decided
export const BASE_URL = 'https://www.dubai-pet-relocation.ae'

export interface SEOMeta {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
  keywords?: string
}

export function buildCanonical(path: string): string {
  return `${BASE_URL}${path}`
}

export function getWhatsAppUrl(message: string): string {
  // Placeholder — replace with real number when available
  const phone = '9710551744849'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const defaultOGImage = `${BASE_URL}/assets/og-default.jpg`

export const siteConfig = {
  name: 'Dubai Pet Relocation',
  tagline: 'Your pet\'s journey, made clear.',
  description: 'Transparent pet relocation concierge for Dubai and the UAE. We help pet owners understand the process, check requirements, and connect with trusted relocation partners.',
  phone: '+971 0551744849',
  email: 'hallo@dubai-pet-relocation.ae',
  address: {
    street: 'Al Quoz Industrial Area 4, Al Quoz Industrial Area',
    city: 'Al Quoz, Dubai',
    region: 'Dubai',
    country: 'AE',
  },
  geo: {
    lat: '25.2048',
    lng: '55.2708',
  },
  social: {
    instagram: 'https://www.instagram.com/petclear',
    facebook: 'https://www.facebook.com/petclear',
  },
}
