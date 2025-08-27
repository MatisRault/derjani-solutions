"use client";

import React from 'react';
import { useContactModal } from '@/contexts/ContactModalContext';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection2 = () => {
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();
  
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Contenu à gauche (inversé sur desktop) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
              {t('about2.title')}
            </h2>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {t('about2.text1')}
              </p>
              
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {t('about2.text2')}
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={openContactModal}
                className="inline-flex items-center gap-3 bg-bordeaux-500 hover:bg-bordeaux-600 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span className="text-sm lg:text-base">{t('about2.cta')}</span>
                <svg 
                  className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" 
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

          {/* Image à droite (inversée sur desktop) */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/assets/services/energie.jpg"
                alt={t('about2.title')}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%236b0e0e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='white'%3EImage à venir%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;