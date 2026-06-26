# Dubai Pet Relocation Website — Information Architecture & UX Strategy

> **Project:** Dubai Pet Relocation Concierge Platform  
> **Version:** 1.0 (Foundation Architecture)  
> **Date:** June 2026  
> **Owner:** Architecture_Agent  
> **Status:** Implementable Foundation

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Site Architecture](#2-site-architecture)
   - 2.1 URL Structure & Page Inventory
   - 2.2 Navigation Hierarchy (Desktop)
   - 2.3 Navigation Hierarchy (Mobile)
   - 2.4 Page Relationships & Parent/Child Structure
3. [The 6 Authority Pages (First Version)](#3-the-6-authority-pages-first-version)
4. [Mobile UX Strategy](#4-mobile-ux-strategy)
5. [Future Expansion Architecture](#5-future-expansion-architecture)
6. [User Journey Maps](#6-user-journey-maps)
7. [SEO & Content Architecture](#7-seo--content-architecture)
8. [Technical Implementation Notes](#8-technical-implementation-notes)

---

## 1. Executive Summary

This document defines the complete information architecture for a premium Dubai pet relocation concierge platform. The architecture is built on three research pillars: **competitor analysis** (13 competitors mapped), **keyword landscape** (55+ keywords, 35+ FAQ questions), and **market research** (4 personas, 7-stage journey, TAM/SAM/SOM analysis).

### Design Principles

| # | Principle | Rationale |
|---|-----------|-----------|
| 1 | **Transparency First** | Competitor analysis shows zero instant quote tools. Cost uncertainty is the #1 pain point. |
| 2 | **Mobile-First, WhatsApp-Native** | 78%+ of UAE traffic is mobile. WhatsApp is the preferred CTA channel. |
| 3 | **Anxiety Reduction** | Pet owners are emotionally vulnerable. Design must calm, reassure, and guide. |
| 4 | **SEO-Optimized from Day One** | 45% of searches are informational. Authority content builds trust before conversion. |
| 5 | **Scalable Foundation** | First 6 pages + programmatic templates enable 100+ pages within 12 months. |

### Architecture Philosophy

The site is structured around **intent-based entry points** rather than "service pages." Most competitors organize around services (Import, Export, Domestic). We organize around **customer questions** and **route journeys** — because that is how people search.

---

## 2. Site Architecture

### 2.1 URL Structure & Page Inventory

#### Phase 1: Foundation (6 Pages + Utilities)

```
/
├── /guides/
│   ├── /guides/pet-relocation-cost-dubai/          (Authority Page 1)
│   ├── /guides/uae-pet-import-requirements/          (Authority Page 2)
│   ├── /guides/iata-pet-crate-requirements/          (Authority Page 3)
│   ├── /guides/pet-relocation-timeline/              (Authority Page 4)
│   └── /guides/dubai-banned-dog-breeds/              (Authority Page 5)
├── /routes/
│   ├── /routes/uk-to-dubai-pet-relocation/           (Authority Page 6)
│   └── /routes/dubai-to-uk-pet-shipping/             (Future)
├── /services/
│   └── /services/pet-relocation-concierge/          (Future)
├── /about/
│   └── /about/trusted-partners/                      (Future)
├── /reviews/
│   └── /reviews/customer-stories/                    (Future)
├── /contact/
│   └── /contact/whatsapp/                            (Utility)
├── /blog/
│   └── /blog/summer-pet-travel-embargo-dubai/        (Future)
├── /download/
│   └── /download/uae-pet-import-checklist/           (Lead Magnet)
└── /thank-you/
    ├── /thank-you/quote-request/                       (Conversion)
    └── /thank-you/checklist-download/                  (Conversion)
```

#### Phase 2: Expansion (6–12 Months)

```
├── /guides/                         (→ 15+ guides)
│   ├── /guides/brachycephalic-pet-relocation/
│   ├── /guides/dubai-pet-quarantine-rules/
│   ├── /guides/rabies-titer-test-dubai/
│   ├── /guides/emirates-vs-etihad-pet-cargo/
│   ├── /guides/dog-license-dubai/
│   └── /guides/dubai-municipality-pet-registration/
├── /routes/                         (→ 20+ route pages)
│   ├── /routes/usa-to-dubai-pet-relocation/
│   ├── /routes/canada-to-dubai-pet-relocation/
│   ├── /routes/australia-to-dubai-pet-relocation/
│   ├── /routes/india-to-dubai-pet-relocation/
│   ├── /routes/dubai-to-usa-pet-transport/
│   ├── /routes/dubai-to-canada-pet-relocation/
│   ├── /routes/dubai-to-australia-pet-relocation/
│   ├── /routes/dubai-to-singapore-pet-relocation/
│   ├── /routes/dubai-to-eu-pet-relocation/
│   └── /routes/dubai-to-india-pet-relocation/
├── /breeds/                         (→ 10+ breed pages)
│   ├── /breeds/french-bulldog-dubai-relocation/
│   ├── /breeds/persian-cat-dubai-import/
│   ├── /breeds/golden-retriever-dubai-relocation/
│   └── /breeds/german-shepherd-dubai-relocation/
├── /dogs/                           (→ 8+ dog pages)
│   ├── /dogs/dog-relocation-dubai/
│   ├── /dogs/dog-transport-to-dubai/
│   └── /dogs/dog-shipping-dubai/
├── /cats/                           (→ 6+ cat pages)
│   ├── /cats/cat-relocation-dubai/
│   ├── /cats/cat-import-dubai/
│   └── /cats/cat-transport-dubai/
├── /areas/                          (→ 10+ local pages)
│   ├── /areas/pet-relocation-dubai-marina/
│   ├── /areas/pet-relocation-al-quoz/
│   ├── /areas/pet-relocation-arabian-ranches/
│   └── /areas/pet-relocation-jlt/
├── /services/                       (→ 6+ service pages)
│   ├── /services/pet-relocation-concierge/
│   ├── /services/door-to-door-pet-transport/
│   ├── /services/pet-boarding-dubai/
│   ├── /services/pet-taxi-dubai/
│   └── /services/corporate-pet-relocation/
├── /partners/                       (→ Marketplace)
│   ├── /partners/trusted-relocation-partners/
│   ├── /partners/veterinary-clinics/
│   └── /partners/pet-boarding-facilities/
├── /blog/                           (→ 24+ posts)
│   ├── /blog/summer-pet-travel-embargo-dubai/
│   ├── /blog/pet-friendly-housing-dubai/
│   ├── /blog/diy-vs-professional-pet-relocation/
│   ├── /blog/pet-relocation-insurance-dubai/
│   └── /blog/relocating-family-with-pets-dubai/
├── /ar/                             (→ Arabic mirror)
│   ├── /ar/نقل-الحيوانات-الاليفة-دبي/
│   └── /ar/شروط-استيراد-الحيوانات-الاليفة-الامارات/
└── /tools/                          (→ Interactive utilities)
    ├── /tools/quote-calculator/
    ├── /tools/crate-size-calculator/
    ├── /tools/breed-checker/
    └── /tools/timeline-planner/
```

### 2.2 Navigation Hierarchy (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]   How It Works   Routes   Guides   Cost   About   [🇦🇪]  [WhatsApp] │
│                                                                 [Get Quote] │
└─────────────────────────────────────────────────────────────────────────────┘
                                   │
                    ┌──────────────┼──────────────┬──────────────┐
                    │              │              │              │
              Routes      Guides          Cost        About
              ─────       ──────          ────        ─────
              UK→Dubai    Import Req.    Cost Guide  Our Story
              USA→Dubai   Crate Guide    Calculator  Trusted Partners
              Dubai→UK    Timeline       Compare DIY  Customer Stories
              Dubai→USA   Banned Breeds    vs Pro      FAQs
              Dubai→AU   Summer Travel               Contact
              All Routes  All Guides
```

### 2.3 Navigation Hierarchy (Mobile)

```
┌─────────────────────────────────┐
│ [LOGO]              [☰] [💬]   │  ← Header: Logo + Hamburger + WhatsApp
├─────────────────────────────────┤
│                                 │
│   📍 Popular Routes             │  ← Expandable accordions
│   ─────────────────────         │     (no multi-level nesting)
│   ▸ UK to Dubai                 │
│   ▸ USA to Dubai                │
│   ▸ Dubai to UK                 │
│   ▸ Dubai to USA                │
│   ▸ Dubai to Australia          │
│   ▸ All Routes →                │
│                                 │
│   📚 Essential Guides           │
│   ─────────────────────         │
│   ▸ Import Requirements         │
│   ▸ Cost Guide                  │
│   ▸ IATA Crate Guide            │
│   ▸ Timeline & Process          │
│   ▸ Banned Breeds               │
│   ▸ All Guides →                │
│                                 │
│   💰 Get a Quote                │  ← Primary CTA (sticky bottom)
│   ─────────────────────         │
│   ▸ Instant Cost Calculator     │
│   ▸ WhatsApp Consultation       │
│   ▸ Book Free Call              │
│                                 │
│   🏢 About Us                   │
│   ─────────────────────         │
│   ▸ Our Story                   │
│   ▸ Trusted Partners            │
│   ▸ Customer Reviews            │
│   ▸ Contact                     │
│                                 │
│   [🇦🇪 / English]               │  ← Language toggle
│                                 │
└─────────────────────────────────┘
```

**Mobile Nav Pattern:** Bottom sheet drawer (slide-up from bottom), NOT full-screen overlay. Rationale: bottom sheets are reachable with one thumb, feel native to mobile, and preserve context of the page behind.

### 2.4 Page Relationships & Parent/Child Structure

```
HOMEPAGE (root authority)
│
├─→ /guides/               [Hub — Educational authority]
│   ├─ pet-relocation-cost-dubai/           [Child: commercial intent]
│   ├─ uae-pet-import-requirements/         [Child: informational intent]
│   ├─ iata-pet-crate-requirements/         [Child: informational intent]
│   ├─ pet-relocation-timeline/             [Child: informational intent]
│   └─ dubai-banned-dog-breeds/             [Child: informational intent]
│
├─→ /routes/               [Hub — Transactional authority]
│   ├─ uk-to-dubai-pet-relocation/          [Child: high-intent route]
│   ├─ dubai-to-uk-pet-shipping/            [Child: high-intent route]
│   └─ [future: 20+ route pages]           [Children: programmatic SEO]
│
├─→ /services/             [Hub — Commercial pages]
│   └─ pet-relocation-concierge/            [Child: service description]
│
├─→ /about/                [Hub — Trust & credibility]
│   ├─ trusted-partners/                     [Child: partner marketplace]
│   └─ customer-stories/                     [Child: social proof]
│
├─→ /contact/              [Leaf — Conversion]
│   └─ whatsapp/                             [Child: direct channel]
│
├─→ /download/             [Leaf — Lead generation]
│   └─ uae-pet-import-checklist/             [Child: gated PDF]
│
└─→ /blog/                 [Hub — Topical authority & freshness]
    └─ [future: 24+ posts]                   [Children: seasonal, topical]
```

### Internal Linking Architecture

Every page has a **primary parent** (breadcrumb) and **mandatory cross-links**:

| Page | Parent | Links To (Mandatory) | Links From |
|------|--------|------------------------|------------|
| Homepage | — | Top 3 guides, Top 3 routes, Cost calculator, WhatsApp | All pages (logo) |
| Cost Guide | /guides/ | Import Req., Timeline, Quote calculator, Crate Guide | Homepage, all route pages, all blog posts |
| Import Requirements | /guides/ | Cost Guide, Timeline, Banned Breeds, Checklist download | Homepage, all route pages, all blog posts |
| Crate Guide | /guides/ | Cost Guide, Import Req., Timeline | All route pages, dog/cat breed pages |
| Timeline | /guides/ | Cost Guide, Import Req., Route pages | Homepage, all route pages, all blog posts |
| Banned Breeds | /guides/ | Import Req., Cost Guide, Breed pages | Homepage, all route pages, dog/cat pages |
| UK→Dubai Route | /routes/ | Cost Guide, Import Req., Timeline, WhatsApp CTA | Homepage, all UK-related content |
| All Future Routes | /routes/ | Cost Guide, Import Req., Timeline, WhatsApp CTA | Homepage, hub page, related routes |

---

## 3. The 6 Authority Pages (First Version)

These 6 pages form the **foundation of organic traffic, trust, and conversion**. Each is designed to rank for a priority keyword cluster, answer the user's immediate question, and funnel them toward a WhatsApp consultation or instant quote.

### Page 1: Pet Relocation Cost Guide

| Attribute | Specification |
|-----------|---------------|
| **URL** | `/guides/pet-relocation-cost-dubai/` |
| **Page Purpose** | Definitive cost breakdown for Dubai pet relocation. Builds trust through radical transparency where competitors are opaque. Primary conversion entry point. |
| **Primary Keyword** | `Dubai pet relocation cost` |
| **Secondary Keywords** | `how much to bring dog to Dubai`, `pet relocation cost comparison`, `how much does pet relocation to Dubai cost`, `what is the cheapest way to relocate a pet to Dubai` |
| **Audience Segment** | Solo Sam (budget-conscious young expat), Corporate Claire (budgeting family move) |
| **Conversion Goal** | Quote calculator completion or WhatsApp inquiry |
| **WhatsApp CTA Placement** | After intro paragraph ("Still have questions?"), after cost table, after FAQ section, sticky bottom bar |
| **Internal Links (From)** | Homepage, all route pages, all blog posts, all guide pages |
| **Internal Links (To)** | Import Requirements Guide, Timeline Guide, Quote Calculator, UK→Dubai Route, IATA Crate Guide |
| **Estimated Word Count** | 3,500–4,500 words |
| **Content Structure** | H1 + intro → Interactive cost calculator (embed) → Cost breakdown table (by route, pet size, service tier) → MOCCAE fees → Veterinary costs → Airline cargo costs → Crate costs → Hidden costs → DIY vs Professional comparison → FAQ (schema) → CTA |
| **Schema Markup** | FAQPage, HowTo, Table (for pricing) |
| **Featured Snippet Target** | "How much does pet relocation to Dubai cost?" |
| **Trust Element** | "Last updated: [DATE] — prices verified with 3 partners" |

### Page 2: UAE Pet Import Requirements Guide

| Attribute | Specification |
|-----------|---------------|
| **URL** | `/guides/uae-pet-import-requirements/` |
| **Page Purpose** | Step-by-step guide to MOCCAE permit, vaccinations, microchip, and documentation. Every inbound pet owner must research this. Captures high-intent informational traffic and builds authority. |
| **Primary Keyword** | `pet import permit UAE requirements` |
| **Secondary Keywords** | `MOCCAE pet import permit`, `what documents are needed to bring a cat to UAE`, `veterinary certificate Dubai`, `rabies titer test Dubai`, `pet quarantine Dubai` |
| **Audience Segment** | All inbound personas — especially Corporate Claire and Returning Reem |
| **Conversion Goal** | Checklist PDF download (lead capture) or WhatsApp consultation |
| **WhatsApp CTA Placement** | After intro ("Need help with paperwork?"), after each major step, after document checklist, bottom sticky |
| **Internal Links (From)** | Homepage, all route pages, all blog posts, Cost Guide |
| **Internal Links (To)** | Cost Guide, Timeline, Banned Breeds, Checklist Download, Route pages |
| **Estimated Word Count** | 4,000–5,000 words |
| **Content Structure** | H1 + intro → Step-by-step process (numbered, visual) → Document checklist (downloadable) → MOCCAE permit details → Vaccination requirements → Microchip requirements → Rabies titer test → Health certificate → Arrival inspection → FAQ (schema) → CTA |
| **Schema Markup** | HowTo, FAQPage, Checklist (custom) |
| **Featured Snippet Target** | "What documents are needed to bring a cat to UAE?" |
| **Trust Element** | "MOCCAE Licensed — ACL-XXXXXXX" badge, "Last updated with MOCCAE policy changes" |
| **Lead Magnet** | Downloadable PDF: "UAE Pet Import Document Checklist" (email capture) |

### Page 3: IATA Pet Crate Requirements Guide

| Attribute | Specification |
|-----------|---------------|
| **URL** | `/guides/iata-pet-crate-requirements/` |
| **Page Purpose** | Practical guide to IATA-compliant travel crates. Every pet owner needs this. Low competition, high utility. Natural backlink magnet. |
| **Primary Keyword** | `IATA pet crate requirements Dubai` |
| **Secondary Keywords** | `pet relocation crate requirements`, `what size IATA crate does my dog need`, `how do I measure my pet for an IATA crate` |
| **Audience Segment** | All personas — universal need |
| **Conversion Goal** | Crate size calculator usage + WhatsApp inquiry for crate supply |
| **WhatsApp CTA Placement** | After measurement guide, after size table, after airline-specific requirements, bottom sticky |
| **Internal Links (From)** | Homepage, all route pages, all dog/cat breed pages, Cost Guide |
| **Internal Links (To)** | Cost Guide (crate cost section), Route pages, Dog/cat breed pages |
| **Estimated Word Count** | 2,500–3,500 words |
| **Content Structure** | H1 + intro → Measurement guide (visual, step-by-step) → Size calculator (interactive) → Airline-specific crate rules (Emirates, Etihad, etc.) → Brachycephalic breed considerations → DIY vs buying → FAQ (schema) → CTA |
| **Schema Markup** | HowTo, FAQPage |
| **Featured Snippet Target** | "What size IATA crate does my dog need?" |
| **Trust Element** | "IATA LAR Certified partner crate supplier" |
| **Interactive Element** | Crate size calculator: enter pet dimensions → get recommended crate model |

### Page 4: Pet Relocation Timeline Guide

| Attribute | Specification |
|-----------|---------------|
| **URL** | `/guides/pet-relocation-timeline/` |
| **Page Purpose** | Interactive timeline tool showing week-by-week process. Reduces timeline anxiety (pain point #4). Positions us as the organized, reliable partner. |
| **Primary Keyword** | `pet relocation Dubai timeline` |
| **Secondary Keywords** | `how long does pet relocation to Dubai take`, `how early should I start planning pet relocation to Dubai` |
| **Audience Segment** | Corporate Claire (school calendar sync), Military Mike (tight deadlines), all planners |
| **Conversion Goal** | Timeline planner tool usage + WhatsApp consultation booking |
| **WhatsApp CTA Placement** | After timeline overview, after each phase, at "Need help sticking to the timeline?", bottom sticky |
| **Internal Links (From)** | Homepage, all route pages, all blog posts, Cost Guide |
| **Internal Links (To)** | Import Requirements (each phase links to relevant doc), Cost Guide, Route pages |
| **Estimated Word Count** | 2,500–3,500 words |
| **Content Structure** | H1 + intro → Interactive timeline (week-by-week, visual) → Phase 1: Research (weeks 16–20) → Phase 2: Documentation (weeks 12–16) → Phase 3: Booking & Permits (weeks 8–12) → Phase 4: Preparation (weeks 4–8) → Phase 5: Travel Day → Phase 6: Arrival & Settling → FAQ (schema) → CTA |
| **Schema Markup** | HowTo, FAQPage |
| **Featured Snippet Target** | "How long does pet relocation to Dubai take?" |
| **Trust Element** | "Based on 500+ successful relocations" |
| **Interactive Element** | Timeline planner: input move date → get personalized checklist with dates |

### Page 5: Dubai Banned Dog Breeds Guide

| Attribute | Specification |
|-----------|---------------|
| **URL** | `/guides/dubai-banned-dog-breeds/` |
| **Page Purpose** | Definitive guide to banned and restricted breeds in Dubai. Mandatory pre-purchase research for many owners. Captures anxious, high-intent traffic. |
| **Primary Keyword** | `banned dog breeds Dubai import` |
| **Secondary Keywords** | `which dog breeds are banned in Dubai`, `can I relocate my French Bulldog to Dubai`, `snub nose dog transport Dubai`, `brachycephalic pet relocation UAE` |
| **Audience Segment** | Owners of restricted breeds (French Bulldogs, Pugs, Rottweilers, etc.), breeders |
| **Conversion Goal** | WhatsApp consultation for breed-specific guidance |
| **WhatsApp CTA Placement** | After banned list, after restricted breed section, after airline-specific rules, after "My breed is on the list — what now?", bottom sticky |
| **Internal Links (From)** | Homepage, Import Requirements, all dog breed pages, all route pages |
| **Internal Links (To)** | Import Requirements, brachycephalic breed guides (future), route pages, Cost Guide |
| **Estimated Word Count** | 2,000–3,000 words |
| **Content Structure** | H1 + intro → Banned breed list (visual, with photos) → Restricted breed category → Airline-specific restrictions (Emirates, Etihad) → Brachycephalic breed rules → Summer embargo impact → "What if my breed is banned?" (alternatives) → FAQ (schema) → CTA |
| **Schema Markup** | FAQPage, List |
| **Featured Snippet Target** | "Which dog breeds are banned in Dubai?" |
| **Trust Element** | "Verified with MOCCAE 2026 regulations" |
| **Interactive Element** | Breed checker: enter breed name → shows status (banned/restricted/allowed) + requirements |

### Page 6: UK to Dubai Pet Relocation (Route Page)

| Attribute | Specification |
|-----------|---------------|
| **URL** | `/routes/uk-to-dubai-pet-relocation/` |
| **Page Purpose** | Dedicated route page for the highest-demand origin country. Captures route-specific transactional searches. Converts at higher rates than generic service pages. |
| **Primary Keyword** | `UK to Dubai pet relocation` |
| **Secondary Keywords** | `pet shipping UK to Dubai`, `dog transport to Dubai from UK`, `cat relocation UK to UAE`, `British expat pet relocation Dubai` |
| **Audience Segment** | Corporate Claire (British families), Solo Sam (young UK professionals), Military Mike (UK military) |
| **Conversion Goal** | Route-specific quote request or WhatsApp inquiry |
| **WhatsApp CTA Placement** | After route overview, after cost estimate, after timeline, after requirements, after FAQ, bottom sticky |
| **Internal Links (From)** | Homepage, all UK-related content, Cost Guide, blog posts |
| **Internal Links (To)** | Cost Guide (UK-specific section), Import Requirements, Timeline, Crate Guide, Banned Breeds, Dubai→UK route (cross-sell) |
| **Estimated Word Count** | 2,500–3,500 words |
| **Content Structure** | H1 + route overview → Cost estimate (UK-specific table) → Timeline (UK→Dubai specific) → Requirements (UK-specific: no rabies titer test) → Step-by-step process → Airline options (Emirates, BA, etc.) → Crate requirements → Common issues & solutions → Customer story (UK→Dubai) → FAQ (schema) → CTA |
| **Schema Markup** | FAQPage, HowTo, BreadcrumbList |
| **Featured Snippet Target** | "How to bring a dog from UK to Dubai" |
| **Trust Element** | "200+ UK→Dubai relocations completed" counter, UK customer testimonial |
| **Route-Specific Elements** | GBP→AED cost display, UK-specific vet clinic recommendations, DEFRA export certificate guidance |

---

## 4. Mobile UX Strategy

### 4.1 Mobile Navigation Pattern

| Element | Pattern | Rationale |
|---------|---------|-----------|
| **Header** | Sticky, compact (56px height) | Always accessible; no space waste |
| **Logo** | Left-aligned, 120px wide | Brand visibility |
| **Hamburger** | Right-aligned, animated to X | Native mobile pattern |
| **WhatsApp Icon** | Right of hamburger, always visible | Primary channel; zero friction |
| **Nav Drawer** | Bottom sheet (slide-up), NOT full-screen | Thumb-reachable, preserves context |
| **Accordion Sections** | One-level deep, no nesting | Mobile users don't navigate deep trees |
| **Close Behavior** | Tap outside, swipe down, or X button | Native gesture support |
| **Active State** | Current page highlighted in drawer | Orientation |

```
┌─────────────────────────────────┐
│ 🐾 PawRelo          ☰    💬    │  ← 56px sticky header
├─────────────────────────────────┤
│                                 │
│   [Page content scrolls here]   │
│                                 │
│                                 │
├─────────────────────────────────┤
│  [📋 Get Free Quote]  [💬 Chat] │  ← 64px sticky bottom bar
└─────────────────────────────────┘

Bottom Sheet (open):
┌─────────────────────────────────┐
│           ───────               │  ← drag handle
│   📍 Popular Routes             │
│   ─────────────────────         │
│   ▸ UK to Dubai                 │
│   ▸ USA to Dubai                │
│   ▸ Dubai to UK                 │
│   ▸ Dubai to USA                │
│   ▸ Dubai to Australia          │
│   ▸ All Routes →                │
│                                 │
│   📚 Essential Guides           │
│   ─────────────────────         │
│   ▸ Import Requirements         │
│   ▸ Cost Guide                  │
│   ▸ IATA Crate Guide            │
│   ▸ Timeline & Process          │
│   ▸ Banned Breeds               │
│   ▸ All Guides →                │
│                                 │
│   [🇦🇪 / English]               │
│                                 │
└─────────────────────────────────┘
```

### 4.2 Thumb-Zone CTA Placement

Per mobile UX research, 75% of users interact with their thumb in the **bottom 1/3 of the screen**. All primary CTAs must be placed in the **green zone** (bottom-center).

```
┌─────────────────────────────────┐
│         ⚠️ REACH ZONE           │  ← Secondary CTAs only (call, share)
│         (top 1/3)               │
├─────────────────────────────────┤
│         ✋ STRETCH ZONE         │  ← Avoid CTAs here
│         (middle 1/3)            │
├─────────────────────────────────┤
│         ✅ THUMB ZONE           │  ← PRIMARY CTAs: WhatsApp, Get Quote
│         (bottom 1/3)            │
│  [📋 Get Free Quote]  [💬 Chat] │  ← Sticky bottom bar (64px)
└─────────────────────────────────┘
```

| CTA Type | Placement | Visual Treatment |
|----------|-----------|------------------|
| **Primary: WhatsApp** | Sticky bottom bar, right | Green button, WhatsApp icon, "Chat on WhatsApp" |
| **Secondary: Get Quote** | Sticky bottom bar, left | Primary brand color, "Get Free Quote" |
| **Tertiary: Download** | Inline, after content | Outlined button, "Download Checklist" |
| **Floating Action** | Bottom-right (optional) | Circular WhatsApp icon, appears after scroll |

### 4.3 Scroll Behavior

| Element | Behavior | Rationale |
|---------|----------|-----------|
| **Sticky Header** | Hide on scroll down, show on scroll up | Maximizes content viewport |
| **Sticky Bottom Bar** | Always visible after first scroll | CTAs always accessible |
| **Reading Progress** | Thin top bar (2px) | Encourages completion |
| **Back-to-Top** | Appears after 2 screens | Long-form content navigation |
| **Anchor Links** | Smooth scroll to section | Table of contents utility |
| **Section CTAs** | Fade-in on scroll (lazy) | Reduces initial load, draws attention |

### 4.4 Form Design for Mobile

| Principle | Implementation |
|-----------|---------------|
| **Max 4 fields** | Pet type, route, pet size, contact method |
| **Single-column** | Never side-by-side on mobile |
| **Native inputs** | `input type="tel"`, `input type="email"`, `select` with native picker |
| **Auto-complete** | Google Places API for locations |
| **Inline validation** | Validate on blur, not on submit |
| **Progressive disclosure** | Show 2 fields, expand to 4 on interaction |
| **WhatsApp as default** | "We'll contact you via WhatsApp" pre-selected |
| **No submit button** | "Get My Quote →" as action button |
| **Success state** | Show quote estimate + "We'll confirm via WhatsApp in 15 min" |

**Quote Form Flow (Mobile):**

```
Step 1: Where are you moving?
        [From: ▼ United Kingdom]
        [To:   ▼ Dubai, UAE]
        [Next →]

Step 2: Tell us about your pet
        [Pet type: ▼ Dog / Cat / Other]
        [Breed: ▼ Golden Retriever]
        [Weight: ▼ 20-30 kg]
        [Next →]

Step 3: How should we reach you?
        [Name: ___________]
        [WhatsApp: ___________]
        [Email: ___________]
        [📋 Get My Free Quote →]

Result: Your estimate is AED 12,000–15,000
        "We'll confirm via WhatsApp within 15 minutes"
        [💬 Chat on WhatsApp Now]  [📖 Read Cost Guide]
```

### 4.5 WhatsApp Button Behavior

| State | Behavior | Trigger |
|-------|----------|---------|
| **Default** | Floating pill button, bottom-right | Page load (after 3s delay) |
| **Scroll** | Enlarges to full bar at bottom | Scroll past hero section |
| **Exit intent** | Shows "Need help? Chat on WhatsApp" | Mouse leaves viewport (desktop) |
| **Time on page** | Button pulses subtly | After 60 seconds |
| **Click** | Opens WhatsApp Business with pre-filled message | Direct link: `https://wa.me/971XXXXXXXX?text=...` |
| **Pre-filled message** | "Hi, I'm looking for a pet relocation quote for [pet type] from [origin] to [destination]. I found you on your [page name] guide." | Auto-populated from page context |

**WhatsApp Business Pre-filled Messages by Page:**

| Page | Pre-filled Message |
|------|-------------------|
| Cost Guide | "Hi, I read your cost guide and would like a personalized quote for my pet relocation." |
| Import Requirements | "Hi, I need help understanding the import requirements for my pet. I have some questions about the paperwork." |
| Crate Guide | "Hi, I'm not sure what size crate my pet needs. Can you help me choose the right one?" |
| Timeline | "Hi, I'm planning a move and want to make sure I start the process on time. Can you help me build a timeline?" |
| Banned Breeds | "Hi, I have a [breed] and I'm worried about breed restrictions. Can you advise me?" |
| UK→Dubai Route | "Hi, I'm moving from the UK to Dubai with my pet and would like a quote for the [route]." |

---

## 5. Future Expansion Architecture

### 5.1 Route Pages (Inbound to Dubai)

Inbound routes target the largest expat populations moving to Dubai. Each page follows the UK→Dubai template but with origin-specific details.

| Priority | Route | URL | Key Differentiator |
|----------|-------|-----|-------------------|
| 1 | UK → Dubai | `/routes/uk-to-dubai/` | No titer test; DEFRA cert; British expat focus |
| 2 | USA → Dubai | `/routes/usa-to-dubai/` | CDC dog import form; large American expat population |
| 3 | India → Dubai | `/routes/india-to-dubai/` | Largest expat demographic; high volume, lower ticket |
| 4 | Canada → Dubai | `/routes/canada-to-dubai/` | CFIA endorsement; similar to USA route |
| 5 | Australia → Dubai | `/routes/australia-to-dubai/` | Complex DAFF rules; high-value niche |
| 6 | Pakistan → Dubai | `/routes/pakistan-to-dubai/` | Large South Asian community |
| 7 | Philippines → Dubai | `/routes/philippines-to-dubai/` | Large Filipino expat community |
| 8 | Germany → Dubai | `/routes/germany-to-dubai/` | EU route; no titer test |
| 9 | France → Dubai | `/routes/france-to-dubai/` | EU route; mid-range cost |
| 10 | South Africa → Dubai | `/routes/south-africa-to-dubai/` | English-speaking source |

### 5.2 Route Pages (Outbound from Dubai)

Outbound routes target expats returning home or relocating onward. Generally higher ticket value.

| Priority | Route | URL | Key Differentiator |
|----------|-------|-----|-------------------|
| 1 | Dubai → UK | `/routes/dubai-to-uk/` | Tapeworm treatment for dogs; no quarantine |
| 2 | Dubai → USA | `/routes/dubai-to-usa/` | CDC Dog Import Form; 6-month age minimum |
| 3 | Dubai → Canada | `/routes/dubai-to-canada/` | Straightforward; no titer test |
| 4 | Dubai → Australia | `/routes/dubai-to-australia/` | Hardest route; 180-day wait + quarantine; high ticket |
| 5 | Dubai → Singapore | `/routes/dubai-to-singapore/` | RNATT + 3-month wait + quarantine |
| 6 | Dubai → EU | `/routes/dubai-to-eu/` | EU Health Certificate format |
| 7 | Dubai → Germany | `/routes/dubai-to-germany/` | Specific EU route |
| 8 | Dubai → New Zealand | `/routes/dubai-to-new-zealand/` | MPI permit; 10-day quarantine |
| 9 | Dubai → India | `/routes/dubai-to-india/` | High volume outbound |
| 10 | Dubai → South Africa | `/routes/dubai-to-south-africa/` | Medium volume |

### 5.3 Dog-Specific Pages

| Page | URL | Purpose |
|------|-----|---------|
| Dog Relocation Dubai | `/dogs/dog-relocation-dubai/` | Primary dog hub; targets "dog relocation Dubai" |
| Dog Transport to Dubai | `/dogs/dog-transport-to-dubai/` | Inbound dog focus |
| Dog Shipping Dubai | `/dogs/dog-shipping-dubai/` | Outbound dog focus |
| Dog Crate Size Guide | `/dogs/dog-crate-size-guide/` | Dog-specific crate sizing |
| Dog Banned Breeds | `/dogs/banned-dog-breeds-dubai/` | Deep dive on dog restrictions |
| Dog Summer Travel | `/dogs/dog-summer-travel-dubai/` | Dog-specific summer guidance |
| Dog License Dubai | `/dogs/dog-license-dubai/` | Post-arrival registration |
| Dog-Friendly Areas Dubai | `/dogs/dog-friendly-areas-dubai/` | Expat lifestyle content |

### 5.4 Cat-Specific Pages

| Page | URL | Purpose |
|------|-----|---------|
| Cat Relocation Dubai | `/cats/cat-relocation-dubai/` | Primary cat hub |
| Cat Import Dubai | `/cats/cat-import-dubai/` | Inbound cat focus |
| Cat Transport Dubai | `/cats/cat-transport-dubai/` | Outbound cat focus |
| Cat Crate Guide | `/cats/cat-crate-guide/` | Cat-specific crate sizing |
| Persian Cat Import | `/cats/persian-cat-import-dubai/` | Brachycephalic cat focus |
| Cat-Friendly Apartments Dubai | `/cats/cat-friendly-apartments-dubai/` | Expat lifestyle content |

### 5.5 Permit / Guide Pages

| Page | URL | Purpose |
|------|-----|---------|
| MOCCAE Import Permit Guide | `/guides/moccae-import-permit/` | Deep dive on MOCCAE process |
| Rabies Titer Test Guide | `/guides/rabies-titer-test-dubai/` | Blood test requirements |
| Dubai Pet Quarantine Rules | `/guides/dubai-pet-quarantine-rules/` | Quarantine clarification |
| Dubai Municipality Pet Registration | `/guides/dubai-municipality-pet-registration/` | Post-arrival compliance |
| Emirates vs Etihad Pet Cargo | `/guides/emirates-vs-etihad-pet-cargo/` | Airline comparison |
| Summer Pet Travel Guide | `/guides/summer-pet-travel-dubai/` | Seasonal embargo deep dive |
| Pet Travel Insurance Dubai | `/guides/pet-travel-insurance-dubai/` | Insurance options |
| Military Pet Relocation | `/guides/military-pet-relocation-dubai/` | Military-specific guidance |
| Corporate Pet Relocation | `/guides/corporate-pet-relocation-dubai/` | B2B guidance |

### 5.6 Crate Guide Pages

| Page | URL | Purpose |
|------|-----|---------|
| IATA Crate Requirements | `/guides/iata-pet-crate-requirements/` | Already in Phase 1 |
| Crate Size Calculator | `/tools/crate-size-calculator/` | Interactive tool |
| DIY Crate Preparation | `/guides/diy-crate-preparation/` | Cost-saving guide |
| Crate Training for Travel | `/guides/crate-training-travel/` | Pre-flight preparation |
| Airline-Specific Crate Rules | `/guides/airline-crate-rules/` | Emirates, Etihad, BA, etc. |

### 5.7 Local Dubai Area Pages

| Page | URL | Target Audience |
|------|-----|----------------|
| Pet Relocation Dubai Marina | `/areas/pet-relocation-dubai-marina/` | High-income expats, cat owners |
| Pet Relocation Al Quoz | `/areas/pet-relocation-al-quoz/` | Industrial, near airport |
| Pet Relocation JLT | `/areas/pet-relocation-jlt/` | Young professionals |
| Pet Relocation Arabian Ranches | `/areas/pet-relocation-arabian-ranches/` | Families, large dogs |
| Pet Relocation Palm Jumeirah | `/areas/pet-relocation-palm-jumeirah/` | Ultra-HNW segment |
| Pet Relocation Mirdif | `/areas/pet-relocation-mirdif/` | Family expats |
| Pet Relocation Dubai Silicon Oasis | `/areas/pet-relocation-dubai-silicon-oasis/` | Tech workers |
| Pet Relocation Downtown Dubai | `/areas/pet-relocation-downtown-dubai/` | Urban professionals |
| Pet Relocation JVC | `/areas/pet-relocation-jvc/` | Young families, mid-market |
| Pet Relocation Dubai Hills | `/areas/pet-relocation-dubai-hills/` | New development families |

### 5.8 Partner Marketplace Pages

| Page | URL | Purpose |
|------|-----|---------|
| Trusted Relocation Partners | `/partners/trusted-relocation-partners/` | Transparency hub |
| Veterinary Clinic Partners | `/partners/veterinary-clinics/` | Pre/post-travel vet network |
| Pet Boarding Partners | `/partners/pet-boarding-facilities/` | Boarding during transition |
| Pet Insurance Partners | `/partners/pet-insurance-providers/` | Travel insurance options |
| Pet-Friendly Housing Partners | `/partners/pet-friendly-housing/` | Real estate referrals |
| Become a Partner | `/partners/become-a-partner/` | B2B recruitment |

### 5.9 Programmatic SEO Page Templates

These pages are generated from a database + template system, enabling 100+ pages with minimal content creation effort.

| Template Type | URL Pattern | Data Source | Estimated Volume |
|---------------|-------------|-------------|------------------|
| **Route × Pet Type** | `/routes/{origin}-to-{destination}-{pet-type}/` | Route DB + pet type DB | 200+ pages |
| **Breed × Route** | `/breeds/{breed}-to-{destination}/` | Breed DB + route DB | 100+ pages |
| **Area × Service** | `/areas/{area}-{service}/` | Area DB + service DB | 50+ pages |
| **Season × Year** | `/blog/{season}-pet-travel-{year}/` | Seasonal content DB | 10 pages/year |
| **FAQ × Variant** | `/faq/{question-slug}/` | FAQ database | 100+ pages |
| **Arabic Route** | `/ar/{arabic-route-slug}/` | Translated route DB | 50+ pages |

**Programmatic Template Requirements:**
- Each page must have **≥500 words of unique content** (not just template variables)
- Route pages include: cost range, timeline, requirements, airline options, customer story snippet
- Breed pages include: breed-specific restrictions, airline rules, crate size, health considerations
- FAQ pages include: detailed answer, related questions, links to guides, CTA
- All programmatic pages include: WhatsApp CTA, internal links, FAQ schema

---

## 6. User Journey Maps

### 6.1 First-Time Visitor Journey (Homepage → CTA)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  STAGE 1: AWARENESS (Trigger: "I'm moving to Dubai with my dog")          │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Google Search → "pet relocation Dubai"                                     │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────┐                                        │
│  │  Homepage Landing               │                                        │
│  │  ─────────────────────────────  │                                        │
│  │  • Hero: "Relocate your pet     │                                        │
│  │    safely to Dubai. Transparent │                                        │
│  │    pricing. Trusted partners."│                                        │
│  │  • Trust bar: 5★, 500+ pets,  │                                        │
│  │    MOCCAE licensed, IPATA     │                                        │
│  │  • Primary CTA: [Get Instant   │                                        │
│  │    Quote]                     │                                        │
│  │  • Secondary CTA: [Chat on     │                                        │
│  │    WhatsApp]                  │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  "How It Works" (3 steps)       │                                        │
│  │  1. Get a free quote            │                                        │
│  │  2. We match you with a trusted │                                        │
│  │     partner                     │                                        │
│  │  3. Your pet travels safely     │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  Popular Routes Preview         │                                        │
│  │  UK→Dubai │ USA→Dubai │ Dubai→UK│                                       │
│  │  [View All Routes →]           │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  Essential Guides Preview       │                                        │
│  │  Cost Guide │ Import Req │ Crate │                                       │
│  │  [View All Guides →]           │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  Customer Story (Video)         │                                        │
│  │  "Moving our Golden Retriever   │                                        │
│  │   from London to Dubai was      │                                        │
│  │   stress-free thanks to..."     │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (CTA Click)                                                         │
│  ┌─────────────────────────────────┐                                        │
│  │  Quote Form OR WhatsApp Chat    │                                        │
│  │  • Pre-filled: "I'm moving to    │                                        │
│  │    Dubai"                      │                                        │
│  │  • 3-step form (mobile)         │                                        │
│  │  • WhatsApp opens with context  │                                        │
│  └─────────────────────────────────┘                                        │
│                                                                             │
│  CONVERSION: Quote submitted OR WhatsApp conversation started               │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Search Visitor Journey (Landing Page → WhatsApp)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SCENARIO: User searches "how much to bring dog to Dubai"                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Google Search → Featured Snippet (our cost table) OR organic link         │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────┐                                        │
│  │  Cost Guide Landing             │                                        │
│  │  ─────────────────────────────  │                                        │
│  │  H1: How Much Does Pet          │                                        │
│  │      Relocation to Dubai Cost?  │                                        │
│  │  • Intro: "Most companies hide  │                                        │
│  │    their prices. We don't."    │                                        │
│  │  • [💬 Chat on WhatsApp]        │                                        │
│  │    "Still have questions?"      │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  Interactive Cost Calculator      │                                        │
│  │  [Pet type: Dog ▼] [Size: 20-30kg ▼]                                    │
│  │  [From: UK ▼] [To: Dubai ▼]     │                                        │
│  │  [📋 Calculate My Cost →]       │                                        │
│  │  Result: AED 12,000–15,000      │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  Cost Breakdown Table           │                                        │
│  │  MOCCAE Permit: AED 450–700     │                                        │
│  │  Veterinary: AED 1,200–2,500    │                                        │
│  │  Air Freight: AED 3,000–12,000    │                                        │
│  │  IATA Crate: AED 300–1,500      │                                        │
│  │  Coordination: AED 2,000–6,000    │                                        │
│  │  ─────────────────────────────  │                                        │
│  │  Total: AED 8,000–35,000        │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  "Want an exact quote for your  │                                        │
│  │   pet and route?"               │                                        │
│  │  [💬 Get a Personalized Quote    │                                        │
│  │   on WhatsApp →]                │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Scroll)                                                            │
│  ┌─────────────────────────────────┐                                        │
│  │  FAQ Schema (10 questions)      │                                        │
│  │  • What's the cheapest way?      │                                        │
│  │  • Are there hidden fees?        │                                        │
│  │  • Does my employer cover this?  │                                        │
│  │  • ...                           │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Bottom CTA)                                                        │
│  ┌─────────────────────────────────┐                                        │
│  │  [📋 Get Free Quote]  [💬 Chat]│                                        │
│  └─────────────────────────────────┘                                        │
│                                                                             │
│  CONVERSION: WhatsApp inquiry with pre-filled context                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Returning Visitor Journey

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SCENARIO: User visited 2 weeks ago, now ready to book                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Direct traffic OR retargeting ad → Homepage                                │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────┐                                        │
│  │  Personalized Hero (returning)  │                                        │
│  │  "Welcome back! Ready to move   │                                        │
│  │   your pet?"                    │                                        │
│  │  [Continue Your Quote →]        │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼ (Click)                                                             │
│  ┌─────────────────────────────────┐                                        │
│  │  Pre-filled Quote Form          │                                        │
│  │  (Fields populated from last    │                                        │
│  │  session via localStorage)      │                                        │
│  │  [Pet: Dog] [Breed: GR]        │                                        │
│  │  [From: UK] [To: Dubai]        │                                        │
│  │  [Update & Get Quote →]         │                                        │
│  └─────────────────────────────────┘                                        │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────┐                                        │
│  │  Quote Result + Next Steps      │                                        │
│  │  Your estimate: AED 14,500      │                                        │
│  │  • [💬 Discuss on WhatsApp]     │                                        │
│  │  • [📅 Book Free Consultation]  │                                        │
│  │  • [📄 Download Full Quote PDF] │                                        │
│  └─────────────────────────────────┘                                        │
│                                                                             │
│  CONVERSION: WhatsApp consultation OR consultation booking                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.4 Journey Summary Matrix

| Journey | Entry Point | Primary Page | Key CTA | Conversion Event | Re-engagement |
|---------|-------------|--------------|---------|------------------|---------------|
| First-time visitor | Google (brand) | Homepage | Get Quote | Quote form submitted | Retargeting ads, email sequence |
| Search visitor | Google (long-tail) | Cost Guide / Route / Import Req | WhatsApp Chat | WhatsApp conversation started | WhatsApp follow-up, email drip |
| Returning visitor | Direct / Retargeting | Homepage (personalized) | Continue Quote | Consultation booked | Calendar reminder, SMS |
| Social visitor | Facebook/Instagram | Route page (ad-targeted) | WhatsApp Chat | Quote request | WhatsApp nurture sequence |
| Referral visitor | Word-of-mouth / Vet | Any page | WhatsApp Chat | Quote request | Personal thank-you, referral program |
| Corporate visitor | HR/relocation partner | Corporate page | Book Call | B2B consultation | Proposal, partner portal |

---

## 7. SEO & Content Architecture

### 7.1 URL Naming Convention

| Pattern | Example | Use Case |
|---------|---------|----------|
| `/guides/{topic}/` | `/guides/pet-relocation-cost-dubai/` | Educational, informational content |
| `/routes/{origin}-to-{destination}/` | `/routes/uk-to-dubai-pet-relocation/` | Route-specific, transactional content |
| `/breeds/{breed}-dubai-relocation/` | `/breeds/french-bulldog-dubai-relocation/` | Breed-specific content |
| `/areas/{area}-{service}/` | `/areas/pet-relocation-dubai-marina/` | Local SEO content |
| `/services/{service}/` | `/services/pet-relocation-concierge/` | Commercial service pages |
| `/blog/{topic}/` | `/blog/summer-pet-travel-embargo-dubai/` | Topical, seasonal, fresh content |
| `/ar/{arabic-slug}/` | `/ar/نقل-الحيوانات-الاليفة-دبي/` | Arabic-language content |
| `/tools/{tool}/` | `/tools/quote-calculator/` | Interactive utilities |
| `/download/{resource}/` | `/download/uae-pet-import-checklist/` | Gated lead magnets |

### 7.2 Schema Markup by Page Type

| Page Type | Required Schema | Optional Schema |
|-----------|---------------|----------------|
| Homepage | Organization, WebSite, LocalBusiness | BreadcrumbList, Speakable |
| Guide Pages | Article, FAQPage | HowTo, Table, Speakable |
| Route Pages | Article, FAQPage, BreadcrumbList | HowTo, Product (for packages) |
| Breed Pages | Article, FAQPage | HowTo, MedicalWebPage |
| Service Pages | Service, FAQPage, LocalBusiness | Product, Offer |
| About Pages | AboutPage, Organization | Person (for founder) |
| Review Pages | Review, AggregateRating | Testimonial |
| Blog Posts | Article, BlogPosting | FAQPage, HowTo |
| Contact Page | ContactPage, Organization | LocalBusiness |
| Arabic Pages | Same as English + inLanguage: "ar" | — |

### 7.3 Internal Linking Strategy

| Link Type | Source | Target | Anchor Text Pattern |
|-----------|--------|--------|---------------------|
| **Hub → Child** | /guides/ | /guides/cost/ | "Pet relocation cost in Dubai" |
| **Child → Hub** | /guides/cost/ | /guides/ | "All pet relocation guides" |
| **Cross-Guide** | Any guide | Related guide | Descriptive (e.g., "IATA crate requirements") |
| **Guide → Route** | /guides/import/ | /routes/uk-to-dubai/ | "UK to Dubai pet relocation" |
| **Route → Guide** | /routes/uk-to-dubai/ | /guides/cost/ | "How much does pet relocation cost?" |
| **Content → Tool** | Any page | /tools/calculator/ | "Get an instant quote" |
| **Content → Download** | Relevant guides | /download/checklist/ | "Download our free checklist" |
| **Contextual CTA** | Within content | /contact/whatsapp/ | "Chat with us on WhatsApp" |
| **Breadcrumb** | All pages | Parent hierarchy | Parent page name |
| **Related Content** | Bottom of page | 3 related pages | "You might also like..." |

### 7.4 Content Refresh Calendar

| Content Type | Refresh Frequency | Owner | Trigger |
|--------------|-------------------|-------|---------|
| Cost Guide | Quarterly | Content + Operations | Price changes, new partner rates |
| Import Requirements | On policy change | Operations | MOCCAE updates, airline rule changes |
| Route Pages | Quarterly | Content + Operations | Airline schedule changes, fee updates |
| Banned Breeds | Annually | Operations | MOCCAE policy updates |
| Summer Embargo | Annually (Feb–Mar) | Content | Airline embargo date releases |
| Currency Exchange | Weekly | Automated | GBP/AED, USD/AED rate changes |
| FAQ Schema | Monthly | Content | New questions from WhatsApp/Chat |
| Testimonials | As received | Operations | New customer reviews |
| Blog Posts | N/A (evergreen) | Content | — |
| Arabic Content | Quarterly | Content + Translator | English page updates |

---

## 8. Technical Implementation Notes

### 8.1 Performance Requirements

| Metric | Target | Rationale |
|--------|--------|-----------|
| First Contentful Paint (FCP) | < 1.5s | Mobile-first market; 3G coverage in some areas |
| Largest Contentful Paint (LCP) | < 2.5s | Hero images must load fast |
| Cumulative Layout Shift (CLS) | < 0.1 | WhatsApp button must not shift |
| Time to Interactive (TTI) | < 3.5s | Quote calculator must be responsive |
| Total Page Size | < 1.5MB | Mobile data plans |
| Core Web Vitals | Pass all | SEO ranking factor |

### 8.2 Mobile-Specific Technical Requirements

| Requirement | Implementation |
|-------------|---------------|
| **Viewport** | `width=device-width, initial-scale=1, maximum-scale=5` |
| **Touch targets** | Minimum 44×44px for all interactive elements |
| **Font size** | Minimum 16px for inputs (prevents iOS zoom) |
| **WhatsApp deep link** | `https://wa.me/{number}?text={prefilled}` with fallback to web WhatsApp |
| **Phone links** | `tel:+971XXXXXXXX` for all phone numbers |
| **Email links** | `mailto:` with pre-filled subject |
| **Form autofill** | `autocomplete` attributes on all fields |
| **Scroll anchoring** | `overflow-anchor: auto` for stable scrolling |
| **Sticky elements** | `position: sticky` with `z-index` management |
| **Bottom safe area** | `env(safe-area-inset-bottom)` for iPhone notch |
| **Haptic feedback** | On CTA clicks (optional, native feel) |
| **PWA capability** | Add to home screen, offline checklist access |

### 8.3 Tracking & Analytics

| Event | Trigger | Platform |
|-------|---------|----------|
| Page view | URL change | Google Analytics 4 |
| Scroll depth | 25%, 50%, 75%, 90% | GA4 |
| Time on page | 30s, 60s, 180s | GA4 |
| CTA click | Any button click | GA4 + Meta Pixel |
| WhatsApp click | WhatsApp button | GA4 + Meta Pixel + WhatsApp API |
| Quote form start | First field focus | GA4 |
| Quote form step | Each step completion | GA4 |
| Quote form submit | Successful submission | GA4 + Meta Pixel + CRM |
| Checklist download | PDF download | GA4 + CRM + Email platform |
| Calculator usage | Calculate button | GA4 |
| Internal link click | Any internal link | GA4 |
| Search query | Site search | GA4 |
| 404 error | Page not found | GA4 + Slack alert |
| Page speed | Web Vitals | GA4 + Search Console |

### 8.4 Accessibility Requirements

| Requirement | WCAG Level | Implementation |
|-------------|------------|----------------|
| Color contrast | AA (4.5:1) | All text, all backgrounds |
| Focus indicators | AA | Visible focus rings on all interactive elements |
| Alt text | A | All images, especially pet photos |
| Form labels | A | Explicit labels, not placeholders only |
| Error identification | A | Inline error messages, not just color |
| Skip links | A | Skip to main content, skip to WhatsApp |
| Screen reader headings | A | Logical H1→H6 hierarchy |
| ARIA labels | A | WhatsApp button, navigation, CTAs |
| Language declaration | A | `lang="en"` / `lang="ar"` per page |
| Arabic text direction | A | `dir="rtl"` for Arabic pages |
| Reduced motion | A | Respect `prefers-reduced-motion` |
| Zoom support | AA | 200% zoom without horizontal scroll |

---

## Appendix A: Page Metadata Templates

### Homepage

```html
<title>Pet Relocation Dubai | Transparent Pricing, Trusted Partners | [Brand]</title>
<meta name="description" content="Relocate your pet to or from Dubai with transparent pricing and trusted partners. Get an instant quote, expert guidance, and 24/7 WhatsApp support. MOCCAE licensed.">
<meta name="keywords" content="pet relocation Dubai, dog transport Dubai, cat relocation UAE, pet shipping Dubai, pet import Dubai">
```

### Cost Guide

```html
<title>Pet Relocation Cost Dubai (2026) | Full Price Breakdown | [Brand]</title>
<meta name="description" content="How much does pet relocation to Dubai cost? Get a complete breakdown: MOCCAE fees, vet costs, air freight, crates. Use our instant calculator. Updated monthly.">
```

### Import Requirements Guide

```html
<title>UAE Pet Import Requirements (2026) | MOCCAE Permit Guide | [Brand]</title>
<meta name="description" content="Step-by-step guide to UAE pet import requirements. MOCCAE permit, vaccinations, microchip, health certificate. Free downloadable checklist.">
```

### Route Page (UK→Dubai)

```html
<title>UK to Dubai Pet Relocation (2026) | Cost & Requirements | [Brand]</title>
<meta name="description" content="Moving your pet from the UK to Dubai? Complete guide to costs, timeline, documents, and airline options. No quarantine required. Get a free quote.">
```

### WhatsApp Contact

```html
<title>Contact Us on WhatsApp | Pet Relocation Dubai | [Brand]</title>
<meta name="description" content="Chat with our pet relocation experts on WhatsApp. Get answers, quotes, and guidance in minutes. Available 24/7.">
<meta name="robots" content="noindex, follow">  <!-- Utility page -->
```

---

## Appendix B: Competitor Architecture Comparison

| Competitor | Pages | URL Structure | Mobile UX | WhatsApp CTA | Pricing | Content Depth |
|------------|-------|---------------|-----------|------------|---------|---------------|
| Floof VIPets | ~8 | Flat | Good | Yes | Published | Medium |
| Paws & Planes | ~1 | Single-page | Good | Yes | None | Low |
| Pawpaths | ~6 | Flat | Good | No | None | Medium |
| ISS Relocations | ~50 | Deep | Poor | No | Vague | Thin (SEO spam) |
| Upsleeve | ~20 | Deep | Medium | Yes | None | Medium |
| **Our Site** | **6→100+** | **Hub-spoke** | **Excellent** | **Primary** | **Transparent** | **Deep** |

---

## Appendix C: Content Production Roadmap

| Month | Pages | Focus | Traffic Goal |
|-------|-------|-------|--------------|
| 1 | 6 (foundation) | Cost, Import, Crate, Timeline, Banned Breeds, UK→Dubai | 0–500 organic |
| 2 | 4 | USA→Dubai, Dubai→UK, Dubai→USA, Summer Embargo | 500–1,500 |
| 3 | 4 | Australia→Dubai, Dubai→Australia, India→Dubai, Cat Hub | 1,500–3,000 |
| 4 | 4 | Canada→Dubai, Dubai→Canada, Dog Hub, Pet-Friendly Housing | 3,000–5,000 |
| 5 | 4 | 4 more route pages, 2 breed guides | 5,000–8,000 |
| 6 | 6 | 4 more route pages, Arabic homepage, 2 local pages | 8,000–12,000 |
| 7–12 | 50+ | Programmatic expansion, FAQ schema, seasonal content | 12,000–30,000 |

---

*Document version: 1.0  
*Last updated: June 2026  
*Next review: After first 6 pages are built and analytics are available (Month 2)
