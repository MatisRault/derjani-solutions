"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Client {
  id: string;
  name: string;
  logo: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'Total Energies',
    logo: '/assets/clients/total.png'
  },
  {
    id: '2',
    name: 'Shell',
    logo: '/assets/clients/shell.png'
  },
  {
    id: '3',
    name: 'BP',
    logo: '/assets/clients/bp.png'
  },
  {
    id: '4',
    name: 'Chevron',
    logo: '/assets/clients/chevron.png'
  },
  {
    id: '5',
    name: 'ExxonMobil',
    logo: '/assets/clients/exxon.png'
  },
  {
    id: '6',
    name: 'Saudi Aramco',
    logo: '/assets/clients/aramco.png'
  },
  {
    id: '7',
    name: 'Halliburton',
    logo: '/assets/clients/halliburton.png'
  },
  {
    id: '8',
    name: 'Schlumberger',
    logo: '/assets/clients/schlumberger.png'
  }
];

const TrustBanner = () => {
  const { t } = useLanguage();
  // Dupliquer les clients pour un défilement infini
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="w-full bg-white py-16 lg:py-20 overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {t('trust.title')}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-scroll-left space-x-6 lg:space-x-8">
            {allClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 bg-gray-50 hover:bg-white rounded-xl shadow-sm hover:shadow-md p-4 lg:p-6 border border-gray-100 w-36 sm:w-44 lg:w-48 h-24 lg:h-32 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 lg:max-h-16 max-w-28 lg:max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-bordeaux-600 font-semibold text-center text-xs lg:text-sm">${client.name}</div>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;