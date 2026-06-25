import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const whatsappHref = `https://wa.me/9715XXXXXXXX?text=${encodeURIComponent('Hi PetClear team, I need help with my pet relocation.')}`

  return (
    <footer className="bg-[#1B2B4D] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top row: Brand + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12 pb-12 border-b border-white/10">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4.5a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1 5 0v2Z" />
                  <path d="M17.5 7.5a2.5 2.5 0 0 1-5 0v-2" />
                  <path d="M6.5 7.5a2.5 2.5 0 0 0 5 0v-2" />
                  <path d="M12 17.5a6.5 6.5 0 0 1-6.5-6.5v-1.5h13v1.5a6.5 6.5 0 0 1-6.5 6.5Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">PetClear</span>
                <span className="text-[10px] text-white/50 font-medium tracking-wider uppercase leading-tight mt-0.5">Dubai Pet Relocation</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              PetClear helps pet owners understand the process, check requirements, and connect with trusted relocation partners for safer dog and cat travel to or from Dubai.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1DA851] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Get Help on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/90">Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/dog-relocation" className="text-sm text-white/60 hover:text-white transition-colors">Dog Relocation</Link></li>
                <li><Link to="/cat-relocation" className="text-sm text-white/60 hover:text-white transition-colors">Cat Relocation</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/cost-guide" className="text-sm text-white/60 hover:text-white transition-colors">Cost Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/90">Guides</h4>
              <ul className="space-y-2.5">
                <li><Link to="/import-requirements" className="text-sm text-white/60 hover:text-white transition-colors">UAE Import Guide</Link></li>
                <li><Link to="/cost-guide" className="text-sm text-white/60 hover:text-white transition-colors">Relocation Costs</Link></li>
                <li><Link to="/dog-relocation" className="text-sm text-white/60 hover:text-white transition-colors">Banned Dog Breeds</Link></li>
                <li><Link to="/cat-relocation" className="text-sm text-white/60 hover:text-white transition-colors">Cat Travel Requirements</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/90">Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="tel:+9715XXXXXXXX" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> +971 5XX XXX XXX
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@petclear.ae" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> hello@petclear.ae
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust statement */}
        <div className="mb-8">
          <p className="text-sm text-white/50 leading-relaxed max-w-3xl">
            PetClear is a pet relocation concierge service. We do not handle animals directly. We coordinate with vetted veterinary and cargo partners to help you understand the process and arrange your pet's journey. We are not a government agency. Always verify current requirements with MOCCAE, your airline, and your origin country's veterinary authority before travel.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40">© 2026 PetClear. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
