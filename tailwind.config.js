/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        //this screen for max screens
        'vsm': { 'max': '400px' },        // Very small screens
        'sm': { 'max': '640px' },         // Small screens
        'md': { 'max': '768px' },         // Medium screens
        'lg': { 'max': '1024px' },        // Large screens
        'xl': { 'max': '1280px' },        // Extra-large screens
        '2xl': { 'max': '1424px' },       // 2x Extra-large screens
        '4xl': { 'max': '1648px' },       // 4x Extra-large screens
        '1900': { 'max': '1900px' },        // custom 1900
        //This config for min-width 
        'min-vsm': { 'min': '400px' },        // Very small screens
        'min-sm': { 'min': '640px' },         // Small screens
        'min-md': { 'min': '768px' },         // Medium screens
        'min-lg': { 'min': '1024px' },        // Large screens
        'min-xl': { 'min': '1280px' },        // Extra-large screens
        'min-2xl': { 'min': '1424px' },       // 2x Extra-large screens
        'min-4xl': { 'min': '1648px' },       // 4x Extra-large screens
        'min-1900': { 'min': '1900px' }         // custom 1900
      },
    },
  },
  plugins: [],
}
