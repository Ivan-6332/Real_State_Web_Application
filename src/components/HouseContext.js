import React, { useState, useEffect, createContext } from 'react';

// Import data
import { housesData } from '../data';

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
      
    });

    //remove duplicate countries
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    //set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
      
    });

    //remove duplicate properties
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)];

    //set properties state
    setProperties(uniqueProperties);
  }, []);

  // Ensure the context provider wraps the children properly
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
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
