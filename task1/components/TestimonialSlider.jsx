'use client'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Madhuri',
    age: 29,
    location: 'Bangalore',
    image: '/testimonial1.webp',
    rating: 4,
    review:
      "It's just been more than a month since I have been using Mfine's anti-pigmentation kit and my stubborn spots are already fading away. I took a free doctor consult on Mfine app and my doctor recommended this kit as per my skin type & concern.",
  },
  {
    id: 2,
    name: 'Hardik Mehta',
    age: 36,
    location: 'Ahmedabad',
    image: '/testimonial2.webp',
    rating: 4,
    review:
      "I had dark circles for quite some time now. I used a few home remedies but it did not work. My friend suggested to me Mfine's free skin test where I was recommended a customized kit. In just one month of usage, I can already see results.",
  },
  {
    id: 3,
    name: 'Aayushi',
    age: 27,
    location: 'New Delhi',
    image: '/testimonial3.webp',
    rating: 5,
    review:
      "Hormonal acne is real & painful. I am happy to see results after using Mfine's Anti-Acne Kit - Oily Skin in just one and half months.",
  },
  {
    id: 4,
    name: 'Rajat Rajput',
    age: 28,
    location: 'Bangalore',
    image: '/testimonial4.webp',
    rating: 4,
    review:
      'I booked a health check for my wife from Mfine. The process was smooth. The technician was hygienic and punctual. Also, we got the reports on the same day.',
  },
]

const TestimonialSlider = () => {
  const [hovered, setHovered] = useState(false)
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div
      className="relative max-w-[85%] mx-auto px-4 py-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left Arrow */}
      {hovered && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition z-10"
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()} // ✅ Corrected
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="p-6 bg-white rounded-xl shadow-lg border hover:shadow-2xl transition mb-5 flex flex-col justify-between min-h-[250px]">
              {/* Profile Section */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.age} yrs old, {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Ratings */}
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i < testimonial.rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-400" />
                  ),
                )}
              </div>

              {/* Review */}
              <p className="mt-3 text-gray-700 text-sm line-clamp-3">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      {hovered && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          onClick={() => sliderRef.current && sliderRef.current.slickNext()} // ✅ Corrected
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  )
}

export default TestimonialSlider
