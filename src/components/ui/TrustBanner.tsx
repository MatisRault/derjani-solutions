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
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bordeaux-600 mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-left space-x-8">
            {allClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 border border-gray-200 w-48 h-32 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-32 object-contain filter grayscale"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-bordeaux-600 font-semibold text-center">${client.name}</div>`;
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