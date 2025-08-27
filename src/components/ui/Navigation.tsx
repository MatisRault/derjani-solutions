'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useContactModal } from '@/contexts/ContactModalContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface Service {
  id: string;
  name: string;
  description: string;
  href: string;
}

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showRealisationsMenu, setShowRealisationsMenu] = useState(false);
  const [showEngagementsMenu, setShowEngagementsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'main' | 'services'>('main');
  const { openContactModal } = useContactModal();
  const { t, language } = useLanguage();

  const services: Service[] = [
    {
      id: 'construction',
      name: t('services.construction.title'),
      description: t('services.construction.desc'),
      href: language === 'en' ? '/en/services/construction' : '/services/construction'
    },
    {
      id: 'power',
      name: t('services.power.title'),
      description: t('services.power.desc'),
      href: language === 'en' ? '/en/services/power' : '/services/power'
    },
    {
      id: 'security',
      name: t('services.security.title'),
      description: t('services.security.desc'),
      href: language === 'en' ? '/en/services/security' : '/services/security'
    },
    {
      id: 'supply',
      name: t('services.supply.title'),
      description: t('services.supply.desc'),
      href: language === 'en' ? '/en/services/supply' : '/services/supply'
    },
    {
      id: 'services',
      name: t('services.services.title'),
      description: t('services.services.desc'),
      href: language === 'en' ? '/en/services/services' : '/services/services'
    },
    {
      id: 'manpower',
      name: t('services.manpower.title'),
      description: t('services.manpower.desc'),
      href: language === 'en' ? '/en/services/manpower' : '/services/manpower'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-montserrat ${
        isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48 py-4 lg:py-6">
          <div className="flex items-center justify-between lg:space-x-12">
            
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Derjani Group" 
                className="h-12 sm:h-16 lg:h-20 w-auto"
              />
            </div>

            {/* Menu Items - alignés à gauche */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={`hover:underline transition-all duration-200 ${
                isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
              }`}>
                {t('nav.home')}
              </Link>
              
              {/* Services with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowServicesMenu(true)}
                onMouseLeave={() => setShowServicesMenu(false)}
              >
                <span className={`hover:underline transition-all duration-200 cursor-pointer ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.services')}
                </span>
                
                {/* Services Dropdown */}
                {showServicesMenu && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-md shadow-lg border border-gray-200">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                          onClick={() => setShowServicesMenu(false)}
                        >
                          <span>{service.name}</span>
                          <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href={language === 'en' ? '/en/services' : '/services'}
                          className="flex items-center justify-between px-4 py-2 text-sm text-bordeaux-600 font-medium hover:bg-bordeaux-50 transition-colors group"
                          onClick={() => setShowServicesMenu(false)}
                        >
                          <span>Voir tous nos services</span>
                          <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* À propos with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowAboutMenu(true)}
                onMouseLeave={() => setShowAboutMenu(false)}
              >
                <span className={`hover:underline transition-all duration-200 cursor-pointer ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.about.submenu')}
                </span>

                {/* About Dropdown */}
                {showAboutMenu && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-md shadow-lg border border-gray-200">
                    <div className="py-2">
                      <Link
                        href={language === 'en' ? '/en/about' : '/about'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowAboutMenu(false)}
                      >
                        <span>Qui sommes-nous</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/about/team' : '/about/team'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowAboutMenu(false)}
                      >
                        <span>Notre équipe</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/about/values' : '/about/values'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowAboutMenu(false)}
                      >
                        <span>Nos valeurs</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/about/history' : '/about/history'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowAboutMenu(false)}
                      >
                        <span>Notre histoire</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Réalisations with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowRealisationsMenu(true)}
                onMouseLeave={() => setShowRealisationsMenu(false)}
              >
                <span className={`hover:underline transition-all duration-200 cursor-pointer ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.realizations.submenu')}
                </span>

                {/* Realizations Dropdown */}
                {showRealisationsMenu && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-md shadow-lg border border-gray-200">
                    <div className="py-2">
                      <Link
                        href={language === 'en' ? '/en/realisations' : '/realisations'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowRealisationsMenu(false)}
                      >
                        <span>Toutes nos réalisations</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/realisations/construction' : '/realisations/construction'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowRealisationsMenu(false)}
                      >
                        <span>Construction</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/realisations/energie' : '/realisations/energie'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowRealisationsMenu(false)}
                      >
                        <span>Énergie</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/realisations/securite' : '/realisations/securite'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowRealisationsMenu(false)}
                      >
                        <span>Sécurité</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Engagements with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowEngagementsMenu(true)}
                onMouseLeave={() => setShowEngagementsMenu(false)}
              >
                <span className={`hover:underline transition-all duration-200 cursor-pointer ${
                  isScrolled || showServicesMenu || showAboutMenu || showRealisationsMenu || showEngagementsMenu  ? 'text-gray-700 hover:text-bordeaux-500' : 'text-white'
                }`}>
                  {t('nav.commitments.submenu')}
                </span>

                {/* Engagements Dropdown */}
                {showEngagementsMenu && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <div className="bg-white rounded-md shadow-lg border border-gray-200">
                    <div className="py-2">
                      <Link
                        href={language === 'en' ? '/en/engagements' : '/engagements'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowEngagementsMenu(false)}
                      >
                        <span>Nos engagements</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/engagements/environnement' : '/engagements/environnement'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowEngagementsMenu(false)}
                      >
                        <span>Environnement</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/engagements/social' : '/engagements/social'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowEngagementsMenu(false)}
                      >
                        <span>Social</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href={language === 'en' ? '/en/engagements/qualite' : '/engagements/qualite'}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bordeaux-600 transition-colors group"
                        onClick={() => setShowEngagementsMenu(false)}
                      >
                        <span>Qualité</span>
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact à droite - Desktop */}
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

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <LanguageToggle />
              <div 
                className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  if (!isMenuOpen) setMobileView('main');
                }}
              >
                <span className={isScrolled ? 'bg-bordeaux-600' : 'bg-white'}></span>
                <span className={isScrolled ? 'bg-bordeaux-600' : 'bg-white'}></span>
                <span className={isScrolled ? 'bg-bordeaux-600' : 'bg-white'}></span>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      <div className={`menu-overlay bg-white ${isMenuOpen ? 'open' : ''}`} style={{ backgroundColor: 'white' }}>
        {isMenuOpen && <div className="menu-sweep"></div>}
        
        {/* Bouton X pour fermer */}
        <div className="absolute top-6 right-6 z-50">
          <div 
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              setMobileView('main');
            }}
          >
            <svg
              className="h-8 w-8 text-bordeaux-600 transition-transform hover:scale-110 hover:rotate-90 duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        
        {/* Vue principale du menu */}
        <div className={`absolute inset-0 transition-transform duration-300 ${mobileView === 'main' ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* En-tête avec logo */}
            <div className="flex-shrink-0 px-8 pt-20 pb-8 text-left">
              <img
                src="/logo.png"
                alt="Derjani Group Logo"
                className="h-32 w-auto"
              />
            </div>
            
            {/* Navigation */}
            <div className="flex-1 px-8">
              <nav className="space-y-6">
                <Link
                  href="/"
                  className="block text-2xl font-bold text-gray-800 hover:text-bordeaux-600 transition-colors duration-300 py-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setMobileView('main');
                  }}
                >
                  {t('nav.home')}
                </Link>
                
                <button
                  className="flex items-center justify-between w-full text-2xl font-bold text-gray-800 hover:text-bordeaux-600 transition-colors duration-300 py-2"
                  onClick={() => setMobileView('services')}
                >
                  <span>{t('nav.services')}</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <button
                  className="block text-2xl font-bold text-gray-800 hover:text-bordeaux-600 transition-colors duration-300 py-2 text-left w-full"
                  onClick={() => {
                    // Scroll vers la section about ou navigation
                    if (pathname === '/') {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      router.push('/#about');
                    }
                    setIsMenuOpen(false);
                    setMobileView('main');
                  }}
                >
                  {t('nav.about.submenu')}
                </button>
                
                <button
                  className="block text-2xl font-bold text-gray-800 hover:text-bordeaux-600 transition-colors duration-300 py-2 text-left w-full"
                  onClick={() => {
                    // Scroll vers la section realizations ou navigation  
                    if (pathname === '/') {
                      document.getElementById('realizations')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      router.push('/#realizations');
                    }
                    setIsMenuOpen(false);
                    setMobileView('main');
                  }}
                >
                  {t('nav.realizations.submenu')}
                </button>
              </nav>
            </div>
            
            {/* CTA en bas */}
            <div className="flex-shrink-0 px-8 pb-8 space-y-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openContactModal();
                }}
                className="w-full bg-bordeaux-500 text-white text-lg font-semibold py-4 rounded-xl hover:bg-bordeaux-600 transition-colors duration-300"
              >
                {t('nav.contact')}
              </button>
              <a 
                href={`tel:${t('nav.phone')}`}
                className="block w-full text-center border-2 border-bordeaux-500 text-bordeaux-500 text-lg font-semibold py-4 rounded-xl hover:bg-bordeaux-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.phone')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Vue services avec fil d'Ariane */}
        <div className={`absolute inset-0 transition-transform duration-300 ${mobileView === 'services' ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* En-tête avec navigation retour */}
            <div className="flex-shrink-0 px-8 pt-20 pb-8 text-left">
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setMobileView('main')}
                  className="flex items-center text-bordeaux-600 hover:text-bordeaux-700 transition-colors mr-4"
                >
                  <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour
                </button>
                <div className="text-sm text-gray-500">
                  Menu &gt; Services
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Nos Services</h2>
              <p className="text-gray-600">Découvrez notre expertise dans 6 domaines clés</p>
            </div>
            
            {/* Liste des services */}
            <div className="flex-1 px-8 pb-8">
              <div className="space-y-4">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:border-bordeaux-500 hover:shadow-md transition-all duration-300 group"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setMobileView('main');
                    }}
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-bordeaux-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.description.substring(0, 60)}...
                      </p>
                    </div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-bordeaux-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navigation;