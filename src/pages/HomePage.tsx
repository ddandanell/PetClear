import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Shield,
  Award,
  Globe,
  Star,
  Clock,
  Heart,
  PawPrint,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Plane,
  FileCheck,
  Truck,
  Camera,
  Phone,
  MapPin,
  Package,
  AlertTriangle,
  Users,
  Lock,
  TrendingUp,
  Sun,
  Snowflake,
  Calendar,
  DollarSign,
  HelpCircle,
  ArrowRight,
  Dog,
  Cat,
  ClipboardCheck,
} from 'lucide-react'

const whatsappUrl = (text: string) =>
  `https://wa.me/9715XXXXXXXX?text=${encodeURIComponent(text)}`

const defaultMsg = `Hi PetClear team,

I'm planning to relocate my pet and would love to get a quick quote and understand the process.

Pet type: [Dog / Cat]
Breed: [e.g., Golden Retriever / Persian Cat]
Weight: [e.g., 15kg]
Moving from: [City, Country]
Moving to: [City, Country]
Planned move date: [Month/Year]

Thanks!`

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
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <MessageCircle className="w-4 h-4" />
    {text}
  </a>
)

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 lg:py-24 ${className}`}>
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
)

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 lg:p-8 ${className}`}>
    {children}
  </div>
)

/* ─── FAQ accordion ─── */
function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left">
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#1A5F4A] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#5C5C5C] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default function HomePage() {
  /* inject FAQ JSON-LD */
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
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
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#1A5F4A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-dog.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Pet Relocation Dubai — Trusted International Dog & Cat Transport Services
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Get a clear, instant quote for your pet's relocation. Then let us handle the permits, paperwork, and partner coordination — with updates on WhatsApp at every step.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Moving your dog or cat to or from Dubai doesn't have to be overwhelming. Most pet owners don't know where to start. The paperwork is confusing. The pricing is hidden. And every company seems to say the same thing.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                We built PetClear to be different. We show you your price before you talk to anyone. We handle the MOCCAE permit, the flight booking, the vet coordination, and the customs clearance. You get one WhatsApp thread. One point of contact. And real updates at every checkpoint.
              </p>
              <p className="text-white/90 font-medium mb-8">Your pet's journey, made clear.</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <WhatsAppCta text="Get Your Free Pet Travel Quote on WhatsApp" fullWidth />
                <a
                  href={whatsappUrl('Hi PetClear team, I have a quick question about relocating my pet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors"
                >
                  WhatsApp Us for Quick Help
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> MOCCAE Licensed</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> IPATA Member</span>
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> IATA LAR Certified</span>
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> 4.9★ Google Reviews</span>
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Insured & Bonded</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/hero-dog.jpg"
                alt="A relaxed golden retriever in an IATA-certified travel crate at Dubai airport cargo terminal, ready for international pet relocation."
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF / TRUST ===== */}
      <Section className="bg-[#FAFBF7]">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
            Trusted by Pet Parents Across Dubai and Beyond
          </h2>
          <p className="text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed">
            We have relocated 400+ pets to and from Dubai. Our customers are British expats returning home. American military families on new orders. Indian professionals starting a new chapter. Emirati families bringing their companions back to the UAE.
          </p>
          <p className="text-[#5C5C5C] mt-2">They all have one thing in common. They wanted someone they could trust.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {[
            { icon: PawPrint, value: '400+', label: 'Pets Relocated' },
            { icon: Star, value: '4.9', label: 'Avg Google Rating' },
            { icon: Clock, value: '15-min', label: 'Avg WhatsApp Response' },
            { icon: CheckCircle, value: '0', label: 'Pets Left Behind' },
            { icon: Heart, value: '24/7', label: 'WhatsApp Availability' },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-[#1A5F4A] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#1A1A1A]">{stat.value}</div>
              <div className="text-sm text-[#5C5C5C] mt-1">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-[#5C5C5C] mb-4">Partnered with trusted organizations:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#5C5C5C]">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[#1A5F4A]" /> German Veterinary Clinic</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[#1A5F4A]" /> British Veterinary Hospital</span>
            <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#1A5F4A]" /> Emirates SkyCargo</span>
            <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#1A5F4A]" /> Etihad Cargo</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#1A5F4A]" /> Dubai Municipality — Aleef App</span>
          </div>
        </div>
      </Section>

      {/* ===== PROBLEM / PAIN ===== */}
      <Section className="bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
          Here's What Most Pet Owners Worry About
        </h2>
        <p className="text-[#5C5C5C] max-w-3xl mb-10 leading-relaxed">
          Relocating a pet is not like shipping a package. Your dog or cat is a member of your family. And the process is genuinely complex. We don't hide that. We name it, then we solve it.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="w-10 h-10 rounded-xl bg-[#1A5F4A]/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-[#1A5F4A]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">"Will My Pet Be Safe During the Flight?"</h3>
            <p className="text-sm text-[#5C5C5C] leading-relaxed">
              Most owners worry about the cargo hold. They picture darkness, heat, and stress. The reality is different. Pet cargo holds are climate-controlled and pressurized, just like the passenger cabin. We only book morning flights to avoid ground heat. We use IATA-certified crates with proper ventilation, door locks, and live animal labels. And we never book a flight until we have confirmed the airline's pet-specific rules in writing — not with the regular reservation desk, but with the cargo department directly.
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-xl bg-[#E8A838]/10 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-[#E8A838]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">"What If I'm Hit With Hidden Fees?"</h3>
            <p className="text-sm text-[#5C5C5C] leading-relaxed">
              This is the number one complaint in the pet relocation industry. A quote starts at AED 8,000. Then the crate is extra. Then the vet visit is extra. Then the permit fee is extra. Then the boarding fee is extra. By the end, you're paying AED 15,000 and you didn't see it coming.
            </p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mt-3">
              Our quotes are itemized and inclusive. We show you exactly what you pay, what it covers, and what costs extra — before you book. No surprises. No "oh, we forgot to mention that."
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-xl bg-[#C0392B]/10 flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5 text-[#C0392B]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">"What If the Paperwork Is Wrong?"</h3>
            <p className="text-sm text-[#5C5C5C] leading-relaxed">
              One wrong document can delay your pet by weeks. A microchip number mismatch. A vaccination date that is one day off. A health certificate issued outside the 10-day window. These are real mistakes that happen every day.
            </p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mt-3">
              We check every document three times. We submit MOCCAE permits daily. We know the current forms, the right office, and the common rejection reasons. If there's an issue, we fix it before it becomes a problem — not after your pet is stuck at customs.
            </p>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <WhatsAppCta text="Questions About Your Pet's Move? Ask on WhatsApp" fullWidth className="sm:w-auto sm:inline-flex" />
        </div>
      </Section>

      {/* ===== SOLUTION / BENEFITS ===== */}
      <Section className="bg-[#F5F0E8]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
          We Handle the Hard Parts. You Get the Updates.
        </h2>
        <p className="text-[#5C5C5C] max-w-3xl mb-10 leading-relaxed">
          You don't need to become an expert in MOCCAE regulations, IATA crate standards, or airline cargo policies. That's our job. Your job is to pack your home and prepare for your move. We handle the rest.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#1A5F4A]" /> What we handle:
            </h3>
            <ul className="space-y-3 text-sm text-[#5C5C5C]">
              {[
                'MOCCAE import or export permit application and submission',
                'Flight booking with the cargo department (not passenger reservations)',
                'IATA-compliant travel crate sizing, supply, and labeling',
                'Vet partner coordination for health certificates and vaccinations',
                'Document review and triple-check before submission',
                'Customs clearance at DXB or DWC cargo terminal',
                'Door-to-door pickup and delivery coordination',
                'Dubai Municipality registration via the Aleef app',
                'Real-time WhatsApp updates with photos at every checkpoint',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#1A5F4A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E8A838]" /> What you handle:
            </h3>
            <ul className="space-y-3 text-sm text-[#5C5C5C]">
              {[
                'Send us your pet\'s details (breed, weight, dates)',
                'Approve the quote and timeline',
                'Take your pet to one vet appointment (we book it, you show up)',
                'Be available on WhatsApp for updates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E8A838] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#1A1A1A] font-medium mt-4">That's it.</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#25D366]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">One WhatsApp Thread. One Point of Contact. No Chasing.</h3>
            <p className="text-sm text-[#5C5C5C] leading-relaxed">
              The industry standard is email ping-pong. You send a form. You wait two days. You get a partial answer. You ask a follow-up. You wait another day. Meanwhile, your move date is getting closer.
            </p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mt-3">
              With PetClear, you send one WhatsApp message. You get a reply within 15 minutes during business hours. Your specialist knows your pet's name, your route, your timeline, and your concerns. You never have to re-explain your situation to a new person.
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-xl bg-[#1A5F4A]/10 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[#1A5F4A]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">We Work With Vetted Partners — And We Tell You Exactly Who They Are</h3>
            <p className="text-sm text-[#5C5C5C] leading-relaxed">
              We are not a middleman. We are a concierge and quality controller. We select the best specialist for each step of your pet's journey — the right vet, the right crate supplier, the right cargo handler, the right airline. We monitor every step. We communicate with you. If something goes wrong, we fix it.
            </p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mt-3">
              Think of it like a wedding planner. We don't bake the cake. But we chose the best baker, tasted the cake, made sure it arrived on time, and if it didn't, we'd fix it — and you'd blame us, not the baker. That's the value.
            </p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mt-3">
              If you went direct to each provider, you'd spend 20+ hours coordinating. You'd have no backup if one fails. And if something went wrong, you'd be chasing five different phone numbers. With us, you send one WhatsApp. We handle the rest.
            </p>
          </Card>
        </div>
      </Section>

      {/* ===== HOW IT WORKS ===== */}
      <Section className="bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-12 text-center">How PetClear Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              icon: ClipboardCheck,
              title: 'Step 1: Tell Us About Your Pet',
              body: 'You fill out a short form or message us on WhatsApp. We need five things: your pet\'s type (dog or cat), breed, weight, origin and destination, and your preferred move date. In 60 seconds, you get an estimated price range. No phone call required. No waiting for an email.',
            },
            {
              step: '2',
              icon: Calendar,
              title: 'Step 2: We Build Your Timeline and Handle the Permits',
              body: 'We map out every step from today to reunion day. We book your vet appointment. We submit your MOCCAE permit. We check for summer embargoes, breed restrictions, and airline rules. We warn you about problems before they happen. You get a clear timeline with dates and checkpoints.',
            },
            {
              step: '3',
              icon: Plane,
              title: 'Step 3: Your Pet Flies. You Get Updates at Every Step.',
              body: 'On travel day, we coordinate pickup, check-in, and boarding. You get a photo when your pet is checked in. You get a confirmation when they are boarded. You get flight tracking. And you get a message the moment they land safely.',
            },
            {
              step: '4',
              icon: Heart,
              title: 'Step 4: Reunion at Your Door',
              body: 'We handle customs clearance at the cargo terminal. Then we deliver your pet to your home — or we meet you at the airport, whichever you prefer. The first photo you take in your new home includes your whole family. That\'s the goal.',
            },
          ].map((s) => (
            <Card key={s.step} className="relative">
              <span className="absolute top-6 right-6 text-4xl font-bold text-[#1A5F4A]/10">{s.step}</span>
              <s.icon className="w-8 h-8 text-[#1A5F4A] mb-4" />
              <h3 className="text-base font-bold text-[#1A1A1A] mb-3">{s.title}</h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">{s.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <WhatsAppCta text="Not Sure Which Service Fits? Let's Chat on WhatsApp" fullWidth className="sm:w-auto sm:inline-flex" />
        </div>
      </Section>

      {/* ===== SERVICE OVERVIEW ===== */}
      <Section className="bg-[#FAFBF7]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
          Dog Relocation and Cat Relocation — Both Covered
        </h2>
        <p className="text-[#5C5C5C] max-w-3xl mb-10 leading-relaxed">
          Whether you're moving a German Shepherd to London or a Persian cat to Mumbai, we have handled it. Here is what we cover for each.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1A5F4A]/10 flex items-center justify-center">
                <Dog className="w-5 h-5 text-[#1A5F4A]" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A]">Dog Transport Dubai</h3>
            </div>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mb-4">
              Dogs make up the majority of our relocations. We handle all sizes, from Chihuahuas to Great Danes. We know which airlines accept which breeds. We know the summer heat embargoes that affect brachycephalic dogs (Bulldogs, Pugs, Boxers, Shih Tzus) from June through September. We know the crate sizes for every weight class. And we know the banned breed list for the UAE — so we can tell you upfront if your dog is eligible.
            </p>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-2">What's included:</p>
            <ul className="space-y-2 text-sm text-[#5C5C5C]">
              {[
                'Breed and route eligibility check',
                'IATA crate sizing and supply',
                'Vet coordination for health certificate and vaccinations',
                'MOCCAE permit submission',
                'Flight booking with Emirates SkyCargo or Etihad Cargo',
                'Airport check-in and cargo handling',
                'Customs clearance and door-to-door delivery',
                'Dubai Municipality registration via Aleef app',
                'Photo updates at every checkpoint',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#1A5F4A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link to="/services" className="text-[#1A5F4A] font-medium hover:underline inline-flex items-center gap-1">
                Learn more about our pet relocation services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
            <p className="mt-2 text-sm">
              <Link to="/routes/uk-to-dubai" className="text-[#1A5F4A] font-medium hover:underline inline-flex items-center gap-1">
                Popular route: UK to Dubai pet relocation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8A838]/10 flex items-center justify-center">
                <Cat className="w-5 h-5 text-[#E8A838]" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A]">Cat Relocation UAE</h3>
            </div>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mb-4">
              Cats are often more sensitive to travel than dogs. They need smaller, secure crates. They need calm handling. And they often need sedation planning with a vet partner. We have moved hundreds of cats — including nervous rescues, senior cats, and multi-cat households. We know how to keep them calm, safe, and comfortable.
            </p>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-2">What's included:</p>
            <ul className="space-y-2 text-sm text-[#5C5C5C]">
              {[
                'Cat-specific crate sizing and supply',
                'Sedation consultation with vet partner (if needed)',
                'FVRCP vaccination verification',
                'Health certificate and MOCCAE permit',
                'Flight booking in climate-controlled cargo hold',
                'Calm handling at check-in and delivery',
                'Customs clearance and home delivery',
                'Post-arrival wellness check coordination',
                'Photo updates at every checkpoint',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E8A838] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* ===== TRUST SIGNALS ===== */}
      <Section className="bg-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3">Why Pet Parents Trust PetClear</h2>
          <p className="text-[#5C5C5C]">We don't ask you to trust us blindly. We show you exactly why you can.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'MOCCAE Licensed',
              body: 'We are licensed by the UAE Ministry of Climate Change and Environment to handle pet import and export permits. We submit permits daily. We know the current forms and the right office.',
            },
            {
              icon: Award,
              title: 'IPATA Member',
              body: 'We are a member of the International Pet and Animal Transportation Association, the global standard for ethical pet shipping. This means we follow a code of ethics, maintain professional standards, and belong to a network of vetted partners worldwide.',
            },
            {
              icon: Globe,
              title: 'IATA LAR Certified',
              body: 'Our team is trained in IATA Live Animal Regulations. This governs how pets are crated, handled, labeled, and transported by air. It\'s the difference between a safe journey and a risky one.',
            },
            {
              icon: Lock,
              title: 'Insured and Bonded',
              body: 'Every relocation includes basic travel insurance. Comprehensive coverage is available. And if your flight is canceled due to weather or airline error, we rebook at no additional coordination fee.',
            },
            {
              icon: Phone,
              title: 'Real Humans, Real Communication',
              body: 'You won\'t get a chatbot. You won\'t get a ticket number. You will get a named specialist who replies on WhatsApp within 15 minutes. We send photos. We answer questions. We calm nerves.',
            },
            {
              icon: DollarSign,
              title: 'Transparent Pricing, Always',
              body: 'Our quotes are itemized. You see what you pay for. If we miss something, we absorb it. We have never added a hidden fee after a quote was accepted.',
            },
          ].map((t) => (
            <Card key={t.title}>
              <t.icon className="w-6 h-6 text-[#1A5F4A] mb-3" />
              <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{t.title}</h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">{t.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm">
          <Link to="/about" className="text-[#1A5F4A] font-medium hover:underline inline-flex items-center gap-1">
            Meet our team — About our pet relocation team <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </Section>

      {/* ===== TESTIMONIALS ===== */}
      <Section className="bg-[#F5F0E8]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-10 text-center">What Pet Parents Say About Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: 'I was terrified about moving our golden retriever from London to Dubai. PetClear gave us an instant quote, walked us through every document, and sent photos of our dog at check-in, boarding, and arrival. I slept through the flight for the first time.',
              author: 'Sarah M., British expat, Dubai Marina',
            },
            {
              quote: 'We had a 72-hour notice for a military move. PetClear handled everything — the permit, the flight, the crate, the customs. Our German Shepherd was delivered to our new base 48 hours after we landed. They understood military timelines better than our own relocation office.',
              author: 'Mike T., U.S. military, Al Dhafra',
            },
            {
              quote: 'I compared four companies. PetClear was the only one that showed me the price upfront. No hidden fees. No surprises. My cat arrived in Mumbai calm, healthy, and happy. I have already recommended them to two friends.',
              author: 'Priya K., Indian professional, JLT',
            },
          ].map((t) => (
            <Card key={t.author}>
              <p className="text-[#1A1A1A] leading-relaxed mb-4 italic">"{t.quote}"</p>
              <p className="text-sm text-[#5C5C5C] font-medium">— {t.author}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-10">Common Questions About Pet Relocation</h2>
        <div className="max-w-3xl">
          <FAQItem
            question="Do dogs need to be quarantined in Dubai?"
            answer={
              <>
                <p>No. If all documentation is complete and correct, pets do not require mandatory quarantine in Dubai. This includes a valid MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate. However, incomplete documentation can result in conditional quarantine at the owner's expense. We check every document three times to prevent this.</p>
                <p className="mt-3">
                  <Link to="/guides/uae-pet-import-requirements" className="text-[#1A5F4A] font-medium hover:underline inline-flex items-center gap-1">
                    Read our full UAE pet import requirements guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="How much does pet relocation to Dubai cost?"
            answer={
              <>
                <p>Pet relocation to Dubai typically costs between AED 8,000 and AED 25,000 depending on the origin country, pet size, and service level. Our transparent cost breakdown includes government fees (AED 200–700), veterinary costs (AED 1,200–2,500), cargo shipping (AED 3,000–12,000), and our service fee (AED 1,500–6,000). You get an estimated range in 60 seconds using our online calculator.</p>
                <p className="mt-3">
                  <Link to="/cost-guide" className="text-[#1A5F4A] font-medium hover:underline inline-flex items-center gap-1">
                    See pet relocation costs in Dubai <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="How long does pet relocation to Dubai take?"
            answer={
              <p>From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period after the titer test). We recommend starting at least 8 weeks before your planned move. If you are on a tighter timeline, message us on WhatsApp — we may have options.</p>
            }
          />
          <FAQItem
            question="Which dog breeds are banned in Dubai?"
            answer={
              <p>The UAE bans Pit Bull types (including American Bully and Staffordshire Bull Terrier), Mastiff types (including Cane Corso, Boerboel, and Bullmastiff), Japanese Tosa, and wolf-dog hybrids. Some breeds like Rottweiler and Doberman are restricted rather than fully banned. Brachycephalic breeds (Bulldogs, Pugs, Persian cats) face airline restrictions during summer months. We verify your breed's eligibility before quoting.</p>
            }
          />
          <FAQItem
            question="Can I get an instant quote for pet relocation?"
            answer={
              <p>Yes. Our online cost calculator provides an estimated range in under 60 seconds. Simply enter your pet's size, origin country, and preferred service level. For a firm, itemized quote, complete the booking form or message us on WhatsApp. We respond within 15 minutes during business hours.</p>
            }
          />
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#1A5F4A] text-white py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get a Clear Quote?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed">
            You don't need to figure this out alone. In 60 seconds, you can know what your pet's relocation will cost. In one WhatsApp message, you can have a specialist reviewing your timeline.
          </p>
          <p className="text-white/80 mb-8">No hidden fees. No pressure. No obligation.</p>
          <p className="text-white/90 font-medium mb-8">Just clear answers.</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <WhatsAppCta text="Get Your Free Pet Travel Quote" fullWidth className="sm:w-auto sm:inline-flex" />
            <a
              href={whatsappUrl('Hi PetClear team, I have a quick question about relocating my pet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              WhatsApp Us — We Reply in Minutes
            </a>
          </div>

          <WhatsAppCta
            text="Ready to Get Started? WhatsApp Your Details"
            message={defaultMsg}
            fullWidth
            className="sm:w-auto sm:inline-flex"
          />
        </div>
      </section>
    </div>
  )
}
