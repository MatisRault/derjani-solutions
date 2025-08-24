"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-bordeaux-600">
              Derjani Solutions
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-bordeaux-600 font-medium transition-colors">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-bordeaux-600 font-medium transition-colors">
              {t('nav.services')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-bordeaux-600 font-medium transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-bordeaux-600 font-medium transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;