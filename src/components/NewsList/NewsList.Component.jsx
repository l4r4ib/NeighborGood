import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import Modal from '../Modal/Modal.Component';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchIndiaNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=1df2fef6d8ef48d59d62d20331a20373'
        );
        setNews(response.data.articles.slice(5, 25)); // Limiting to max 20 news articles starting from index 5
      } catch (error) {
        console.error('Error fetching India news:', error);
      }
    };

    fetchIndiaNews();
  }, []);

  const toggleFavorite = (article) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(fav => fav.title === article.title);

    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.title !== article.title);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(article);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setNews(prevNews =>
      prevNews.map(newsArticle =>
        newsArticle.title === article.title ? { ...newsArticle, isFavorite: !isFavorite } : newsArticle
      )
    );
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setModalIsOpen(false);
  };

  return (
    <div className="mt-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {news.map((article, index) => (
            <div key={index} className="card bg-white shadow-md rounded-lg p-4 mb-4 relative" style={{ width: '250px' }}>
              <img
                src={article.urlToImage || 'https://via.placeholder.com/250x150'}
                alt={article.title}
                className="rounded-lg mb-2"
                style={{ width: '250px', height: '150px', objectFit: 'cover' }}
              />
              <p className="text-lg font-bold mb-2">{article.title}</p>
              <p className="text-sm">{article.description}</p>
              <button
                className="absolute top-4 right-4 bg-white p-1 rounded-full"
                onClick={() => toggleFavorite(article)}
              >
                {article.isFavorite ? (
                  <SolidHeartIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <OutlineHeartIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => openModal(article)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {selectedArticle && (
          <Modal isOpen={modalIsOpen} onClose={closeModal} article={selectedArticle} />
        )}
      </div>
    </div>
  );
};

export default NewsList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
// import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
// import Modal from '../Modal/Modal.Component';

// const NewsList = () => {
//   const [news, setNews] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const apiKey = '1df2fef6d8ef48d59d62d20331a20373';

//   useEffect(() => {
//     const fetchIndiaNews = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
//         );
//         const filteredNews = response.data.articles.filter((article, index) => index >= 5 && index < 25);
//         setNews(filteredNews);
//       } catch (error) {
//         console.error('Error fetching India news:', error);
//       }
//     };

//     fetchIndiaNews();
//   }, [apiKey]);

//   const toggleFavorite = (article) => {
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     const isFavorite = favorites.some(fav => fav.title === article.title);

//     if (isFavorite) {
//       const updatedFavorites = favorites.filter(fav => fav.title !== article.title);
//       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     } else {
//       favorites.push(article);
//       localStorage.setItem('favorites', JSON.stringify(favorites));
//     }

//     setNews(prevNews =>
//       prevNews.map(newsArticle =>
//         newsArticle.title === article.title ? { ...newsArticle, isFavorite: !isFavorite } : newsArticle
//       )
//     );
//   };

//   const openModal = (article) => {
//     setSelectedArticle(article);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedArticle(null);
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-8">
//       {news.map((article, index) => (
//         <div key={index} className="card bg-white shadow-md rounded-lg p-4 mb-4 relative" style={{ width: '250px' }}>
//           <img
//             src={article.urlToImage || 'https://via.placeholder.com/250x150'}
//             alt={article.title}
//             className="rounded-lg mb-2"
//             style={{ width: '250px', height: '150px', objectFit: 'cover' }}
//           />
//           <p className="text-lg font-bold mb-2">{article.title}</p>
//           <p className="text-sm">{article.description}</p>
//           <button
//             className="absolute top-4 right-4 bg-white p-1 rounded-full"
//             onClick={() => toggleFavorite(article)}
//           >
//             {article.isFavorite ? (
//               <SolidHeartIcon className="h-6 w-6 text-red-500" />
//             ) : (
//               <OutlineHeartIcon className="h-6 w-6 text-gray-400" />
//             )}
//           </button>
//           <button
//             className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
//             onClick={() => openModal(article)}
//           >
//             Read More
//           </button>
//         </div>
//       ))}
//       {selectedArticle && (
//         <Modal isOpen={modalIsOpen} onClose={closeModal} article={selectedArticle} />
//       )}
//     </div>
//   );
// };

// export default NewsList;
