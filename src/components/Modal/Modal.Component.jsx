import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Modal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 h-5/6 overflow-y-auto mx-auto relative max-w-6xl">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <img
          src={article.urlToImage || 'https://via.placeholder.com/400x300'}
          alt={article.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Published at: {new Date(article.publishedAt).toLocaleString()}
        </p>
        {article.author && (
          <p className="text-sm text-gray-500 mb-4">Author: {article.author}</p>
        )}
        <div className="article-content space-y-4">
          {article.content ? (
            article.content.split('[+]').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))
          ) : (
            <p>{article.description}</p>
          )}
        </div>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Read full article
        </a>
      </div>
    </div>
  );
};

export default Modal;
