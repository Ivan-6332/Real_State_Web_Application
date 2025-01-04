import React, { useContext } from 'react';
import { HouseContext } from '../components/HouseContext';
import House from './House';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useContext(HouseContext);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
        <img
          src="/path-to-your-image/empty-favorites.svg"
          alt="No Favorites"
          className="w-1/3 md:w-1/4 mb-6"
        />
        <p className="text-xl font-semibold text-gray-800 mb-3">
          No favorite items added yet.
        </p>
        <p className="text-gray-600 mb-6">
          Browse properties and add them to your favorites list!
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          Browse Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites-list bg-gray-50 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((house) => (
          <Link
            to={`/property/${house.id}`}
            key={house.id}
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            <House house={house} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
