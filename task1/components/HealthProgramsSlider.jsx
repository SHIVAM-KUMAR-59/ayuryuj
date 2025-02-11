'use client'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  FaCalendarAlt,
  FaRupeeSign,
  FaInfinity,
  FaVial,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

const programs = [
  {
    id: 1,
    title: 'Diabetes Care Program',
    specialists: 'Diabetologists & Dietitians',
    duration: '3 Months',
    price: '7999',
    features: [
      { icon: <FaInfinity />, text: 'Unlimited Consultations' },
      { icon: <FaVial />, text: '2 At-Home Blood Tests' },
    ],
    image: '/diabetes.png',
  },
  {
    id: 2,
    title: 'Sexual Wellness Program - Male',
    specialists: 'Sexologists & Therapists',
    duration: '6 Weeks',
    price: '2499',
    features: [
      { icon: <FaInfinity />, text: 'Expert Consultations' },
      { icon: <FaVial />, text: 'Clinically proven results' },
    ],
    image: '/sexual-wellness.png',
    isNew: true,
  },
  {
    id: 3,
    title: 'Elder Care Program',
    specialists: 'Physician, Dieticians & Mental Health Professionals',
    duration: '12 Months',
    price: '3999',
    features: [
      { icon: <FaInfinity />, text: 'Unlimited calls with General Physician' },
      { icon: <FaVial />, text: 'Annual Health Screening at Home' },
    ],
    image: '/elder-care.png',
  },
]

const HealthProgramsSlider = () => {
  const sliderRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setProgress(((index + 1) / programs.length) * 100),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <Slider ref={sliderRef} {...settings}>
        {programs.map((program) => (
          <div key={program.id} className="px-2">
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="font-semibold text-lg mt-3">{program.title}</h3>
              <p className="text-gray-600">{program.specialists}</p>
              <div className="flex items-center mt-2 space-x-2">
                <FaCalendarAlt className="text-blue-500" />
                <span className="text-sm font-medium">{program.duration}</span>
                <FaRupeeSign className="text-green-500" />
                <span className="text-sm font-medium">{program.price}</span>
              </div>
              <button className="bg-orange-500 text-white w-full py-2 mt-3 rounded-lg hover:bg-orange-600">
                Request a call back
              </button>
              <div className="mt-4 space-y-2">
                {program.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    {feature.icon} <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bottom Right Controls */}
      <div className="flex items-center justify-end space-x-4 mt-4">
        {/* Progress Bar */}
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>

        {/* View All Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          View All
        </button>
      </div>
    </div>
  )
}

export default HealthProgramsSlider
