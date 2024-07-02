import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="overflow-x-auto">
          <ul className="flex justify-between space-x-4 scrollbar-none">
            <li className="nav-item flex-1">
              <Link to="/" className="nav-link hover:bg-gray-200 hover:text-gray-800">Home</Link>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">World</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Politics</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Business</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Technology</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Science</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Health</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Sports</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Arts</a>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">Style</a>
            </li>
            <li className="nav-item flex-1">
              <Link to="/favorite" className="nav-link hover:bg-gray-200 hover:text-gray-800">Favorites</Link>
            </li>
            <li className="nav-item flex-1">
              <a href="#" className="nav-link hover:bg-gray-200 hover:text-gray-800">More</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
