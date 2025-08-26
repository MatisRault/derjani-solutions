"use client";

import React from 'react';
import { useContactModal } from '@/contexts/ContactModalContext';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection2 = () => {
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();
  
  return (
    <section className="w-full bg-white py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu à gauche */}
          <div className="space-y-6 flex-1">
            <h2 className="text-4xl font-bold text-bordeaux-600">
              {t('about2.title')}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about2.text1')}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about2.text2')}
            </p>

            <div className="pt-4">
              <button className="bg-bordeaux-500 hover:bg-bordeaux-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2">
                {t('about2.cta')}
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image à droite */}
          <div className="relative flex-1">
            <img
              src="/assets/services/energie.jpg"
              alt={t('about2.title')}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              onError={(e) => {
                // Fallback si l'image n'existe pas
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3EImage à venir%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;