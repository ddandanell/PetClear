import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, ChevronDown, ChevronUp, Search, ArrowRight, HelpCircle, FileText, DollarSign, Dog, Cat, Plane, Calendar
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span className="pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#8A8A8A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const WhatsAppCta = ({
  text,
  message,
  className = '',
}: {
  text: string
  message: string
  className?: string
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm hover:shadow-md ${className}`}
  >
    <MessageCircle className="w-4 h-4" />
    {text}
  </a>
)

const categories = [
  { id: 'general', label: 'General', icon: HelpCircle },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'costs', label: 'Costs', icon: DollarSign },
  { id: 'dogs', label: 'Dogs', icon: Dog },
  { id: 'cats', label: 'Cats', icon: Cat },
  { id: 'airlines', label: 'Airlines', icon: Plane },
  { id: 'timeline', label: 'Timeline', icon: Calendar },
]

interface FAQEntry {
  question: string
  answer: React.ReactNode
  category: string
}

const faqs: FAQEntry[] = [
  {
    category: 'general',
    question: 'What does Dubai Pet Relocation actually do?',
    answer: <p>Dubai Pet Relocation is a pet relocation concierge service. We help you understand the requirements for your route, check your documents, connect you with vetted veterinary and transport partners, and coordinate the entire process on WhatsApp. We do not physically transport pets ourselves — we are the coordination layer that makes sure nothing is missed.</p>,
  },
  {
    category: 'general',
    question: 'Do I need a pet relocation company?',
    answer: <p>Not always. If you are experienced with international pet travel, have time to research MOCCAE requirements, and are confident managing vet appointments, crate purchases, and airline cargo bookings, you may be able to do it yourself. However, most pet owners find that the risk of a missed document, incorrect timeline, or unexpected airline restriction is worth the cost of professional guidance.</p>,
  },
  {
    category: 'general',
    question: 'Is Dubai Pet Relocation a carrier or airline?',
    answer: <p>No. Dubai Pet Relocation is a coordination and concierge service. We work with vetted airlines, veterinarians, and transport partners to handle the physical relocation. We are the layer that connects you to the right specialists and ensures the timeline and paperwork are correct.</p>,
  },
  {
    category: 'general',
    question: 'What areas do you serve?',
    answer: <p>We are based in Dubai and primarily help with relocations to and from the UAE. However, we have coordinated relocations from over 50 countries to Dubai and from Dubai to Europe, North America, Asia, and Australia. If your route is unusual, just ask — we will tell you honestly if we can help.</p>,
  },
  {
    category: 'documents',
    question: 'What documents do I need to import a pet to Dubai?',
    answer: <><p>The standard requirements are: a valid MOCCAE import permit, an ISO-compliant microchip (15 digits), a valid rabies vaccination certificate, a veterinary health certificate from the origin country, and in some cases a rabies titer test (FAVN) for high-risk countries. Some countries also require additional parasite treatments or notarized documents.</p><p className="mt-3"><Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Read the full import guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
  },
  {
    category: 'documents',
    question: 'How do I get a MOCCAE import permit?',
    answer: <p>MOCCAE import permits are applied for online through the UAE government portal. You need your pet's microchip number, vaccination details, and your UAE residency or accommodation proof. The permit is typically issued within 3–5 business days and is valid for 90 days from issuance. The import permit costs AED 200 per pet, plus a release fee on arrival of AED 500/dog or AED 250/cat (government total ~AED 700/dog, ~AED 450/cat). We guide you through the application or handle it on your behalf depending on your service tier.</p>,
  },
  {
    category: 'documents',
    question: 'What is a rabies titer test (FAVN) and do I need one?',
    answer: <p>A rabies titer test measures the level of rabies antibodies in your pet's blood. It is required for pets coming from high-risk rabies countries. The blood sample must be drawn at least 30 days after the rabies vaccination, sent to an approved lab, and then there is a mandatory 90-day waiting period from the date of the blood draw before travel. This means the minimum timeline from high-risk countries is approximately 4 months.</p>,
  },
  {
    category: 'documents',
    question: 'Can my pet travel with an expired rabies vaccine?',
    answer: <p>No. The rabies vaccination must be valid at the time of travel and, depending on the origin country, administered within a specific timeframe. For many countries, the vaccine must be at least 30 days old but not expired. If the vaccine is expired, your pet will need a new vaccine and potentially a new waiting period. We check this early in the process.</p>,
  },
  {
    category: 'documents',
    question: 'Do I need a pet passport?',
    answer: <p>Pet passports are useful for EU-to-EU travel but are not accepted as a standalone document for UAE entry. For Dubai, you need the MOCCAE import permit, a health certificate issued by an official government veterinarian in the origin country, and proof of rabies vaccination. The pet passport can serve as supporting evidence but is not a substitute for the required certificates.</p>,
  },
  {
    category: 'costs',
    question: 'How much does pet relocation to Dubai cost?',
    answer: <><p>Pet relocation to Dubai typically costs between <strong>AED 8,000 and AED 25,000</strong> depending on the origin country, pet size, and service level. The breakdown includes government fees (AED 200–700), veterinary costs (AED 1,200–2,500), cargo shipping (AED 3,000–12,000), and coordination fees (AED 1,500–6,000).</p><p className="mt-3"><Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See our full cost breakdown <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
  },
  {
    category: 'costs',
    question: 'What is the cheapest way to relocate a pet to Dubai?',
    answer: <p>The cheapest approach is to handle the paperwork yourself, use a standard airline cargo service, and arrange your own vet appointments. However, this carries the risk of errors, missed deadlines, and lack of support if something goes wrong. Our PawPilot tier (AED 1,500–2,500) is designed to be affordable while still providing essential guidance and document checks.</p>,
  },
  {
    category: 'costs',
    question: 'Are there any hidden fees I should watch out for?',
    answer: <p>Common hidden fees include quarantine charges (if documents are incorrect), emergency boarding if flights are delayed, customs inspection fees, and last-minute vet appointment surcharges. We quote transparently and include contingency planning so you are not surprised.</p>,
  },
  {
    category: 'costs',
    question: 'Can I get a quote before I commit?',
    answer: <p>Yes. Our online cost calculator gives you an estimated range in under 60 seconds. For a firm, itemized quote, message us on WhatsApp with your pet's details, origin, and destination. We typically respond within 15 minutes during business hours.</p>,
  },
  {
    category: 'dogs',
    question: 'Which dog breeds are banned in Dubai?',
    answer: <><p>The UAE bans Pit Bull types (including American Bully and Staffordshire Bull Terrier), Mastiff types (including Cane Corso, Boerboel, and Bullmastiff), Japanese Tosa, and wolf-dog hybrids. Some breeds like Rottweiler and Doberman are restricted rather than fully banned. Brachycephalic breeds (Bulldogs, Pugs) face airline restrictions during summer months.</p><p className="mt-3"><Link to="/dog-relocation-to-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Read our dog relocation guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
  },
  {
    category: 'dogs',
    question: 'Can my dog travel in the cabin with me?',
    answer: <p>Most airlines require dogs to travel as cargo on international flights, especially to the UAE. Some airlines allow small dogs (under 8kg including carrier) in the cabin on certain routes, but this is increasingly rare for long-haul flights to Dubai. We will confirm the specific policy for your airline and route.</p>,
  },
  {
    category: 'dogs',
    question: 'What size travel crate does my dog need?',
    answer: <p>IATA requires that your dog can stand up without touching the top of the crate, turn around comfortably, and lie down in a natural position. We measure your dog and recommend the correct crate size. We also work with partners who can provide IATA-compliant crates if you do not have one.</p>,
  },
  {
    category: 'dogs',
    question: 'Can my dog be sedated for the flight?',
    answer: <p>Most airlines and veterinarians strongly advise against sedation for air travel. Sedation can impair your dog's ability to regulate body temperature and respond to stress. Instead, we recommend crate training, natural calming aids, and choosing a pet-friendly airline. We provide guidance on preparing your dog for travel without sedation.</p>,
  },
  {
    category: 'cats',
    question: 'Are cats easier to relocate than dogs?',
    answer: <p>Generally yes. Cats are usually smaller, most breeds are not restricted, and they often handle crate travel well once acclimated. However, cats are also more sensitive to stress and environmental changes, so preparation (crate training, familiar scents, calming pheromones) is important.</p>,
  },
  {
    category: 'cats',
    question: 'Do cats need the same documents as dogs?',
    answer: <p>Yes. The MOCCAE import requirements are the same for cats and dogs: microchip, rabies vaccination, health certificate, and import permit. High-risk origin countries also require the rabies titer test for cats. The main difference is that cats do not have breed bans, so the eligibility check is simpler.</p>,
  },
  {
    category: 'cats',
    question: 'Can my cat travel in the cabin?',
    answer: <p>Some airlines allow small cats in the cabin on international flights, but many long-haul routes to Dubai require cats to travel in the cargo hold. Policies vary by airline and aircraft type. We check the specific policy for your route and can advise on the best options.</p>,
  },
  {
    category: 'airlines',
    question: 'Which airlines accept pets to Dubai?',
    answer: <p>Emirates, Etihad, Qatar Airways, Lufthansa, KLM, British Airways, Turkish Airlines, and many others accept pets on various routes. However, each airline has different breed restrictions, crate requirements, temperature embargoes, and booking procedures. We match your pet and route to the best airline option.</p>,
  },
  {
    category: 'airlines',
    question: 'What is a temperature embargo and will it affect my pet?',
    answer: <p>Many airlines restrict pet travel when ground temperatures exceed 29°C (85°F) at any point in the journey. In Dubai, this typically means May through September can be restricted for snub-nosed (brachycephalic) breeds. Some airlines have broader embargoes. We check this before booking and can suggest alternative routes or timing.</p>,
  },
  {
    category: 'airlines',
    question: 'Can my pet travel on the same flight as me?',
    answer: <p>Sometimes. Pets traveling as cargo are booked on the same flight when possible, but this is not guaranteed. Cargo bookings are handled separately from passenger tickets and depend on cargo space, temperature conditions, and airline policy. We always try to book your pet on your flight or the closest available option.</p>,
  },
  {
    category: 'timeline',
    question: 'How long does pet relocation to Dubai take?',
    answer: <p>From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period after the titer test). We recommend starting at least 8 weeks before your planned move. If you are on a tighter timeline, message us on WhatsApp — we may have options.</p>,
  },
  {
    category: 'timeline',
    question: 'What happens if my documents are delayed?',
    answer: <p>Document delays are one of the most common causes of relocation stress. If a document is delayed, we adjust the timeline, communicate with the airline and vet partners, and explore options like expedited processing or a later flight. The earlier you involve us, the more options we have to handle delays without missing your move date.</p>,
  },
  {
    category: 'timeline',
    question: 'Can I relocate my pet at the last minute?',
    answer: <p>Last-minute relocations are possible from low-risk countries if all documents are already in order. However, last-minute bookings typically cost more (airlines charge higher cargo rates) and have fewer flight options. From high-risk countries, a last-minute relocation is almost impossible due to the mandatory titer test waiting period. We recommend starting at least 8 weeks ahead.</p>,
  },
  {
    category: 'timeline',
    question: 'When should I start the relocation process?',
    answer: <p>Ideally, 8–12 weeks before your planned move for low-risk countries. For high-risk countries, start 4–5 months ahead due to the rabies titer test timeline. Starting early gives you more flight options, lower costs, and time to handle any unexpected issues without stress.</p>,
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof faq.answer === 'string' ? faq.answer : 'See the full answer on the Dubai Pet Relocation FAQ page.',
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq/` },
    ],
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation FAQ Dubai | Dubai Pet Relocation',
          description: 'Pet relocation FAQ for Dubai: documents, costs, banned breeds, cats, dogs, airlines, and timelines. Ask us on WhatsApp if you need more help.',
          keywords: 'pet relocation FAQ Dubai, dog import FAQ, cat import FAQ, MOCCAE permit questions, pet transport cost Dubai, banned dog breeds UAE, pet relocation timeline',
          canonical: `${BASE_URL}/faq/`,
          ogType: 'website',
        }}
        schemas={[faqSchema, breadcrumbSchema]}
      />

      <Breadcrumb items={[{ label: 'FAQ' }]} />

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/faq-hero.jpg"
        imageAlt="A golden retriever beside pet relocation documents and a checklist, representing clear answers"
        eyebrow="FAQ"
        title="Pet Relocation FAQ — Everything You Need to Know"
        subtitle="Browse answers by category or search your specific question. Can't find it? WhatsApp us — we reply within 15 minutes during business hours."
      />

      {/* ═══════════ CATEGORY FILTERS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative max-w-lg mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-[12px] border border-[#E2E5F6] bg-white text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#4F5BD5]/30 focus:border-[#4F5BD5]"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === 'all' ? 'bg-[#4F5BD5] text-white' : 'bg-white text-[#5A5A5A] hover:bg-[#4F5BD5]/5'}`}
            >
              All Questions
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.id ? 'bg-[#4F5BD5] text-white' : 'bg-white text-[#5A5A5A] hover:bg-[#4F5BD5]/5'}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[#8A8A8A] text-base mb-4">No questions found matching your search.</p>
                <WhatsAppCta
                  text="Ask Us on WhatsApp"
                  message={`Hi Dubai Pet Relocation! I have a question about pet relocation: ${searchQuery}`}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ RELATED LINKS ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-3">
              Still Have Questions? Explore Our Guides
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed max-w-2xl mx-auto">
              Our detailed guides cover specific topics in depth. Click through to learn more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/guides/uae-pet-import-requirements/', label: 'Import Requirements Guide', icon: FileText, desc: 'Step-by-step checklist for bringing pets to Dubai' },
              { to: '/guides/pet-relocation-cost-dubai/', label: 'Cost Guide', icon: DollarSign, desc: 'Transparent breakdown of all relocation costs' },
              { to: '/dog-relocation-to-dubai/', label: 'Dog Relocation', icon: Dog, desc: 'Breed rules, crate sizing, and airline policies' },
              { to: '/cat-relocation-to-dubai/', label: 'Cat Relocation', icon: Cat, desc: 'Sedation guidance, stress reduction, and travel tips' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-start gap-4 p-5 bg-[#F5F6FD] rounded-[20px] hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-[12px] bg-[#E9ECFB] flex items-center justify-center shrink-0">
                  <link.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5] transition-colors text-sm">{link.label}</p>
                  <p className="text-xs text-[#8A8A8A] mt-1">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Didn't Find Your Answer?
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Every relocation is unique. Message us on WhatsApp with your specific question and we will give you a clear, personalized answer — usually within 15 minutes.
          </p>
          <WhatsAppCta
            text="Ask a Question on WhatsApp"
            message="Hi Dubai Pet Relocation! I have a specific question about pet relocation that I couldn't find in the FAQ. Can you help?"
          />
        </div>
      </section>
    </div>
  )
}
