import React, { useContext } from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { HouseContext } from '../components/HouseContext';
import { Link } from 'react-router-dom';

const House = ({ house }) => {
  const { id, image, type, country, address, bedrooms, bathrooms, surface, price } = house;
  const { favorites, addToFavorites, removeFromFavorites } = useContext(HouseContext);

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-10' src={image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center gap-1'>
          <BiBed /> {bedrooms}
        </div>
        <div className='flex items-center gap-1'>
          <BiBath /> {bathrooms}
        </div>
        <div className='flex items-center gap-1'>
          <BiArea /> {surface} sqft
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>${price}</div>
      {isFavorite && (
        <button
          className={`px-4 py-2 rounded bg-red-500 text-white`}
          onClick={() => removeFromFavorites(id)}
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
};

export default House;
