import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, PawPrint } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    { to: '/import-requirements', label: 'Import Requirements' },
    { to: '/dog-relocation', label: 'Dog' },
    { to: '/cat-relocation', label: 'Cat' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <PawPrint className="w-7 h-7 text-[#1A5F4A]" />
            <span className="text-xl font-bold text-[#1A1A1A]">PetClear</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#1A5F4A] bg-[#1A5F4A]/10'
                    : 'text-[#5C5C5C] hover:text-[#1A5F4A] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/9715XXXXXXXX?text=Hi%20PetClear%20team%2C%20I'm%20planning%20to%20relocate%20my%20pet%20and%20would%20love%20to%20get%20a%20quick%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/9715XXXXXXXX?text=Hi%20PetClear%20team%2C%20I'm%20planning%20to%20relocate%20my%20pet%20and%20would%20love%20to%20get%20a%20quick%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#25D366] text-white rounded-xl"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#1A5F4A] bg-[#1A5F4A]/10'
                    : 'text-[#5C5C5C] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <a
                href="https://wa.me/9715XXXXXXXX?text=Hi%20PetClear%20team%2C%20I'm%20planning%20to%20relocate%20my%20pet%20and%20would%20love%20to%20get%20a%20quick%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
