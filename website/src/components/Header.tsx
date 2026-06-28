import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, ChevronDown, Phone, PawPrint } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    children: [
      { label: 'How It Works', to: '/how-it-works/' },
      { label: 'Dog Relocation', to: '/dog-relocation-to-dubai/' },
      { label: 'Cat Relocation', to: '/cat-relocation-to-dubai/' },
      { label: 'Our Services', to: '/services/' },
    ],
  },
  {
    label: 'Guides',
    children: [
      { label: 'Cost Guide', to: '/guides/pet-relocation-cost-dubai/' },
      { label: 'Import Requirements', to: '/guides/uae-pet-import-requirements/' },
      { label: 'Banned Breeds', to: '/guides/banned-dog-breeds-dubai/' },
      { label: 'IATA Crate Rules', to: '/guides/iata-pet-crate-requirements/' },
      { label: 'Summer Travel', to: '/guides/pet-travel-summer-dubai/' },
      { label: 'MOCCAE Permit', to: '/guides/moccae-import-permit/' },
      { label: 'Rabies Titer Test', to: '/guides/rabies-titer-test-dubai/' },
    ],
  },
  {
    label: 'Routes',
    children: [
      { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
      { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
      { label: 'India to Dubai', to: '/routes/india-to-dubai/' },
      { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
      { label: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/' },
      { label: 'Canada to Dubai', to: '/routes/canada-to-dubai/' },
      { label: 'Dubai to UK', to: '/routes/dubai-to-uk/' },
      { label: 'Dubai to USA', to: '/routes/dubai-to-usa/' },
    ],
  },
  { label: 'About', to: '/about/' },
  { label: 'Contact', to: '/contact/' },
  { label: 'FAQ', to: '/faq/' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { pathname } = useLocation()

  const isActive = (to: string) => pathname === to || pathname.startsWith(to)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#1A5F4A] flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1A5F4A]">Dubai Pet Relocation</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      link.children.some((c) => isActive(c.to))
                        ? 'text-[#1A5F4A] bg-[#E6F4EC]'
                        : 'text-gray-700 hover:text-[#1A5F4A] hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.to)
                              ? 'text-[#1A5F4A] bg-[#E6F4EC] font-medium'
                              : 'text-gray-700 hover:text-[#1A5F4A] hover:bg-gray-50'
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? 'text-[#1A5F4A] bg-[#E6F4EC]'
                      : 'text-gray-700 hover:text-[#1A5F4A] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Hi, I need help with pet relocation to Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-[#1DA851] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-1">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-900">{link.label}</p>
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive(child.to)
                            ? 'text-[#1A5F4A] bg-[#E6F4EC] font-medium'
                            : 'text-gray-600 hover:text-[#1A5F4A] hover:bg-gray-50'
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? 'text-[#1A5F4A] bg-[#E6F4EC]'
                      : 'text-gray-700 hover:text-[#1A5F4A] hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a
                href={getWhatsAppUrl('Hi, I need help with pet relocation to Dubai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
              <a
                href="tel:+971551744849"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                +971 55 174 4849
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
