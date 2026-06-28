import type { AreaPageData } from '../../../types/areaPage.ts'
// P0
import dubaiMarina from './dubaiMarina.ts'
import jumeirah from './jumeirah.ts'
import jbr from './jbr.ts'
import downtownDubai from './downtownDubai.ts'
import palmJumeirah from './palmJumeirah.ts'
import businessBay from './businessBay.ts'
import alBarsha from './alBarsha.ts'
import arabianRanches from './arabianRanches.ts'
import mirdif from './mirdif.ts'
// P1
import dubaiSiliconOasis from './dubaiSiliconOasis.ts'
import jlt from './jlt.ts'
import jvc from './jvc.ts'
import jvt from './jvt.ts'
import dubaiHills from './dubaiHills.ts'
import dubaiSouth from './dubaiSouth.ts'
import alQuoz from './alQuoz.ts'
import deira from './deira.ts'
import burDubai from './burDubai.ts'
import karama from './karama.ts'
import sheikhZayedRoad from './sheikhZayedRoad.ts'
import alSatwa from './alSatwa.ts'
import ummSuqeim from './ummSuqeim.ts'
import alWasl from './alWasl.ts'
import cityWalk from './cityWalk.ts'
import bluewaters from './bluewaters.ts'
import portDeLaMer from './portDeLaMer.ts'

// Registry of all /dubai/<slug>/ area pages (Blue Book Phase 3).
export const dubaiAreas: AreaPageData[] = [
  dubaiMarina, jumeirah, jbr, downtownDubai, palmJumeirah, businessBay, alBarsha, arabianRanches, mirdif,
  dubaiSiliconOasis, jlt, jvc, jvt, dubaiHills, dubaiSouth, alQuoz, deira, burDubai, karama,
  sheikhZayedRoad, alSatwa, ummSuqeim, alWasl, cityWalk, bluewaters, portDeLaMer,
]
