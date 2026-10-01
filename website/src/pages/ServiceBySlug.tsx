import { useParams } from 'react-router-dom'
import ServicePage from '../components/ServicePage.tsx'
import { servicePages } from '../data/services/index.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function ServiceBySlug() {
  const { slug } = useParams()
  const data = servicePages.find((page) => page.slug === slug)
  if (!data) return <NotFoundPage />
  return <ServicePage data={data} />
}
