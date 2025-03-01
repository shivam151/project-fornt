import React from 'react';

const PlanWork = () => {
  return (
    <div className='md:p-16 sm:p-2'>
    <div className="relative bg-white px-6 py-10 md:px-12 lg:px-20">
  <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
    How Does The <span className="text-pink-500">Essentials</span> Plan Work?
  </h2>

  <div className="flex flex-col lg:flex-row items-stretch gap-8 ">
    <div className="bg-pink-100 p-6 rounded-lg flex-1 ">
      <p className="text-pink-500 font-medium mb-4 text-2xl pt-7">Traveller Health</p>
      <img
          src="/src/assets/Scribbled-Right-Arrow-SVG.svg"
          alt="Snow adventure"
          className="  p-2 ml-10"
        />
      <div className="mb-4 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Traveler Essentials</h3>
        <div className="flex items-center space-x-3">
          <img src="/src/assets/Vector.svg" alt="Logo" className="h-10" />
          <img src="/src/assets/OAK Tetx.svg" alt="Healthcare" className="h-10" />
        </div>
      </div>
      <p className="text-lg md:text-6xl font-medium text-gray-800 pt-10 p-4">
        Our <span className="text-pink-500 font-semibold">easy-to-navigate</span> coverage options are{" "}
        <span className="text-pink-500 font-semibold">carefully</span> crafted for your peace of mind.
      </p>
    </div>

    <div className="flex-1 grid grid-rows-2 gap-6">
      <div className="rounded-lg overflow-hidden">
        <img
          src="/src/assets/Mountain Hiking.svg"
          alt="Snow adventure"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="/src/assets/Mountain Hiking.svg"
          alt="Snow adventure"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="/src/assets/Mountain Hiking.svg"
          alt="Hiking adventure"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>

 
</div>
</div>

  );
};

export default PlanWork;
