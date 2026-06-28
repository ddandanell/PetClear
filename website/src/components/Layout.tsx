import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6FD]">
      <Header />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
      <WhatsAppButton variant="sticky" />
      <WhatsAppButton variant="floating" />
    </div>
  )
}
