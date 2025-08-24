/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bordeaux red palette
        bordeaux: {
          50: '#fef2f2',
          100: '#fce8e8',
          200: '#f8d1d1',
          300: '#f59c9c',
          400: '#f06565',
          500: '#6b0e0e', // Main bordeaux red
          600: '#5a0c0c',
          700: '#4a0a0a',
          800: '#3a0808',
          900: '#2a0606',
        },
        // Extended gray palette
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}