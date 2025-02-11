'use client'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  FaInfinity,
  FaVial,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

import HealthCard from './HealthCard'
import ViewAllButton from './ViewAllButton'

const programs = [
  {
    id: 1,
    image: '/diabetes.webp',
    title: 'Diabetes Care Program',
    specialists: 'Diabetologists & Dietitians',
    duration: '3 Months',
    price: '7999',
    features: [
      { icon: <FaInfinity />, text: 'Unlimited Consultations' },
      { icon: <FaVial />, text: '2 At-Home Blood Tests' },
    ],
  },
  {
    id: 2,
    image: '/sexual_wellness.webp',
    title: 'Sexual Wellness Program - Male',
    specialists: 'Sexologists & Therapists',
    duration: '6 Weeks',
    price: '2499',
    features: [
      { icon: <FaInfinity />, text: 'Expert Consultations' },
      { icon: <FaVial />, text: 'Clinically proven results' },
    ],
    isNew: true,
  },
  {
    id: 3,
    image: '/elder_care_program.webp',
    title: 'Elder Care Program',
    specialists: 'Physician, Dieticians & Mental Health Professionals',
    duration: '12 Months',
    price: '3999',
    features: [
      { icon: <FaInfinity />, text: 'Unlimited calls with General Physician' },
      { icon: <FaVial />, text: 'Annual Health Screening at Home' },
    ],
  },
  {
    id: 4,
    image: '/weight_management.webp',
    title: 'Weight Management Program',
    specialists: '',
    duration: '3 Months',
    price: '4499',
    features: [
      {
        icon: <FaInfinity />,
        text: 'Regular meal planning & live wellness sessions',
      },
      {
        icon: <FaVial />,
        text: '2 at-home full body checks(70 + tests covered)',
      },
    ],
  },
  {
    id: 5,
    image: '/Thyroid_Care.webp',
    title: 'Thyroid Care Program',
    specialists: '',
    duration: '3 Months',
    price: '5499',
    features: [
      {
        icon: <FaInfinity />,
        text: 'Regular consultaions with top endocrinologists & dietitians',
      },
      {
        icon: <FaVial />,
        text: 'Weekly follow-up with a dedicated care manager',
      },
    ],
  },
  {
    id: 6,
    image: '/Mental_Wellness.webp',
    title: 'Mental Wellness Program',
    specialists: '',
    duration: '2 Months',
    price: '3999',
    features: [
      {
        icon: <FaInfinity />,
        text: '5 therapy sessions with a psychologist; 1 hr each',
      },
      {
        icon: <FaVial />,
        text: 'Worksheets designed by doctors to aid personal growth',
      },
    ],
  },
  {
    id: 8,
    image: '/Pregnancy_Care.webp',
    title: 'Pregnancy Care Program',
    specialists: '',
    duration: '3 Months',
    price: '8499',
    features: [
      {
        icon: <FaInfinity />,
        text: 'Genetic counselling in the second trimester',
      },
      {
        icon: <FaVial />,
        text: 'Lactation assistance during the third trimester & after child birth',
      },
    ],
  },
  {
    id: 7,
    image: '/PCOS.webp',
    title: 'PCOS Care Program',
    specialists: '',
    duration: '3 Months',
    price: '5499',
    features: [
      {
        icon: <FaInfinity />,
        text: 'Regular diet planning with an expert dietitian',
      },
      {
        icon: <FaVial />,
        text: 'Weekly follow-up with a dedicated care manager',
      },
    ],
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
    <div className="max-w-7xl mx-auto px-4 py-8 relative ">
      <Slider ref={sliderRef} {...settings}>
        {programs.map((program) => (
          <HealthCard program={program} key={program.id} />
        ))}
      </Slider>

      <div className="items-center justify-end space-x-4  -mt-16 lg:mt-3 flex gap-3">
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

export default HealthProgramsSlider
