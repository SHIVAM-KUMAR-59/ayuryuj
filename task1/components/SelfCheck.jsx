import React from 'react'
import Banner from './Banner'
import AssessmentCard from './AssessmentCard'

const SelfCheck = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <Banner image={'/self_check.png'} />
      <AssessmentCard />
    </section>
  )
}

export default SelfCheck
