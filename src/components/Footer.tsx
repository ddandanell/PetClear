import { Link } from 'react-router-dom'
import { MessageCircle, PawPrint, Shield, Award, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F3D2E] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-6 h-6 text-[#25D366]" />
              <span className="text-lg font-bold">PetClear</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Your pet's journey, made clear. Transparent pet relocation concierge for Dubai and beyond.
            </p>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#E8A838]" />
              <Award className="w-5 h-5 text-[#E8A838]" />
              <Globe className="w-5 h-5 text-[#E8A838]" />
            </div>
            <p className="text-xs text-gray-400 mt-2">MOCCAE Licensed · IPATA Member · IATA Certified</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/cost-guide" className="text-sm text-gray-300 hover:text-white transition-colors">Cost Guide</Link></li>
              <li><Link to="/import-requirements" className="text-sm text-gray-300 hover:text-white transition-colors">Import Requirements</Link></li>
              <li><Link to="/dog-relocation" className="text-sm text-gray-300 hover:text-white transition-colors">Dog Relocation</Link></li>
              <li><Link to="/cat-relocation" className="text-sm text-gray-300 hover:text-white transition-colors">Cat Relocation</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Essential Guides</h4>
            <ul className="space-y-2.5">
              <li><Link to="/cost-guide" className="text-sm text-gray-300 hover:text-white transition-colors">Pet Relocation Costs</Link></li>
              <li><Link to="/import-requirements" className="text-sm text-gray-300 hover:text-white transition-colors">MOCCAE Import Permit</Link></li>
              <li><Link to="/dog-relocation" className="text-sm text-gray-300 hover:text-white transition-colors">Banned Dog Breeds</Link></li>
              <li><Link to="/cat-relocation" className="text-sm text-gray-300 hover:text-white transition-colors">Cat Travel Requirements</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">Timeline & Process</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
            <a
              href="https://wa.me/9715XXXXXXXX?text=Hi%20PetClear%20team%2C%20I'm%20planning%20to%20relocate%20my%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <p className="text-xs text-gray-400">We reply within 15 minutes during business hours</p>
            <p className="text-xs text-gray-400 mt-2">24/7 availability for urgent pet travel</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2026 PetClear. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
