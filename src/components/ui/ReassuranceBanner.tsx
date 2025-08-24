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
      <div className="px-32 sm:px-40 lg:px-48 py-12">
        <div className="grid grid-cols-4 gap-12 text-center">
          {reassurances.map((item, index) => (
            <div key={index}>
              <div className="mb-4 mx-auto flex justify-center">
                <img src={item.icon} alt={item.title} className="w-10 h-10 filter brightness-0 invert" />
              </div>
              <div className="text-xl font-bold text-white mb-2">
                {item.title}
              </div>
              <div className="text-base text-white opacity-90 font-medium">
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