import React from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import { AiOutlineRobot } from 'react-icons/ai'

const AssessmentCard = () => {
  return (
    <div className="relative w-[400px] bg-white rounded-3xl p-8 shadow-sm border overflow-hidden">
      {/* Timer Badge */}
      <div className="absolute left-0 top-5 bg-blue-500 text-white px-6 py-2 rounded-r-2xl text-sm">
        Under 3 Mins
      </div>

      {/* Image Container */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#FDF3EB] rounded-full overflow-hidden">
            <div className="absolute bottom-0 right-0 w-28 h-28">
              <Image
                src="/user1.webp"
                alt="Woman smiling"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 128px"
              />
            </div>
          </div>
          {/* Blue curved line */}
          <div className="absolute -bottom-2 -right-2 w-36 h-36 border-4 border-blue-500 rounded-full border-l-0 border-b-0"></div>
        </div>
      </div>

      {/* Main Content (Pushed Down) */}
      <div className="pt-10 space-y-4">
        <p className="text-gray-600 text-md">Need personalized skincare?</p>
        <h2 className="text-2xl leading-tight font-extrabold text-blue-900">
          Assess your
          <br />
          skin
        </h2>
      </div>

      {/* Features with Icons */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-blue-500 w-6 h-6" />
          <span className="text-gray-600 text-lg">
            Approved by Dermatologists
          </span>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineRobot className="text-blue-500 w-6 h-6" />
          <span className="text-gray-600 text-lg">Powered by AI</span>
        </div>
      </div>

      <button className="mt-8 w-full bg-gradient-to-t from-red-400 to-orange-300 text-white rounded-full text-lg font-medium py-3 hover:bg-coral-600 transition-colors">
        Start now
      </button>
    </div>
  )
}

export default AssessmentCard
