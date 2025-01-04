import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const House = ({ house }) => {
  const { id, image, type, country, address, bedrooms, bathrooms, surface, price, blueprint } = house;

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg p-6 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105">
      <img
        className="mb-6 rounded-lg object-cover h-[200px] w-full hover:opacity-90 transition-opacity"
        src={image}
        alt="Property"
      />
      {blueprint && (
        <div className="flex items-center justify-center mb-6">
          <Link
            to={`/property/${id}`}
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Blueprint Available
          </Link>
        </div>
      )}
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3 py-1 shadow">
          {type}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-3 py-1 shadow">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] text-gray-800 truncate">{address}</div>
      <div className="flex gap-x-4 my-4 text-gray-600">
        <div className="flex items-center gap-1">
          <BiBed className="text-violet-500" /> {bedrooms}
        </div>
        <div className="flex items-center gap-1">
          <BiBath className="text-violet-500" /> {bathrooms}
        </div>
        <div className="flex items-center gap-1">
          <BiArea className="text-violet-500" /> {surface} sqft
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4">${price}</div>
    </div>
  );
};

export default House;
