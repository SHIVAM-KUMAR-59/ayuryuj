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

import AssessmentCard from './AssessmentCard'
import ViewAllButton from './ViewAllButton'

const assessments = [
  {
    id: 1,
    question: 'Need personalised skincare?',
    slogan: 'Assess your skin',
    feature: [['Approved by Dermatologists'], ['Powered by AI']],
    image: '/user1.webp',
  },
  {
    id: 2,
    question: 'Facing irregular periods?',
    slogan: 'Self-Check For PCOD',
    feature: [['5L+ Women Assessed'], ['Certified by Gynaecologists']],
    image: '/user2.webp',
  },
  {
    id: 3,
    question: 'Out of breath during walks?',
    slogan: 'Self-Check Your Heart Health',
    feature: [['15k+ users assessed'], ['Certified by Cardiologists']],
    image: '/user3.webp',
  },
  {
    id: 4,
    question: 'Notice weight gain and fatigue?',
    slogan: 'Self-Check Your Thyroid',
    feature: [['13k+ users assessed'], ['Certified by Doctors']],
    image: '/user4.webp',
  },
  {
    id: 6,
    question: 'Swelling or lumps in breast ?',
    slogan: 'Self-Check For Breast Cancer',
    feature: [['20k+ users assessed'], ['Certified by Gynaecologists']],
    image: '/user5.webp',
  },
  {
    id: 5,
    question: 'Feel thirsty & hunger often?',
    slogan: 'Self-Check For Diabetes',
    feature: [['10k+ users assessed'], ['Certified by Diabetologists']],
    image: '/user6.webp',
  },
  {
    id: 7,
    question: 'Notice pain while urination?',
    slogan: 'Self-Check For UTI',
    feature: [['5k+ users assessed'], ['Certified by Urologists']],
    image: '/user7.webp',
  },
  {
    id: 8,
    question: 'Headache, unable to work, & nauseous?',
    slogan: 'Self-Check For MIGRAINE',
    feature: [['5k+ users assessed'], ['Certified by Doctors']],
    image: '/user8.webp',
  },
  {
    id: 9,
    question: 'Constant bone pain and fatigue?',
    slogan: 'Self-Check For Vitamin D deficiency',
    feature: [['5k+ users assessed'], ['Certified by Physicians']],
    image: '/user9.webp',
  },
  {
    id: 10,
    question: 'Stiffness and trouble in bending?',
    slogan: 'Find the cause of lower back ache',
    feature: [['10k+ users assessed'], ['Certified by Orthopedicians']],
    image: '/user10.webp',
  },
  {
    id: 11,
    question: 'Notice loss of smell & taste?',
    slogan: 'Self-Check For Covid-19',
    feature: [['11k+ users assessed'], ['Certified by Physicians']],
    image: '/user11.webp',
  },
]

const AssessmentSlider = () => {
  const sliderRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) =>
      setProgress(((index + 1) / assessments.length) * 100),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className="max-w-[85%] mx-auto px-4 py-8 relative ">
      <Slider ref={sliderRef} {...settings}>
        {assessments.map((assessment) => (
          <AssessmentCard assessment={assessment} key={assessment.id} />
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

export default AssessmentSlider
