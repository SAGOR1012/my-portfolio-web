/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        project1: "url('/src/assets/proj1.png')",
        project3: "url('/src/assets/proj3.png)",
        project4: "url('/src/assets/proj4.png')",
      },
    },
  },
  plugins: [require('daisyui'), '@tailwindcss/aspect-ratio'],
};
