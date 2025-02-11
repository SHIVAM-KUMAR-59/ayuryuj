import Image from 'next/image'
import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      img: '/corporate.webp',
      msg: 'Corporate OPD Benefits',
    },
    {
      id: 2,
      img: '/medicine.webp',
      msg: 'Order Medicines',
    },
    {
      id: 3,
      img: '/skincare.webp',
      msg: 'Skincare',
    },
    {
      id: 4,
      img: '/consultation.webp',
      msg: 'Doctor Consultation',
    },
    {
      id: 5,
      img: '/health.webp',
      msg: 'Health Tests and Checks',
    },
    {
      id: 6,
      img: '/corporate.webp',
      msg: 'Corporate OPD Benefits',
    },
    {
      id: 7,
      img: '/medicine.webp',
      msg: 'Order Medicines',
    },
  ]

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 mt-5">
      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 py-2 px-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-none w-24 md:w-32 flex flex-col items-center gap-2 snap-start"
          >
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <Image
                src={service.img}
                fill
                className="object-contain"
                alt={service.msg}
              />
            </div>
            <p className="text-xs md:text-sm text-center font-medium">
              {service.msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
