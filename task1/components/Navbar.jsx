'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between w-[90%] mx-auto py-4">
        {/* Hamburger Menu */}
        <button
          className="text-gray-700 text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>

        {/* Logo */}
        <Image
          src="/logo.svg"
          height={50}
          width={150}
          alt="Logo"
          className="cursor-pointer"
        />

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-t from-red-400 to-orange-300 cursor-pointer text-md font-bold text-white">
            Get Our App
          </button>
          <button className="hidden lg:block px-4 py-2 border-2 border-orange-400 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-orange-500 text-md font-bold">
            Login / Signup
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full absolute top-full left-0 p-4 flex flex-col gap-3">
          <a href="#" className="text-lg font-medium">
            Our Services
          </a>
          <a href="#" className="text-lg font-medium">
            About Us
          </a>
          <a href="#" className="text-lg font-medium">
            More
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
