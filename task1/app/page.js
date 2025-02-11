import AssessmentSlider from '@/components/AssessmentSlider'
import Book from '@/components/Book'
import ChangingBackground from '@/components/ChangingBackground'
import Creams from '@/components/Creams'
import HealthProgramsSlider from '@/components/HealthProgramsSlider'
import Join from '@/components/Join'
import Navbar from '@/components/Navbar'
import SelfCheck from '@/components/SelfCheck'
import Services from '@/components/Services'
import Tracker from '@/components/TrackerSlider'
import TrackerBanner from '@/components/TrackerBanner'
import TrackerCard from '@/components/TrackerCard'
import TestimonialSlider from '@/components/TestimonialSlider'
import TopHostpitals from '@/components/TopHostpitals'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Consult from '@/components/Consult'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <ChangingBackground />
      <Creams />
      <Consult />
      <Book />
      <Join />
      <HealthProgramsSlider />
      <SelfCheck />
      <AssessmentSlider />
      <TrackerBanner />
      <Tracker />
      <TestimonialSlider />
      <TopHostpitals />
      <Categories />
      <Footer />
    </>
  )
}
