/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#e8c97a',
        void: '#050505',
        deep: '#0a0a0f',
      },
    },
  },
  plugins: [],
};
