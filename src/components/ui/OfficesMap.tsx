"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

// Import dynamique pour éviter les problèmes SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface Office {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  description: string;
  flag: string;
}

const OfficesMap = () => {
  const { t } = useLanguage();
  
  const offices: Office[] = [
    {
      id: 'beirut',
      name: t('offices.beirut.name'),
      country: t('offices.beirut.country'),
      coordinates: [33.8938, 35.5018],
      description: t('offices.beirut.description'),
      flag: '🇱🇧'
    },
    {
      id: 'abu-dhabi',
      name: t('offices.abudhabi.name'),
      country: t('offices.abudhabi.country'),
      coordinates: [24.4539, 54.3773],
      description: t('offices.abudhabi.description'),
      flag: '🇦🇪'
    },
    {
      id: 'dubai',
      name: t('offices.dubai.name'),
      country: t('offices.dubai.country'),
      coordinates: [25.2048, 55.2708],
      description: t('offices.dubai.description'),
      flag: '🇦🇪'
    },
    {
      id: 'iraq',
      name: t('offices.baghdad.name'),
      country: t('offices.baghdad.country'),
      coordinates: [33.3152, 44.3661],
      description: t('offices.baghdad.description'),
      flag: '🇮🇶'
    },
    {
      id: 'afghanistan',
      name: t('offices.kabul.name'),
      country: t('offices.kabul.country'),
      coordinates: [34.5553, 69.2075],
      description: t('offices.kabul.description'),
      flag: '🇦🇫'
    },
    {
      id: 'tunisia',
      name: t('offices.tunis.name'),
      country: t('offices.tunis.country'),
      coordinates: [36.8065, 10.1815],
      description: t('offices.tunis.description'),
      flag: '🇹🇳'
    },
    {
      id: 'kuwait',
      name: t('offices.kuwait.name'),
      country: t('offices.kuwait.country'),
      coordinates: [29.3759, 47.9774],
      description: t('offices.kuwait.description'),
      flag: '🇰🇼'
    },
    {
      id: 'south-sudan',
      name: t('offices.juba.name'),
      country: t('offices.juba.country'),
      coordinates: [4.8594, 31.5713],
      description: t('offices.juba.description'),
      flag: '🇸🇸'
    },
    {
      id: 'nigeria',
      name: t('offices.lagos.name'),
      country: t('offices.lagos.country'),
      coordinates: [6.5244, 3.3792],
      description: t('offices.lagos.description'),
      flag: '🇳🇬'
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState<Office>(offices[0]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([25.0, 35.0]); // Centre approximatif
  const [mapRef, setMapRef] = useState<any>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);

  // Créer l'icône personnalisée côté client uniquement
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const icon = L.default.icon({
          iconUrl: '/assets/marker.svg',
          iconSize: [30, 40], // taille de l'icône
          iconAnchor: [15, 40], // point d'ancrage de l'icône (au bas du marker)
          popupAnchor: [0, -40], // point d'ancrage du popup par rapport à l'icône
        });
        setCustomIcon(icon);
      });
    }
  }, []);

  const handleOfficeClick = (office: Office) => {
    setSelectedOffice(office);
    if (mapRef) {
      mapRef.flyTo(office.coordinates, 8, {
        duration: 1.5
      });
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bordeaux-600 mb-4">
            {t('offices.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('offices.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          
          {/* Liste des bureaux */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6 overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('offices.select')}</h3>
            <div className="space-y-3">
              {offices.map((office) => (
                <div
                  key={office.id}
                  onClick={() => handleOfficeClick(office)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                    selectedOffice.id === office.id
                      ? 'border-bordeaux-500 bg-bordeaux-50 shadow-md'
                      : 'border-gray-200 hover:border-bordeaux-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{office.flag}</span>
                        <span className={`font-semibold ${
                          selectedOffice.id === office.id ? 'text-bordeaux-700' : 'text-gray-800'
                        }`}>
                          {office.name}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{office.country}</div>
                      <div className="text-xs text-gray-500 mt-1">{office.description}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      selectedOffice.id === office.id ? 'bg-bordeaux-500' : 'bg-gray-300'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carte */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <MapContainer
              center={mapCenter}
              zoom={4}
              className="h-full w-full"
              ref={setMapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {offices.map((office) => (
                <Marker
                  key={office.id}
                  position={office.coordinates}
                  icon={customIcon || undefined}
                  eventHandlers={{
                    click: () => handleOfficeClick(office),
                  }}
                >
                  <Popup>
                    <div className="text-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{office.flag}</span>
                        <strong>{office.name}</strong>
                      </div>
                      <div className="text-sm text-gray-600">{office.country}</div>
                      <div className="text-xs text-gray-500 mt-1">{office.description}</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Informations du bureau sélectionné */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">{selectedOffice.flag}</span>
            <div>
              <h3 className="text-2xl font-bold text-bordeaux-600">{selectedOffice.name}</h3>
              <p className="text-gray-600">{selectedOffice.country}</p>
            </div>
          </div>
          <p className="text-gray-700">{selectedOffice.description}</p>
        </div>
      </div>
    </section>
  );
};

export default OfficesMap;