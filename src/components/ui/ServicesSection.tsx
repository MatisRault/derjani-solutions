"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

const ServiceCard = ({ service, learnMoreText }: { service: Service; learnMoreText: string }) => {
  return (
    <Link href={service.href} className="block h-full">
      <div className="group relative h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white cursor-pointer">
        
        {/* Image de fond */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('${service.image}')`
            }}
          >
            {/* Fallback gradient si l'image ne charge pas */}
            <div className="absolute inset-0 bg-gradient-to-br from-bordeaux-600 to-bordeaux-800"></div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
        </div>
        
        {/* Contenu texte simplifié */}
        <div className="p-6 bg-white flex flex-col justify-between h-20">
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors line-clamp-1">
              {service.name}
            </h3>
          </div>
          
          {/* Indicateur de lien */}
          <div className="flex items-center text-gray-700 opacity-70 group-hover:opacity-100 transition-all duration-300">
            <span className="text-sm font-medium">{learnMoreText}</span>
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        {/* Effet hover border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-bordeaux-200 rounded-xl transition-all duration-300"></div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  const { t, language } = useLanguage();
  
  const services: Service[] = [
    {
      id: 'construction',
      name: t('services.construction.title'),
      description: t('services.construction.desc'),
      image: '/assets/services/construction.jpg',
      icon: '🏗️',
      href: language === 'en' ? '/en/services/construction' : '/services/construction'
    },
    {
      id: 'power',
      name: t('services.power.title'),
      description: t('services.power.desc'),
      image: '/assets/services/energie.jpg',
      icon: '⚡',
      href: language === 'en' ? '/en/services/power' : '/services/power'
    },
    {
      id: 'security',
      name: t('services.security.title'),
      description: t('services.security.desc'),
      image: '/assets/services/securite.jpg',
      icon: '🔒',
      href: language === 'en' ? '/en/services/security' : '/services/security'
    },
    {
      id: 'supply',
      name: t('services.supply.title'),
      description: t('services.supply.desc'),
      image: '/assets/services/fourniture.jpg',
      icon: '🚛',
      href: language === 'en' ? '/en/services/supply' : '/services/supply'
    },
    {
      id: 'services',
      name: t('services.services.title'),
      description: t('services.services.desc'),
      image: '/assets/services/services.jpg',
      icon: '🔧',
      href: language === 'en' ? '/en/services/services' : '/services/services'
    },
    {
      id: 'manpower',
      name: t('services.manpower.title'),
      description: t('services.manpower.desc'),
      image: '/assets/services/rh.jpg',
      icon: '👥',
      href: language === 'en' ? '/en/services/manpower' : '/services/manpower'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48">
        
        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grille de services - Layout amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              learnMoreText={t('services.learnMore')}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;