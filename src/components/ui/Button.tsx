import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-bordeaux-500 text-white hover:bg-bordeaux-600 focus:ring-bordeaux-500 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 shadow-sm hover:shadow-md',
    outline: 'border-2 border-bordeaux-500 text-bordeaux-500 hover:bg-bordeaux-500 hover:text-white focus:ring-bordeaux-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    transparent: 'text-bordeaux-500 hover:text-bordeaux-600 hover:bg-bordeaux-50 focus:ring-bordeaux-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;