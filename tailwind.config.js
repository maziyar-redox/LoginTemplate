/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "Gray-1": "#424242",
        "Gray-2": "#9E9E9E",
        "Gray-3": "#212121",
        "Gray-4": "#757575",
        "LameBlue": "#24243E",
        "Norm-white": "#F9F9FA",
      },
      fontFamily: {
        "Antique": ["Zen Kaku Gothic Antique", "sans-serif"]
      },
    },
  },
  plugins: [],
}