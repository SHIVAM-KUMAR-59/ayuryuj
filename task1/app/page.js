import ChangingBackground from '@/components/ChangingBackground'
import Creams from '@/components/Creams'
import HealthProgramsSlider from '@/components/HealthProgramsSlider'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <ChangingBackground />
      <Creams />
      <HealthProgramsSlider />
    </>
  )
}
