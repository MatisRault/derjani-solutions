"use client";

import React, { useState } from 'react';
import { useContactModal } from '@/contexts/ContactModalContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  budget: string;
  timeline: string;
  description: string;
}

const ContactForm = () => {
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Données du formulaire:', formData);
    alert('Demande de devis envoyée avec succès !');
    
    // Reset form
    setFormData({
      company: '',
      contactName: '',
      email: '',
      phone: '',
      projectType: '',
      projectLocation: '',
      budget: '',
      timeline: '',
      description: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="px-32 sm:px-40 lg:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contenu à gauche */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-bordeaux-600">
              {t('contact.title')}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('contact.text1')}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('contact.text2')}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-bordeaux-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-600">{t('contact.email')}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-bordeaux-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-600">{t('contact.location')}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-bordeaux-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-gray-600">{t('contact.guarantee')}</span>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.company')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.contactName')} *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                    placeholder={t('contact.form.contactNamePlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                    placeholder={t('form.phone.placeholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.projectType')} *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                  >
                    <option value="">{t('contact.form.selectDomain')}</option>
                    <option value="construction">{t('services.construction.title')}</option>
                    <option value="power">{t('services.power.title')}</option>
                    <option value="security">{t('services.security.title')}</option>
                    <option value="supply">{t('services.supply.title')}</option>
                    <option value="services">{t('services.services.title')}</option>
                    <option value="manpower">{t('services.manpower.title')}</option>
                    <option value="multiple">{t('contact.form.multiDomain')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.projectLocation')}
                  </label>
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                    placeholder={t('contact.form.projectLocationPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.budget')}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                  >
                    <option value="">{t('contact.form.selectBudget')}</option>
                    <option value="50k-200k">{t('form.budget.50k-200k')}</option>
                    <option value="200k-500k">{t('form.budget.200k-500k')}</option>
                    <option value="500k-1M">{t('form.budget.500k-1M')}</option>
                    <option value="1M-5M">{t('form.budget.1M-5M')}</option>
                    <option value="5M+">{t('form.budget.5M+')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
{t('contact.form.timeline')}
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors"
                  >
                    <option value="">{t('contact.form.selectTimeline')}</option>
                    <option value="urgent">{t('form.timeline.urgent')}</option>
                    <option value="1-3months">{t('form.timeline.1-3months')}</option>
                    <option value="3-6months">{t('form.timeline.3-6months')}</option>
                    <option value="6-12months">{t('form.timeline.6-12months')}</option>
                    <option value="12months+">{t('form.timeline.12months+')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.description')} *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordeaux-500 focus:border-bordeaux-500 transition-colors resize-vertical"
                  placeholder={t('contact.form.descriptionPlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-bordeaux-500 hover:bg-bordeaux-600 disabled:bg-bordeaux-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
{t('contact.form.submitting')}
                  </>
                ) : (
                  <>
{t('contact.form.submit')}
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
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;