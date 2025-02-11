import React from 'react'

const Box = ({ name }) => {
  return (
    <div className="relative min-w-44 h-16 bg-slate-100 rounded-lg overflow-hidden flex items-center px-4 cursor-pointer group">
      <p className="text-blue-500 group-hover:text-white transition-colors duration-500 font-semibold text-sm relative z-10">
        {name}
      </p>

      <div
        className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full transition-all duration-500 ease-in-out 
        group-hover:w-[120%] group-hover:h-[120%] group-hover:-top-2 group-hover:-right-2"
      ></div>
    </div>
  )
}

export default Box
