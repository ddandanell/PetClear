import { Link } from 'react-router-dom'
import { PawPrint, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'
import { SERVICE_LINKS, TOP_AREA_LINKS, GUIDE_LINKS, ROUTE_LINKS, COMPANY_LINKS } from '../data/nav.ts'
import type { NavLink } from '../data/nav.ts'

function Column({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h3 className="font-semibold text-[13px] uppercase tracking-wider text-white/90 mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const legal: NavLink[] = [
    { label: 'Privacy Policy', to: '/privacy-policy/' },
    { label: 'Terms of Service', to: '/terms-of-service/' },
  ]
  return (
    <footer className="bg-[#1F2347] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#4F5BD5] flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Dubai Pet Relocation</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-xs">
              A transparent pet relocation concierge for Dubai and the UAE. We guide you through MOCCAE requirements, vetted partners and door-to-door delivery.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <a href="tel:+971551744849" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4" /> +971 55 174 4849</a>
              <a href="mailto:hallo@dubai-pet-relocation.ae" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" /> hallo@dubai-pet-relocation.ae</a>
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Al Quoz, Dubai, UAE</div>
            </div>
          </div>

          {/* Link columns */}
          <Column title="Services" links={SERVICE_LINKS} />
          <Column title="Dubai Areas" links={TOP_AREA_LINKS} />
          <Column title="Guides" links={GUIDE_LINKS} />
          <Column title="Routes" links={ROUTE_LINKS} />
        </div>

        {/* Company row */}
        <nav className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2">
          {COMPANY_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
          ))}
          <a href={getWhatsAppUrl('Hi, I have a question about pet relocation to Dubai.')} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-[#1DA851] transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </nav>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-white/70 leading-relaxed max-w-4xl">
          <strong className="text-white/80">Disclaimer:</strong> Dubai Pet Relocation is a pet relocation concierge and coordination service — not a veterinary clinic, airline, or government agency. Veterinary, cargo and transport services are provided by independent licensed partners. Government fees (MOCCAE, customs, municipality) are passed through at cost. Please verify all documentation directly with MOCCAE and your airline before travel.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Dubai Pet Relocation. All rights reserved. Dubai, UAE.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            {legal.map((l) => <Link key={l.to} to={l.to} className="hover:text-white transition-colors">{l.label}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
