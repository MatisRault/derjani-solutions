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
    <Link href={service.href} className="block">
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white cursor-pointer">
        {/* Image de fond */}
        <div className="relative h-64 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url('${service.image}')`
            }}
          >
            {/* Fallback gradient si l'image ne charge pas */}
            <div className="absolute inset-0 bg-gradient-to-br from-bordeaux-600 to-bordeaux-800"></div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
        </div>
        
        {/* Contenu */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2 group-hover:text-bordeaux-200 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed opacity-90">
            {service.description}
          </p>
          
          {/* Indicateur de lien */}
          <div className="mt-3 flex items-center text-bordeaux-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">{learnMoreText}</span>
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        {/* Effet hover */}
        <div className="absolute inset-0 bg-bordeaux-600/0 group-hover:bg-bordeaux-600/10 transition-all duration-300"></div>
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
    <section className="w-full bg-white py-20">
      <div className="px-32 sm:px-40 lg:px-48">
        
        {/* En-tête */}
        <div className="mb-16 flex justify-between items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-bordeaux-600">
            {t('services.title')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-xl text-left">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
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