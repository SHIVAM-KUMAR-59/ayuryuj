'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const logos = [
  { id: 1, img: '/logo1.webp' },
  { id: 2, img: '/logo2.webp' },
  { id: 3, img: '/logo3.webp' },
  { id: 4, img: '/logo4.webp' },
  { id: 5, img: '/logo5.webp' },
  { id: 6, img: '/logo6.webp' },
  { id: 7, img: '/logo7.webp' },
]

const TopHospitals = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <div className="w-[85%] mx-auto px-4 my-5">
      <h1 className="font-bold text-lg text-slate-600 mb-4">
        MFine partners with top hospitals
      </h1>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className="flex justify-center">
            <Image
              src={logo.img}
              alt={`Hospital logo ${logo.id}`}
              width={200} // Adjust size
              height={90} // Adjust size
              className="object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TopHospitals
