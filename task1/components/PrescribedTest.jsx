'use client'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const healthChecks = [
  {
    id: 0,
    image: '/pt1.webp',
    title: 'Complete Blood Count Test',
    price: 349,
  },
  {
    id: 1,
    image: '/pt7.webp',
    title: 'HbA1c Biabetes test',
    price: 550,
  },
  {
    id: 2,
    image: '/pt3.webp',
    title: 'Thyroid Profile',
    price: 500,
  },
  {
    id: 3,
    image: '/pt4.webp',
    title: 'Liver Function Test',
    price: 700,
  },
  {
    id: 4,
    image: '/pt4.webp',
    title: 'Fasting Blood glucose',
    price: 90,
  },
  {
    id: 5,
    image: '/pt5.webp',
    title: 'Lipid Profile test',
    price: 700,
  },
  {
    id: 6,
    image: '/pt6.webp',
    title: 'Urine Culture and Sensitivity',
    price: 750,
  },
  {
    id: 7,
    image: '/pt7.webp',
    title: 'C Reactive Protein (Complex)',
    price: 500,
  },
]

const PrescriptedTestCard = ({ check }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 transition hover:shadow-xl mx-1 mb-5">
      <div className="w-full">
        <Image
          src={check.image}
          width={300}
          height={200}
          alt={check.title}
          className="w-full h-40 object-cover rounded-t-xl"
        />
      </div>

      <p className="text-lg font-semibold text-gray-900 mt-3 line-clamp-1">
        {check.title}
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Starts at
        <span className="text-cyan-600 font-bold">₹{check.price}</span>
      </p>
    </div>
  )
}

const PrescribedTest = () => {
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
          <PrescriptedTestCard check={check} key={check.id} />
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

export default PrescribedTest
