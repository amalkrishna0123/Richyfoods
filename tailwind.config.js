/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxs' : '320px',
        'xs' : '425px',
        'sm' : '560px',
        'md' : '768px',
        'lg' : '900px',
        'xl' : '1200px',
        'xxl' : '1300px',
      },
    },
  },
  plugins: [],
}