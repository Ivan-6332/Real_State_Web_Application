import React, { useContext } from 'react';
import { HouseContext } from '../components/HouseContext';
import House from './House';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useContext(HouseContext);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <img src="/path-to-your-image/empty-favorites.svg" alt="No Favorites" className="w-1/2 mb-4" />
        <p className="text-lg font-semibold mb-2">No favorite items added yet.</p>
        <p className="text-gray-500">Browse properties and add them to your favorites list!</p>
      </div>
    );
  }

  return (
    <div className="favorites-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <h2 className="text-2xl font-bold mb-4 col-span-full">Your Favorites</h2>
      {favorites.map((house) => (
        <Link to={`/property/${house.id}`} key={house.id} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <House house={house} />
        </Link>
      ))}
    </div>
  );
};

export default FavoritesList;
