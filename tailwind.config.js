/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.js"
  ],
  theme: { 
    fontFamily: {
    inter: ["Inter"],
    roboto: ["Roboto"],
    cantarell: ["Cantarell"],
  },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

