// Import React and hooks: useState, useEffect, useContext
import React, { useState, useEffect, useContext } from 'react';

// Import icons from react-icons library
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// Import Menu component from headless UI
import { Menu } from '@headlessui/react';

// Import HouseContext to manage shared state
import { HouseContext } from './HouseContext';

// Define the PropertyDropdown component
const PropertyDropdown = () => {
  // Destructure property, setProperty, and properties from HouseContext
  const { property, setProperty, properties } = useContext(HouseContext);
  
  // Define state for toggling dropdown open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Return the dropdown component
  return (
    // Use Menu component as a container for the dropdown
    <Menu as='div' className='dropdown relative'>
      {/* Button to toggle the dropdown */}
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)} 
        className='dropdown-btn w-full text-left'
      >
        {/* Icon to represent property */}
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          {/* Display the current selected property */}
          <div className='[text-15px] font-medium leading-tight'>{property}</div>
          {/* Prompt text */}
          <div className='text-[13px]'> Select Your Place </div>
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
        {/* Map through properties array to render each property as a menu item */}
        {properties.map((property, index) => {
          return (
            // provide each property as a clickable item
            <Menu.Item 
              onClick={() => setProperty(property)} // Update selected property on click
              className='cursor-pointer hover:text-violet-700 transition' 
              as='li' 
              key={index} // Use index as the key for each item
            >
              {property} {/* Display the property name */}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

// Export the PropertyDropdown component as default
export default PropertyDropdown;
