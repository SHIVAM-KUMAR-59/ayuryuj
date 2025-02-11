import Image from 'next/image'
import React from 'react'

const TrackerCard = ({ track }) => {
  return (
    <div className="w-full max-w-sm rounded-xl shadow-lg bg-white p-4 border mb-5">
      <div className="w-full h-40 relative">
        <Image
          src={track.image}
          alt={track.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="mt-4 px-2">
        <h2 className="text-lg font-bold text-gray-800">{track.title}</h2>
        {track.description && <p>{tracker.description}</p>}
        <button className="mt-3 px-4 py-2 bg-gradient-to-t from-red-400 to-orange-300 text-white font-semibold rounded-lg">
          Read More
        </button>
      </div>
    </div>
  )
}

export default TrackerCard
