import React, { useContext, useState } from 'react';

//import data
import { housesData } from '../data';

//import use params
import { useParams } from 'react-router-dom';

//import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

//import link
import { Link } from 'react-router-dom';

//import HouseContext
import { HouseContext } from '../components/HouseContext';

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();

  //get the house based on the id
  const house = housesData.find(house => {
    return house.id === parseInt(id);
  });

  //get favorites from HouseContext
  const { favorites, addToFavorites, removeFromFavorites } = useContext(HouseContext);
  const isFavorite = favorites.some((fav) => fav.id === house.id);

  const [showMorePhotos, setShowMorePhotos] = useState(false);

  const navigateToMorePhotos = (houseId) => {
    setShowMorePhotos(!showMorePhotos);
  };

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
            <div className='text-lg mb-4'>Year Built: {house.year}</div>
            <div className='text-lg mb-4'>Contact: {house.agent.phone}</div>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>$ {house.price}</div>
          <button
            className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
            onClick={() => {
              isFavorite ? removeFromFavorites(house.id) : addToFavorites(house);
            }}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
        <div className='flex flex-col item-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded mb-8'
              onClick={() => navigateToMorePhotos(house.id)}
            >
              View More Photos
            </button>
            {showMorePhotos && (
              <div className='additional-photos'>
                {house.additionalImages.map((image, index) => (
                  <img key={index} src={image} alt={`Additional ${index + 1}`} className='mb-4' />
                ))}
                <img src={house.blueprint} alt='Blueprint' className='mb-4' />
              </div>
            )}
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-4xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-4xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-4xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <Link to='' className='text-violet-700 text-sm'> View Listings</Link>
            </div>
            <form>
              <input 
                className='border border-gray-300 focus:border-violet-700 px-4 py-2 mb-4 w-full rounded' 
                type="text" 
                placeholder="Enter your name" 
              />
              <input 
                className='border border-gray-300 focus:border-violet-700 px-4 py-2 mb-4 w-full rounded' 
                type="text" 
                placeholder="Enter your email" 
              />
              <input 
                className='border border-gray-300 focus:border-violet-700 px-4 py-2 mb-4 w-full rounded' 
                type="text" 
                placeholder="Enter your phone number" 
              />
              <textarea 
                className='border border-gray-300 focus:border-violet-700 px-4 py-2 mb-4 w-full rounded' 
                rows="4" 
                placeholder="Enter your message"></textarea>
              <div className='flex gap-x-4'>
                <button 
                  className='bg-violet-700 text-white px-4 py-2 rounded' 
                  type="button">
                  Send message
                </button>
                <button 
                  className='bg-gray-300 text-black px-4 py-2 rounded' 
                  type="button">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
