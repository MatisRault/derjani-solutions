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
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileList, setShowMobileList] = useState(false);
  
  // Détecter si on est sur mobile
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
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

  // Initialiser avec un bureau par défaut sûr
  const [selectedOffice, setSelectedOffice] = useState<Office>({
    id: 'beirut',
    name: 'Beirut',
    country: 'Lebanon', 
    coordinates: [33.8938, 35.5018],
    description: 'Headquarters',
    flag: '🇱🇧'
  });
  const [mapCenter, setMapCenter] = useState<[number, number]>([25.0, 35.0]); // Centre approximatif
  const [mapRef, setMapRef] = useState<any>(null);
  const [mobileMapRef, setMobileMapRef] = useState<any>(null);
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
  
  // Réagir aux changements de bureau sélectionné - version safe
  React.useEffect(() => {
    if ((mapRef || mobileMapRef) && selectedOffice?.coordinates) {
      try {
        const [lat, lng] = selectedOffice.coordinates;
        if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
          // Utiliser la bonne carte selon la taille d'écran
          const currentMapRef = window.innerWidth < 1024 ? mobileMapRef : mapRef;
          
          setTimeout(() => {
            if (currentMapRef && currentMapRef.flyTo) {
              console.log('useEffect flyTo vers:', selectedOffice.name, [lat, lng], 'sur', window.innerWidth < 1024 ? 'mobile' : 'desktop');
              currentMapRef.flyTo([lat, lng], 10, { duration: 2 });
            }
          }, 300); // Délai plus long pour être sûr
        }
      } catch (error) {
        console.log('Erreur flyTo ignorée:', error);
      }
    }
  }, [selectedOffice?.id, mapRef, mobileMapRef]); // Inclure les deux mapRef
  
  // FlyTo initial vers Beirut quand la carte mobile se charge
  React.useEffect(() => {
    if (mobileMapRef && selectedOffice?.coordinates) {
      setTimeout(() => {
        const [lat, lng] = selectedOffice.coordinates;
        if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
          console.log('Initial mobile flyTo vers:', selectedOffice.name);
          mobileMapRef.flyTo([lat, lng], 10, { duration: 2 });
        }
      }, 1000); // Délai plus long pour le chargement initial
    }
  }, [mobileMapRef]); // Se déclenche quand la carte mobile est prête

  const handleOfficeClick = (office: Office) => {
    setSelectedOffice(office);
    
    // FlyTo sur la bonne carte selon le contexte
    const currentMapRef = window.innerWidth < 1024 ? mobileMapRef : mapRef;
    
    if (currentMapRef && currentMapRef.flyTo) {
      try {
        console.log('FlyTo vers:', office.name, office.coordinates, 'sur', window.innerWidth < 1024 ? 'mobile' : 'desktop');
        currentMapRef.flyTo(office.coordinates, 10, { duration: 2 });
      } catch (error) {
        console.log('Erreur flyTo:', error);
      }
    }
  };

  // Version simplifiée : on affiche toujours les deux versions et on utilise les classes responsive
  return (
    <section className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-32 xl:px-40 2xl:px-48">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('offices.title')}
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            {t('offices.subtitle')}
          </p>
        </div>

        {/* VERSION MOBILE - visible seulement sur mobile */}
        <div className="lg:hidden">
          {/* Carte mobile */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="h-[300px] relative">
              <MapContainer
                center={[25.0, 35.0]}
                zoom={4}
                className="h-full w-full relative z-0"
                ref={setMobileMapRef}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={true}
                touchZoom={true}
                style={{zIndex: 0}}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {/* Afficher tous les bureaux */}
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
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
              
              {/* Overlay avec info du bureau sélectionné - Z-INDEX SOUS LA MODAL */}
              <div className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 ${
                showMobileList ? 'z-10' : 'z-[1000]'
              }`} style={{zIndex: showMobileList ? 10 : 1000}}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedOffice.flag}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{selectedOffice.name}</h3>
                    <p className="text-sm text-gray-600">{selectedOffice.country}</p>
                  </div>
                  <button
                    onClick={() => setShowMobileList(true)}
                    className="bg-bordeaux-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-bordeaux-600 transition-colors flex items-center gap-2 relative z-[1001]"
                    style={{zIndex: 1001}}
                  >
                    <span>Changer</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description détaillée mobile */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-700 leading-relaxed">{selectedOffice.description}</p>
          </div>
        </div>

        {/* VERSION DESKTOP - visible seulement sur desktop */}
        <div className="hidden lg:block">
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

            {/* Carte desktop */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
              <MapContainer
                center={mapCenter}
                zoom={4}
                className="h-full w-full relative z-10"
                ref={setMapRef}
                style={{zIndex: 10}}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
                touchZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
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

        </div>

        {/* Modal de sélection pour mobile */}
        {showMobileList && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-end lg:hidden">
            <div className="bg-white w-full max-h-[80vh] rounded-t-2xl overflow-hidden">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">{t('offices.select')}</h3>
                  <button
                    onClick={() => setShowMobileList(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4 overflow-y-auto max-h-[60vh]" style={{maxHeight: 'calc(80vh - 80px)'}}>
                <div className="space-y-3">
                  {offices.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => {
                        handleOfficeClick(office);
                        setShowMobileList(false);
                      }}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 relative ${
                        selectedOffice.id === office.id
                          ? 'border-bordeaux-500 bg-bordeaux-50 shadow-md z-0'
                          : 'border-gray-200 hover:border-bordeaux-300 hover:bg-gray-50 active:scale-[0.98] z-0'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{office.flag}</span>
                        <div className="flex-1">
                          <div className={`font-semibold ${
                            selectedOffice.id === office.id ? 'text-bordeaux-700' : 'text-gray-800'
                          }`}>
                            {office.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{office.country}</div>
                        </div>
                        {selectedOffice.id === office.id && (
                          <div className="w-6 h-6 bg-bordeaux-500 rounded-full flex items-center justify-center relative z-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OfficesMap;