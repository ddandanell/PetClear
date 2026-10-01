import { useParams } from 'react-router-dom'
import AreaPage from '../components/AreaPage.tsx'
import { dubaiAreas } from '../data/areas/dubai/index.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function AreaBySlug() {
  const { slug } = useParams()
  const data = dubaiAreas.find((area) => area.slug === slug)
  if (!data) return <NotFoundPage />
  return <AreaPage data={data} />
}
