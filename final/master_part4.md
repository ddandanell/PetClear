# PART 4: WhatsApp CTA, Lead Forms & Conversion Tracking

> This section summarizes the conversion and tracking strategy. Full specifications are in `strategy/conversion_strategy.md`.

## 4.1 WhatsApp CTA Structure

### Button Design & Placement

| Type | Placement | Behavior | Copy Options |
|------|-----------|----------|--------------|
| Sticky FAB | Bottom-right, all pages | Fixed position, 64px, green WhatsApp icon | Chat, Get Quote, Ask a Question |
| Inline CTA | After key sections (cost, requirements, process) | Context-aware pre-filled message | Get Your Free Quote, Check My Pet's Eligibility, Ask an Expert |
| Exit Intent | Triggered on scroll-up near top | Modal with CTA | Before You Go - Get Your Free Pet Relocation Quote |
| End-of-Page | Below FAQs, above footer | Large button with trust badges | Start Your Pet's Journey, Get Started on WhatsApp |

### Pre-Filled WhatsApp Messages (by Page)

| Page | Pre-Filled Message |
|------|-------------------|
| Homepage | Hi, I am looking for help relocating my [dog/cat] to/from Dubai. Can you send me a quote and guide me through the process? |
| Cost Guide | Hi, I saw your cost guide and want a personalized quote for relocating my [dog/cat] from [country] to Dubai. |
| Import Requirements | Hi, I need help understanding the import requirements for my [dog/cat] from [country] to Dubai. |
| How It Works | Hi, I want to understand how the relocation process works for my [dog/cat] from [country] to Dubai. Can you walk me through it? |
| Dog Relocation | Hi, I want to relocate my [breed, size] dog to Dubai from [country]. Can you help me understand the process and cost? |
| Cat Relocation | Hi, I want to relocate my cat to Dubai from [country]. Can you help me understand the process and cost? |

### WhatsApp Business Setup

- WhatsApp Business API (not just app) for multi-agent handling
- Quick replies: 10 templates (quote request, document check, timeline, cost breakdown, booking, tracking, complaint, referral, general question, Arabic support)
- Response time SLA: <15 minutes during business hours (8am-8pm GST), <2 hours overnight
- Auto-reply for after-hours: Thank you + expected response time + emergency contact

## 4.2 Lead Form Structure

### Micro Form (Inline, All Pages)

| Field | Required | Notes |
|-------|----------|-------|
| Pet Type | Yes | Dog / Cat toggle |
| Origin Country | Yes | Dropdown, includes "Not sure yet" |
| WhatsApp Number | Yes | Auto-detect country code, validate format |

### Progressive Smart Form (Quote Page)

| Field | Step | Required | Notes |
|-------|------|----------|-------|
| Pet Type | 1 | Yes | Dog / Cat |
| Breed | 1 | Yes | Dropdown + "Other" + breed search |
| Pet Weight (kg) | 1 | Yes | Slider or input |
| Origin Country | 1 | Yes | Dropdown |
| Destination | 1 | Yes | Dubai / From Dubai |
| Travel Date | 2 | No | Date picker, includes "Flexible" |
| Microchip Status | 2 | No | Yes / No / Not sure |
| Rabies Vaccination Status | 2 | No | Yes / No / Not sure |
| Owner Name | 3 | Yes | Text |
| WhatsApp Number | 3 | Yes | Validated |
| Email | 3 | No | For document sharing |
| Special Needs | 3 | No | Textarea |

### Form Validation & Logic

- Breed check: If banned breed selected, show warning + "Contact us to check options"
- Seasonal warning: If travel date in June-September, show heat embargo notice
- Brachycephalic warning: If snub-nose breed selected, show airline restriction notice
- Lead scoring: 0-100 based on pet type, route, documentation status, timeline urgency

## 4.3 Conversion Tracking Plan

### Google Analytics 4 Events

| Event Name | Trigger | Parameter | Priority |
|------------|---------|-----------|----------|
| `whatsapp_click` | Any WhatsApp button click | `page_location`, `button_type` | Critical |
| `whatsapp_message_sent` | WhatsApp message sent (if trackable) | `page_location`, `prefilled` | Critical |
| `form_start` | User focuses first form field | `form_name`, `page_location` | High |
| `form_submit` | Form successfully submitted | `form_name`, `pet_type`, `origin` | Critical |
| `lead_qualified` | Form passes validation | `lead_score`, `route` | High |
| `scroll_depth_50` | User scrolls past 50% | `page_location` | Medium |
| `scroll_depth_90` | User scrolls past 90% | `page_location` | Medium |
| `video_play` | Video play (future) | `video_name`, `page_location` | Low |
| `download_checklist` | PDF download | `document_type`, `page_location` | High |
| `internal_link_click` | Clicks internal link | `target_page`, `anchor_text` | Medium |
| `exit_intent_shown` | Exit intent modal appears | `page_location` | Medium |
| `exit_intent_click` | Clicks exit intent CTA | `page_location` | High |
| `page_time_2min` | 2 minutes on page | `page_location` | Medium |
| `page_time_5min` | 5 minutes on page | `page_location` | High |

### Google Tag Manager Configuration

- **Container:** Single GTM container for all pages
- **Triggers:** Page view, click (WhatsApp buttons), form submission, scroll depth, timer
- **Variables:** Page URL, click element, form fields, custom JavaScript for scroll depth
- **Tags:** GA4 configuration, GA4 event tags, conversion linker, remarketing (future)

### Key Metrics Dashboard

| Metric | Target | Measurement |
|--------|--------|-------------|
| Homepage -> WhatsApp click | 8-12% | Event `whatsapp_click` / Page views |
| WhatsApp click -> Message sent | 75-85% | WhatsApp Business API (if available) |
| Form start -> Form submit | 35-45% | Event `form_submit` / `form_start` |
| Visit -> Customer | 3-5% | Customers / Unique visitors |
| Average lead value | AED 12,000 | CRM tracking |
| Cost per lead (organic) | < AED 200 | Total organic spend / Leads |
| Cost per lead (paid) | < AED 1,500 | Total ad spend / Leads |

---

