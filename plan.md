# Dubai Pet Relocation Website — Master Execution Plan

**Date:** 2026-06-25
**Anchor Time:** 2026-06-25T11:05:39+0800 (WITA)
**Workspace:** /Users/openclaw/Documents/Kimi/Workspaces/pet-v2
**Goal:** Build a complete first-version website strategy for a Dubai pet relocation concierge platform.
**Output:** Comprehensive master document (.md + .docx) covering all 21 deliverables.

---

## Project Overview

Build a lean, premium, conversion-focused Dubai pet relocation website.
Core positioning: Transparent pet relocation concierge and partner-matching platform.
Primary goal: Generate high-quality WhatsApp leads from pet owners relocating dogs/cats to/from Dubai.
Long-term vision: Momondo-style marketplace for pet relocation suppliers.

---

## Stage 1: Research (Parallel Agents)

**Objective:** Gather evidence on UAE regulations, competitors, keywords, and market data.

| Agent | Role | Focus | Output File |
|-------|------|-------|-------------|
| Research_A | UAE_Regulation_Agent | Dubai/UAE pet import laws, MOCCAE requirements, banned breeds, vaccination rules, documentation | research/uae_pet_regulations.md |
| Research_B | Competitor_Agent | Top Dubai pet relocation companies, their pricing, positioning, website structure, gaps | research/competitor_analysis.md |
| Research_C | SEO_Keyword_Agent | Keyword landscape for pet relocation Dubai, search volumes, intent mapping, long-tail opportunities | research/keyword_landscape.md |
| Research_D | Market_Agent | Pet ownership stats in UAE, expat relocation trends, demand signals, customer pain points | research/market_research.md |

**Research Rules:**
- All search in English
- Use kimi_search_v2 and kimi_fetch_v2
- Cite sources with [^id] footnotes
- Save to research/ directory
- Focus on current/2025-2026 data

---

## Stage 2: Strategy & Architecture

**Objective:** Synthesize research into website architecture, brand positioning, and conversion strategy.

| Agent | Role | Focus | Output File |
|-------|------|-------|-------------|
| Strategy_A | Architecture_Agent | Site structure, URL hierarchy, 6 authority pages, navigation, mobile UX | strategy/website_architecture.md |
| Strategy_B | Brand_Positioning_Agent | Brand voice, value prop, trust signals, differentiation from competitors | strategy/brand_positioning.md |
| Strategy_C | Conversion_Agent | WhatsApp CTA strategy, lead form design, funnel stages, tracking events | strategy/conversion_strategy.md |
| Strategy_D | SEO_Strategy_Agent | Page-by-page SEO plan, internal linking, keyword mapping, schema strategy | strategy/seo_strategy.md |

---

## Stage 3: Content Production (Parallel Agents)

**Objective:** Write complete copy for 6 authority pages.

| Page | File | Agent Role |
|------|------|-----------|
| Homepage (/) | pages/homepage.md | Homepage_Copywriter |
| Dog Relocation to Dubai (/dog-relocation-to-dubai) | pages/dog_relocation.md | Dog_Page_Copywriter |
| Cat Relocation to Dubai (/cat-relocation-to-dubai) | pages/cat_relocation.md | Cat_Page_Copywriter |
| How It Works (/how-it-works) | pages/how_it_works.md | Process_Copywriter |
| About / Trust (/about) | pages/about.md | Trust_Page_Copywriter |
| Contact / Get Quote (/contact) | pages/contact.md | Contact_Page_Copywriter |

**Each page must include:**
- Full body copy with H1, H2, H3 structure
- Meta title (50-60 chars)
- Meta description (150-160 chars)
- 3-5 FAQ items with answers
- Image prompts (3-5 per page)
- Image alt text
- WhatsApp CTA placement and copy
- Internal linking suggestions (3-5 links)

---

## Stage 4: Technical SEO & Schemas

**Objective:** Produce all technical specifications.

| Component | File | Producer |
|-----------|------|----------|
| FAQ Schema | technical/faq_schema.md | Schema_Agent |
| Service Schema | technical/service_schema.md | Schema_Agent |
| Organization Schema | technical/organization_schema.md | Schema_Agent |
| Breadcrumb Schema | technical/breadcrumb_schema.md | Schema_Agent |
| Internal Linking Plan | technical/internal_linking.md | SEO_Technical_Agent |
| Conversion Tracking Plan | technical/tracking_plan.md | Tracking_Agent |
| Image Direction & Alt Text | technical/image_direction.md | Image_Agent |

---

## Stage 5: Integration & Final Assembly

**Objective:** Merge all outputs into one coherent master document.

**Steps:**
1. Read all research, strategy, page, and technical files
2. Compile into master website strategy document
3. Add: Future SEO scaling roadmap, Do-not-build-yet list, Launch QA checklist
4. Final QA pass for consistency, accuracy, and completeness
5. Convert to .docx using docx skill

---

## Deliverables Checklist (21 Items)

1. [ ] Website architecture
2. [ ] First 5-6 pages (with full copy)
3. [ ] Page-by-page SEO strategy
4. [ ] Final page copy
5. [ ] H1, H2, H3 structure
6. [ ] Meta titles
7. [ ] Meta descriptions
8. [ ] Internal linking plan
9. [ ] WhatsApp CTA structure
10. [ ] Lead form structure
11. [ ] Image prompts
12. [ ] Image alt text
13. [ ] FAQ sections
14. [ ] FAQ schema
15. [ ] Service schema
16. [ ] Organization schema
17. [ ] Breadcrumb schema
18. [ ] Conversion tracking plan
19. [ ] Future SEO scaling roadmap
20. [ ] Do-not-build-yet list
21. [ ] Final launch QA checklist

---

## File Structure

```
pet-v2/
├── plan.md
├── research/
│   ├── uae_pet_regulations.md
│   ├── competitor_analysis.md
│   ├── keyword_landscape.md
│   └── market_research.md
├── strategy/
│   ├── website_architecture.md
│   ├── brand_positioning.md
│   ├── conversion_strategy.md
│   └── seo_strategy.md
├── pages/
│   ├── homepage.md
│   ├── dog_relocation.md
│   ├── cat_relocation.md
│   ├── how_it_works.md
│   ├── about.md
│   └── contact.md
├── technical/
│   ├── faq_schema.md
│   ├── service_schema.md
│   ├── organization_schema.md
│   ├── breadcrumb_schema.md
│   ├── internal_linking.md
│   ├── tracking_plan.md
│   └── image_direction.md
├── final/
│   ├── dubai_pet_relocation_website_strategy.md
│   └── dubai_pet_relocation_website_strategy.docx
```

---

## Quality Standards

- **Premium tone**: Clear, honest, professional, never cheap or spammy
- **Mobile-first**: All copy and structure designed for mobile first
- **WhatsApp-first**: CTAs optimized for WhatsApp lead generation
- **SEO-ready**: Every page has clear keyword targets, meta tags, schema
- **Honest positioning**: Transparent about partner model, never overclaim
- **E-E-A-T**: Demonstrate expertise, authority, and trustworthiness
- **Scalable foundation**: Structure supports future programmatic SEO expansion
