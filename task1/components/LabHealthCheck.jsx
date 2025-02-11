'use client'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import LabTestCard from './LabTestCard'

const healthChecks = [
  {
    id: 1,
    tests: 86,
    title: 'Ayushman Advanced Health Check',
    description: 'Diabetes, Cholesterol & more',
    originalPrice: 4399,
    discountedPrice: 2399,
    discount: 'Flat 60% Off',
  },
  {
    id: 2,
    tests: 66,
    title: 'Ayushman Basic Health Check',
    description: 'Thyroid, CBC & more',
    originalPrice: 1869,
    discountedPrice: 999,
    discount: 'Flat 60% Off',
  },
  {
    id: 3,
    tests: 83,
    title: 'Ayushman Complete Health Check',
    description: 'Diabetes profile, Liver function test, lipid profile & more',
    originalPrice: 3499,
    discountedPrice: 2099,
    discount: 'Flat 65% Off',
  },
  {
    id: 4,
    tests: 77,
    title: 'Ayushman Vital Health Check',
    description: 'Diabetes profile, Liver function test, lipid profile & more',
    originalPrice: 2499,
    discountedPrice: 1499,
    discount: 'Flat 65% Off',
  },
  {
    id: 5,
    tests: 89,
    title: 'Ayushman Comprehensive Health Check - Male',
    description: 'Diabetes profile, Liver function test, lipid profile & more',
    originalPrice: 9999,
    discountedPrice: 3499,
    discount: 'Flat 65% Off',
  },
  {
    id: 6,
    tests: 89,
    title: 'Ayushman Comprehensive Health Check - Female',
    description: 'Diabetes profile, Liver function test, lipid profile & more',
    originalPrice: 9999,
    discountedPrice: 3499,
    discount: 'Flat 65% Off',
  },
  {
    id: 7,
    tests: 97,
    title: 'Ayushman Taxsaver Health Package - Male',
    description: 'Diabetes profile, Liver function test, lipid profile & more',
    originalPrice: 8339,
    discountedPrice: 4999,
    discount: 'Flat 65% Off',
  },
  {
    id: 8,
    tests: 97,
    title: 'Ayushman Taxsaver Health Package - Female',
    description: 'Diabetes profile, Liver function test, lipid profile & more',
    originalPrice: 8339,
    discountedPrice: 4999,
    discount: 'Flat 65% Off',
  },
]

const LabHealthCheck = () => {
  const sliderRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (index) =>
      setProgress(((index + 1) / healthChecks.length) * 100),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className="max-w-[85%] mx-auto px-4 py-6 relative">
      <Slider ref={sliderRef} {...settings}>
        {healthChecks.map((check) => (
          <LabTestCard check={check} key={check.id} />
        ))}
      </Slider>

      <div className="items-center justify-end flex gap-4 lg:mt-4 lg:mr-2">
        <div className="w-24 h-2 bg-gray-200 rounded-full hidden lg:block">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition hidden lg:block"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition hidden lg:block"
        >
          <FaChevronRight />
        </button>

        <button className="hidden lg:block bg-white lg:bg-blue-500 lg:text-white px-3 py-2 rounded-md lg:hover:bg-blue-600 transition border border-blue-500 lg:border-none text-sm">
          View All
        </button>
      </div>
    </div>
  )
}

export default LabHealthCheck
