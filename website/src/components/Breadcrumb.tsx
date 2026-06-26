import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-[#EDE7DD]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm text-[#8A8A8A] flex-wrap">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-[#1B2B4D] transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              {item.path ? (
                <Link to={item.path} className="hover:text-[#1B2B4D] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#2A2A2A] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
