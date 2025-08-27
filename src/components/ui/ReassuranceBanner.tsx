"use client";

import React from 'react';

const ReassuranceBanner = () => {
  const reassurances = [
    {
      icon: "/assets/reassurances/garantie.svg",
      title: "Qualité Garantie",
      description: "Standards élevés reconnus"
    },
    {
      icon: "/assets/reassurances/securite.svg",
      title: "Sécurité Maximale",
      description: "Politique HSE stricte"
    },
    {
      icon: "/assets/reassurances/ponctualite.svg",
      title: "Respect des Délais",
      description: "Ponctualité depuis 1988"
    },
    {
      icon: "/assets/reassurances/mondial.svg",
      title: "Présence Mondiale",
      description: "9 pays, 1 expertise"
    }
  ];

  return (
    <section className="w-full bg-bordeaux-500">
      <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
          {reassurances.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-8 h-8 lg:w-10 lg:h-10 filter brightness-0 invert" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full"></div>`;
                      }
                    }}
                  />
                </div>
              </div>
              <div className="text-lg lg:text-xl font-bold text-white mb-2">
                {item.title}
              </div>
              <div className="text-sm lg:text-base text-white/90 font-medium leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReassuranceBanner;