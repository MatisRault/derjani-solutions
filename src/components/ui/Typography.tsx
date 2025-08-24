import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

interface LinkProps extends TypographyProps {
  href: string;
  external?: boolean;
}

interface ListProps extends TypographyProps {
  ordered?: boolean;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 leading-tight ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-4xl md:text-5xl font-semibold text-gray-900 leading-tight ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-3xl md:text-4xl font-semibold text-gray-900 leading-tight ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-2xl md:text-3xl font-medium text-gray-900 leading-tight ${className}`}>
    {children}
  </h4>
);

export const H5: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h5 className={`text-xl md:text-2xl font-medium text-gray-900 leading-tight ${className}`}>
    {children}
  </h5>
);

export const H6: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h6 className={`text-lg md:text-xl font-medium text-gray-900 leading-tight ${className}`}>
    {children}
  </h6>
);

export const Paragraph: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base md:text-lg text-gray-700 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Lead: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl text-gray-600 leading-relaxed font-light ${className}`}>
    {children}
  </p>
);

export const Small: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <small className={`text-sm text-gray-500 ${className}`}>
    {children}
  </small>
);

export const Link: React.FC<LinkProps> = ({ children, href, external = false, className = '' }) => (
  <a 
    href={href}
    className={`text-bordeaux-500 hover:text-bordeaux-600 underline decoration-1 underline-offset-2 hover:decoration-2 transition-all duration-200 ${className}`}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
  >
    {children}
  </a>
);

export const List: React.FC<ListProps> = ({ children, ordered = false, className = '' }) => {
  const Component = ordered ? 'ol' : 'ul';
  const listStyle = ordered ? 'list-decimal' : 'list-disc';
  
  return (
    <Component className={`${listStyle} list-inside space-y-2 text-gray-700 ${className}`}>
      {children}
    </Component>
  );
};

export const ListItem: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <li className={`text-base md:text-lg leading-relaxed ${className}`}>
    {children}
  </li>
);

export const Blockquote: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <blockquote className={`border-l-4 border-bordeaux-500 pl-4 py-2 italic text-gray-700 bg-gray-50 ${className}`}>
    {children}
  </blockquote>
);

export const Code: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <code className={`bg-gray-100 text-bordeaux-600 px-1.5 py-0.5 rounded text-sm font-mono ${className}`}>
    {children}
  </code>
);

export const Strong: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <strong className={`font-semibold text-gray-900 ${className}`}>
    {children}
  </strong>
);

export const Em: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <em className={`italic text-gray-700 ${className}`}>
    {children}
  </em>
);