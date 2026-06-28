// SEO utilities for Dubai Pet Relocation website
// Replace BASE_URL with actual domain when decided
export const BASE_URL = 'https://dubai-pet-relocation.ae'

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

export function getWhatsAppUrl(message: string, campaign = 'pet-relocation'): string {
  const phone = '971551744849'
  const params = new URLSearchParams({
    text: message,
    utm_source: 'site',
    utm_medium: 'whatsapp',
    utm_campaign: campaign,
  })
  return `https://wa.me/${phone}?${params.toString()}`
}

export const defaultOGImage = `${BASE_URL}/assets/og-default.jpg`

export const siteConfig = {
  name: 'Dubai Pet Relocation',
  tagline: 'Your pet\'s journey, made clear.',
  description: 'Transparent pet relocation concierge for Dubai and the UAE. We help pet owners understand the process, check requirements, and connect with trusted relocation partners.',
  phone: '+971 55 174 4849',
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
