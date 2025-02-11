import ChangingBackground from '@/components/ChangingBackground'
import HealthProgramsSlider from '@/components/HealthProgramsSlider'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <ChangingBackground />
      <HealthProgramsSlider />
    </>
  )
}
