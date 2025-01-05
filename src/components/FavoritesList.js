
import React, { useContext } from 'react'; // React for component creation and useContext for accessing context
import { HouseContext } from '../components/HouseContext'; // Importing the HouseContext to access favorites and related actions
import House from './House'; // Importing the House component for displaying individual house details
import { Link } from 'react-router-dom'; // Importing Link for navigation between pages, assuming react-router-dom is used

// Defining the FavoritesList component
const FavoritesList = () => {
  // Destructuring favorites and removeFromFavorites from the HouseContext
  const { favorites, removeFromFavorites } = useContext(HouseContext);

  // Checking if the favorites list is empty
  if (favorites.length === 0) {
    // Returning a message and UI for an empty favorites list
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
        {/* Displaying an image to represent an empty favorites list */}
        <img
          src="/path-to-your-image/empty-favorites.svg" 
          alt="No Favorites" 
          className="w-1/3 md:w-1/4 mb-6" // Styling for responsive design
        />
        {/* Displaying a message for no favorites */}
        <p className="text-xl font-semibold text-gray-800 mb-3">
          No favorite items added yet.
        </p>
        {/* Encouraging the user to browse properties */}
        <p className="text-gray-600 mb-6">
          Browse properties and add them to your favorites list!
        </p>
        {/* Link to navigate the user back to the property browsing page */}
        <Link
          to="/" // Navigates to the homepage or property list
          className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          Browse Properties
        </Link>
      </div>
    );
  }

  // Returning the favorites list if there are items
  return (
    <div className="favorites-list bg-gray-50 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Favorites</h2>
      {/* Grid layout for displaying favorite properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Iterating over the favorites array to display each house */}
        {favorites.map((house) => (
          <Link
            to={`/property/${house.id}`} // Dynamic route to the property details page
            key={house.id} // Using the house ID as a unique key
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105" // Styling for the card with hover effects
          >
            {/* Displaying the house details using the House component */}
            <House house={house} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// Exporting the FavoritesList component for use in other parts of the app
export default FavoritesList;
