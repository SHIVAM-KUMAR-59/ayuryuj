'use client'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const data = [
  {
    title: 'Specialities',
    options: [
      'Best Dermatologist in Bangalore',
      'Best Psychiatrist in Delhi',
      'Best Gynecologist in Bangalore',
      'Best Dermatologist in Mumbai',
      'Best Dentist in Bangalore',
      'Best Gynecologist in Hyderabad',
      'Best ENT Specialist in Bangalore',
    ],
  },
  {
    title: 'More Specialities',
    options: [
      'Best Psychiatrist in Mumbai',
      'Best Orthopedist in Bangalore',
      'Best Dermatologist in Kolkata',
      'Best Pediatrician in Hyderabad',
      'Best General Physician in Bangalore',
      'Best Orthopedist in Chennai',
    ],
  },
  {
    title: 'Health Packages',
    options: [
      'RTPCR Test Near Me',
      'Complete Covid-19 Antibody Test',
      'Basic Covid-19 IgG Antibody Test',
      'Covid Spike Protein Antibody Test',
      'Full Body Checkup Near Me',
      'Advance Full Body Checkup for Men',
    ],
  },
  {
    title: 'Lab Tests',
    options: [
      'CBC Test Price in Bangalore',
      'Vitamin B-12 Test Cost in Bangalore',
      'CRP Test Price in Bangalore',
      'Liver Function Test Cost in Bangalore',
      'Urine Test Price in Bangalore',
      'HbA1c Blood Test Price in Bangalore',
    ],
  },
  {
    title: 'Scans',
    options: [
      'MRI Scan Near Me',
      'CT Scan Brain Near Me',
      'X-Ray Near Me',
      'Ultrasound Scan Near Me',
      'HRCT Chest Scan Near Me',
      'PET Scan Near Me',
    ],
  },
]

const Categories = () => {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="w-[90%] mx-auto ">
        {/* Grid for large screens */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {data.map((category, index) => (
            <div key={index}>
              <h2 className="font-bold text-lg mb-2">{category.title}</h2>
              <ul className="text-gray-700">
                {category.options.map((option, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dropdowns for small screens */}
        <div className="md:hidden space-y-3">
          {data.map((category, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center px-4 py-3 "
                onClick={() => toggleCategory(index)}
              >
                <span className="font-semibold">{category.title}</span>
                {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openCategory === index && (
                <ul className="p-3  text-gray-700 space-y-1">
                  {category.options.map((option, idx) => (
                    <li key={idx} className="hover:underline cursor-pointer">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
