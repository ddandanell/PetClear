# Month 1 Execution Plan — dubai-pet-relocation.ae

Derived from the Blue Book 90-Day Mission Plan (`pla_Pet Transport Dubai`). Target brand/domain: **dubai-pet-relocation.ae** (NOT pet-transport-dubai.ae). Day-30 target: **11 live pages** (homepage + 10 core `/service/` pages) on a clean technical foundation.

## Architecture decision: data-driven page engine
To scale from ~21 → 200+ pages, we do NOT hand-code each page. Instead:
- `src/types/servicePage.ts` — `ServicePageData` type (slug, SEO title/meta, H1, hero value-prop, hero image, trust badges, sections[], faq[], cost range, internal links, schema flags).
- `src/components/ServicePage.tsx` — one generic renderer in the Aleef periwinkle design system (two-column hero with photo, breadcrumb, sections, FAQ accordion, WhatsApp CTAs, Service + FAQPage (+ HowTo) JSON-LD).
- `src/data/services/*.ts` — one data file per page (content lives here).
- `src/data/services/index.ts` — registry; App.tsx mounts `/service/:slug/` from the registry.
- One photoreal image per page → `public/images/service-<slug>.jpg` (gpt-image-1, web-optimized).
- `public/sitemap.xml` extended with every new URL.

The same pattern is reused in later phases for Area, Route, Emirate and Document pages.

## Phase 1 — Foundation (Days 1-10)
- [x] Org + WebSite schema in served HTML (done earlier)
- [ ] Add LocalBusiness + BreadcrumbList schema (in generic component + home)
- [ ] WhatsApp links: append UTM params (`?utm_source=site&utm_medium=whatsapp&utm_campaign=<page>`)
- [x] Image optimization / lazy loading (done — WebP/JPEG ~120-160KB, lazy)
- [x] Sitemap + robots (done; will auto-extend per page)
- [ ] **GA4 + tracking — BLOCKED: needs the GA4 Measurement ID from owner** (events: WhatsApp_click, phone_click, form_submit, scroll_75, time_3min)

## Phase 2 — Homepage + 10 core service pages (Days 11-25)
| # | URL | Words | Schema |
|---|-----|-------|--------|
| 1 | /service/pet-relocation-dubai/ (hub) | 3000 | Service + FAQPage |
| 2 | /service/pet-import-dubai/ | 3000 | Service + HowTo + FAQPage |
| 3 | /service/pet-export-dubai/ | 3000 | Service + HowTo + FAQPage |
| 4 | /service/pet-transport-dubai/ | 2500 | Service + FAQPage |
| 5 | /service/international-pet-relocation/ | 2500 | Service + FAQPage |
| 6 | /service/pet-relocation-to-dubai/ | 3000 | Service + HowTo + FAQPage |
| 7 | /service/pet-relocation-from-dubai/ | 3000 | Service + HowTo + FAQPage |
| 8 | /service/dog-relocation-dubai/ | 2500 | Service + FAQPage |
| 9 | /service/cat-relocation-dubai/ | 2500 | Service + FAQPage |
| 10 | /service/moccae-pet-permit/ | 2500 | Service + HowTo + FAQPage |

Each page: hero photo, 6-9 H2 sections per Blue Book §8 outlines, 5-8 FAQ, ≥5 internal links (hub + related + /how-it-works/ + /cost/), WhatsApp CTA with per-page pre-fill, schema.

## 8-subagent division (content authoring)
Engine + example page built first; then 8 subagents each author data file(s) following the type + the Blue Book §8 outline + `research/` facts:
1. pet-relocation-dubai (hub) · 2. pet-import-dubai · 3. pet-export-dubai · 4. pet-transport-dubai · 5. international-pet-relocation · 6. to-dubai + from-dubai · 7. dog + cat relocation · 8. moccae-pet-permit

## Verification
tsc clean → deploy → browser-check each page renders, hero loads, schema present, internal links resolve, no console errors.
