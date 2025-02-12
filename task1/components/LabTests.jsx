'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaMicroscope, FaClock, FaUsers, FaPercent } from 'react-icons/fa'
import Box from './Box'
import ViewAllButton from './ViewAllButton'
import LabHealthCheck from './LabHealthCheck'
import PrescribedTest from './PrescribedTest'

const LabTests = () => {
  const [selectedTab, setSelectedTab] = useState('popular')

  return (
    <>
      <section className="relative bg-yellow-100 rounded-3xl shadow-lg p-6 md:p-10 flex flex-row items-center justify-between w-[85%] mx-auto my-6">
        {/* Left Section: Heading and Features */}
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-lg md:text-4xl font-bold text-yellow-900">
            Book At-Home Lab Tests & Full Body Checks
          </h1>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaMicroscope className="text-yellow-500 lg:text-xl" />
              </div>
              <p className="text-yellow-900 font-medium">
                NABL & CAP accredited labs
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaUsers className="text-yellow-500 lg:text-xl" />
              </div>
              <p className="text-yellow-900 font-medium">5L+ Trusted Users</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaClock className="text-yellow-500 text-xl" />
              </div>
              <p className="text-yellow-900 font-medium">
                Smart reports in 12 hrs
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaPercent className="text-yellow-500 text-xl" />
              </div>
              <p className="text-yellow-900 font-medium">
                Flat 60% OFF on Health Checks
              </p>
            </div>
          </div>

          {/* Buttons for Health Checks */}
          <div className="flex w-full bg-white rounded-xl shadow-md text-xs md:text-md lg:text-[18px] mt-4">
            <button
              className={`px-5 py-2 lg:py-3 w-1/2 font-semibold transition-all duration-300 ${
                selectedTab === 'popular'
                  ? 'bg-cyan-600 text-white'
                  : 'text-yellow-600 border border-yellow-600'
              }`}
              onClick={() => setSelectedTab('popular')}
            >
              Popular Health Checks
            </button>
            <button
              className={`px-5 py-2 lg:py-3 w-1/2 font-semibold transition-all duration-300 ${
                selectedTab === 'prescribed'
                  ? 'bg-cyan-600 text-white'
                  : 'text-yellow-600 border border-yellow-600'
              }`}
              onClick={() => setSelectedTab('prescribed')}
            >
              Prescribed Lab Tests
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 flex justify-center flex-shrink-0">
          <Image
            src="/lab-test.webp"
            alt="Lab Tests"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      <div className="w-[85%] mx-auto">
        <div className="text-yellow-900 font-medium mt-8">
          <div className="flex sm:flex-wrap gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth scroll-snap-x">
            {selectedTab === 'popular' ? (
              <LabHealthCheck />
            ) : (
              <PrescribedTest />
            )}
          </div>
          <div className="flex justify-end w-full">
            <ViewAllButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default LabTests
