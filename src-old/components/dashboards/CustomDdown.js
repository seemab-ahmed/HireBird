import React, { useState } from 'react';
import { BiFlag } from 'react-icons/bi';

const CustomDdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setopen] = useState(null);

  const options = [
    { label: 'United States', flag: <BiFlag /> },
    { label: 'United Kingdom', flag: <BiFlag /> },
    { label: 'France', flag: <BiFlag /> },
    
  ];

  const handleSelect = (option) => {
    setopen(!open)
    setSelectedOption(option);
    // Add any other logic you need when an option is selected
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={()=>{setopen(!open)}}
          className="w-52 inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {selectedOption ? (
            <div className="flex items-center space-x-2">
              <span>{selectedOption.flag}</span>
              <span>{selectedOption.label}</span>
            </div>
          ) : (
            'Select a country'
          )}
        </button>
      </div>

      <div className={`origin-top-right ${open?"flex":"hidden"} justify-center absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div className="flex items-center space-x-2">
                {option.flag}
                <span>{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDdown;
