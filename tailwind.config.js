/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        'px-60': '3.75rem',
      },
      maxWidth: {
        'px-1320': '1320px',
      },
      fontSize: {
        'px-15': '0.9375rem',
      },
      height: {
        150: '37.5rem',
        'px-60': '3.75rem',
      },
    },
  },
  plugins: [],
}
