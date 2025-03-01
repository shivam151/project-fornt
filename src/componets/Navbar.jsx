import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white font-sans">
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-2 border-b">
      <div className=" items-center">
          <a href="#" className="text-black hover:text-pink-500">
            Essentials 
            <span className='text-pink-500'>---------</span>

          </a>
          <div className='flex p-2 space-x-2'>
          <img
            src="/src/assets/Vector.svg"
            alt="Google Play"
            className="h-10"
          />
          <img
            src="/src/assets/OAK Tetx.svg"
            alt="App Store"
            className="h-10"
          />
        </div>
        </div>
        {/* <div className="text-xl font-bold">
          OAK <span className="text-pink-500">Healthcare</span>
        </div> */}
        <nav className="flex space-x-4">
          <a href="#" className="text-pink-500 hover:text-pink-500 border-b-4 border-pink-500">
            Home
          </a>
          <span className='text-pink-500'>|</span>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Services
          </a>
          <span className='text-pink-500'>|</span>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Contact Us
          </a>
        </nav>
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-blue-600 hover:text-pink-500">
            Login/Signup
          </a>
          <img
            src="/src/assets/Google Play.svg"
            alt="Google Play"
            className="h-8"
          />
          <img
            src="/src/assets/Apple Play.svg"
            alt="App Store"
            className="h-8"
          />
        </div>
        <div className="flex space-x-4 items-center">
          
          <img
            src="/src/assets/Flag Icon.svg"
            alt="indian flag"
            className="h-8"
          />
          
        </div>
      </header>

      <div className="flex flex-col lg:flex-row items-center px-6 sm:p-2 lg:px-20">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Securing your <span className="text-pink-500">Health</span> while traveling to{" "}
            <span className="text-pink-500">USA</span> is easy
          </h1>
          <p className="text-gray-600">
            Discover the ease and flexibility of our health access plans, designed to
            provide you with peace of mind and the freedom to focus on what matters
            most.
          </p>
          
          <button className=" flex flex-row  px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600">
            See Pricing
            <img
            src="/src/assets/arrow_right_alt.svg"
            alt="indian flag"
            className='pl-2'
          />
          </button>
          
        </div>

        <div className="lg:w-1/2 relative mt-8 lg:mt-0">
        <p className=' flex items-center justify-center text-red-500 '> Download Our App:</p>
          <img
            src="/src/assets/Right Side Image.svg"
            alt="City"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
