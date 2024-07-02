// src/components/TrendingNews/TrendingNews.Component.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingNews = () => {
  const [news, setNews] = useState([]);
  const apiKey = '1df2fef6d8ef48d59d62d20331a20373';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
        setNews(response.data.articles.slice(0, 4)); // Limiting to 4 articles
      } catch (error) {
        console.error('Error fetching trending news:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className="flex justify-center gap-4">
      {/* Main News Card (50% width) */}
      {news.length > 0 && (
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '50%' }}>
          <img
            src={news[0].urlToImage || 'https://via.placeholder.com/400x400'}
            alt={news[0].title}
            className="rounded-lg border border-gray-200 shadow-sm mb-4"
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
          <h3 className="text-lg font-bold mb-2">{news[0].title}</h3>
        </div>
      )}

      {/* Small News Cards (25% width each) */}
      <div className="flex flex-col gap-4" style={{ width: '50%' }}>
        {news.slice(1, 4).map((article, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '100%' }}>
            <div className="flex items-center gap-4">
              <img
                src={article.urlToImage || 'https://via.placeholder.com/250x150'}
                alt={article.title}
                className="rounded-lg border border-gray-200 shadow-sm"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div>
                <h3 className="text-base font-bold mb-2">{article.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
