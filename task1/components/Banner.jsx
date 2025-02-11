import Image from 'next/image'
import React from 'react'

const Banner = ({ src }) => {
  return (
    <Image
      src={src}
      height={300}
      width={500}
      alt="FDA Certified"
      className="w-[85%] h-28 lg:h-auto rounded-lg "
    />
  )
}

export default Banner
