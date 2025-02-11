import Image from 'next/image'
import React from 'react'

const products = [
  {
    id: 1,
    img: '/sunscreen.webp',
    name: 'mfine Sunscreen Gel SPF 50/PA+++ (Pack of 3)',
    prevPrice: '₹1497',
    currPrice: '₹1199',
    discount: '20% OFF',
  },
  {
    id: 2,
    img: '/cleanser.webp',
    name: 'mfine 1% Mandelic Acid Exfoliating Cleanser',
    prevPrice: '₹349',
    currPrice: '₹315',
    discount: '10% OFF',
  },
  {
    id: 3,
    img: '/sunscreen.webp',
    name: 'mfine Ceramide Moisturizer (Pack of 3)',
    prevPrice: '₹1197',
    currPrice: '₹959',
    discount: '20% OFF',
  },
  {
    id: 4,
    img: '/night.webp',
    name: 'mfine Anti-Ageing Night Serum (1% Retinol Night Serum)',
    prevPrice: '₹649',
    currPrice: '₹585',
    discount: '10% OFF',
  },
  {
    id: 5,
    img: '/night.webp',
    name: 'mfine Radiance Boost Serum (20% Vitamin C + 1% Ferulic Acid Serum)',
    prevPrice: '₹699',
    currPrice: '₹629',
    discount: '10% OFF',
  },
  {
    id: 6,
    img: '/night.webp',
    name: 'mfine 2% Kojic Acid + 6% Glycolic Acid Night Serum',
    prevPrice: '₹599',
    currPrice: '₹569',
    discount: '5% OFF',
  },
]

const ProductList = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto ">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory p-4 scroll-smooth scroll-snap-x">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg flex flex-col text-left min-w-[150px] lg:w-[200px] hover:scale-105 hover:shadow-md transition-all duration-300 text-xs bg-white shadow-sm scroll-snap-align-start"
          >
            <Image
              src={product.img}
              height={150}
              width={150}
              alt={product.name}
              className="rounded-lg mx-auto w-full h-[60%]"
            />
            <p className="mt-2 text-xs lg:text-sm font-medium px-2">
              {product.name}
            </p>
            <p className="text-sm mt-1 px-2">
              <span className="text-gray-400 line-through text-xs">
                {product.prevPrice}
              </span>
              <span className="font-bold ml-1">{product.currPrice}</span>{' '}
              <span className="text-red-500 text-xs">{product.discount}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end px-4">
        <button className="w-full lg:w-auto bg-white lg:bg-blue-500 p-2 rounded-lg text-blue-500 border border-blue-500 lg:text-white font-bold cursor-pointer">
          View All
        </button>
      </div>
    </div>
  )
}

export default ProductList
