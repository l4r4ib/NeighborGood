import React, { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Favorite News Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favorites.map((article, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg p-4">
            <img
              src={article.urlToImage || 'https://via.placeholder.com/250x150'}
              alt={article.title}
              className="rounded-lg mb-2"
              style={{ width: '250px', height: '150px', objectFit: 'cover' }}
            />
            <p className="text-lg font-bold mb-2">{article.title}</p>
            <p className="text-sm">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
