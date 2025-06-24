/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: '#D4B30E',
        cool: '#F8F7F6',
        brique: '#93583A',
        antra: '#4A4A4A',
        gris: '#999999',
      },
    },
  },
  plugins: [],
};
