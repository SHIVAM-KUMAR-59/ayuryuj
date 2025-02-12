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
      <section className="relative bg-gradient-to-r from-yellow-200 to-yellow-50 rounded-3xl shadow-lg p-6 md:p-10 flex items-center justify-between w-[85%] mx-auto my-6">
        {/* Left Section: Heading and Features */}
        <div className="flex flex-col gap-5 w-2/3 text-left">
          <h1 className="text-lg md:text-3xl font-bold text-yellow-900 leading-snug">
            Book At-Home Lab Tests & <br /> Full Body Checks
          </h1>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full shadow-md">
                <FaMicroscope className="text-yellow-500 lg:text-xl" />
              </div>
              <p className="text-yellow-900 font-medium text-sm">
                NABL & CAP <br /> accredited labs
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full shadow-md">
                <FaUsers className="text-yellow-500 lg:text-xl" />
              </div>
              <p className="text-yellow-900 font-medium text-sm">
                5L+ Trusted <br /> Users
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/3 flex justify-end">
          <Image
            src="/lab-test.webp"
            alt="Lab Tests"
            width={180}
            height={130}
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
