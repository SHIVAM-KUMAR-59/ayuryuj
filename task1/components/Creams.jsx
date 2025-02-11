import Image from 'next/image'
import React from 'react'
import ProductList from './CreamList'

const Creams = () => {
  const data = [
    {
      id: 1,
      icon: '/satisfied.svg',
      msg: '10L+ Satisfied Customers',
    },
    {
      id: 2,
      icon: '/play.svg',
      msg: '4.7 ⭐️ on Google Play',
    },
    {
      id: 3,
      icon: '/doc.svg',
      msg: '4k+ Doctors in MFine',
    },
  ]

  return (
    <section className="flex justify-center flex-col items-center gap-5">
      <div className="flex mx-auto justify-between w-[80%] lg:px-5 gap-2 lg:gap-0">
        {data.map((item) => (
          <div
            className="flex items-center justify-center gap-2 text-xs lg:text-lg text-gray-400"
            key={item.id}
          >
            <Image
              src={item.icon}
              height={20}
              width={20}
              alt={item.msg}
              className="lg:w-10 lg:h-10 rounded-full lg:rounded-xl"
            />
            {item.msg}
          </div>
        ))}
      </div>
      <Image
        src="/fda.png"
        height={300}
        width={500}
        alt="FDA Certified"
        className="w-[85%] h-28 lg:h-auto rounded-lg "
      />
      <ProductList />
    </section>
  )
}

export default Creams
