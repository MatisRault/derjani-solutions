"use client";

import React, { useEffect, useState, useRef } from 'react';

const ReassuranceBannerNew = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  
  const targetCounts = [1988, 9, 35, 100];
  const labels = [
    "Depuis",
    "Pays",
    "Ans d'expérience",
    "Projets réalisés"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const intervals = targetCounts.map((target, index) => {
              const increment = target / 100;
              return setInterval(() => {
                setCounts(prev => {
                  const newCounts = [...prev];
                  if (newCounts[index] < target) {
                    newCounts[index] = Math.min(newCounts[index] + increment, target);
                  }
                  return newCounts;
                });
              }, 20);
            });

            const timeout = setTimeout(() => {
              intervals.forEach(clearInterval);
              setCounts(targetCounts);
            }, 2000);

            return () => {
              intervals.forEach(clearInterval);
              clearTimeout(timeout);
            };
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="w-full bg-bordeaux-500">
      <div className="px-4 sm:px-6 md:px-8 lg:px-32 xl:px-40 2xl:px-48 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
          {targetCounts.map((_, index) => (
            <div key={index}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                {Math.round(counts[index])}
              </div>
              <div className="text-sm sm:text-base text-white opacity-90 font-medium">
                {labels[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReassuranceBannerNew;