import React from 'react'

const HealthCarePlan = () => {
  return (
    
    <div className="bg-white font-sans px-16 py-8 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="bg-white border rounded-lg shadow-lg w-full max-w-xs md:max-w-sm p-6 text-center border-b-4 border-r-4 border-black">
          <h3 className="text-lg md:text-xl font-semibold">Traveler Essentials</h3>
          <div className='flex p-4 items-center justify-center  space-x-2'>
          <img
            src="/src/assets/Vector.svg"
            alt="logo"
            className="h-10"
          />
          <img
            src="/src/assets/OAK Tetx.svg"
            alt="healthcare"
            className="h-10"
          />
          </div>
          <p className="text-black mt-4">
            Traveler Essentials{" "}
            <span className="text-pink-500">insurance for individuals</span>
          </p>
        </div>


        <div className="bg-white border rounded-lg shadow-lg w-full max-w-xs md:max-w-sm p-6 text-center border-b-4 border-r-4 border-black">
          <h3 className="text-lg md:text-xl font-semibold">Corp Essentials</h3>
          <div className='flex p-4 items-center justify-center  space-x-2'>
          <img
            src="/src/assets/Vector.svg"
            alt="logo"
            className="h-10"
          />
          <img
            src="/src/assets/OAK Tetx.svg"
            alt="healthcare"
            className="h-10"
          />
          </div>
          <p className="text-black mt-4">
            Corporation Essentials{" "}
            <span className="text-pink-500">insurance for employees</span>
          </p>
        </div>

        <div className="bg-white border rounded-lg shadow-lg w-full max-w-xs md:max-w-sm p-6 text-center border-b-4 border-r-4 border-black">
          <h3 className="text-lg md:text-xl font-semibold">Student Essentials</h3>
          <div className='flex p-4 items-center justify-center  space-x-2'>
          <img
            src="/src/assets/Vector.svg"
            alt="logo"
            className="h-10"
          />
          <img
            src="/src/assets/OAK Tetx.svg"
            alt="healthcare"
            className="h-10"
          />
          </div>
            <p className="text-black mt-4">
            Student Essentials{" "}
            <span className="text-pink-500">insurance for students</span>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center lg:text-left">
        <p className="text-black text-sm md:text-base leading-relaxed">
          At OAK Healthcare, we focus on the sub-metallic healthcare space,
          ensuring that travelers to the USA can access healthcare essentials
          without limitations. We achieved this by custom-building a traveler
          health plan that combines critical aspects of healthcare, namely
          round-the-clock telemedicine, discounted pharmacy, lab and diagnostic
          services, cash-priced clinical services, accidental medical coverage,
          and more.
        </p>
      </div>
    </div>
  )
}

export default HealthCarePlan