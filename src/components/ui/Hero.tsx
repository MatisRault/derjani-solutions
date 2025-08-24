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
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <H1 className="mb-6 text-white drop-shadow-2xl">
            Bienvenue chez Derjani Group
          </H1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 drop-shadow-lg max-w-3xl mx-auto">
            Depuis 1988, Derjani Group met son expertise au service des projets les plus ambitieux au Liban et à l'international. 
            Leader dans la construction, la génération d'énergie, la sécurité, la fourniture et les services, nous accompagnons nos clients – 
            des particuliers aux institutions internationales – avec professionnalisme, précision et respect des délais.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-10 drop-shadow-lg">
            Présents à Beyrouth, Abu Dhabi, Dubaï, Irak, Afghanistan, Tunisie, Koweït, Soudan du Sud et Nigeria, 
            nous offrons des solutions complètes et sur mesure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="drop-shadow-lg">
              Découvrir nos services
            </Button>
            <Button variant="transparent" size="lg" className="text-white border-white hover:bg-white hover:text-bordeaux-500 drop-shadow-lg">
              Nos réalisations
            </Button>
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