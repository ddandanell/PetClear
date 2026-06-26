# PetClear — Dubai Pet Relocation Website Design

## Overview

**Product:** PetClear — Premium pet relocation concierge platform for Dubai  
**Target Users:** Expat families, returning residents, military personnel, diplomats relocating dogs/cats to/from Dubai  
**Pages:** 6 (Homepage, Cost Guide, Import Requirements, How It Works, Dog Relocation, Cat Relocation)  
**Tech Stack:** React 18 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui + React Router + Framer Motion + Lucide Icons

---

## Design Philosophy

- **Premium but approachable**: Clean, warm, trustworthy — not clinical or cheap
- **Mobile-first**: 78%+ UAE traffic is mobile. Thumb-zone CTAs. Bottom-sheet nav.
- **WhatsApp-native**: Green WhatsApp CTAs everywhere. Sticky bottom bar on mobile.
- **Anxiety-reducing**: Calm colors, clear typography, generous white space, reassuring imagery
- **Conversion-focused**: Every section drives toward WhatsApp or quote form

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#1A5F4A` | Brand green, headings, key CTAs, nav active |
| Primary Light | `#2D8B6F` | Hover states, gradients |
| Primary Dark | `#0F3D2E` | Deep backgrounds, footer |
| Accent | `#E8A838` | Warm gold — trust badges, highlights, stats counters |
| Accent Light | `#F5D79A` | Subtle warm backgrounds, warning boxes |
| Background | `#FAFBF7` | Warm off-white page background |
| Surface | `#FFFFFF` | Cards, sections |
| Surface Warm | `#F5F0E8` | Alternate section backgrounds |
| Text Primary | `#1A1A1A` | Main body text |
| Text Secondary | `#5C5C5C` | Subheadings, captions |
| Text Muted | `#8A8A8A` | Meta info, timestamps |
| WhatsApp | `#25D366` | WhatsApp buttons only |
| Error | `#C0392B` | Warning boxes, banned breeds |
| Success | `#27AE60` | Checkmarks, positive indicators |

---

## Typography

| Role | Font | Weight | Size (Mobile/Desktop) | Line Height |
|------|------|--------|----------------------|-------------|
| H1 | Inter | 700 | 32px/48px | 1.15 |
| H2 | Inter | 600 | 24px/36px | 1.25 |
| H3 | Inter | 600 | 20px/24px | 1.3 |
| Body | Inter | 400 | 16px/18px | 1.6 |
| Body Small | Inter | 400 | 14px/14px | 1.5 |
| Button | Inter | 600 | 14px/16px | 1 |
| Label | Inter | 500 | 12px/12px | 1.4 |
| Stats | Inter | 700 | 36px/48px | 1.1 |

---

## Layout

- **Max width:** 1200px (desktop), 100% (mobile)
- **Section padding:** 64px vertical (mobile), 96px vertical (desktop)
- **Content padding:** 16px horizontal (mobile), 24px horizontal (tablet), 48px horizontal (desktop)
- **Grid:** 12-column on desktop, 4-column on mobile
- **Card radius:** 16px
- **Button radius:** 12px (primary), 8px (secondary)
- **Shadows:** `0 4px 24px rgba(0,0,0,0.06)` for cards, `0 2px 8px rgba(0,0,0,0.04)` for buttons

---

## Breakpoints

| Name | Width | Target |
|------|-------|--------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

---

## Shared Components

### Header
- Sticky, 64px height, white background with subtle bottom border
- Logo left (PetClear paw icon + wordmark)
- Desktop nav: How It Works, Cost Guide, Import Requirements, Dog, Cat, WhatsApp icon
- Mobile: Hamburger menu (bottom sheet drawer), WhatsApp icon always visible
- Scroll behavior: hide on scroll down, show on scroll up

### Footer
- Dark green background (#0F3D2E)
- 4-column grid on desktop: Logo + tagline, Quick Links, Guides, Contact
- WhatsApp button prominent
- Trust badges: MOCCAE, IPATA, IATA
- Copyright + privacy/terms links
- Mobile: stacked single column

### WhatsApp CTA Button
- Primary: Green (#25D366), white text, rounded, with WhatsApp icon
- Secondary: White/green border, green text
- Sticky bottom bar on mobile: 64px fixed height
- Floating FAB on desktop: bottom-right, 56px circle
- Pre-filled message context-aware per page

### Card
- White background, 16px radius, subtle shadow
- Hover: translateY(-2px), shadow increase
- Padding: 24px

### Section Header
- Eyebrow label (12px uppercase, accent color) + H2 + description paragraph
- Centered or left-aligned depending on section
- Max-width 600px for description text

### FAQ Accordion
- shadcn Accordion component
- Border-bottom divider style
- Plus/minus icon toggle
- Smooth height animation

### Table (Cost Guide)
- Clean header row with primary green background
- Alternating row backgrounds (white / warm gray)
- Responsive: horizontal scroll on mobile
- Bold key numbers

### Warning Box
- Amber left border (4px), warm background
- Warning icon (amber)
- Used for: banned breeds, summer embargo, brachycephalic warnings

---

## Animation & Motion

- **Page transitions:** Fade in, opacity 0→1, 400ms, ease-out
- **Section entrance:** IntersectionObserver trigger, translateY(24px)→0, opacity 0→1, 500ms, stagger 100ms per child
- **Card hover:** translateY(-4px), shadow increase, 200ms ease
- **Button hover:** scale(1.02), 150ms ease
- **FAQ toggle:** height auto-animate, 300ms ease
- **Sticky bottom bar:** slide up from bottom on scroll past hero
- **Reduced motion:** respect `prefers-reduced-motion`, disable transforms

---

## Page Structure

### 1. Homepage (`/`)
- **Hero:** Full-width warm background, H1 + subheadline + dual CTAs + trust badges, hero image right (desktop) / below (mobile)
- **Stats Bar:** 5 key metrics in a row (400+ pets, 4.9★, 15min response, 0 errors, 24/7)
- **Problem Section:** H2 "What Pet Owners Worry About" + 3 fear cards with icons
- **Solution Section:** H2 "We Handle the Hard Parts" + what we handle vs. what you handle
- **How It Works:** 4-step horizontal timeline (mobile: vertical)
- **Services:** Dog + Cat cards with images
- **Testimonials:** 3 testimonial cards
- **FAQ:** 5 questions with accordion
- **Final CTA:** Large section with WhatsApp button

### 2. Cost Guide (`/cost-guide`)
- **Hero:** Cost range upfront (AED 8,000–25,000) + "honest answer" hook
- **Factors:** 4 cards explaining why costs vary
- **Breakdown Tables:** Government fees, vet costs, cargo, crate, service fees
- **Route Costs:** UK, USA, India, Australia, Philippines tabs
- **Size Costs:** Small, medium, large, XL table
- **Hidden Costs:** Warning box + table
- **DIY vs. Service:** Comparison table
- **FAQ:** 5 questions
- **CTA:** WhatsApp for personalized quote

### 3. Import Requirements (`/import-requirements`)
- **Hero:** H1 + checklist preview + "no quarantine" promise
- **Document Checklist:** Full table with validity, costs, timeline
- **Step-by-Step:** 8 numbered steps with timeline
- **Banned Breeds:** Visual list + warning boxes
- **Vaccinations:** Requirements table
- **Airlines:** Emirates, Etihad, flydubai comparison
- **FAQ:** 5 questions
- **CTA:** WhatsApp for document help

### 4. How It Works (`/how-it-works`)
- **Hero:** Wedding planner analogy + H1
- **What We Do vs. Partners:** Side-by-side comparison table
- **7 Steps:** Vertical timeline with icons
- **Partner Vetting:** Criteria cards
- **Pricing Transparency:** Cost breakdown with "how we make money"
- **FAQ:** Including "Are you a middleman?"
- **CTA:** WhatsApp consultation

### 5. Dog Relocation (`/dog-relocation`)
- **Hero:** Dog-specific emotional hook + image
- **Fears:** 3 dog-specific worry cards
- **Documents:** 5 required docs for dogs
- **Breed List:** Banned + restricted breeds with warning
- **Crate Sizes:** Table by weight/breed
- **Airlines:** Comparison for dogs
- **Summer Warning:** Heat embargo + brachycephalic warning
- **Costs:** By size table
- **FAQ:** 5 dog questions
- **CTA:** WhatsApp for dog quote

### 6. Cat Relocation (`/cat-relocation`)
- **Hero:** Cat-specific emotional hook + image
- **Fears:** 4 cat-specific worry cards (softer tone)
- **Documents:** 7 required docs for cats
- **Crate:** Cat-specific crate guidance
- **Airlines:** Cabin vs. cargo for cats
- **Sedation:** Honest guidance (NOT recommended)
- **Costs:** By route table
- **FAQ:** 5 cat questions
- **CTA:** WhatsApp for cat quote

---

## Asset Manifest

| Filename | Type | Page | Dimensions | Description |
|----------|------|------|------------|-------------|
| hero-dog.jpg | Photo | Homepage | 16:9 | Golden retriever in IATA crate at airport |
| hero-cat.jpg | Photo | Cat page | 16:9 | Calm cat in travel carrier |
| hero-dog2.jpg | Photo | Dog page | 16:9 | Dog at airport cargo terminal |
| reunion.jpg | Photo | Homepage | 3:2 | Owner hugging dog at airport |
| vet-check.jpg | Photo | How It Works | 3:2 | Vet checking pet documents |
| team.jpg | Photo | Homepage | 16:9 | Team with pets in office |
| whatsapp-phone.jpg | Photo | Homepage | 1:1 | Phone showing WhatsApp chat |
| cost-hero.jpg | Photo | Cost Guide | 16:9 | Calculator + documents flat lay |
| import-hero.jpg | Photo | Import Req | 16:9 | Passport + pet documents |
| dog-crate.jpg | Photo | Dog page | 3:2 | Dog in IATA crate |
| cat-crate.jpg | Photo | Cat page | 3:2 | Cat in IATA crate |

---

## Dependencies

- `react`, `react-dom`, `react-router-dom`
- `tailwindcss`, `@tailwindcss/vite`
- `lucide-react`
- `framer-motion`
- `shadcn/ui` (Accordion, Button, Card, Sheet, Badge, Table, Tabs, Dialog)
- `vite`
- `typescript`
