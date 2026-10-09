import type { ServicePageData } from '../../types/servicePage.ts'
import { GUIDE_SOFT_GATE, waEligibility } from '../../lib/conversionCopy.ts'

const internationalPetRelocation: ServicePageData = {
  slug: 'international-pet-relocation',
  seoTitle: 'International Pet Relocation Dubai | To & From the UAE',
  metaDescription:
    'International pet relocation to and from Dubai for a dog or cat. Check eligibility and get a managed-move quote covering permits, the crate and the flight.',
  h1: 'International pet relocation to and from Dubai',
  primaryKeyword: 'international pet relocation dubai',
  heroValueProp:
    'International pet relocation is for owners moving a dog or cat into Dubai or out of Dubai: read the guides free, or book a paid managed move.',
  heroImage: '/images/service-international-pet-relocation.jpg',
  heroImageAlt:
    'Calm dog and cat beside a travel crate with a world map and aircraft',
  whatsappMessage: waEligibility({ need: 'managed move' }),
  ctaLabel: 'Get a managed-move quote',
  ctaSupport:
    'Check eligibility first. Send the pet, the countries and the month, and we reply with a managed-move quote.',
  ctaHeading: 'Ready to book a managed move?',
  ctaBody:
    'Send your name, pet, origin, destination and travel month. We check eligibility and reply with a managed-move quote before any booking. We do not publish an AED package price.',
  gateLine: GUIDE_SOFT_GATE,
  paidIncludes: [
    'Route and eligibility check',
    'MOCCAE import permit timing (90 days from issuance) or export certificate sequencing',
    'Airline or cargo booking and an IATA crate',
    'Airport handover and customs to the door',
  ],
  snippetQuestion: 'Which flight mode fits a move to or from Dubai?',
  snippetAnswer:
    'Choose how the international move travels into or out of Dubai: manifest cargo, a private jet, or a shared charter. Cabin and checked-baggage rules depend on the airline and sit on the flight-options guides. Emirates SkyCargo charges stay on the cargo guide. Door-to-door coordination is a separate page when you want one coordinator for the whole file.',
  trustBadges: ['Route-by-route requirement checks', 'Vetted partners worldwide', 'Pet-experienced airlines', 'WhatsApp support'],
  hasHowTo: false,
  sections: [
    {
      h2: 'International pet relocation into and out of Dubai',
      intro:
        'International pet relocation is more complex than a regional move. Every destination country sets its own import rules, and the same pet can need different paperwork, vaccinations and waiting periods depending on where it is heading. We coordinate the whole journey to and from Dubai by checking the current rules for your exact corridor so nothing falls through the gaps.',
      body: [
        {
          type: 'p',
          text: 'Owners leaving the UAE use [pet relocation from Dubai](/service/pet-relocation-from-dubai/). Owners bringing a dog or cat in use [pet relocation to Dubai](/service/pet-relocation-to-dubai/). Either way, we match the animal to the destination country\'s entry rules, prepare documents in the right order, book a suitable flight and clear customs on both ends. We map the full route before you commit, then send a WhatsApp quote. We do not publish an invented AED package table on this page.',
        },
        {
          type: 'p',
          text: 'We are a coordination service, not an airline or a carrier. We do not physically fly the animals ourselves. We connect you with vetted veterinary, crate and ground-handling partners, work with pet-experienced airlines, and make sure the documentation and timing are correct for your specific destination.',
        },
        {
          type: 'list',
          items: [
            'Destination-by-destination requirement checks for your exact corridor',
            'Microchip, rabies vaccination, titer test and health certificate review against the destination country\'s rules',
            'MOCCAE import or export permit guidance, and origin and destination government paperwork coordination',
            'IATA-compliant crate sizing and sourcing through vetted partners',
            'Flight routing and cargo booking with pet-experienced airlines out of DXB and DWC',
            'Customs clearance coordination at both ends and door-to-door delivery',
            'A single WhatsApp point of contact for the entire move',
          ],
        },
        {
          type: 'p',
          text: 'Popular international corridors include the UK, USA, India, Australia, the EU, Canada, Singapore and the wider GCC. Because requirements vary so much by destination, we confirm the current rules for your exact country before quoting. We never copy a generic checklist across borders.',
        },
      ],
    },
    {
      h2: 'International Pet Relocation Process',
      intro:
        'The documents depend on the two countries and the travel date. We set the order of work from that pair, then confirm it before anyone books cargo.',
      body: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Tell us your route',
              text: 'Send your pet type, breed, origin and destination country on WhatsApp. We confirm the destination country\'s current import requirements, check breed eligibility and flag any seasonal or country-specific restrictions before you commit.',
            },
            {
              title: 'Map the timeline',
              text: 'Because requirements vary by destination, we work backwards from your travel date. Some countries are straightforward; others (such as rabies-controlled or island nations) require titer tests and destination-specific calendars, so we plan the sequence carefully. UAE inbound titer, when required, is a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. It is not a wait after the draw.',
            },
            {
              title: 'Prepare documents and permits',
              text: 'We review microchip, vaccinations and the government health certificate, and guide the MOCCAE import or export permit alongside any documentation the destination country demands. We check names and microchip numbers match across every document.',
            },
            {
              title: 'Crate and flight booking',
              text: 'We help size an IATA-compliant crate through vetted partners and coordinate a routing on a pet-experienced airline, choosing connections and transit airports that suit your animal.',
            },
            {
              title: 'Travel day and customs',
              text: 'Your pet travels per IATA Live Animals Regulations. We coordinate departure handling and customs clearance at both the origin and destination airports.',
            },
            {
              title: 'Door-to-door delivery',
              text: 'We arrange final delivery to the home address and keep you updated on WhatsApp at every checkpoint, so you always know where your pet is.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Country-Specific Requirements',
      intro:
        'There is no single set of rules for international pet relocation. Each destination country decides what it needs, and getting the file wrong can mean weeks of delay or refused entry. Below are the broad shapes of some of the most common destinations, with detailed route guides for the busiest corridors.',
      body: [
        {
          type: 'table',
          headers: ['Destination', 'What typically drives the timeline'],
          rows: [
            ['United Kingdom', 'Microchip, rabies vaccination and an approved route; specific paperwork and an authorised carrier for the final leg.'],
            ['United States', 'Rabies vaccination and a valid health certificate; requirements differ by destination state and have been tightened in recent years.'],
            ['India', 'Import permits and health documentation; rules differ for returning residents versus first-time imports.'],
            ['Australia', 'One of the strictest regimes worldwide: rabies titer testing, long lead times and mandatory post-arrival quarantine.'],
          ],
        },
        {
          type: 'p',
          text: 'These summaries are a starting point only. Requirements change, and the precise documents depend on your pet, its vaccination history and your departure point. We confirm the live rules for your destination before quoting, and our route guides break each corridor down step by step.',
        },
        {
          type: 'list',
          items: [
            '[UK to Dubai](/routes/uk-to-dubai/) route guide',
            '[USA to Dubai](/routes/usa-to-dubai/) route guide',
            '[Australia to Dubai](/routes/australia-to-dubai/) route guide',
          ],
        },
        {
          type: 'p',
          text: 'Heading the other way, out of Dubai to the UK, USA, India, Australia or beyond? The same principle applies: we work to the destination country\'s import rules and the UAE\'s MOCCAE export requirements together, so both ends line up.',
        },
      ],
    },
    {
      h2: 'How we choose cabin, cargo or charter',
      intro:
        'We are independent of every carrier. Cabin, accompanied baggage and manifest cargo are chosen first. Private-jet and shared-charter bookings stay on their own offer pages.',
      body: [
        {
          type: 'cards',
          cards: [
            {
              title: 'Pet flight options hub',
              text: 'Compare all six modes in one decision table.',
              to: '/guides/pet-flight-options-dubai/',
              kind: 'Guide',
            },
            {
              title: 'Etihad in-cabin',
              text: 'The UAE cabin exception: small pets into Abu Dhabi.',
              to: '/guides/etihad-pet-policy/',
              kind: 'Guide',
            },
            {
              title: 'Emirates / manifest cargo',
              text: 'Educational cargo process. Airline animal-charge tiers (source: Emirates); freight quoted per route and weight.',
              to: '/guides/emirates-pet-cargo/',
              kind: 'Guide',
            },
            {
              title: 'Private jet pet travel',
              text: 'Open the capability page. Jet travel is quoted there.',
              to: '/service/private-jet-pet-travel/',
              kind: 'Service',
            },
            {
              title: 'Shared / group pet charter',
              text: 'Open the capability page. Market listings there are labelled. A firm seat is quoted.',
              to: '/service/shared-pet-charter/',
              kind: 'Service',
            },
          ],
        },
        {
          type: 'p',
          text: 'Emirates does not carry dogs or cats in the cabin (falcons and guide dogs excepted; source: Emirates). UAE arrivals travel as manifest cargo except Etihad in-cabin into Abu Dhabi. We confirm current acceptance, crate rules and booking windows with the carrier before anything is booked. We do not claim an airline partnership.',
        },
      ],
    },
    {
      h2: 'What drives your international move quote',
      intro:
        'An international move costs more than a same-city transfer because of long-haul routing, destination-specific veterinary work and more complex documentation. We quote after an eligibility check. We do not publish an AED package table.',
      body: [
        {
          type: 'p',
          text: 'Airline fee grids live on the child guides, not here: Etihad cabin fees on the [Etihad pets-in-cabin guide](/guides/etihad-pet-policy/), and Emirates animal-charge tiers on the [Emirates pet cargo](/guides/emirates-pet-cargo/) guide. Private-jet and shared-charter capability, including labelled market listings, live on [private jet pet travel](/service/private-jet-pet-travel/) and [shared pet charter](/service/shared-pet-charter/). Freight and coordination on this page are quoted after eligibility. Pet cargo Dubai is a secondary term on this page, not a separate service URL.',
        },
        {
          type: 'table',
          headers: ['Driver', 'Why it moves the quote'],
          rows: [
            ['Destination rules', 'Titer tests, waiting periods and quarantine sit on the country pair, not on a generic average'],
            ['Pet size and crate', 'Chargeable weight and whether a larger IATA crate is required'],
            ['Flight mode', 'Cabin, accompanied baggage or manifest cargo. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/). Jet and charter are linked offer pages, not priced on this page.'],
            ['Season and aircraft', 'Heat embargoes and snub-nosed limits shrink which carriers will accept the booking'],
            ['Scope we coordinate', 'Document guidance only, versus booking, travel day and the last mile. Compare [service tiers](/services/)'],
          ],
        },
        {
          type: 'p',
          text: 'Commercial cargo handoff on this page and the door-to-door umbrella both stay quote-only. The Dubai service page is [door-to-door pet relocation](/service/pet-relocation-dubai/). Government portal fees are confirmed on the official site. Message WhatsApp or write to support@dubai-pet-relocation.ae for a route-specific quote.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How many countries do you cover for international pet relocation?',
      a: 'We coordinate pet relocation to and from Dubai on a corridor-by-corridor basis, including popular destinations such as the UK, USA, India, Australia, the EU, Canada and Singapore. Because requirements vary by destination, we confirm the current rules for your exact country before quoting.',
    },
    {
      q: 'Do requirements differ by destination country?',
      a: 'Yes, significantly. Each country sets its own import rules, so the same pet may need different vaccinations, a rabies titer test, specific permits or a quarantine period depending on where it is going. We check the live requirements for your destination rather than applying a generic checklist.',
    },
    {
      q: 'How long does an international pet move take?',
      a: 'It depends entirely on the destination. Straightforward routes from low-risk countries can take a few weeks, while strict regimes, such as Australia, which requires titer testing and post-arrival quarantine, can take several months. We map the timeline backwards from your travel date so you can plan ahead.',
    },
    {
      q: 'Which airlines do you use?',
      a: 'We are not affiliated with any airline. We confirm which pet-experienced carrier will accept the animal. That is often Emirates SkyCargo for Dubai-ending itineraries, or Etihad cabin into Abu Dhabi when the pet qualifies. Compare modes on the [pet flight options hub](/guides/pet-flight-options-dubai/).',
    },
    {
      q: 'Do you physically transport the pet yourselves?',
      a: 'No. We are a coordination service, not an airline or carrier. We connect you with vetted veterinary, crate and ground-handling partners, book with pet-experienced airlines, and manage the documents and timeline so nothing is missed.',
    },
    {
      q: 'What should I send for an international quote?',
      a: 'Send your name, whether the pet is a dog or cat, the breed, the origin country, the destination country, a target month, and whether you need import, export, or both. Add any vaccine or titer notes you already have. We use that to check eligibility and reply with a managed-move quote. Government fees are confirmed on the MOCCAE portal. Email support@dubai-pet-relocation.ae if you prefer mail.',
    },
    {
      q: 'How far ahead should I start if I am relocating a pet to Dubai?',
      a: 'Start when the travel month is known, and earlier if the origin country needs a rabies titer. For a move into Dubai, the MOCCAE import permit is valid for 90 days from issuance, so the application is timed against the flight rather than filed so early that it lapses. Stricter origin countries need a longer calendar than a straightforward corridor. WhatsApp +971504782999 when you are ready for an eligibility check and a managed-move quote.',
    },
    {
      q: 'How do I get started?',
      a: 'WhatsApp +971504782999 with your name, pet type, breed, origin and destination country when you want a quote. We confirm the destination\'s exact requirements, map the timeline and reply with a managed-move quote. We do not publish package prices on this page. Email support@dubai-pet-relocation.ae if you prefer mail. What a quote covers is on [Prices](/prices/).',
    },
  ],
  relatedLinks: [
    { label: 'Pet relocation to Dubai', to: '/service/pet-relocation-to-dubai/' },
    { label: 'Pet relocation from Dubai', to: '/service/pet-relocation-from-dubai/' },
    { label: 'Pet relocation services', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet flight options hub', to: '/guides/pet-flight-options-dubai/' },
    { label: 'Emirates pet cargo', to: '/guides/emirates-pet-cargo/' },
    { label: 'Shared pet charter', to: '/service/shared-pet-charter/' },
    { label: 'Etihad pet policy', to: '/guides/etihad-pet-policy/' },
    { label: 'Private jet pet travel', to: '/service/private-jet-pet-travel/' },
    { label: 'pet relocation Dubai', to: '/' },
    { label: 'Pet Export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
    { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
    { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
    { label: 'How It Works', to: '/how-it-works/' },
  ],
}

export default internationalPetRelocation
