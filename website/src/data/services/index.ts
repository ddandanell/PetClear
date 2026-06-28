import type { ServicePageData } from '../../types/servicePage.ts'
import petRelocationDubai from './petRelocationDubai.ts'

// Registry of all /service/<slug>/ pages. Subagents add their imports here.
export const servicePages: ServicePageData[] = [
  petRelocationDubai,
]
