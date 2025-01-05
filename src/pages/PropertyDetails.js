import React, { useContext, useState } from 'react';

// Import data
import { housesData } from '../data';

// Import useParams for dynamic routing
import { useParams } from 'react-router-dom';

// Import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// Import Link for navigation
import { Link } from 'react-router-dom';

// Import HouseContext for state management
import { HouseContext } from '../components/HouseContext';

const PropertyDetails = () => {
  // Get the house ID from URL parameters
  const { id } = useParams();

  // Get the house based on the ID
  const house = housesData.find((house) => house.id === parseInt(id));

  // Get favorites and functions from HouseContext
  const { favorites, addToFavorites, removeFromFavorites } = useContext(HouseContext);
  const isFavorite = favorites.some((fav) => fav.id === house.id);

  // State for toggling additional photos
  const [showMorePhotos, setShowMorePhotos] = useState(false);

  // State for toggling map view
  // This state variable is used to conditionally render the Google Map iframe
  const [showMap, setShowMap] = useState(false);

  // Toggle additional photos view
  const navigateToMorePhotos = () => {
    setShowMorePhotos(!showMorePhotos);
  };

  // Toggle map view
  // This function is used to toggle the showMap state variable
  const toggleMapView = () => {
    setShowMap(!showMap);
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto min-h-[800px] mb-14 p-6 lg:p-10 shadow-lg rounded-lg bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-indigo-800">{house.name}</h2>
            <h3 className="text-lg text-gray-600">{house.address}</h3>
            <div className="text-gray-500 mt-2">Year Built: {house.year}</div>
            <div className="text-gray-500">Contact: {house.agent.phone}</div>
          </div>
          <div className="flex gap-2">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              {house.type}
            </div>
            <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
              {house.country}
            </div>
          </div>
          <div className="text-4xl font-semibold text-indigo-700">
            $ {house.price}
          </div>
          <button
            className={`px-4 py-2 rounded shadow transition ${
              isFavorite
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
            onClick={() => {
              isFavorite ? removeFromFavorites(house.id) : addToFavorites(house);
            }}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <img
              src={house.imageLg}
              alt=""
              className="mb-6 w-full rounded-lg shadow-md"
            />
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
              onClick={navigateToMorePhotos}
            >
              View More Photos
            </button>
            {/* Button to toggle the map view */}
            <button
              className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition ml-4"
              onClick={toggleMapView}
            >
              View Location
            </button>
            {/* Conditional rendering of the Google Map iframe */}
            {/* This iframe is rendered only when the showMap state variable is true */}
            {showMap && (
              <div className="mt-6 w-full h-64 rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  // Embed Google Maps with the provided API key and property address
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyASqLY1bcJbiJz_3k-KMlVbUWzdAid4Nmk&q=${encodeURIComponent(house.address)}`}
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {showMorePhotos && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                {house.additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Additional ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                ))}
                <img
                  src={house.blueprint}
                  alt="Blueprint"
                  className="rounded-lg shadow-md"
                />
              </div>
            )}
            <div className="flex gap-x-6 text-indigo-700 mt-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-4xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-4xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-4xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6">{house.description}</p>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 border border-gray-200 rounded-full overflow-hidden">
                <img src={house.agent.image} alt="" />
              </div>
              <div className="font-bold text-lg text-gray-700">
                {house.agent.name}
              </div>
              <Link
                to=""
                className="text-indigo-600 text-sm hover:underline"
              >
                View Listings
              </Link>
            </div>
            <form>
              <input
                className="border border-gray-300 focus:ring focus:ring-indigo-200 px-4 py-2 mb-4 w-full rounded"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="border border-gray-300 focus:ring focus:ring-indigo-200 px-4 py-2 mb-4 w-full rounded"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="border border-gray-300 focus:ring focus:ring-indigo-200 px-4 py-2 mb-4 w-full rounded"
                type="text"
                placeholder="Enter your phone number"
              />
              <textarea
                className="border border-gray-300 focus:ring focus:ring-indigo-200 px-4 py-2 mb-4 w-full rounded"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
              <div className="flex gap-4">
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded shadow-md hover:bg-indigo-700 transition"
                  type="button"
                >
                  Send Message
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-400 transition"
                  type="button"
                >
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
