/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
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
      },
      fontFamily: {
        bouldBold: ['bouldBold'],
        bouldSemiBold: ['bouldSemiBold'],
        bouldReg: ['bouldReg'],
        bouldMedium: ['bouldMedium'],
        bouldLight: ['bouldLight'],
      },
    },
  },
  plugins: [],
};
