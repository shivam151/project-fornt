import React from 'react'

const PayModel = () => {
  return (
    <div className="bg-white md:px-20 sm:p-2">
        <div className=' flex flex-col gap-3 p-4 space-x-3 space-y-4 '>
        <div className="text-center ">
        <div className='  bg-blue-50 '>
        <div className="max-w-4xl  mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/src/assets/Left Image.svg"
              alt="Google Play"
              className="h-40 md:h-60"
            />
          </div>
          <div className="text-center md:text-left md:pr-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Lorem Main Heading
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Partner with us for better plans and benefits.
            </p>
            <button className="px-6 py-3 bg-pink-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-pink-600">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  
    <div className="mx-auto bg-pink-100 md:p-10 sm:p-2">
  <div className="text-center">
    <h2 className="text-lg md:text-4xl font-medium text-gray-800">
      <span className="text-pink-500 font-bold">Essentials</span> plan is{" "}
      <span className="text-pink-500 font-bold">designed</span> to make your
      dollar go further with{" "}
      <span className="font-bold text-gray-900">"Pay as you need"</span> model.
    </h2>
    <img
      src="/src/assets/6.svg"
      alt="Google Play"
      className="mx-auto max-w-full h-auto p-2"
    />
  </div>
</div>

   
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 pb-8  mx-auto ">
  {[
    { name: "No Network Limitations", icon: "/src/assets/network_limit.svg" },
    { name: "No Coverage Limits", icon: "/src/assets/Run-coverage.svg" },
    { name: "No Co-Pays", icon: "/src/assets/No-Cash-Payment.svg" },
    { name: "Instant Access", icon: "/src/assets/Password_Input_Instant_Access.svg" },
    { name: "No Deductibles", icon: "/src/assets/No-Deductibles.svg" },
    { name: "Cash Prize", icon: "/src/assets/Cash-Price.svg" },
  ].map((feature, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg"
    >
      <div className="mb-4 h-12 w-12 bg-pink-100 text-pink-500 rounded-full border-e-gray-500 flex items-center justify-center">
        <img 
          src={feature.icon} 
          alt={feature.name} 
          className="h-10 w-10 object-cover" 
        />
      </div>
      <p className="text-sm md:text-base font-medium text-gray-700">
        {feature.name}
      </p>
    </div>
  ))}
</div>


    </div>
  </div>
  )
}

export default PayModel