import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/cost-guide', label: 'Cost Guide' },
    { to: '/import-requirements', label: 'Import Guide' },
    { to: '/dog-relocation', label: 'Dog Relocation' },
    { to: '/cat-relocation', label: 'Cat Relocation' },
  ]

  const isActive = (path: string) => location.pathname === path

  const whatsappHref = `https://wa.me/9715XXXXXXXX?text=${encodeURIComponent('Hi PetClear team, I need help relocating my pet to or from Dubai.')}`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EDE7DD]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4D] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4.5a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1 5 0v2Z" />
                <path d="M17.5 7.5a2.5 2.5 0 0 1-5 0v-2" />
                <path d="M6.5 7.5a2.5 2.5 0 0 0 5 0v-2" />
                <path d="M12 17.5a6.5 6.5 0 0 1-6.5-6.5v-1.5h13v1.5a6.5 6.5 0 0 1-6.5 6.5Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1B2B4D] tracking-tight leading-none">PetClear</span>
              <span className="text-[10px] text-[#8A8A8A] font-medium tracking-wider uppercase leading-tight mt-0.5">Dubai Pet Relocation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#1B2B4D] bg-[#1B2B4D]/8'
                    : 'text-[#5A5A5A] hover:text-[#1B2B4D] hover:bg-[#1B2B4D]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+9715XXXXXXXX"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#5A5A5A] hover:text-[#1B2B4D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Us
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1DA851] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#25D366] text-white rounded-xl shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-[#F5EFE6] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#1B2B4D]" /> : <Menu className="w-6 h-6 text-[#1B2B4D]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#EDE7DD] bg-white">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#1B2B4D] bg-[#1B2B4D]/8'
                    : 'text-[#5A5A5A] hover:bg-[#F5EFE6]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#EDE7DD] mt-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Get Help on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
