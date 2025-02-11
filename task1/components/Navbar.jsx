import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  const navLinks = ['Our Services', 'About Us', 'More']

  return (
    <nav className=" lg:px-4 shadow-md flex items-center justify-center">
      <div className="flex w-[90%] mx-auto items-center justify-between">
        <Image
          src="/logo.svg"
          height={50}
          width={150}
          alt="Logo"
          className="cursor-pointer"
        />

        <ul className="flex text-md font-medium items-center">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-6 transition-all duration-300 border-b-2 border-transparent hover:bg-blue-100 hover:border-blue-500"
            >
              {link}
            </li>
          ))}
          <li className="flex gap-3 ml-3">
            <button className="px-4 py-2 border rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-t from-red-400 to-orange-300 cursor-pointer text-md font-bold text-white">
              Get Our App
            </button>
            <button className="px-4 py-2 border-2 border-orange-400 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-orange-500 text-md font-bold">
              Login/Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
