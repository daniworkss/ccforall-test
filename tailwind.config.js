/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors :{
      "light-blue": "#008BCB",
      "lighter-blue": "#33B9CB",
      "darknavyblue": "#091D3E",
      "dark-orange" : "#dc6e38",

     },
     screens :{
      "mobile": "375px",
      "tablet": "768px",
      "mlaptop": "1100px",
      "laptop": "1300px",
      "desktop": "1440px"
     }
    },
  },
  plugins: [],
}
