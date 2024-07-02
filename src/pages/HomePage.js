import React, { useState } from 'react';
import Searchbar from '../components/SearchBar/SearchBar.Component';
import NewsList from '../components/NewsList/NewsList.Component';
import TrendingNews from '../components/TrendingNews/TrendingNews.Component';
import SearchResults from '../components/SearchResult/SearchResult.Component';
import Navbar from '../components/NavBar/Navbar.Component';
import ExchangeRate from '../components/ExchangeRateTracker/ExchangeRateTracker.Component'
const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShowSearchResults(true);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {!showSearchResults && (
        <>
      <ExchangeRate/>

        <TrendingNews />
        <Navbar/>
        <NewsList />
        
        </>
        
      )}
      {showSearchResults && <SearchResults searchTerm={searchTerm} />}
    </div>
  );
};

export default Homepage;
