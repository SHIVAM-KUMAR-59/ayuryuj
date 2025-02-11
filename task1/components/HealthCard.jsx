import Image from 'next/image'
import React from 'react'
import { FaCalendarAlt, FaRupeeSign } from 'react-icons/fa'

const HealthCard = ({ program }) => {
  return (
    <div key={program.id} className="px-2 h-full">
      <div className="bg-white border rounded-lg p-4 h-full flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="rounded-md object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="font-semibold text-lg mt-3 line-clamp-2">
            {program.title}
          </h3>
          <p className="text-gray-600 line-clamp-2 text-sm">
            {program.specialists}
          </p>
          <div className="flex items-center mt-2 space-x-6">
            <span className="text-xs font-medium text-red-500 flex items-center gap-1">
              <FaCalendarAlt className="text-blue-500 flex-shrink-0" />
              {program.duration}
            </span>

            <span className="text-xs font-medium flex items-center text-white bg-blue-500 rounded-lg p-1">
              <FaRupeeSign className=" flex-shrink-0" />
              {program.price}
            </span>
            <button className="bg-gradient-to-t from-red-400 to-orange-300 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
              Request a call back
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">Our plan entails:</p>
          <div className="mt-4 flex gap-2">
            {program.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-gray-500"
              >
                <span>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthCard
