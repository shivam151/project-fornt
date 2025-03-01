import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8">
        <div className='md:pl-16 pr-16 sm:p-2 '>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">Essentials</h2>
          
           <div className='flex p-2 space-x-2'>
          <img
            src="/src/assets/Oak-Healthcae.svg"
            alt="Google Play"
            className="h-10"
          />
          <img
            src="/src/assets/OAK Tetx-white.svg"
            alt="App Store"
            className="h-10"
          />
        </div>
          <p className="text-sm mb-4">
            To make the impossible aspects of healthcare affordable.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
  <h2 className="text-lg font-bold mb-4">Our Subsidiaries</h2>
  <ul className="space-y-2 text-sm">
    <div className='flex'>
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <li>
        <a
          href="#"
          className="hover:text-pink-500 "
        >
          OAK Healthcare International
        </a>
      </li>
    </div>
    <div className='flex'>
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <li>
        <a
          href="#"
          className="hover:text-pink-500"
        >
          OAK Healthcare Brokerage
        </a>
      </li>
    </div>
    <div className='flex'>
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <li>
        <a
          href="#"
          className="hover:text-pink-500"
        >
          OAK Healthcare Technology
        </a>
      </li>
    </div>
  </ul>
</div>


<div>
  <h2 className="text-lg font-bold mb-4">Company</h2>
  <ul className="space-y-2 text-sm">
    <li className="flex items-center">
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <a href="#" className="hover:text-pink-500">
        Home
      </a>
    </li>
    <li className="flex items-center">
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <a href="#" className="hover:text-pink-500">
        About Us
      </a>
    </li>
    <li className="flex items-center">
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <a href="#" className="hover:text-pink-500">
        Services
      </a>
    </li>
    <li className="flex items-center">
      <img
        src="/src/assets/chevron_right.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <a href="#" className="hover:text-pink-500">
        Our Locations
      </a>
    </li>
  </ul>
</div>


<div>
  <h2 className="text-lg font-bold mb-4">Contact Us</h2>
  <ul className="space-y-2 text-sm">
    <li className="flex items-center">
      <img
        src="/src/assets/location_on.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <i className="fas fa-map-marker-alt mr-2"></i>
      OAK Healthcare Solutions, 11550 S 700 E, Draper, Utah, 84020
    </li>
    <li className="flex items-center">
      <img
        src="/src/assets/forward_to_inbox.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <i className="fas fa-envelope mr-2"></i>
      <a
        href="mailto:emailus@oakhealthcare.io"
        className="hover:text-pink-500"
      >
        emailus@oakhealthcare.io
      </a>
    </li>
    <li className="flex items-center">
      <img
        src="/src/assets/phone_in_talk.svg"
        alt="arrow Play"
        className="mr-2"
      />
      <i className="fas fa-phone mr-2"></i>
      <a href="tel:+13177652779" className="hover:text-pink-500">
        +1 317-765-2799
      </a>
    </li>
  </ul>
</div>


      </div>
      </div>
      <div className="bg-pink-500 text-center py-4 text-sm mt-8  ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>© 2024 OAK Healthcare, INC. All Right Reserved.</span>
          <div className="space-x-4">
            <a
              href="#"
              className="hover:text-white"
            >
              Terms and Conditions
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
