import React from 'react'
import Banner from './Banner'

const TrackerBanner = () => {
  return (
    <div className="flex gap-5 flex-col justify-center items-center my-5 text-left">
      <Banner image={'/tools.webp'} />
      <div className="w-[85%] mx-auto text-3xl font-extrabold text-orange-950">
        Health Feed
      </div>
    </div>
  )
}

export default TrackerBanner
