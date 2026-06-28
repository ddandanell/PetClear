import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Shield, Globe, Star, Clock, Heart, CheckCircle, ChevronDown, ChevronUp,
  Plane, FileCheck, Phone, Users, PawPrint, Dog, Cat, ArrowRight, Calendar, MapPin, Award
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, siteConfig, BASE_URL } from '../lib/seo.ts'
import { SERVICE_LINKS, TOP_AREA_LINKS } from '../data/nav.ts'

const defaultMsg = `Hi Dubai Pet Relocation team,

I need help relocating my pet and would love to understand the process and get a quick quote.

Pet type: [Dog / Cat]
Breed: [e.g., Golden Retriever / Persian Cat]
Current location: [City, Country]
Destination: [City, Country]
Planned move date: [Month/Year]

Thank you!`

const WhatsAppCta = ({
  text,
  message = defaultMsg,
  fullWidth = false,
  className = '',
}: {
  text: string
  message?: string
  fullWidth?: boolean
  className?: string
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm hover:shadow-md ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <MessageCircle className="w-4 h-4" />
    {text}
  </a>
)

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm p-7 lg:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${className}`}>
    {children}
  </div>
)

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left">
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#8A8A8A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dubai Pet Relocation',
    alternateName: 'Dubai Pet Relocation Dubai Pet Relocation',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dubai Pet Relocation',
    description: 'Pet relocation concierge service in Dubai',
    url: BASE_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2048',
      longitude: '55.2708',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$',
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do dogs need to be quarantined in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. If all documentation is complete and correct, pets do not require mandatory quarantine in Dubai. This includes a valid MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate. However, incomplete documentation can result in conditional quarantine at the owner\'s expense. We check every document three times to prevent this.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does pet relocation to Dubai cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet relocation to Dubai typically costs between AED 8,000 and AED 25,000 depending on the origin country, pet size, and service level. Our transparent cost breakdown includes government fees (AED 200–700), veterinary costs (AED 1,200–2,500), cargo shipping (AED 3,000–12,000), and our service fee (AED 1,500–6,000). You get an estimated range in 60 seconds using our online calculator.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does pet relocation to Dubai take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period after the titer test). We recommend starting at least 8 weeks before your planned move. If you are on a tighter timeline, message us on WhatsApp — we may have options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which dog breeds are banned in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The UAE bans Pit Bull types (including American Bully and Staffordshire Bull Terrier), Mastiff types (including Cane Corso, Boerboel, and Bullmastiff), Japanese Tosa, and wolf-dog hybrids. Some breeds like Rottweiler and Doberman are restricted rather than fully banned. Brachycephalic breeds (Bulldogs, Pugs, Persian cats) face airline restrictions during summer months. We verify your breed\'s eligibility before quoting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get an instant quote for pet relocation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our online cost calculator provides an estimated range in under 60 seconds. Simply enter your pet\'s size, origin country, and preferred service level. For a firm, itemized quote, complete the booking form or message us on WhatsApp. We respond within 15 minutes during business hours.',
        },
      },
    ],
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Dubai Pet Relocation | Pet Relocation Dubai — Transparent, Expert, Safe',
          description: 'Transparent pet relocation concierge for Dubai and the UAE. We help pet owners understand the process, check requirements, and connect with trusted relocation partners for safer dog and cat travel.',
          keywords: 'pet relocation Dubai, dog relocation Dubai, cat relocation Dubai, pet transport UAE, MOCCAE import permit, pet relocation cost Dubai',
          ogType: 'website',
        }}
        schemas={[organizationSchema, localBusinessSchema, faqSchema]}
      />
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-dog.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3A45B0]/95 via-[#4F5BD5]/88 to-[#6E78E0]/80" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm">
                  <Shield className="w-3 h-3" /> Trusted Pet Relocation Partner
                </span>
              </div>
              <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-bold leading-[1.12] tracking-tight text-white mb-6">
                Pet Relocation Dubai, Made Clear and Safe
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                We help pet owners understand the process, avoid costly mistakes, and connect with trusted relocation partners for safer dog and cat travel to or from Dubai.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Moving your pet doesn't have to be overwhelming. We guide you through permits, paperwork, and partner selection — with clear updates on WhatsApp at every step.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <WhatsAppCta text="Get Help on WhatsApp" fullWidth />
                <Link
                  to="/import-requirements"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-semibold text-sm hover:bg-white/15 transition-colors backdrop-blur-sm"
                >
                  Read the UAE Pet Import Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { icon: Dog, label: 'Dogs & cats' },
                  { icon: Globe, label: 'To & from Dubai' },
                  { icon: Users, label: 'Partner-matched support' },
                  { icon: Phone, label: 'WhatsApp guidance' },
                  { icon: MapPin, label: 'Route-specific checks' },
                ].map((item) => (
                  <span key={item.label} className="trust-badge">
                    <item.icon className="w-3 h-3" /> {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/hero-dog.jpg"
                  alt="A relaxed dog beside its owner in a warm Dubai apartment, preparing for pet relocation with travel documents nearby."
                  className="rounded-[28px] shadow-2xl w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-[20px] p-5 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#E9ECFB] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#4F5BD5]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2A2A2A]">Trusted relocation guidance</p>
                      <p className="text-xs text-[#8A8A8A]">To and from Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THREE STEP PROCESS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Three Simple Steps</span>
            <h2 className="text-section mt-3 mb-4">How Dubai Pet Relocation Works</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              We make pet relocation straightforward. No hidden complexity. No surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: Phone,
                title: 'Tell Us About Your Pet',
                body: 'Send us a WhatsApp message with your pet\'s details, your route, and timeline. We check breed eligibility, route requirements, and seasonal restrictions.',
              },
              {
                step: '02',
                icon: FileCheck,
                title: 'We Check & Prepare',
                body: 'We review your documents, check MOCCAE requirements, coordinate with vetted partners, and build a clear timeline with deadlines and checkpoints.',
              },
              {
                step: '03',
                icon: Heart,
                title: 'Your Pet Travels Safely',
                body: 'We coordinate the vet, crate, flight, and customs. You get WhatsApp updates at every checkpoint. Your pet is delivered safely to your door.',
              },
            ].map((s) => (
              <Card key={s.step} className="relative">
                <span className="absolute top-7 right-7 text-[64px] font-bold text-[#4F5BD5]/[0.04] leading-none">{s.step}</span>
                <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors"
            >
              See the Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ TO DUBAI / FROM DUBAI ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Our Services</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation To and From Dubai</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Whether you are moving to Dubai or leaving, we understand the requirements and connect you with the right partners for your route.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#F0F2FB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#4F5BD5] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">To Dubai</h3>
                  <p className="text-xs text-[#8A8A8A] font-medium">Importing your pet to the UAE</p>
                </div>
              </div>
              <p className="text-body mb-5">
                We help you understand MOCCAE import requirements, check breed eligibility, verify vaccination timelines, and coordinate with partners for a smooth arrival.
              </p>
              <ul className="space-y-2.5 mb-6">
                {['MOCCAE import permit guidance', 'Breed and route eligibility check', 'Vet partner coordination', 'Customs clearance support', 'Dubai Municipality registration'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/import-requirements" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read the import guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card className="bg-[#F0F2FB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#4F5BD5] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white rotate-180" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">From Dubai</h3>
                  <p className="text-xs text-[#8A8A8A] font-medium">Exporting your pet from the UAE</p>
                </div>
              </div>
              <p className="text-body mb-5">
                We help you understand export requirements for your destination country, coordinate health certificates, and connect you with partners for departure and arrival.
              </p>
              <ul className="space-y-2.5 mb-6">
                {['Export documentation check', 'Destination country requirements', 'Health certificate coordination', 'IATA crate guidance', 'Airline cargo booking support'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppCta text="Ask About Exporting" message="Hi, I need help exporting my pet from Dubai. Can you guide me through the process?" className="!px-5 !py-2.5 !text-xs" />
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ DOG & CAT CARDS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">By Pet Type</span>
              <h2 className="text-section mt-3 mb-4">Dog and Cat Relocation, Both Covered</h2>
              <p className="text-body-large mb-8">
                Dogs and cats have different requirements, different concerns, and different needs. We understand both. We guide you through breed-specific rules, crate sizing, airline policies, and health requirements for your pet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/dog-relocation"
                  className="group flex items-center gap-4 p-5 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-[#EEF0FC] flex items-center justify-center shrink-0">
                    <Dog className="w-6 h-6 text-[#4F5BD5]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5] transition-colors">Dog Relocation</p>
                    <p className="text-sm text-[#8A8A8A]">Breed checks, crate sizing, airline rules</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8A8A8A] group-hover:text-[#4F5BD5] transition-colors" />
                </Link>
                <Link
                  to="/cat-relocation"
                  className="group flex items-center gap-4 p-5 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-[#EEF0FC] flex items-center justify-center shrink-0">
                    <Cat className="w-6 h-6 text-[#4F5BD5]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5] transition-colors">Cat Relocation</p>
                    <p className="text-sm text-[#8A8A8A]">Sedation guidance, crate comfort, stress reduction</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8A8A8A] group-hover:text-[#4F5BD5] transition-colors" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-cat.jpg"
                alt="A calm cat in a safe travel crate with caring owner nearby in a modern Dubai home."
                className="rounded-[28px] shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-[20px] p-5 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                  <Star className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                  <Star className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                  <Star className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                  <Star className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                </div>
                <p className="text-sm font-semibold text-[#2A2A2A]">Trusted relocation guidance</p>
                <p className="text-xs text-[#8A8A8A]">Across Dubai and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE COORDINATE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">What We Coordinate</span>
              <h2 className="text-section mt-3 mb-5">We Handle the Hard Parts. You Stay Informed.</h2>
              <p className="text-body-large mb-8">
                You don't need to become an expert in MOCCAE regulations, IATA crate standards, or airline cargo policies. That is our role. We guide you through the complexity and connect you with the right partners.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: FileCheck, title: 'Document Review', body: 'We check every document three times before submission.' },
                  { icon: Calendar, title: 'Timeline Management', body: 'Clear deadlines, reminders, and checkpoint updates.' },
                  { icon: Shield, title: 'Breed Eligibility', body: 'Verify your breed against UAE and airline rules.' },
                  { icon: Award, title: 'Partner Vetting', body: 'We only work with partners we trust with our own pets.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-[16px] bg-[#F0F2FB]">
                    <div className="w-9 h-9 rounded-[10px] bg-[#E9ECFB] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#4F5BD5]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#2A2A2A] mb-1">{item.title}</p>
                      <p className="text-xs text-[#8A8A8A] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/reunion.jpg"
                alt="A happy pet owner reuniting with their dog after a safe international relocation to Dubai."
                className="rounded-[28px] shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRANSPARENT MODEL ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Our Approach</span>
          <h2 className="text-section mt-3 mb-4 max-w-2xl mx-auto">A Transparent Partner Model</h2>
          <p className="text-body-large max-w-2xl mx-auto mb-12">
            We do not own an airline. We are not a government agency. We are a concierge service that helps you understand the process and connects you with the right specialists.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Heart,
                title: 'Animal-First',
                body: 'Every decision we make starts with what is best for your pet. If a route is unsafe, we will tell you honestly.',
              },
              {
                icon: FileCheck,
                title: 'No Hidden Fees',
                body: 'We show you exactly what you will pay and what each charge covers. We do not mark up government fees.',
              },
              {
                icon: Users,
                title: 'Partner-Matched',
                body: 'We connect you with vetted partners based on your specific pet, route, and timeline — not a generic list.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{item.title}</h3>
                <p className="text-body">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES INTERLINK ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">What We Help With</span>
            <h2 className="text-section mt-3 mb-4">Our Pet Relocation Services</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              From import permits to door-to-door transport — explore the service that matches your move.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6E8F5] bg-white px-5 py-4 transition hover:border-[#4F5BD5] hover:shadow-md"
              >
                <span className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{s.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DUBAI AREAS INTERLINK ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Across Dubai</span>
            <h2 className="text-section mt-3 mb-4">Dubai Areas We Cover</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Door-to-door pet relocation from every Dubai community — villas and high-rise towers alike.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TOP_AREA_LINKS.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E6E8F5] bg-white px-4 py-2 text-sm font-semibold text-[#2A2A2A] transition hover:border-[#4F5BD5] hover:text-[#4F5BD5]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#4F5BD5]" />
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ IMPORT GUIDE CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-semibold text-[#6E78E0] uppercase tracking-wider">Essential Guide</span>
              <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight text-white mt-3 mb-4">
                UAE Pet Import Guide: Everything You Need to Know
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                The complete checklist for bringing dogs and cats to Dubai. Includes document requirements, timeline, banned breeds, vaccination rules, and a step-by-step process.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['MOCCAE import permit explained', 'Banned breed list', 'Vaccination timeline', 'Document checklist', 'Airline requirements'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-[#6E78E0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/import-requirements"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#EEF0FC] transition-colors"
              >
                Read the Full Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src="/images/import-hero.jpg"
                alt="Pet travel checklist with passport-style documents and vaccination records, warm natural lighting."
                className="rounded-[28px] shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ PREVIEW ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Common Questions</span>
            <h2 className="text-section mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-body-large">
              Quick answers to the questions we hear most often. For more detail, WhatsApp us anytime.
            </p>
          </div>
          <FAQItem
            question="Do dogs need to be quarantined in Dubai?"
            answer={
              <>
                <p>No. If all documentation is complete and correct, pets do not require mandatory quarantine in Dubai. This includes a valid MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate. However, incomplete documentation can result in conditional quarantine at the owner's expense. We check every document three times to prevent this.</p>
                <p className="mt-3">
                  <Link to="/import-requirements" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    Read our full import guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="How much does pet relocation to Dubai cost?"
            answer={
              <>
                <p>Pet relocation to Dubai typically costs between <strong>AED 8,000 and AED 25,000</strong> depending on the origin country, pet size, and service level. The breakdown includes government fees (AED 200–700), veterinary costs (AED 1,200–2,500), cargo shipping (AED 3,000–12,000), and coordination fees (AED 1,500–6,000).</p>
                <p className="mt-3">
                  <Link to="/cost-guide" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    See our full cost breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="How long does the process take?"
            answer={
              <p>From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period). We recommend starting at least 8 weeks before your planned move.</p>
            }
          />
          <FAQItem
            question="Which dog breeds are banned in Dubai?"
            answer={
              <p>The UAE bans Pit Bull types, Mastiff types (including Cane Corso and Boerboel), Japanese Tosa, and wolf-dog hybrids. Some breeds like Rottweiler and Doberman are restricted. We verify your breed's eligibility before quoting.</p>
            }
          />
          <FAQItem
            question="Can I get a quote on WhatsApp?"
            answer={
              <p>Yes. Send us a WhatsApp message with your pet's type, breed, origin, destination, and timeline. We will reply within 15 minutes during business hours with a realistic cost range and next steps.</p>
            }
          />
        </div>
      </section>

      {/* ═══════════ FINAL CONVERSION ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section mb-4">Ready to Get Clear Guidance?</h2>
          <p className="text-body-large mb-4">
            Send us a WhatsApp message with your pet's details. We will check your route, tell you what is needed, and give you a realistic timeline — usually within 15 minutes.
          </p>
          <p className="text-sm text-[#8A8A8A] mb-8">No forms. No hidden fees. No obligation. Just clear answers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppCta text="Get Help on WhatsApp" />
            <Link
              to="/cost-guide"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors"
            >
              View Cost Guide
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-[#8A8A8A]">
              <Clock className="w-3.5 h-3.5" /> Reply within 15 min
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#8A8A8A]">
              <Shield className="w-3.5 h-3.5" /> No hidden fees
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#8A8A8A]">
              <Heart className="w-3.5 h-3.5" /> Animal-first approach
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
