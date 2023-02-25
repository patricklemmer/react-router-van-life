/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          // Background color
          'bg-nav': 'var(--color-bg-navbar)',
          'bg-footer': 'var(--color-bg-footer)',
          'bg-accent': 'var(--color-bg-accent)',
          'bg-about-cta': 'var(--color-bg-about-cta)',
        },
      },
    },
    screens: {
      xxs: '300px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
