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
        'vsm': { 'max': '400px' },        // Very small screens
        'sm': { 'max': '640px' },         // Small screens
        'md': { 'max': '768px' },         // Medium screens
        'lg': { 'max': '1024px' },        // Large screens
        'xl': { 'max': '1280px' },        // Extra-large screens
        '2xl': { 'max': '1424px' },       // 2x Extra-large screens
      },
    },
  },
  plugins: [],
}
