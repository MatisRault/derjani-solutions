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
    <section className="w-full bg-gray-50 py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contenu à gauche */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-bordeaux-600">
              {t('faq.title')}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('faq.subtitle')}
            </p>

            <div className="pt-4">
              <button 
                onClick={openContactModal}
                className="bg-bordeaux-500 hover:bg-bordeaux-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
{t('faq.cta')}
                <svg 
                  className="w-5 h-5" 
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
          <div className="space-y-0">
            {faqData.map((item) => (
              <div key={item.id} className="border-t border-b border-gray-200">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {t(item.questionKey)}
                  </span>
                  <div 
                    className="w-8 h-8 bg-bordeaux-500 rounded flex items-center justify-center flex-shrink-0"
                  >
                    <svg 
                      className={`w-5 h-5 text-white transition-transform duration-200 ${
                        openItem === item.id ? 'transform rotate-45' : ''
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
                    openItem === item.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="text-gray-700 leading-relaxed">
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