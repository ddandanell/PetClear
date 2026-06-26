import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo'

interface WhatsAppBtnProps {
  label: string
  message: string
  className?: string
}

export default function WhatsAppBtn({ label, message, className = '' }: WhatsAppBtnProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors shadow-sm ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  )
}
