/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Open Sans, sans-serif',
    },
    extend: {
      screens: {
        sm: '600px', // Screens < 600px (mobile)
        md: '768px', // (tablet and desktop)
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};