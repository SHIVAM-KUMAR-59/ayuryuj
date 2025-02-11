'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaUserMd, FaClock, FaUsers } from 'react-icons/fa'
import { MdFollowTheSigns } from 'react-icons/md'
import Box from './Box'
import ViewAllButton from './ViewAllButton'

const Consult = () => {
  const symptoms = [
    {
      id: 1,
      name: 'Stomach Ache',
    },
    {
      id: 2,
      name: 'Period Issue',
    },
    {
      id: 3,
      name: 'Acne/Pimples',
    },
    {
      id: 4,
      name: 'Fever',
    },
    {
      id: 5,
      name: 'Depression',
    },
    {
      id: 6,
      name: 'Diabetes',
    },
    {
      id: 7,
      name: 'Cough',
    },
    {
      id: 8,
      name: 'Hairfall',
    },
    {
      id: 9,
      name: 'Gastrics',
    },
    {
      id: 10,
      name: 'Body Pain',
    },
  ]

  const specialities = [
    {
      id: 1,
      name: 'Physician',
    },
    {
      id: 2,
      name: 'Sexologist',
    },
    {
      id: 3,
      name: 'Dermatologist',
    },
    {
      id: 4,
      name: 'Orthopedician',
    },
    {
      id: 5,
      name: 'ENT Specialist',
    },
    {
      id: 6,
      name: 'Physiotherapist',
    },
    {
      id: 7,
      name: 'Dentist',
    },
    {
      id: 8,
      name: 'Cardiologist',
    },
    {
      id: 9,
      name: 'Gynaecologist',
    },
    {
      id: 10,
      name: 'Dietitian',
    },
  ]
  const [selectedTab, setSelectedTab] = useState('symptoms')

  return (
    <>
      <section className="relative bg-cyan-100 rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between w-[85%] mx-auto my-6">
        <div className="flex flex-col gap-5 w-full md:w-2/3">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900">
            Consult India's Top Doctors Online
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaUserMd className="text-blue-500 text-xl" />
              </div>
              <p className="text-blue-900 font-medium">35+ specialities</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaUsers className="text-blue-500 text-xl" />
              </div>
              <p className="text-blue-900 font-medium">10L+ Satisfied Users</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaClock className="text-blue-500 text-xl" />
              </div>
              <p className="text-blue-900 font-medium">
                Consult online in 10 mins
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <MdFollowTheSigns className="text-blue-500 text-xl" />
              </div>
              <p className="text-blue-900 font-medium">
                Free follow-up for 5 days
              </p>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="absolute -bottom-5 left-1/2 lg:translate-x-0 lg:left-5 transform -translate-x-1/2 flex w-[90%] sm:w-auto bg-white rounded-xl shadow-md">
            <button
              className={`px-5 py-2 w-1/2 sm:w-auto rounded-l-xl shadow-md font-semibold transition-all duration-300 ${
                selectedTab === 'symptoms'
                  ? 'bg-cyan-700 text-white'
                  : 'text-blue-600 border border-blue-600'
              }`}
              onClick={() => setSelectedTab('symptoms')}
            >
              Symptoms
            </button>
            <button
              className={`px-5 py-2 w-1/2 sm:w-auto rounded-r-xl shadow-md font-semibold transition-all duration-300 ${
                selectedTab === 'specialities'
                  ? 'bg-cyan-700 text-white'
                  : 'text-blue-600 border border-blue-600'
              }`}
              onClick={() => setSelectedTab('specialities')}
            >
              Specialities
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-end">
          <Image
            src="/consult.webp"
            alt="Doctors"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </section>
      <div className="w-[85%] mx-auto my-4 lg:my-12">
        <div className="text-blue-900 font-medium mt-8">
          <div className="flex sm:flex-wrap gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth scroll-snap-x">
            {selectedTab === 'symptoms'
              ? symptoms.map((box) => <Box name={box.name} key={box.id} />)
              : specialities.map((box) => <Box name={box.name} key={box.id} />)}
          </div>
          <div className="flex justify-end w-full mt-5 lg:mt-0">
            <ViewAllButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Consult
