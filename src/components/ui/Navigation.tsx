'use client';

import React, { useState, useEffect } from 'react';
import { H4, H5, Paragraph } from './Typography';
import LanguageToggle from './LanguageToggle';
import { useContactModal } from '@/contexts/ContactModalContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

const Navigation = () => {
  const [activeService, setActiveService] = useState<string>('construction');
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showRealisationsMenu, setShowRealisationsMenu] = useState(false);
  const [showEngagementsMenu, setShowEngagementsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();

  const services: Service[] = [
    {
      id: 'construction',
      name: t('megamenu.services.construction.name'),
      description: t('megamenu.services.construction.desc'),
      image: '/assets/services/construction.jpg'
    },
    {
      id: 'energie',
      name: t('megamenu.services.energie.name'),
      description: t('megamenu.services.energie.desc'),
      image: '/assets/services/energie.jpg'
    },
    {
      id: 'securite',
      name: t('megamenu.services.securite.name'),
      description: t('megamenu.services.securite.desc'),
      image: '/assets/services/securite.jpg'
    },
    {
      id: 'fourniture',
      name: t('megamenu.services.fourniture.name'),
      description: t('megamenu.services.fourniture.desc'),
      image: '/assets/services/fourniture.jpg'
    },
    {
      id: 'services-tech',
      name: t('megamenu.services.services.name'),
      description: t('megamenu.services.services.desc'),
      image: '/assets/services/services.jpg'
    },
    {
      id: 'rh',
      name: t('megamenu.services.rh.name'),
      description: t('megamenu.services.rh.desc'),
      image: '/assets/services/rh.jpg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      onMouseLeave={() => {
        setShowServicesMenu(false);
        setShowAboutMenu(false);
        setShowRealisationsMenu(false);
        setShowEngagementsMenu(false);
      }}
    >
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-montserrat ${
        isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}>
        <div className="w-full px-32 sm:px-40 lg:px-48 py-6">
          <div className="flex items-center space-x-12">
            
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Derjani Group" 
                className="h-20 w-auto"
              />
            </div>

            {/* Menu Items - alignés à gauche */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className={`hover:underline transition-all duration-200 ${
                isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
              }`}>
                {t('nav.home')}
              </a>
              
              {/* Services with mega menu */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setShowServicesMenu(true);
                  setShowAboutMenu(false);
                  setShowRealisationsMenu(false);
                  setShowEngagementsMenu(false);
                }}
              >
                <a href="#" className={`hover:underline transition-all duration-200 ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.services')}
                </a>
              </div>

              {/* À propos with mega menu */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setShowServicesMenu(false);
                  setShowAboutMenu(true);
                  setShowRealisationsMenu(false);
                  setShowEngagementsMenu(false);
                }}
              >
                <a href="#" className={`hover:underline transition-all duration-200 ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.about.submenu')}
                </a>
              </div>

              {/* Réalisations with mega menu */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setShowServicesMenu(false);
                  setShowAboutMenu(false);
                  setShowRealisationsMenu(true);
                  setShowEngagementsMenu(false);
                }}
              >
                <a href="#" className={`hover:underline transition-all duration-200 ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.realizations.submenu')}
                </a>
              </div>

              {/* Engagements with mega menu */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setShowServicesMenu(false);
                  setShowAboutMenu(false);
                  setShowRealisationsMenu(false);
                  setShowEngagementsMenu(true);
                }}
              >
                <a href="#" className={`hover:underline transition-all duration-200 ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.commitments.submenu')}
                </a>
              </div>
            </div>

            {/* Contact à droite */}
            <div className="hidden lg:flex items-center ml-auto space-x-4">
              <LanguageToggle />
              <button
                onClick={openContactModal}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-bordeaux-500 text-white hover:bg-bordeaux-600 focus:ring-bordeaux-500 shadow-sm hover:shadow-md"
              >
                {t('nav.contact')}
              </button>
              <a href={`tel:${t('nav.phone')}`} className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-md transition-all duration-200 ${
                isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  
                  ? 'text-bordeaux-600 border-bordeaux-600 bg-transparent hover:bg-bordeaux-50' 
                  : 'text-white border-white bg-transparent hover:bg-white hover:text-gray-900'
              }`}>
                {t('nav.phone')}
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Mega Menu positioned relative to viewport */}
      {showServicesMenu && (
        <div 
          className="fixed top-[74px] left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40"
        >
          <div className="flex w-full px-32 sm:px-40 lg:px-48">
            
            {/* Sidebar gauche */}
            <div className="w-80 py-16 px-6 border-r border-gray-100">
              <div className="space-y-1">
                {services.map((service, index) => (
                  <div key={service.id}>
                    <div
                      onMouseEnter={() => setActiveService(service.id)}
                      className={`flex items-center px-4 py-4 rounded-lg cursor-pointer transition-all duration-200 ${
                        activeService === service.id 
                          ? 'bg-bordeaux-50 shadow-md border border-bordeaux-200' 
                          : 'hover:bg-gray-50 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors ${
                        activeService === service.id ? 'bg-bordeaux-500' : 'bg-gray-200'
                      }`}>
                        <span className={`text-xl ${activeService === service.id ? 'text-white' : 'text-gray-600'}`}>
                          {service.id === 'construction' && '🏗️'}
                          {service.id === 'energie' && '⚡'}
                          {service.id === 'securite' && '🔒'}
                          {service.id === 'fourniture' && '🚛'}
                          {service.id === 'services-tech' && '🔧'}
                          {service.id === 'rh' && '👥'}
                        </span>
                      </div>
                      <div>
                        <span className={`font-semibold text-sm block ${
                          activeService === service.id ? 'text-bordeaux-700' : 'text-gray-800'
                        }`}>
                          {service.name}
                        </span>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {service.id === 'construction' && 'Infrastructure & Bâtiment'}
                          {service.id === 'energie' && 'Générateurs & Centrales'}
                          {service.id === 'securite' && 'Protection & Surveillance'}
                          {service.id === 'fourniture' && 'Équipements & Véhicules'}
                          {service.id === 'services-tech' && 'Services techniques'}
                          {service.id === 'rh' && 'Personnel qualifié'}
                        </span>
                      </div>
                    </div>
                    {index < services.length - 1 && (
                      <div className="h-px bg-gray-100 mx-4 my-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contenu principal */}
            <div className="flex-1 py-16 px-8">
              <div className="flex h-full">
                
                {/* Description du service */}
                <div className="flex-1 pr-6 py-15 pl-6">
                  <div className="mb-2">
                    <H4 className="text-bordeaux-600 mb-1">
                      {services.find(s => s.id === activeService)?.name}
                    </H4>
                    <div className="text-xs text-bordeaux-400 font-medium mb-4">
                      Voir tout →
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {activeService === 'construction' && (
                      <>
                        <div className="text-sm text-gray-700 font-medium">Camps militaires et civils</div>
                        <div className="text-sm text-gray-700 font-medium">Infrastructures industrielles</div>
                        <div className="text-sm text-gray-700 font-medium">Bâtiments préfabriqués</div>
                        <div className="text-sm text-gray-700 font-medium">Routes et ponts</div>
                      </>
                    )}
                    {activeService === 'energie' && (
                      <>
                        <div className="text-sm text-gray-700 font-medium">Générateurs de toutes puissances</div>
                        <div className="text-sm text-gray-700 font-medium">Systèmes automatiques</div>
                        <div className="text-sm text-gray-700 font-medium">Maintenance préventive</div>
                        <div className="text-sm text-gray-700 font-medium">Panneaux de contrôle</div>
                      </>
                    )}
                    {activeService === 'securite' && (
                      <>
                        <div className="text-sm text-gray-700 font-medium">Systèmes périmètriques</div>
                        <div className="text-sm text-gray-700 font-medium">Surveillance électronique</div>
                        <div className="text-sm text-gray-700 font-medium">Protection balistique</div>
                        <div className="text-sm text-gray-700 font-medium">Véhicules blindés</div>
                      </>
                    )}
                    {activeService === 'fourniture' && (
                      <>
                        <div className="text-sm text-gray-700 font-medium">Équipements lourds</div>
                        <div className="text-sm text-gray-700 font-medium">Véhicules spécialisés</div>
                        <div className="text-sm text-gray-700 font-medium">Fournitures médicales</div>
                        <div className="text-sm text-gray-700 font-medium">Mobilier professionnel</div>
                      </>
                    )}
                    {activeService === 'services-tech' && (
                      <>
                        <div className="text-sm text-gray-700 font-medium">Restauration collective</div>
                        <div className="text-sm text-gray-700 font-medium">Gestion des installations</div>
                        <div className="text-sm text-gray-700 font-medium">Services informatiques</div>
                        <div className="text-sm text-gray-700 font-medium">Aménagement paysager</div>
                      </>
                    )}
                    {activeService === 'rh' && (
                      <>
                        <div className="text-sm text-gray-700 font-medium">Personnel technique qualifié</div>
                        <div className="text-sm text-gray-700 font-medium">Expertise internationale</div>
                        <div className="text-sm text-gray-700 font-medium">Formation spécialisée</div>
                        <div className="text-sm text-gray-700 font-medium">Consultants experts</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Image à droite */}
                <div className="w-96 py-10">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative">
                    <img 
                      src={services.find(s => s.id === activeService)?.image} 
                      alt={services.find(s => s.id === activeService)?.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='384' height='256' viewBox='0 0 384 256'%3E%3Crect width='384' height='256' fill='%236b0e0e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='white'%3EImage à venir%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-lg font-semibold">
                        {services.find(s => s.id === activeService)?.name}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* À propos Mega Menu */}
      {showAboutMenu && (
        <div className="fixed top-[74px] left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="flex w-full px-32 sm:px-40 lg:px-48">
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Notre Histoire</H4>
              <Paragraph className="text-gray-600 mb-4">
                Fondé à Beyrouth en 1988, Derjani Group s'est imposé comme un acteur de référence dans les secteurs du BTP, de la fourniture et des services.
              </Paragraph>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">• 35+ années d'expérience</div>
                <div className="text-sm text-gray-500">• Présence internationale</div>
                <div className="text-sm text-gray-500">• Expertise multisectorielle</div>
              </div>
            </div>
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Vision & Mission</H4>
              <div className="space-y-4">
                <div>
                  <H5 className="text-gray-700 mb-2">Vision</H5>
                  <Paragraph className="text-gray-600 text-sm">
                    Être leader mondial dans la gestion de projets, la construction, la génération d'énergie, la sécurité et les services.
                  </Paragraph>
                </div>
                <div>
                  <H5 className="text-gray-700 mb-2">Mission</H5>
                  <Paragraph className="text-gray-600 text-sm">
                    Offrir des solutions innovantes répondant aux besoins spécifiques de chaque client.
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Nos Valeurs</H4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bordeaux-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Intégrité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bordeaux-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Honnêteté</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bordeaux-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Fiabilité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bordeaux-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Responsabilité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bordeaux-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Esprit d'équipe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Réalisations Mega Menu */}
      {showRealisationsMenu && (
        <div className="fixed top-[74px] left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="flex w-full px-32 sm:px-40 lg:px-48">
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Clients Prestigieux</H4>
              <div className="space-y-3">
                <div className="text-sm text-gray-700">🇺🇸 Forces armées des États-Unis</div>
                <div className="text-sm text-gray-700">🇺🇳 Nations Unies (UNIFIL, UN Soudan)</div>
                <div className="text-sm text-gray-700">🇫🇷 Forces françaises</div>
                <div className="text-sm text-gray-700">🇮🇹 Forces italiennes</div>
                <div className="text-sm text-gray-700">🇶🇦 Forces qataries</div>
                <div className="text-sm text-gray-700">🇪🇸 Forces espagnoles</div>
                <div className="text-sm text-gray-700">🇹🇷 Forces turques</div>
                <div className="text-sm text-gray-700">🌍 ISAF Afghanistan (OTAN)</div>
              </div>
            </div>
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Secteurs d'Activité</H4>
              <div className="space-y-4">
                <div>
                  <H5 className="text-gray-700 mb-2">Militaire & Défense</H5>
                  <Paragraph className="text-gray-600 text-sm">
                    Infrastructures militaires, camps, systèmes de sécurité pour forces armées internationales.
                  </Paragraph>
                </div>
                <div>
                  <H5 className="text-gray-700 mb-2">Pétrole & Gaz</H5>
                  <Paragraph className="text-gray-600 text-sm">
                    Projets industriels au Liban, Irak et Nigeria pour le secteur énergétique.
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Présence Mondiale</H4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-700">🇱🇧 Liban</div>
                <div className="text-sm text-gray-700">🇦🇪 Abu Dhabi</div>
                <div className="text-sm text-gray-700">🇦🇪 Dubaï</div>
                <div className="text-sm text-gray-700">🇮🇶 Irak</div>
                <div className="text-sm text-gray-700">🇦🇫 Afghanistan</div>
                <div className="text-sm text-gray-700">🇹🇳 Tunisie</div>
                <div className="text-sm text-gray-700">🇰🇼 Koweït</div>
                <div className="text-sm text-gray-700">🇸🇸 Soudan du Sud</div>
                <div className="text-sm text-gray-700">🇳🇬 Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engagements Mega Menu */}
      {showEngagementsMenu && (
        <div className="fixed top-[74px] left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="flex w-full px-32 sm:px-40 lg:px-48">
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Qualité</H4>
              <Paragraph className="text-gray-600 mb-4">
                Processus stricts de contrôle, partenaires fiables, écoute active des besoins clients.
              </Paragraph>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">• Système qualité ISO</div>
                <div className="text-sm text-gray-500">• Contrôle continu</div>
                <div className="text-sm text-gray-500">• Satisfaction client</div>
              </div>
            </div>
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Sécurité HSE</H4>
              <Paragraph className="text-gray-600 mb-4">
                Politique HSE stricte, formation continue du personnel, conformité aux réglementations internationales.
              </Paragraph>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">• Formation sécurité obligatoire</div>
                <div className="text-sm text-gray-500">• Équipements de protection</div>
                <div className="text-sm text-gray-500">• Normes internationales</div>
              </div>
            </div>
            <div className="w-1/3 py-8 px-8">
              <H4 className="text-bordeaux-500 mb-4">Responsabilité Sociétale</H4>
              <Paragraph className="text-gray-600 mb-4">
                Soutien à des événements locaux, programmes de formation et stages pour étudiants.
              </Paragraph>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">• Programmes de formation</div>
                <div className="text-sm text-gray-500">• Stages étudiants</div>
                <div className="text-sm text-gray-500">• Événements communautaires</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navigation;