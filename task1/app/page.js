import AssessmentCard from '@/components/AssessmentCard'
import AssessmentSlider from '@/components/AssessmentSlider'
import Banner from '@/components/Banner'
import Book from '@/components/Book'
import ChangingBackground from '@/components/ChangingBackground'
import Creams from '@/components/Creams'
import HealthProgramsSlider from '@/components/HealthProgramsSlider'
import Join from '@/components/Join'
import Navbar from '@/components/Navbar'
import SelfCheck from '@/components/SelfCheck'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <ChangingBackground />
      <Creams />
      <Book />
      <Join />
      <HealthProgramsSlider />
      <SelfCheck />
      <AssessmentSlider />
    </>
  )
}
