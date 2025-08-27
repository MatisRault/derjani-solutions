"use client";

import React, { useState } from 'react';
import { useContactModal } from '@/contexts/ContactModalContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();

  const faqData: FAQItem[] = [
    {
      id: '1',
      questionKey: 'faq.q1',
      answerKey: 'faq.a1'
    },
    {
      id: '2',
      questionKey: 'faq.q2',
      answerKey: 'faq.a2'
    },
    {
      id: '3',
      questionKey: 'faq.q3',
      answerKey: 'faq.a3'
    },
    {
      id: '4',
      questionKey: 'faq.q4',
      answerKey: 'faq.a4'
    },
    {
      id: '5',
      questionKey: 'faq.q5',
      answerKey: 'faq.a5'
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Contenu à gauche */}
          <div className="space-y-6 lg:sticky lg:top-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
              {t('faq.title')}
            </h2>
            
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {t('faq.subtitle')}
            </p>

            <div className="pt-4">
              <button 
                onClick={openContactModal}
                className="inline-flex items-center gap-3 bg-bordeaux-500 hover:bg-bordeaux-600 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span className="text-sm lg:text-base">{t('faq.cta')}</span>
                <svg 
                  className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* FAQ Accordions à droite */}
          <div className="space-y-2">
            {faqData.map((item, index) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 pr-4 text-sm lg:text-base">
                    {t(item.questionKey)}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openItem === item.id 
                        ? 'bg-bordeaux-500 text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-bordeaux-100 hover:text-bordeaux-600'
                    }`}
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openItem === item.id ? 'rotate-45' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                      />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed text-sm lg:text-base">
                    {t(item.answerKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;