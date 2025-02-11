const LabTestCard = ({ check }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-[250px] mx-[10px] flex-shrink-0 relative mb-5 min-h-[220px] flex flex-col justify-between">
      <div className="bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-r-lg absolute left-0 top-4">
        {check?.tests}+ TESTS
      </div>

      <div className="mt-10 text-sm flex-1">
        <h2 className="font-bold text-gray-900">{check.title}</h2>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">
          {check.description}
        </p>
      </div>

      <div className="mt-2">
        <span className="text-gray-400 line-through text-xs">
          ₹ {check.originalPrice}
        </span>
        <span className="text-black font-bold ml-1">
          ₹ {check.discountedPrice}
        </span>
        <span className="text-red-500 text-sm font-semibold ml-1">
          {check.discount} Off
        </span>
      </div>
    </div>
  )
}

export default LabTestCard
