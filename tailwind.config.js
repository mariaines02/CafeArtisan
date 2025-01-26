/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      translate: {
        '80': '20rem', // Ajoutez une valeur personnalisée pour translate-x-80
        '90': '22.5rem', // Ajoutez une autre valeur personnalisée
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ajoutez Inter
        playwrite: ['Playwrite IN', 'serif'], // Ajoutez Playwrite IN
        playwriteVN: ['Playwrite VN', 'serif'], // Ajoutez Playwrite Việt Nam
        playfair: ['Playfair Display', 'serif'], // Correction pour Playfair Display
      },
    },
  },
  plugins: [tailwindScrollbar],
};
