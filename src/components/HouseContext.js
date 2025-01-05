// Importing necessary React modules and functions
import React, { useState, useEffect, createContext } from 'react'; // useState and useEffect for state management and side effects, createContext for creating a context

// Importing the houses data
import { housesData } from '../data'; // Sample data for houses

// Creating a context for houses
export const HouseContext = createContext(); // Context for managing house-related state and actions

// Defining the HouseContextProvider component
const HouseContextProvider = ({ children }) => {
  // State for managing the list of houses
  const [houses, setHouses] = useState(housesData); 
  // State for managing the list of favorite houses
  const [favorites, setFavorites] = useState([]); 
  // State for managing selected country
  const [country, setCountry] = useState('Location (any)'); 
  // State for managing available countries
  const [countries, setCountries] = useState([]); 
  // State for managing selected property type
  const [property, setProperty] = useState('Property type (any)'); 
  // State for managing available property types
  const [properties, setProperties] = useState([]); 
  // State for managing selected price range
  const [price, setPrice] = useState('Price range (any)'); 
  // State for managing loading state during filtering
  const [loading, setLoading] = useState(false); 

  // Function to add a house to the favorites list
  const addToFavorites = (house) => {
    if (!favorites.some((fav) => fav.id === house.id)) { // Check if the house is not already in favorites
      setFavorites((prevFavorites) => [...prevFavorites, house]); // Add the house to favorites
    }
  };

  // Function to remove a house from the favorites list
  const removeFromFavorites = (houseId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== houseId) // Remove the house with the given ID from favorites
    );
  };

  // Effect to populate the list of unique countries from the houses data
  useEffect(() => {
    const allCountries = houses.map((house) => house.country); // Get all countries from houses
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]; // Create a unique list of countries
    setCountries(uniqueCountries); // Update the countries state
  }, [houses]); // Dependency array ensures effect runs when houses change

  // Effect to populate the list of unique property types from the houses data
  useEffect(() => {
    const allProperties = houses.map((house) => house.type); // Get all property types from houses
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]; // Create a unique list of property types
    setProperties(uniqueProperties); // Update the properties state
  }, [houses]); // Dependency array ensures effect runs when houses change

  // Function to handle filtering based on selected criteria
  const handleClick = () => {
    setLoading(true); // Set loading state to true
    const isDefault = (str) => str.split(' ').includes('(any)'); // Function to check if a criteria is default
    const minPrice = parseInt(price.split(' ')[0]); // Extract minimum price from the selected price range
    const maxPrice = parseInt(price.split(' ')[2]); // Extract maximum price from the selected price range

    // Filter the houses data based on selected criteria
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price); // Parse the price of the house
      if (
        house.country === country && // Match country
        house.type === property && // Match property type
        housePrice >= minPrice && // Match minimum price
        housePrice <= maxPrice // Match maximum price
      ) {
        return house; // Return house if all conditions match
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house; // Return all houses if all criteria are default
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country; // Filter by country only
      }
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property; // Filter by property type only
      }
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house; // Filter by price range only
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property; // Filter by country and property type
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country; // Filter by country and price range
        }
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property; // Filter by property type and price range
        }
      }
    });

    // Update houses state after a delay to simulate loading
    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses); // Set houses to filtered results or empty array if no matches
      setLoading(false); // Set loading state to false
    }, 1000); // 1-second delay
  };

  // Providing the context values to children components
  return (
    <HouseContext.Provider
      value={{
        country, 
        setCountry, 
        countries, 
        property, 
        setProperty, 
        properties, 
        price, 
        setPrice, 
        houses, 
        favorites, 
        addToFavorites, 
        removeFromFavorites, 
        loading, // Loading state
        handleClick, // Function to handle filtering
      }}
    >
      {children} 
    </HouseContext.Provider>
  );
};

// Exporting the context provider for use in the application
export default HouseContextProvider;
