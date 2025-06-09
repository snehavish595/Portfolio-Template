// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // adjust as per your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b2d42',
        secondary: '#8d99ae',
        light: '#edf2f4',
        danger: '#ef233c',
        alert: '#d90429',
      },
    },
  },
  plugins: [],
};
