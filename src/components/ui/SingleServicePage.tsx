"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/contexts/ContactModalContext';
import Navigation from './Navigation';
import { PageBanner } from './PageBanner';
import { ReassuranceBanner } from './Hero';
import ContactForm from './ContactForm';
import GlobalContactModal from './GlobalContactModal';

interface ServiceData {
  key: string;
  heroImage: string;
  capabilities?: {
    key: string;
    icon: string;
  }[];
  process?: boolean;
  expertise?: boolean;
}

interface SingleServicePageProps {
  serviceData: ServiceData;
}

const ServiceOverview = ({ serviceKey }: { serviceKey: string }) => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full bg-white py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-bordeaux-600 mb-8 text-center">
            {t(`service.${serviceKey}.overview.title`)}
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(`service.${serviceKey}.overview.text1`)}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(`service.${serviceKey}.overview.text2`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCapabilities = ({ serviceKey, capabilities }: { serviceKey: string; capabilities: { key: string; icon: string }[] }) => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bordeaux-600 mb-4">
            {t(`service.${serviceKey}.capabilities.title`)}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.key} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bordeaux-100 rounded-full mb-4">
                  <span className="text-3xl">{capability.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(`service.${serviceKey}.capabilities.${capability.key}`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`service.${serviceKey}.capabilities.${capability.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceProcess = ({ serviceKey }: { serviceKey: string }) => {
  const { t } = useLanguage();
  
  const processSteps = ['step1', 'step2', 'step3', 'step4'];
  
  return (
    <section className="w-full bg-white py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bordeaux-600 mb-4">
            {t(`service.${serviceKey}.process.title`)}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step} className="text-center relative">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bordeaux-500 text-white rounded-full text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(`service.${serviceKey}.process.${step}`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`service.${serviceKey}.process.${step}.desc`)}
                </p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 transform translate-x-1/2">
                  <svg className="w-8 h-8 text-bordeaux-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceExpertise = ({ serviceKey }: { serviceKey: string }) => {
  const { t } = useLanguage();
  
  const expertiseItems = ['experience', 'projects', 'countries', 'team'];
  
  return (
    <section className="w-full bg-bordeaux-500 py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t(`service.${serviceKey}.expertise.title`)}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseItems.map((item) => (
            <div key={item} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {t(`service.${serviceKey}.expertise.${item}`).split(' ')[0]}
              </div>
              <div className="text-base lg:text-lg text-white font-medium">
                {t(`service.${serviceKey}.expertise.${item}`).split(' ').slice(1).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCTA = () => {
  const { t } = useLanguage();
  const { openContactModal } = useContactModal();
  
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('service.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('service.cta.subtitle')}
          </p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-bordeaux-500 text-white rounded-lg transition-all duration-200 hover:bg-bordeaux-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('service.cta.button')}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const RelatedServices = ({ currentService }: { currentService: string }) => {
  const { t } = useLanguage();
  
  const allServices = [
    { key: 'construction', href: '/services/construction', icon: '🏗️' },
    { key: 'power', href: '/services/power', icon: '⚡' },
    { key: 'security', href: '/services/security', icon: '🔒' },
    { key: 'supply', href: '/services/supply', icon: '🚛' },
    { key: 'services', href: '/services/services', icon: '🔧' },
    { key: 'manpower', href: '/services/manpower', icon: '👥' }
  ];
  
  const relatedServices = allServices.filter(service => service.key !== currentService).slice(0, 3);
  
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bordeaux-600 mb-4">
            {t('service.related.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <a
              key={service.key}
              href={service.href}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bordeaux-100 rounded-full mb-4">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.${service.key}.desc`)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleServicePage: React.FC<SingleServicePageProps> = ({ serviceData }) => {
  const { t } = useLanguage();
  
  const breadcrumbs = [
    { label: t('service.breadcrumb.home'), href: '/' },
    { label: t('service.breadcrumb.services'), href: '/#services' },
    { label: t(`service.${serviceData.key}.hero.title`) }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBanner
        title={t(`service.${serviceData.key}.hero.title`)}
        description={t(`service.${serviceData.key}.hero.subtitle`)}
        backgroundImage={serviceData.heroImage}
        breadcrumbs={breadcrumbs}
      />
      
      <ServiceOverview serviceKey={serviceData.key} />
      
      <ReassuranceBanner />
      
      {serviceData.capabilities && (
        <ServiceCapabilities 
          serviceKey={serviceData.key} 
          capabilities={serviceData.capabilities} 
        />
      )}
      
      {serviceData.process && (
        <ServiceProcess serviceKey={serviceData.key} />
      )}
      
      {serviceData.expertise && (
        <ServiceExpertise serviceKey={serviceData.key} />
      )}
      
      <ServiceCTA />
      
      <RelatedServices currentService={serviceData.key} />
      
      <ContactForm />
      
      <GlobalContactModal />
    </div>
  );
};

export default SingleServicePage;