import React from 'react';

//import image
import Image from '../assets/img/house-banner.jpg';

//import components
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-gray-800">
            <span className="text-violet-700"> Find </span>Your Imagination With Us.
          </h1>
          <p className="max-w-[480px] mb-8 text-gray-600">
            Discover a wide range of properties tailored to your needs. From cozy apartments to luxurious homes, we help you find your dream space with ease.
          </p>
        </div>
        {/* Image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img
            src={Image}
            alt="House Banner"
            className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
