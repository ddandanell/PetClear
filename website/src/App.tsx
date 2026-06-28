import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'

// Core pages (V1)
const HomePage = lazy(() => import('./pages/HomePage.tsx'))
const CostGuidePage = lazy(() => import('./pages/CostGuidePage.tsx'))
const ImportRequirementsPage = lazy(() => import('./pages/ImportRequirementsPage.tsx'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.tsx'))
const DogRelocationPage = lazy(() => import('./pages/DogRelocationPage.tsx'))
const CatRelocationPage = lazy(() => import('./pages/CatRelocationPage.tsx'))

// Core pages (V2 - Month 1)
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'))
const FAQPage = lazy(() => import('./pages/FAQPage.tsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.tsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService.tsx'))

// Route pages (V2 - Month 1)
const UKToDubai = lazy(() => import('./pages/UKToDubai.tsx'))
const USAToDubai = lazy(() => import('./pages/USAToDubai.tsx'))
const IndiaToDubai = lazy(() => import('./pages/IndiaToDubai.tsx'))
const AustraliaToDubai = lazy(() => import('./pages/AustraliaToDubai.tsx'))
const PhilippinesToDubai = lazy(() => import('./pages/PhilippinesToDubai.tsx'))
const CanadaToDubai = lazy(() => import('./pages/CanadaToDubai.tsx'))
const NewZealandToDubai = lazy(() => import('./pages/NewZealandToDubai.tsx'))
const SouthAfricaToDubai = lazy(() => import('./pages/SouthAfricaToDubai.tsx'))
const DubaiToUK = lazy(() => import('./pages/DubaiToUK.tsx'))
const DubaiToUSA = lazy(() => import('./pages/DubaiToUSA.tsx'))

// Guide pages (V2 - Month 1)
const BannedBreedsGuide = lazy(() => import('./pages/BannedBreedsGuide.tsx'))
const IATACrateGuide = lazy(() => import('./pages/IATACrateGuide.tsx'))
const SummerTravelGuide = lazy(() => import('./pages/SummerTravelGuide.tsx'))
const MOCCAEPermitGuide = lazy(() => import('./pages/MOCCAEPermitGuide.tsx'))
const TiterTestGuide = lazy(() => import('./pages/TiterTestGuide.tsx'))

// City pages (V2 - Month 1)
const DubaiCity = lazy(() => import('./pages/DubaiCity.tsx'))
const AbuDhabiCity = lazy(() => import('./pages/AbuDhabiCity.tsx'))

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Core V1 pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/guides/pet-relocation-cost-dubai/" element={<CostGuidePage />} />
          <Route path="/guides/uae-pet-import-requirements/" element={<ImportRequirementsPage />} />
          <Route path="/how-it-works/" element={<HowItWorksPage />} />
          <Route path="/dog-relocation-to-dubai/" element={<DogRelocationPage />} />
          <Route path="/cat-relocation-to-dubai/" element={<CatRelocationPage />} />

          {/* V1 redirects (for backwards compatibility) */}
          <Route path="/cost-guide" element={<CostGuidePage />} />
          <Route path="/import-requirements" element={<ImportRequirementsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/dog-relocation" element={<DogRelocationPage />} />
          <Route path="/cat-relocation" element={<CatRelocationPage />} />

          {/* Core V2 pages */}
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/faq/" element={<FAQPage />} />
          <Route path="/services/" element={<ServicesPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service/" element={<TermsOfService />} />

          {/* Route pages */}
          <Route path="/routes/uk-to-dubai/" element={<UKToDubai />} />
          <Route path="/routes/usa-to-dubai/" element={<USAToDubai />} />
          <Route path="/routes/india-to-dubai/" element={<IndiaToDubai />} />
          <Route path="/routes/australia-to-dubai/" element={<AustraliaToDubai />} />
          <Route path="/routes/philippines-to-dubai/" element={<PhilippinesToDubai />} />
          <Route path="/routes/canada-to-dubai/" element={<CanadaToDubai />} />
          <Route path="/routes/new-zealand-to-dubai/" element={<NewZealandToDubai />} />
          <Route path="/routes/south-africa-to-dubai/" element={<SouthAfricaToDubai />} />
          <Route path="/routes/dubai-to-uk/" element={<DubaiToUK />} />
          <Route path="/routes/dubai-to-usa/" element={<DubaiToUSA />} />

          {/* Guide pages */}
          <Route path="/guides/banned-dog-breeds-dubai/" element={<BannedBreedsGuide />} />
          <Route path="/guides/iata-pet-crate-requirements/" element={<IATACrateGuide />} />
          <Route path="/guides/pet-travel-summer-dubai/" element={<SummerTravelGuide />} />
          <Route path="/guides/moccae-import-permit/" element={<MOCCAEPermitGuide />} />
          <Route path="/guides/rabies-titer-test-dubai/" element={<TiterTestGuide />} />

          {/* City pages */}
          <Route path="/cities/dubai/" element={<DubaiCity />} />
          <Route path="/cities/abu-dhabi/" element={<AbuDhabiCity />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
