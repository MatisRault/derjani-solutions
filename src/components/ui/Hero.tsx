'use client';

import React, { useEffect, useRef } from 'react';
import { H1 } from './Typography';
import Button from './Button';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e) => console.error('Video error:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48 w-full">
          <div className="max-w-4xl text-white">
          <H1 className="mb-6 text-white drop-shadow-2xl">
            Derjani Group
          </H1>
          
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 lg:mb-10 drop-shadow-lg max-w-3xl">
            Depuis 1988, votre partenaire de confiance pour des solutions d'excellence. 
            Construction, énergie, sécurité - nous réalisons vos projets avec expertise et fiabilité.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="primary" size="lg" className="drop-shadow-lg">
              Nous contacter
            </Button>
            <a href="tel:+33123456789" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-bordeaux-500 transition-colors drop-shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="hidden sm:inline">+33 1 23 45 67 89</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-lg" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;