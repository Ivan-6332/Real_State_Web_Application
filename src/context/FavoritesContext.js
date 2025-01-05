// Import React, createContext, and useState from the React library
import React, { createContext, useState } from 'react';

// Create a context for managing favorites
export const FavoritesContext = createContext();

// Define the FavoritesProvider component to wrap children components
export const FavoritesProvider = ({ children }) => {
  // Initialize the state to store the list of favorite items
  const [favorites, setFavorites] = useState([]);

  // Function to add an item to the favorites list
  const addToFavorites = (item) => {
    // Check if the item is not already in the favorites list
    if (!favorites.some((fav) => fav.id === item.id)) {
      // Add the item to the list by updating the state
      setFavorites([...favorites, item]);
    }
  };

  // Function to remove an item from the favorites list
  const removeFromFavorites = (id) => {
    // Filter out the item with the matching id and update the state
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  // Provide the context values and render children components
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children} {/* Render all children components inside the provider */}
    </FavoritesContext.Provider>
  );
};
