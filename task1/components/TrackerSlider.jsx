'use client'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import TrackerCard from './TrackerCard'

const tracker = [
  {
    id: 1,
    title:
      'Understanding Seasonal Allergies and Their Diagnostics: A Complete Guide',
    description: null,
    image: '/health1.jpg',
  },
  {
    id: 2,
    title: 'Understanding Human Metapneumovirus',
    description: null,
    image: '/health2.jpeg',
  },
]

const TrackerSlider = () => {
  const sliderRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setProgress(((index + 1) / tracker.length) * 100),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative ">
      <Slider ref={sliderRef} {...settings}>
        {tracker.map((track) => (
          <TrackerCard track={track} key={track.id} />
        ))}
      </Slider>

      <div className="items-center justify-end space-x-4 flex gap-3 lg:mt-5 lg:mr-3">
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden hidden lg:block">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors hidden lg:contents"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors hidden lg:contents"
        >
          <FaChevronRight />
        </button>

        <button className="bg-white lg:bg-blue-500 lg:text-white px-4 py-2 rounded-lg lg:hover:bg-blue-600 transition-colors w-full lg:w-auto border-2 border-blue-500 lg:border-none">
          View All
        </button>
      </div>
    </div>
  )
}

export default TrackerSlider
