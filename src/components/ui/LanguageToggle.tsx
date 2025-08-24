"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'fr' 
            ? 'bg-bordeaux-500 text-white shadow-sm' 
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'en' 
            ? 'bg-bordeaux-500 text-white shadow-sm' 
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;