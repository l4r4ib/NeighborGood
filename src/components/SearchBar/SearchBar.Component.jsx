import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Searchbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm); // Pass the searchTerm to the onSubmit function from props
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-0 md:self-start">
            neighbour<span className="text-rose-500">Good.</span>
          </div>
          <form className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0 md:ml-auto" onSubmit={handleSearchSubmit}>
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border rounded-full shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Search for news..."
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 text-gray-600 hover:text-gray-800">
                <MagnifyingGlassIcon className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-gradient-to-r from-gray-100 to-white text-gray-800 font-semibold py-1 px-2 md:py-2 md:px-4 rounded-full transition-all duration-500 hover:bg-gray-200">
                Login
              </button>
              <button className="bg-gradient-to-l from-gray-100 to-white text-gray-800 font-semibold py-1 px-2 md:py-2 md:px-4 rounded-full transition-all duration-500 hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Searchbar;
