"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  description: string;
  image: string;
  linkedin?: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Photo */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${member.image}')`
          }}
        >
          {/* Fallback gradient si l'image ne charge pas */}
          <div className="absolute inset-0 bg-gradient-to-br from-bordeaux-500 to-bordeaux-700"></div>
        </div>
        
        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-bordeaux-600/0 group-hover:bg-bordeaux-600/20 transition-all duration-300"></div>
        
        {/* Badge département */}
        <div className="absolute top-4 left-4 bg-bordeaux-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {member.department}
        </div>
      </div>
      
      {/* Informations */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-bordeaux-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-bordeaux-500 font-semibold mb-3">
          {member.position}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.description}
        </p>
        
        {/* LinkedIn si disponible */}
        {member.linkedin && (
          <div className="mt-4">
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-bordeaux-500 hover:text-bordeaux-600 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const TeamSection = () => {
  const { t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: 'roger-derjani',
      name: 'Roger Derjani',
      position: t('team.roger.position'),
      department: t('team.roger.department'),
      description: t('team.roger.description'),
      image: '/assets/team/personne1.jpg'
    },
    {
      id: 'nayef-derjani',
      name: 'Nayef Derjani',
      position: t('team.nayef.position'),
      department: t('team.nayef.department'),
      description: t('team.nayef.description'),
      image: '/assets/team/personne2.jpg'
    },
    {
      id: 'micheline-aflak',
      name: 'Micheline Aflak',
      position: t('team.micheline.position'),
      department: t('team.micheline.department'),
      description: t('team.micheline.description'),
      image: '/assets/team/personne1.jpg'
    },
    {
      id: 'remy-fayad',
      name: 'Remy Fayad',
      position: t('team.remy.position'),
      department: t('team.remy.department'),
      description: t('team.remy.description'),
      image: '/assets/team/personne2.jpg'
    },
    {
      id: 'sayed-al-rassi',
      name: 'Sayed Al Rassi',
      position: t('team.sayed.position'),
      department: t('team.sayed.department'),
      description: t('team.sayed.description'),
      image: '/assets/team/personne1.jpg'
    },
    {
      id: 'hala-maalouli',
      name: 'Hala Maalouli',
      position: t('team.hala.position'),
      department: t('team.hala.department'),
      description: t('team.hala.description'),
      image: '/assets/team/personne2.jpg'
    },
    {
      id: 'joseph-geitany',
      name: 'Joseph Geitany',
      position: t('team.joseph.position'),
      department: t('team.joseph.department'),
      description: t('team.joseph.description'),
      image: '/assets/team/personne1.jpg'
    },
    {
      id: 'evelyne-geitany',
      name: 'Evelyne Geitany',
      position: t('team.evelyne.position'),
      department: t('team.evelyne.department'),
      description: t('team.evelyne.description'),
      image: '/assets/team/personne2.jpg'
    },
    {
      id: 'barkos-derjani',
      name: 'Barkos Derjani',
      position: t('team.barkos.position'),
      department: t('team.barkos.department'),
      description: t('team.barkos.description'),
      image: '/assets/team/personne1.jpg'
    },
    {
      id: 'janine-hayek',
      name: 'Janine Hayek',
      position: t('team.janine.position'),
      department: t('team.janine.department'),
      description: t('team.janine.description'),
      image: '/assets/team/personne2.jpg'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="px-32 sm:px-40 lg:px-48">
        
        {/* En-tête */}
        <div className="mb-16 flex justify-between items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-bordeaux-600">
            {t('team.title')}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-xl text-left">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            className="pb-16"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation personnalisée */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-bordeaux-500 hover:bg-bordeaux-600 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group">
            <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-bordeaux-500 hover:bg-bordeaux-600 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group">
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;