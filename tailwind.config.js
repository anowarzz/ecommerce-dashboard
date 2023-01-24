/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink: "#FB2576",
        myYellow: "#facc15"
    
      },
    },
    fontFamily: {
      poppins: [ 'Poppins', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}
