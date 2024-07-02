import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'; 

const SearchResults = ({ searchTerm, onBack }) => {
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'YOUR_API_KEY'; 

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
        );
        setSearchResults(response.data.articles);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchTerm, apiKey]);

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <button className="mr-2" onClick={onBack}>
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold">Search Results</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {searchResults.map((article, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '250px' }}>
            <img
              src={article.urlToImage || 'https://via.placeholder.com/250x150'}
              alt={article.title}
              className="rounded-lg mb-2"
              style={{ width: '250px', height: '150px', objectFit: 'cover' }}
            />
            <p className="text-lg font-bold mb-2">{article.title}</p>
            <p className="text-sm">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read full article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults; 
