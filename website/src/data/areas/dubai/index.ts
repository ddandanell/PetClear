import type { AreaPageData } from '../../../types/areaPage.ts'
import dubaiMarina from './dubaiMarina.ts'
import jumeirah from './jumeirah.ts'
import jbr from './jbr.ts'
import downtownDubai from './downtownDubai.ts'
import palmJumeirah from './palmJumeirah.ts'
import businessBay from './businessBay.ts'
import alBarsha from './alBarsha.ts'
import arabianRanches from './arabianRanches.ts'
import mirdif from './mirdif.ts'

// Registry of all /dubai/<slug>/ area pages (Blue Book Phase 3).
export const dubaiAreas: AreaPageData[] = [
  dubaiMarina,
  jumeirah,
  jbr,
  downtownDubai,
  palmJumeirah,
  businessBay,
  alBarsha,
  arabianRanches,
  mirdif,
]
