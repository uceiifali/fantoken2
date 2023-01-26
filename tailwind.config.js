/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#0B1D46',
        secDark: '#0B1D4680',
        bgDark: '#0B1D4614',
        red: '#AC2424',
        redDark: '#AC24241A',
        green: '#129918',
        darkGreen: 'rgba(18,153,24,0.1)',
        gray: 'rgba(11,29,70,0.5)',
        grayText: '#0B1D46',
      },
      fontFamily: {
        bouldBold: ['bouldBold'],
        bouldSemiBold: ['bouldSemiBold'],
        bouldReg: ['bouldReg'],
        bouldMedium: ['bouldMedium'],
        bouldLight: ['bouldLight'],
      },
    },
    screens: {
      sm: '960px',
      // => @media (min-width: 576px) { ... }

      md: '1220px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [
    // ...
  ],
};
