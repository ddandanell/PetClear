import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Phone, Mail, MapPin, Clock, Send, ChevronRight, ChevronDown, ChevronUp
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm p-7 lg:p-8 ${className}`}>
    {children}
  </div>
)

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left">
        <span className="pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#5A8F6E] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#8A8A8A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const WhatsAppCta = ({
  text,
  message,
  fullWidth = false,
  className = '',
}: {
  text: string
  message: string
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

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', petType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', petType: '', message: '' })
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dubai Pet Relocation',
    url: `${BASE_URL}/contact`,
    description: 'Contact Dubai Pet Relocation for pet relocation help in Dubai. Reach us via WhatsApp, email, or our contact form.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
    },
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Contact Dubai Pet Relocation | Pet Relocation Dubai',
          description: 'Contact Dubai Pet Relocation for pet relocation help in Dubai. Reach us via WhatsApp, email, or our contact form. We reply within 15 minutes during business hours.',
          keywords: 'contact Dubai Pet Relocation, pet relocation help Dubai, pet transport contact, WhatsApp pet relocation Dubai',
          canonical: `${BASE_URL}/contact`,
          ogType: 'website',
        }}
        schemas={[breadcrumbSchema, contactSchema]}
      />

      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-tight text-[#2A2A2A] mb-6">
              Contact Dubai Pet Relocation — We're Here to Help
            </h1>
            <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8">
              Whether you have a quick question about a breed ban, need a full relocation quote, or just want to understand the process better, we are here. Fastest response is on WhatsApp — but we read every form and email too.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppCta
                text="Message Us on WhatsApp"
                message="Hi Dubai Pet Relocation! I have a question about pet relocation and would love your help."
              />
              <a
                href="mailto:hallo@dubai-pet-relocation.ae"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-[#1B2B4D] text-[#1B2B4D] rounded-2xl font-semibold text-sm hover:bg-[#1B2B4D]/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT INFO CARDS ═══════════ */}
      <section className="bg-[#FDFBF8] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="w-12 h-12 rounded-[14px] bg-[#EDF6F0] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-[#5A8F6E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">WhatsApp / Phone</h3>
              <p className="text-sm text-[#5A5A5A] mb-3">Fastest response during business hours</p>
              <a
                href={getWhatsAppUrl('Hi Dubai Pet Relocation, I have a question about pet relocation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B2B4D] font-semibold text-sm hover:underline"
              >
                +971 55 174 4849
              </a>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 rounded-[14px] bg-[#EDF6F0] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-[#5A8F6E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Email</h3>
              <p className="text-sm text-[#5A5A5A] mb-3">For detailed inquiries and document sharing</p>
              <a
                href="mailto:hallo@dubai-pet-relocation.ae"
                className="text-[#1B2B4D] font-semibold text-sm hover:underline"
              >
                hallo@dubai-pet-relocation.ae
              </a>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 rounded-[14px] bg-[#EDF6F0] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-[#5A8F6E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Location</h3>
              <p className="text-sm text-[#5A5A5A] mb-3">Al Quoz Industrial Area 4, Al Quoz, Dubai</p>
              <span className="text-[#1B2B4D] font-semibold text-sm">Dubai, United Arab Emirates</span>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ FORM + HOURS ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-semibold text-[#5A8F6E] uppercase tracking-wider">Send a Message</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
                Contact Form
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-8">
                Fill out the form below and we will get back to you within 24 hours. For urgent questions, WhatsApp is fastest.
              </p>
              {submitted ? (
                <div className="bg-[#EDF6F0] rounded-[16px] p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#5A8F6E] flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#2A2A2A]">Message Sent!</p>
                      <p className="text-sm text-[#5A5A5A]">We will reply within 24 hours.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#EDE7DD] bg-[#FAF7F1] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#5A8F6E]/30 focus:border-[#5A8F6E]"
                      placeholder="e.g. Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#EDE7DD] bg-[#FAF7F1] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#5A8F6E]/30 focus:border-[#5A8F6E]"
                      placeholder="sarah@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="petType" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Pet Type</label>
                    <select
                      id="petType"
                      required
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#EDE7DD] bg-[#FAF7F1] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#5A8F6E]/30 focus:border-[#5A8F6E]"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#EDE7DD] bg-[#FAF7F1] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#5A8F6E]/30 focus:border-[#5A8F6E] resize-none"
                      placeholder="Tell us about your pet, your route, and any questions you have..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#1B2B4D] text-white rounded-2xl font-semibold text-sm hover:bg-[#141e36] transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-[12px] bg-[#EDF6F0] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#5A8F6E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Office Hours</h3>
                </div>
                <div className="space-y-3 text-sm text-[#5A5A5A]">
                  <div className="flex justify-between">
                    <span>Sunday – Thursday</span>
                    <span className="font-semibold text-[#2A2A2A]">9:00 AM – 6:00 PM GST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday – Saturday</span>
                    <span className="font-semibold text-[#2A2A2A]">Limited / By Appointment</span>
                  </div>
                </div>
                <p className="text-xs text-[#8A8A8A] mt-4">
                  WhatsApp messages are monitored outside hours, but responses may take longer on weekends.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Why WhatsApp Is Fastest</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Our team checks WhatsApp continuously during business hours. Most questions get answered in under 15 minutes. You can also send photos of documents for quick checks.
                </p>
                <WhatsAppCta
                  text="Chat on WhatsApp Now"
                  message="Hi Dubai Pet Relocation! I have a question about relocating my pet and would love to chat."
                  fullWidth
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK FAQ ═══════════ */}
      <section className="bg-[#FDFBF8] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-3">
              Quick Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Common things people ask before reaching out. Still have questions? Just WhatsApp us.
            </p>
          </div>
          <FAQItem
            question="How quickly do you respond on WhatsApp?"
            answer={<p>During business hours (Sunday–Thursday, 9AM–6PM GST), we typically respond within 15 minutes. Outside those hours, we check messages periodically and aim to reply within a few hours. Urgent travel-day issues are prioritized.</p>}
          />
          <FAQItem
            question="Do you offer a free consultation?"
            answer={<p>Yes. Every initial conversation is free. We will ask about your pet, route, and timeline, then give you a realistic overview of requirements, timeline, and cost range. There is no obligation to book.</p>}
          />
          <FAQItem
            question="Can I send you documents to check before booking?"
            answer={<p>Absolutely. Many clients send us vaccination records, microchip certificates, or previous health certificates for a quick compliance check before they commit to a full relocation. We are happy to do this at no charge.</p>}
          />
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#1B2B4D] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Let's Make Your Pet's Journey Clear
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            No matter where you are in the process — just thinking about it, or leaving next week — we can help. Message us now and get clear, honest guidance.
          </p>
          <WhatsAppCta
            text="Get Help on WhatsApp"
            message="Hi Dubai Pet Relocation! I need help with pet relocation and would love to chat."
          />
        </div>
      </section>
    </div>
  )
}
