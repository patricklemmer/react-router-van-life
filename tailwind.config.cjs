/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '350px',
      xs: '480px',
      sm: '620px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
