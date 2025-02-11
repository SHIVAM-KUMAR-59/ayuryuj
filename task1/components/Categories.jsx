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
      'Best General Physician in Delhi',
      'Best Neurologist in Bangalore',
      'Best Orthopedist in Delhi',
      'Best Pediatrician in Delhi',
      'Best Gynecologist in Noida',
      'Best Pediatrician in Noida',
      'Best Orthopedist in Noida',
      'Best Gynecologist in Delhi',
      'Best Pediatrician in Bangalore',
      'Best Gynecologist in Kolkata',
      'Best Urologist in Bangalore',
      'Best Dermatologist in Noida',
      'Best Dietitian in Noida',
    ],
  },
  {
    title: 'More Specialities',
    options: [
      'Best Psychiatrist in Mumbai',
      'Best Orthopedist in Bangalore',
      'Best Dermatologist in Kolkata',
      'Best Psychiatrist in Bangalore',
      'Best Pediatrician in Hyderabad',
      'Best General Physician in Bangalore',
      'Best Orthopedist in Chennai',
      'Best Orthopedist in Delhi',
      'Best Psychiatrist in Delhi',
      'Best General Physician in Delhi',
      'Best Psychiatrist in Noida',
      'Best General Physician in Noida',
      'Best Dermatologist in Delhi',
      'Best Andrologist in Noida',
      'Best Neurologist in Delhi',
      'Best Urologist in Noida',
      'Best Gastroenterologist in Noida',
      'Best Endocrinologist in Delhi',
      'Best Diabetologist in Delhi',
      'Best Physiotherapist in Delhi',
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
      'Advance Full Body Checkup for Women',
      'Comprehensive Full Body Checkup for Men',
      'Comprehensive Full Body Checkup for Women',
      'Vital Full Body Checkup Near Me',
      'Vitamin Profile Test Cost in Noida',
      'Diabetes Screening Test in Noida',
      'Obesity Assessment Test in Noida',
      'PCOD Profile Test Cost in Noida',
      'X-Ray Cost in Noida',
      'CT Scan Chest Cost in Noida',
      'HRCT Scan Cost in Noida',
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
      'Lipid Profile Test Cost in Bangalore',
      'HbA1c Blood Test Price in Bangalore',
      'Pregnancy Test Cost in Bangalore',
      'TSH Test Price in Bangalore',
      'Smoker’s Risk Assessment Test in Noida',
      'Stress Test in Noida',
      'Dengue Screening Cost in Noida',
      'Pregnancy Test Cost in Noida',
      'TSH Test Price in Noida',
      'Double Marker Test Cost in Noida',
      'CBC Test Price in Noida',
    ],
  },
  {
    title: 'Scans',
    options: [
      'Sonography Near Me',
      'CT Scan Near Me',
      'Ultrasound Scan Near Me',
      'HRCT Chest Scan',
      'PET Scan Near Me',
      'CRP Test Price in Noida',
      'Liver Function Test Cost in Noida',
      'MRI Scan Brain Cost in Noida',
      'STD Risk Assessment Test in Noida',
      'Cardiac Risk Assessment Test in Noida',
      'Allergy Risk Assessment Test in Noida',
      'PET Scan Cost in Noida',
      'KUB Ultrasound Price in Noida',
      'Double Marker Test Cost in Bangalore',
      'Cocaine Test Price in Noida',
      'Lipid Profile Test Cost in Noida',
      'HbA1c Blood Test Price in Noida',
    ],
  },
]

const Categories = () => {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <div className="w-full py-10 bg-gray-50 text-[13px]">
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
