// Import React and hooks: useState, useEffect, useContext
import React, { useState, useEffect, useContext } from 'react';

// Import icons from react-icons library
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// Import Menu component from headless UI
import { Menu } from '@headlessui/react';

// Import HouseContext to manage shared state
import { HouseContext } from './HouseContext';

// Define the PriceRangeDropdown component
const PriceRangeDropdown = () => {
  // Destructure price and setPrice from HouseContext
  const { price, setPrice } = useContext(HouseContext);

  // Define state for toggling dropdown open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Define an array of price ranges for the dropdown
  const prices = [
    { value: 'Price range (any)' }, 
    { value: '100000 - 130000' },  
    { value: '130000 - 160000' },   
    { value: '160000 - 190000' },   
    { value: '190000 - 220000' },   
    { value: '10000 - 30000' },     
    { value: '30000 - 40000' },     
  ];

  // Return the dropdown component
  return (
    // Use Menu component as a container for the dropdown
    <Menu as='div' className='dropdown relative'>
      {/* Button to toggle the dropdown */}
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)} 
        className='dropdown-btn w-full text-left'
      >
        {/* Icon to represent price */}
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          {/* Display the current selected price */}
          <div className='[text-15px] font-medium leading-tight'>{price}</div>
          {/* Prompt text */}
          <div className='text-[13px]'> Choose Price range </div>
        </div>
        {/* Toggle arrow icon based on isOpen state */}
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      {/* Dropdown menu items */}
      <Menu.Items className='dropdown-menu absolute bottom-full mb-2 bg-gradient-to-b from-gray-100 to-gray-300'>
        {/* Map through prices array to render each price range as a menu item */}
        {prices.map((price, index) => {
          return (
            // give each price range as a clickable item
            <Menu.Item 
              onClick={() => setPrice(price.value)} // Update selected price on click
              className='cursor-pointer hover:text-violet-700 transition' 
              as='li' 
              key={index} // Use index as the key for each item
            >
              {price.value} {/* Display the price range */}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

// Export the PriceRangeDropdown component as default
export default PriceRangeDropdown;
