import React from 'react';
import { H1 } from './Typography';
import { Breadcrumb } from './Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  description, 
  backgroundImage,
  breadcrumbs 
}) => {
  return (
    <div className="relative bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 text-white">
      {/* Background image overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 px-32 sm:px-40 lg:px-48 py-32 min-h-[50vh] flex flex-col justify-center">
        <div className="max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbs} />
          </div>
          
          {/* Title */}
          <H1 className="text-white mb-4 text-3xl font-bold">
            {title}
          </H1>
          
          {/* Description */}
          {description && (
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};