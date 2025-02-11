'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi' // Importing search icon

const ChangingBackground = () => {
  const images = [
    { id: 1, img: '/img1.jpeg' },
    { id: 2, img: '/img2.webp' },
    { id: 3, img: '/img3.webp' },
    { id: 4, img: '/img4.jpeg' },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Search Box (Visible Only on Small & Medium Devices) */}
      <div className="sm:hidden flex items-center w-[90%] mx-auto mt-3 bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2">
        <FiSearch className="text-gray-500 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search Lab test, doctors, skincare etc..."
          className="w-full focus:outline-none text-sm text-gray-700"
        />
      </div>

      {/* Changing Background */}
      <div className="relative w-[90%] lg:w-[80%] mx-auto aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 rounded-lg`}
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0,
            }}
          >
            <Image
              src={image.img}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="contain"
              priority={index === 0}
              className="transition-all duration-500"
            />
            <div className="hidden absolute left-1/2 bottom-[5%] translate-x-[-50%] w-[80%] sm:w-[50%] lg:flex items-center bg-white border border-gray-300 rounded-md shadow-lg p-3">
              <FiSearch className="text-gray-500 text-lg mr-2" />
              <input
                type="text"
                placeholder="Search Lab test, doctors, skincare etc..."
                className="w-full focus:outline-none text-sm text-gray-700"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ChangingBackground
