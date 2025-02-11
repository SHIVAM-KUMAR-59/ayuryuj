import Image from 'next/image'
import React from 'react'
import Box from './Box'
import ViewAllButton from './ViewAllButton'
import Banner from './Banner'

const Book = () => {
  const boxes = [
    {
      id: 1,
      name: 'MRI Scan',
    },
    {
      id: 2,
      name: 'City Scan',
    },
    {
      id: 3,
      name: 'Ultrasound',
    },
    {
      id: 4,
      name: 'ECG Scan',
    },
    {
      id: 5,
      name: 'PET Scan',
    },
    {
      id: 6,
      name: 'X Ray',
    },
    {
      id: 7,
      name: 'TMT Scan',
    },
    {
      id: 8,
      name: 'Echo Scan',
    },
  ]
  return (
    <div className="flex gap-5 flex-col justify-center items-center">
      <Banner src="/book.png" />
      <div className="flex sm:flex-wrap gap-5 w-[85%] mx-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth scroll-snap-x">
        {boxes.map((box) => (
          <Box name={box.name} key={box.id} />
        ))}
      </div>
      <div className="flex justify-end w-[85%]">
        <ViewAllButton />
      </div>
    </div>
  )
}

export default Book
