/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'topbarcolor': '#161B21',
      'white':'#fff',
      'navcolor':'#282B2F',
      'navactive':'#28D07E',
      'navinactive':'#414549',
      'benifitcolor':'#343A40',
    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1238px',
        'xl': '1238px',
        '2xl': '1238px',
      }
    }

  },
  plugins: [],
}
