import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: React.ReactNode
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="faq-question w-full text-left"
        aria-expanded={open}
      >
        <span className="pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 shrink-0 text-[#4F5BD5]" />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0 text-[#8A8A8A]" />
        )}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}
