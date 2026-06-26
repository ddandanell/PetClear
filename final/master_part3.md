---

# PART 3: Technical SEO, Schemas & Internal Linking

> This section summarizes the complete SEO and technical foundation. Full detailed specifications are in `strategy/seo_strategy.md`.

## 3.1 Page-by-Page SEO Summary

| Page | Primary Keyword | Meta Title | Meta Description | H1 | Intent |
|------|---------------|------------|----------------|----|--------|
| Homepage | `pet relocation Dubai` | Pet Relocation Dubai | Clear Pricing, Door-to-Door Transport | Relocate your dog or cat to or from Dubai with transparent pricing and WhatsApp updates. IPATA-certified, MOCCAE-licensed. Get your instant quote now. | Pet Relocation Dubai - Trusted International Dog & Cat Transport Services | Commercial |
| Cost Guide | `Dubai pet relocation cost` | How Much to Bring a Dog to Dubai? 2026 Cost Breakdown | Real pet relocation costs for Dubai in 2026. Itemized breakdown: permits, vet fees, cargo, crates. Route-specific prices from UK, USA, India & more. No hidden fees. | How Much Does It Cost to Bring a Dog or Cat to Dubai? 2026 Price Breakdown | Informational + Commercial |
| Import Requirements | `pet import permit UAE requirements` | UAE Pet Import Requirements 2026 | Documents, Permits & Timeline | Complete guide to bringing pets to Dubai: required documents, MOCCAE permits, banned breeds, vaccination rules, and airline requirements. Step-by-step checklist. | UAE Pet Import Requirements: Complete 2026 Guide for Dog & Cat Owners | Informational |
| How It Works | `how pet relocation works Dubai` | How Pet Relocation Works in Dubai | Step-by-Step Process (2026) | Relocating your pet to or from Dubai? See the 7-step process, what we handle vs. partners, pricing transparency, and how to get started on WhatsApp. | How Pet Relocation Works in Dubai: A Clear, Step-by-Step Guide | Informational + Commercial |
| Dog Relocation | `dog relocation to Dubai` | Dog Relocation to Dubai | Safe Transport & Import Guide (2026) | Relocate your dog to Dubai with transparent pricing and expert guidance. Breed-specific advice, crate requirements, and WhatsApp support. Get your quote. | Dog Relocation to Dubai: Safe Transport, Clear Costs, and Expert Guidance | Commercial + Transactional |
| Cat Relocation | `cat relocation to Dubai` | Cat Relocation to Dubai | Safe, Stress-Free Cat Transport (2026) | Relocate your cat to Dubai with PetClear. Transparent pricing, cat-specific care, and WhatsApp updates at every step. Get your free cat relocation quote today. | Cat Relocation to Dubai: Bringing Your Cat Home Safely | Commercial + Transactional |

## 3.2 Internal Linking Plan

### Link Architecture Rules

- Every page links to at least 3 other first-version pages
- Homepage links to all 6 pages prominently
- Guide pages link to each other and to service pages
- Service pages (dog/cat) link to requirements guide and cost guide
- How It Works links to all other pages
- Anchor text strategy: 30% exact match, 50% partial match, 20% branded

### Page-by-Page Internal Links

| From Page | To Pages | Anchor Text |
|-----------|----------|-------------|
| Homepage | Cost Guide, Import Requirements, How It Works, Dog Relocation, Cat Relocation | See real costs, Check requirements, How it works, Dog relocation, Cat relocation |
| Cost Guide | Import Requirements, How It Works, Dog Relocation, Cat Relocation, Homepage | required documents, how the process works, dog relocation costs, cat relocation costs, PetClear |
| Import Requirements | Cost Guide, How It Works, Dog Relocation, Cat Relocation, Homepage | cost breakdown, relocation process, dog-specific requirements, cat-specific requirements, PetClear |
| How It Works | Cost Guide, Import Requirements, Dog Relocation, Cat Relocation, Homepage | transparent pricing, document checklist, dog relocation, cat relocation, PetClear |
| Dog Relocation | Import Requirements, Cost Guide, How It Works, Cat Relocation, Homepage | import requirements, cost breakdown, how it works, cat relocation, PetClear |
| Cat Relocation | Import Requirements, Cost Guide, How It Works, Dog Relocation, Homepage | import requirements, cost breakdown, how it works, dog relocation, PetClear |

## 3.3 Schema Markup Implementation

### Organization Schema (Global)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PetClear",
  "url": "https://www.petclear.ae",
  "logo": "https://www.petclear.ae/logo.png",
  "description": "Dubai pet relocation concierge and partner-matching platform. Transparent pricing, WhatsApp updates, and vetted partners for dog and cat transport to and from the UAE.",
  "sameAs": [
    "https://www.facebook.com/petclear",
    "https://www.instagram.com/petclear",
    "https://www.linkedin.com/company/petclear"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-5X-XXXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Arabic"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pet Relocation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dog Relocation to Dubai"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cat Relocation to Dubai"
        }
      }
    ]
  }
}
```

### Service Schema (Per Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dog Relocation to Dubai",
  "provider": {
    "@type": "Organization",
    "name": "PetClear"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai",
    "containedInPlace": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  },
  "description": "Professional dog relocation concierge service to Dubai. Includes document review, partner matching, flight booking, and WhatsApp updates throughout the journey.",
  "offers": {
    "@type": "Offer",
    "price": "8000",
    "priceCurrency": "AED",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock"
  }
}
```

### FAQPage Schema (Per Page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to quarantine my pet in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. If your pet has all required documents (microchip, valid rabies vaccination, health certificate, and import permit), there is no mandatory quarantine in Dubai. However, if documents are missing or incorrect, your pet may be held at the border or sent to a government facility until compliance is resolved."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to bring a dog to Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Total costs range from AED 8,000 to AED 25,000 depending on your dog size, origin country, route, and documentation status. This includes government fees (~AED 200), veterinary fees (~AED 500-1,500), IATA crate (~AED 400-1,200), air cargo (~AED 3,000-12,000), and service coordination fees. See our full cost breakdown for route-specific pricing."
      }
    }
  ]
}
```

### BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.petclear.ae/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.petclear.ae/guides/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Pet Relocation Cost Dubai",
      "item": "https://www.petclear.ae/guides/pet-relocation-cost-dubai/"
    }
  ]
}
```

### Technical SEO Foundation

- **URL Structure:** Hyphens, lowercase, no dates, max 3 folder levels
- **Canonicalization:** Self-referencing canonicals on all pages, HTTPS enforced
- **robots.txt:** Allow all first-version pages, allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- **XML Sitemap:** Auto-generated, includes `lastmod`, submitted to Search Console
- **Core Web Vitals:** LCP <2.5s, INP <200ms, CLS <0.1
- **Image Standards:** WebP format, lazy loading, descriptive alt text, `srcset` for responsive
- **hreflang:** `en` (primary), `ar` (future), `x-default` -> English
- **Mobile:** Tap targets >=48px, no horizontal scroll, same content as desktop

---

