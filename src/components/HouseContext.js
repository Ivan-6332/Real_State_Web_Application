import React, { useState, useEffect, createContext } from 'react';

// Import data
import { housesData } from '../data';

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [favorites, setFavorites] = useState([]); // New state for favorites
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // Add house to favorites
  const addToFavorites = (house) => {
    if (!favorites.some((fav) => fav.id === house.id)) {
      setFavorites([...favorites, house]);
    }
  };

  // Remove house from favorites
  const removeFromFavorites = (houseId) => {
    setFavorites(favorites.filter((fav) => fav.id !== houseId));
  };

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => str.split(' ').includes('(any)');
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return newHouses.length < 1
        ? setHouses([])
        : setHouses(newHouses),
        setLoading(false);
    }, 1000);
  };

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
        favorites, // Expose favorites state
        addToFavorites, // Expose add function
        removeFromFavorites, // Expose remove function
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
